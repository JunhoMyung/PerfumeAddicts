import React, {Component} from 'react'
import './main.css'
import LOGO_Full from "../perfume_pictures/LOGO_Full.PNG"
import MAIN_PAGE from "../perfume_pictures/MAIN_PAGE.png"
import 'firebase/auth';
import {auth, signInWithGoogle, signOutWithGoogle} from "./firebase.jsx";
import {Link} from 'react-router-dom'
import firebase from 'firebase';
import { FilterTiltShiftTwoTone } from '@material-ui/icons';

class main extends Component {
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
        let button;
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
                            <li onClick={signInWithGoogle} className="signin"><a>SIGN IN WITH GOOGLE</a></li>
                        </ul>
                    </ul>
                    <img src={MAIN_PAGE} alt = "" className='main'/>
                    <div className="title">DISCOVER YOUR SCENTS WITH SENSES</div>
                    <Link to="./filter">
                        <div className="button"></div>
                    </Link>
                    <div className="button_text">Find My Perfume</div>
                    <br/>
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
                            <li className="dropdown signin"><a><i class="fas fa-user-circle fa-lg"></i>&nbsp;&nbsp;{user_name}</a>
                                <div className="dropdown-content">
                                    <a href="/">My Page</a>
                                    <a onClick={signOutWithGoogle}>Sign Out</a>
                                </div>
                            </li>
                        </ul>

                    </ul>
                    <img src={MAIN_PAGE} alt = "" className='main'/>
                    <div className="title">DISCOVER YOUR SCENTS WITH SENSES</div>
                    <Link to="./filter">
                        <div className="button"></div>
                    </Link>
                    <div className="button_text">Find My Perfume</div>
                    <br/>
                </div>
            )
        }
    }
}

export default main

