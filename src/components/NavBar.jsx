import React, {Component} from 'react'
import './main.css'
import LOGO_Full from "../perfume_pictures/LOGO_Full.PNG"
import 'firebase/auth';
import {auth, signInWithGoogle, signOutWithGoogle} from "./firebase.jsx";

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
                    <img src={LOGO_Full} alt = "" className='logo'/>
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
                    <img src={LOGO_Full} alt = "" className='logo'/>
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
                                    <a href="/">My Page</a>
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

