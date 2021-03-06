import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './temp_filter.css'
import './visual.css'
import 'react-svg-radar-chart/build/css/index.css'
import NavBar2 from "./NavBar_copy.jsx"
import MyMusic from "./music.jsx"
import Visual from "./visual_copy.jsx"
import Visual2 from "./visual_copy2.jsx"
import Musicbar from "./music_bar.jsx"
import LOGO_Full from "../perfume_pictures/LOGO_Full.PNG"



function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: "calc(100vh - 120px)",       
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        display: "flex",
        width: "7.7%",     
    },
    selected1: {
        background: "#eeeeee",
        // color: "white"
        fontSize: "15px",
        height: "calc((100vh - 120px)/3)",
      },
      customStyleOnActiveTab:{
        backgroundColor: "#815b8d",
        width: "3px",
      },
      customStyleOnTab:{
        fontSize:'15px',
        height: "calc((100vh - 120px)/3)",
      },
      flexContainerVertical: {
        display: "flex",
        alignItems: "center",
      }
}));

export default function Temp_filter() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return(
        <div>
        <img src={LOGO_Full} alt = "" className='logo' onClick={() => {window.location.href = "/"}}/>
        <NavBar2 />
        <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
          classes={{indicator: classes.customStyleOnActiveTab, flexContainerVertical: classes.flexContainerVertical}}
        >
          <Tab classes={{selected: classes.selected1}} className={classes.customStyleOnTab} label={<div className="test">DETAIL</div>} value={0} />          
          <Tab classes={{selected: classes.selected1}} className={classes.customStyleOnTab} label={<div className="test">SCENT</div>} value={1} />
          <Tab classes={{selected: classes.selected1}} className={classes.customStyleOnTab} label={<div className="test">REVIEW</div>} value={2} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Visual />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Visual2 />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <MyMusic />
        </TabPanel>
        <Musicbar />
      </div>
      </div>
    )
}