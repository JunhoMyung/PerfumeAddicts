import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { Height } from "@material-ui/icons";
import "./slider.css"
import perfume_info from './perfume_info.jsx'


const perfume_id = localStorage.getItem('perfume_id');
const citrus = perfume_info[perfume_id].radar_chart.citrus;
const fruity = perfume_info[perfume_id].radar_chart.fruity;
const floral = perfume_info[perfume_id].radar_chart.flowery;
const woody = perfume_info[perfume_id].radar_chart.woody;
const spicy = perfume_info[perfume_id].radar_chart.spicy;


const useStyles = makeStyles((theme) => ({
    root: {
      width: 300,
    },
    margin: {
      height: theme.spacing(3),
    },
  }));

const CustomSlider_citrus = withStyles({
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    rail: {
      height: 10,
      borderRadius: 0,
      backgroundImage: "linear-gradient(to right, #aae391, #b3e487, #bde47d, #c9e472, #d5e468, #d8da5b, #dbd04f, #ddc644, #d4b134, #ca9c25, #c08817, #b47409)",
      opacity: 1
    },
  })(Slider);


  const CustomSlider_floral = withStyles({
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    rail: {
      height: 10,
      borderRadius: 0,
      backgroundImage: "linear-gradient(to right, #f7adf9, #f7a3f9, #f899f9, #f88ef9, #f883f9, #ef76f3, #e669ee, #dd5ce8, #c94adc, #b538d0, #a024c5, #8b08b9)",
      opacity: 1
    },
  })(Slider);

  const CustomSlider_fruity = withStyles({
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    rail: {
      height: 10,
      borderRadius: 0,
      backgroundImage: "linear-gradient(to right, #ffc4e7, #fcb1d5, #fa9dc1, #f689ab, #f17593, #e8657f, #df566b, #d44756, #c53842, #b5292f, #a41a1c, #930606)",
      opacity: 1
    },
  })(Slider);

  const CustomSlider_woody = withStyles({
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    rail: {
      height: 10,
      borderRadius: 0,
      backgroundImage: "linear-gradient(to right, #618175, #5a7f67, #5b7c55, #617742, #6b712d, #6e6921, #726116, #75590b, #705007, #6a4704, #633e02, #5d3500)",
      opacity: 1
    },
  })(Slider);

  const CustomSlider_spicy = withStyles({
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    rail: {
      height: 10,
      borderRadius: 0,
      backgroundImage: "linear-gradient(to right, #cdcd92, #bab276, #a8985b, #957f41, #836629, #79551d, #6f4511, #643507, #5d2806, #561b04, #4d0e02, #440000)",
      opacity: 1
    },
  })(Slider);

  const marks_citrus = [
    {
      value: 0,
      label: '0',
    },
    {
      value: (citrus * 100),
      label: (citrus * 100)/10,
    },
    {
      value: 100,
      label: '10',
    },
  ];

  const marks_floral = [
    {
      value: 0,
      label: '0',
    },
    {
      value: (floral * 100),
      label: (floral * 100)/10,
    },
    {
      value: 100,
      label: '10',
    },
  ];

  const marks_fruity = [
    {
      value: 0,
      label: '0',
    },
    {
      value: (fruity * 100),
      label: (fruity * 100)/10,
    },
    {
      value: 100,
      label: '10',
    },
  ];

  const marks_woody = [
    {
      value: 0,
      label: '0',
    },
    {
      value: (woody * 100),
      label: (woody * 100)/10,
    },
    {
      value: 100,
      label: '10',
    },
  ];


  const marks_spicy = [
    {
      value: 0,
      label: '0',
    },
    {
      value: (spicy * 100),
      label: (spicy * 100)/10,
    },
    {
      value: 100,
      label: '10',
    },
  ];

  function valueLabelFormat_citrus(value) {
    if ( `${value}` == (citrus * 100)) {
        return "Here"
    }
    else if ( `${value}` == (0)) {
        return "Min"
    }
    else if ( `${value}` == (100)) {
        return "Max"
    }
  }

  function valueLabelFormat_floral(value) {
    if ( `${value}` == (floral * 100)) {
        return "Here"
    }
    else if ( `${value}` == (0)) {
        return "Min"
    }
    else if ( `${value}` == (100)) {
        return "Max"
    }
  }

  function valueLabelFormat_fruity(value) {
    if ( `${value}` == (fruity * 100)) {
        return "Here"
    }
    else if ( `${value}` == (0)) {
        return "Min"
    }
    else if ( `${value}` == (100)) {
        return "Max"
    }
  }

  function valueLabelFormat_woody(value) {
    if ( `${value}` == (woody * 100)) {
        return "Here"
    }
    else if ( `${value}` == (0)) {
        return "Min"
    }
    else if ( `${value}` == (100)) {
        return "Max"
    }
  }

  function valueLabelFormat_spicy(value) {
    if ( `${value}` == (spicy * 100)) {
        return "Here"
    }
    else if ( `${value}` == (0)) {
        return "Min"
    }
    else if ( `${value}` == (100)) {
        return "Max"
    }
  }


export default function ContinuousSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  return (
    <div className={classes.root}>
      <CustomSlider_citrus
        defaultValue={citrus*100}
        valueLabelFormat={valueLabelFormat_citrus}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks_citrus}
        track={false}
      /><br/>
            <CustomSlider_floral
        defaultValue={floral*100}
        valueLabelFormat={valueLabelFormat_floral}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks_floral}
        track={false}
      />
      <br/>
            <CustomSlider_fruity
        defaultValue={fruity*100}
        valueLabelFormat={valueLabelFormat_fruity}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks_fruity}
        track={false}
      />
            <br/>
            <CustomSlider_woody
        defaultValue={woody*100}
        valueLabelFormat={valueLabelFormat_woody}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks_woody}
        track={false}
      />
      <br/>
            <CustomSlider_spicy
        defaultValue={spicy*100}
        valueLabelFormat={valueLabelFormat_spicy}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks_spicy}
        track={false}
      />
    </div>
  );
}
