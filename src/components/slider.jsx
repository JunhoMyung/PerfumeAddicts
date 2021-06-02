import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { Height } from "@material-ui/icons";
import "./slider.css"


const useStyles = makeStyles({
  root: {
    width: 450,
  }
});

const CustomSlider = withStyles({
    root: {
      color: '#61466F',
      height: 8,
    },
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
    rail: {
      height: 10,
      borderRadius: 0,
      backgroundImage: "linear-gradient(to right, #aae391, #b3e487, #bde47d, #c9e472, #d5e468, #d8da5b, #dbd04f, #ddc644, #d4b134, #ca9c25, #c08817, #b47409)",
      opacity: 1
    },
  })(Slider);

  const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];
  
  function valuetext(value) {
    return `${value}°C`;
  }
  
  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }


export default function ContinuousSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  return (
    <div className={classes.root}>
      <CustomSlider
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
        track={false}
      />
    </div>
  );
}
