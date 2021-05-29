import React from 'react'
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
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

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
    for (let k = 0; k < localStorage.getItem('length'); k++){
        localStorage.setItem('index' + k, null)
    }
    localStorage.setItem('length', null)

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
                        Easily Feel Scents 
                        <br/>
                        with Perdict
                </div>
                <div className="content1">
                    It is hard to buy perfumes online, right?
                    <br/>
                    Perdict is here to guide you to the perfume world.
                    <br/>
                    We help you to utilize your senses to feel the fragrance.
                </div>
            </div>
            <div className="service">
                <div className="service_title">OUR SERVICES</div>
                <div className="service1"><img src={MAIN_FILTER} alt = "" className="service_pic1"/>
                    <div className="service1_1">Unique Filter</div>
                    <div className="service1_2">
                        New to the perfume world?
                        <br/>
                        Easily get started by
                        <br/>
                        removing scents you hate.
                    </div>
                </div>
                <div className="service2"><img src={MAIN_VISUAL} alt = "" className="service_pic2"/>
                    <div className="service2_1">Visualize</div>
                    <div className="service2_2">
                        Hard to understand scent online?
                        <br/>
                        Visualize the scent with us.
                        <br/>
                        Feel them using your senses.
                    </div>
                </div>
                <div className="service3"><img src={MAIN_INTERACT} alt = "" className="service_pic3"/>
                    <div className="service3_1">Interact</div>
                    <div className="service3_2">
                        Is perfume shopping for you?
                        <br/>
                        Interact with other users.
                        <br/>
                        Share your opinion with music.
                    </div>
                </div>
            </div>
            <div className="join">
                <img src={JOIN} alt = "" className="join_pic"/>
                <div className="sub_title2">JOIN OUR WEBSITE</div>
                <div className="main_title2">
                        Sign Up to Personally
                        <br/>
                        Explore Perfumes
                </div>
                <div className="content3">
                    Use your google account to easily sign in.
                    <br/>
                    You are now ready to choose perfumes and compare them.
                    <br/>
                    Interact with other users by sharing your experience.
                </div>
            </div>
            <MuiThemeProvider theme={theme}>
            <ScrollTop {...props}>
                <Fab color="primary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
            {/* <ScrollTop {...props}>
                <Fab color="primary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop> */}
            </MuiThemeProvider>
        </React.Fragment>
    )
}

