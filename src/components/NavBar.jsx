import React, {Component} from 'react'
import './main.css'
import LOGO_Full from "../perfume_pictures/LOGO_Full.PNG"
import 'firebase/auth';
import {auth, signInWithGoogle, signOutWithGoogle, db} from "./firebase.jsx";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Link } from "react-scroll"


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#735880",
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);


export class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentUser: null,
          shoppingcart: 0
        }
      }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
          this.setState({ currentUser: user });
          this.shoppingcart()
        })
    }

    shoppingcart(){
        if (this.state.currentUser !== null){
            var temp = this
            db.ref('/'+ temp.state.currentUser.displayName +'/').get().then((snapshot)=> {
                if (snapshot.exists()){
                    temp.setState({shoppingcart: Object.values(snapshot.val()).length})
                }
            })
        }
    }
    
    render() {
        
        if (this.state.currentUser === null) {
            return (
                <div>
                        <img src={LOGO_Full} alt = "" className='logo' onClick={() => {window.location.href = "/"}}/>
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><Link to="about" spy={true} smooth={true}>ABOUT</Link></li>
                        <li><Link to="service" spy={true} smooth={true}>SERVICE</Link></li>
                        <li><Link to="join" spy={true} smooth={true}>JOIN</Link></li>
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
            const shopping_cart = this.state.shoppingcart
            return (
                <div>
                    <img src={LOGO_Full} alt = "" className='logo' onClick={() => {window.location.href = "/"}}/>
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><Link to="about" spy={true} smooth={true}>ABOUT</Link></li>
                        <li><Link to="service" spy={true} smooth={true}>SERVICE</Link></li>
                        <li><Link to="join" spy={true} smooth={true}>JOIN</Link></li>
                        <li><a href="./filter">DISCOVER</a></li>
                        <ul style={{float: "right"}}>
                            <li className="dropdown signin"><a href="# "><i className="fas fa-user-circle fa-lg"></i>&nbsp;&nbsp;{user_name}</a>
                                <div className="dropdown-content">
                                    <a href="/mypage">My Page&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <MuiThemeProvider theme={theme}>
                                        <StyledBadge fontSize="small" badgeContent={shopping_cart} color="primary">
                                        <ShoppingCartIcon fontSize="small" />
                                        </StyledBadge>
                                    </MuiThemeProvider>
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

