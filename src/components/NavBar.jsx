import React, {Component} from 'react'
import './main.css'
import LOGO_Full from "../perfume_pictures/LOGO_Full.PNG"
import 'firebase/auth';
import {auth, signInWithGoogle, signOutWithGoogle} from "./firebase.jsx";
import {Link} from 'react-router-dom'
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);


export class NavBar extends Component {
    constructor() {
        super();
        this.state = {
          currentUser: null
        }
      }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
          this.setState({ currentUser: user });
        })
      }
    
    render() {
        if (this.state.currentUser === null) {
            return (
                <div>
                        <img src={LOGO_Full} alt = "" className='logo' onClick={() => {window.location.href = "/"}}/>
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/">ABOUT</a></li>
                        <li><a href="/">BEST</a></li>
                        <li><a href="/">NEW</a></li>
                        <li><a href="/">BRANDS</a></li>
                        <li><a href="./filter">DISCOVER</a></li>
                        <ul style={{float: "right"}}>
                            <li onClick={signInWithGoogle} className="signin" href="# "><a href="# ">SIGN IN WITH GOOGLE</a></li>
                        </ul>
                    </ul>
                </div>
            )
        }
        else {
            const user_name = this.state.currentUser.displayName;
            return (
                <div>
                    <img src={LOGO_Full} alt = "" className='logo' onClick={() => {window.location.href = "/"}}/>
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/">ABOUT</a></li>
                        <li><a href="/">BEST</a></li>
                        <li><a href="/">NEW</a></li>
                        <li><a href="/">BRANDS</a></li>
                        <li><a href="./filter">DISCOVER</a></li>
                        <ul style={{float: "right"}}>
                            <li className="dropdown signin"><a href="# "><i className="fas fa-user-circle fa-lg"></i>&nbsp;&nbsp;{user_name}</a>
                                <div className="dropdown-content">
                                    <a href="/">My Page 
                                        <IconButton aria-label="cart">
                                            <StyledBadge badgeContent={4} color="secondary">
                                            <ShoppingCartIcon />
                                            </StyledBadge>
                                        </IconButton>
                                    </a>
                                    <a onClick={() => {signOutWithGoogle(); window.location.reload();}} href="# ">Sign Out</a>
                                </div>
                            </li>
                        </ul>
                    </ul>
                </div>
            )
        }
    }
}

export default NavBar

