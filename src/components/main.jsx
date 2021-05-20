import React, {Component} from 'react'
import './main.css'
import MAIN_PAGE from "../perfume_pictures/MAIN_PAGE.png"
import 'firebase/auth';
import {Link} from 'react-router-dom'
import NavBar from './NavBar.jsx'

class main extends Component {
    render() {
            return (
                <div>
                    <NavBar />
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

export default main

