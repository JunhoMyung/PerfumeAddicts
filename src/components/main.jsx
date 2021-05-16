import React from 'react'
import './main.css'
import LOGO_Full from "../perfume_pictures/LOGO_Full.PNG"
import MAIN_PAGE from "../perfume_pictures/MAIN_PAGE.png"

const main = () => {

    function handleclick(){
        window.location.href = "/filter";
    }
    return (
        <div>
        <link href="http://fonts.cdnfonts.com/css/lemon-milk" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"></link>
            <img src={LOGO_Full} alt = "" className='logo'/>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/">ABOUT</a></li>
                <li><a href="/">BEST</a></li>
                <li><a href="/">NEW</a></li>
                <li><a href="/">BRANDS</a></li>
                <li><a href="./filter">DISCOVER</a></li>
                <ul style={{float: "right"}}>
                    <li><a href="/bbs/login.php">LOG IN</a></li>
                    <li><a href="/bbs/register_form.php">SIGN UP</a></li>
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
