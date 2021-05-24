import React, {Component} from 'react'
import './main.css'
import 'firebase/auth';
import {Link} from 'react-router-dom'
import NavBar from './NavBar.jsx'

class overlay extends Component {
    render() {
            return (
                <div>
                    <NavBar />
                </div>
            )
        }
    }

export default overlay