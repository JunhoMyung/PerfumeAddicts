import React, {Component} from 'react'
import './main.css'
import MAIN_PAGE from "../perfume_pictures/MAIN_PAGE.png"
import ABOUT_PIC from "../perfume_pictures/about_pic.svg"
import MAIN_FILTER from "../perfume_pictures/MAIN_filter.svg"
import MAIN_INTERACT from "../perfume_pictures/MAIN_interact.svg"
import MAIN_VISUAL from "../perfume_pictures/MAIN_visual.svg"
import JOIN from "../perfume_pictures/JOIN.svg"
import 'firebase/auth';
import {Link} from 'react-router-dom'
import NavBar from './NavBar.jsx'
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import PropTypes from "prop-types";
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#A586B4",
    },
    secondary: {
      main: '#f44336',
    },
  },
});

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
        <React.Fragment>
            <div id="back-to-top-anchor" />
            <NavBar/>
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
            <div className="join">
                <img src={JOIN} alt = "" className="join_pic"/>
                <div className="sub_title2">REMOTELY SELECT PERFUME</div>
                <div className="main_title2">
                        Visualize Scents to 
                        <br/>
                        Easily Feel Them
                </div>
            </div>
            <MuiThemeProvider theme={theme}>
            <ScrollTop {...props}>
                <Fab color="primary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
            </MuiThemeProvider>
        </React.Fragment>
    )
}

