import React, {Component} from 'react'
import './main.css'
import MAIN_PAGE from "../perfume_pictures/MAIN_PAGE.png"
import ABOUT_PIC from "../perfume_pictures/about_pic.svg"
import MAIN_FILTER from "../perfume_pictures/MAIN_filter.svg"
import MAIN_INTERACT from "../perfume_pictures/MAIN_interact.svg"
import MAIN_VISUAL from "../perfume_pictures/MAIN_visual.svg"
import 'firebase/auth';
import {Link} from 'react-router-dom'
import NavBar from './NavBar.jsx'
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import PropTypes from "prop-types";


const useStyles = makeStyles(theme => ({
    root: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  }));
  
  function ScrollTop(props) {
    const { children } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100
    });
  
    const handleClick = event => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        "#back-to-top-anchor"
      );
  
      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }
  
  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired
  };
  

  export default function main(props) {

    localStorage.setItem('perfume_id', 0)
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
            <div className="service">
                <div className="service_title">OUR SERVICES</div>
                <div className="service1"><img src={MAIN_FILTER} alt = "" className="service_pic1"/></div>
                <div className="service2"><img src={MAIN_VISUAL} alt = "" className="service_pic2"/></div>
                <div className="service3"><img src={MAIN_INTERACT} alt = "" className="service_pic3"/></div>
            </div>
            <div className="join"></div>
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </div>
    )
}

