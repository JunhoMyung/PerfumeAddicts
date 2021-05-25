import React, {Component} from 'react'
import './main.css'
import MAIN_PAGE from "../perfume_pictures/MAIN_PAGE.png"
import ABOUT_PIC from "../perfume_pictures/about_pic.svg"
import 'firebase/auth';
import {Link} from 'react-router-dom'
import NavBar from './NavBar.jsx'
import Overlay from './overlay.jsx'


class main extends Component {
    render() {
            return (
                <div>
                    <NavBar />
                    <img src={MAIN_PAGE} alt = "" className='main'/>
                    <div className="title">DISCOVER YOUR SCENTS WITH SENSES</div>
                    <Link to="./filter">
                        <div className="button">Find My Perfume</div>
                    </Link>
                    <div className="about">
                        <img src={ABOUT_PIC} alt = "" className="about_pic"/>
                        <div className="sub_title">REMOTELY SELECT PERFUME</div>
                        <div className="main_title">
                                Visualize Scents to 
                                <br/>
                                Easily Feel Them
                        </div>
                    </div>
                    <div className="service"></div>
                    <div className="join"></div>
                    <Overlay />
                </div>
            )
        }
    }

export default main