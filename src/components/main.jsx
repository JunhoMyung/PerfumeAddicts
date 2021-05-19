import React from 'react'
import './main.css'
import LOGO_Full from "../perfume_pictures/LOGO_Full.PNG"
import MAIN_PAGE from "../perfume_pictures/MAIN_PAGE.png"
import 'firebase/auth';
import {signInWithGoogle} from "./firebase.jsx";

const main = () => {

    function handleclick(){
        window.location.href = "/filter";
    }

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
                    <li onClick={signInWithGoogle}><a>LOG IN</a></li>
                </ul>
            </ul>
            <img src={MAIN_PAGE} alt = "" className='main'/>
            <div className="title">DISCOVER YOUR SCENTS WITH SENSES</div>
            <div className="button" onClick={handleclick}></div>
            <div className="button_text">Find My Perfume</div>
            <br/>
        </div>
    )
}

export default main
