import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import "./slider.css"
import perfume_info from './perfume_info.jsx'
import Tooltip from "@material-ui/core/Tooltip";
import PropTypes from "prop-types";

const styles = {
    tooltip: {
        fontFamily: "'Lato', sans-serif",
        fontSize: "9pt",
        marginTop: "30px",
    }
};

const CustomTooltip = withStyles(styles)(Tooltip);

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <CustomTooltip open={open} enterTouchDelay={0} placement="bottom" title={value} arrow>
      {children}
    </CustomTooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired
};

const useStyles = makeStyles((theme) => ({
    root: {
      width: "calc(38vw)",
    },
    margin: {
      height: theme.spacing(3),
    },
  }));

const CustomSlidercitrus = withStyles({
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
      backgroundImage: "linear-gradient(to right, #e3ffc7, #dffcaf, #def794, #e0f279, #e4ec5a, #e8e346, #ecda30, #f1d111, #f3c403, #f4b800, #f4ab00, #f39e00)",
      opacity: 1
    },
    markLabel:{
        fontFamily: "'Lato', sans-serif",
        fontSize: "9pt",
        marginTop: 5,
      },
    mark: {
        background: "rgba(0,0,0,0)",
        backgroundColor: "rgba(0,0,0,0)",
    },
  })(Slider);


  const CustomSliderfloral = withStyles({
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
      backgroundImage: "linear-gradient(to right, #f2c2fc, #e9b1eb, #e09fd9, #d78ec7, #ce7db4, #c670a5, #be6297, #b65588, #ad497a, #a43c6c, #9b2f5e, #912150)",
      opacity: 1
    },
    markLabel:{
        fontFamily: "'Lato', sans-serif",
        fontSize: "9pt",
        marginTop: 5,
      },
    mark: {
        background: "rgba(0,0,0,0)",
        backgroundColor: "rgba(0,0,0,0)",
    },
  })(Slider);

  const CustomSliderfruity = withStyles({
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
      backgroundImage: "linear-gradient(to right, #ffd2a8, #ffc7a0, #ffbb9a, #ffaf96, #fea394, #f8968f, #f1898a, #ea7c87, #dd6b7e, #d05a76, #c2486e, #b43667)",
      opacity: 1
    },
    markLabel:{
        fontFamily: "'Lato', sans-serif",
        fontSize: "9pt",
        marginTop: 5,
      },
    mark: {
        background: "rgba(0,0,0,0)",
        backgroundColor: "rgba(0,0,0,0)",
    },
  })(Slider);

  const CustomSliderwoody = withStyles({
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
      backgroundImage: "linear-gradient(to right, #6ca271, #749f69, #7b9b61, #82985a, #899454, #878b4c, #858244, #83793d, #776931, #6b5925, #5f4a1a, #523b10)",
      opacity: 1
    },
    markLabel:{
        fontFamily: "'Lato', sans-serif",
        fontSize: "9pt",
        marginTop: 5,
      },
    mark: {
        background: "rgba(0,0,0,0)",
        backgroundColor: "rgba(0,0,0,0)",
    },
  })(Slider);

  const CustomSliderspicy = withStyles({
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
      backgroundImage: "linear-gradient(to right, #ffd1a3, #f4bf90, #e9ac7e, #de9a6d, #d3885d, #c87952, #bc6a48, #b15b3f, #a34c37, #943e2f, #862f27, #772020)",
      opacity: 1
    },
    markLabel:{
        fontFamily: "'Lato', sans-serif",
        fontSize: "9pt",
        marginTop: 5,
      },
    mark: {
        background: "rgba(0,0,0,0)",
        backgroundColor: "rgba(0,0,0,0)",
    },
  })(Slider);

  

  function valueLabelFormat_citrus(value) {
    const perfume_id = localStorage.getItem('perfume_id');
    const temp = perfume_info
    const citrus = temp[perfume_id].radar_chart.citrus;

    if (value === (citrus * 100)) {
        return (<i class="fas fa-check"></i>)
    }
    else if (value === (0)) {
        return (<div>
          <div className = "labeltitle">Cool and Fresh Scents</div>
          <div className = "labelsubtitle">Water, Lotus</div>
        </div>)
    }
    else if (value === (100)) {
      return (<div>
        <div className = "labeltitle">Refreshing and Tangy Scents</div>
        <div className = "labelsubtitle">Lemon, Lime, Orange</div>
      </div>)
    }
  }

  function valueLabelFormat_floral(value) {
    const perfume_id = localStorage.getItem('perfume_id');
    const temp = perfume_info
    const floral = temp[perfume_id].radar_chart.flowery;


    if (value === (floral * 100)) {
        return (<i class="fas fa-check"></i>)
    }
    else if (value === (0)) {
      return (<div>
        <div className = "labeltitle">Soft and Delicate Scents</div>
        <div className = "labelsubtitle">Iris, Violet, Lavendar</div>
      </div>)
    }
    else if (value === (100)) {
      return (<div>
        <div className = "labeltitle">Sensual Scents of Flowers</div>
        <div className = "labelsubtitle">Rose, Lily, Lilac</div>
      </div>)
    }
  }

  function valueLabelFormat_fruity(value) {
    const perfume_id = localStorage.getItem('perfume_id');
  const temp = perfume_info
  const fruity = temp[perfume_id].radar_chart.fruity;

    if (value === (fruity * 100)) {
        return (<i class="fas fa-check"></i>)
    }
    else if (value === (0)) {
      return (<div>
        <div className = "labeltitle">Fresh and Natural Scents</div>
        <div className = "labelsubtitle">Watermelon, Avocado</div>
      </div>)
    }
    else if (value === (100)) {
      return (<div>
        <div className = "labeltitle">Deep and Sweet Scents of Fruits</div>
        <div className = "labelsubtitle">Peach, Apple, Mango</div>
      </div>)
    }
  }

  function valueLabelFormat_woody(value) {
    const perfume_id = localStorage.getItem('perfume_id');
    const temp = perfume_info
    const woody = temp[perfume_id].radar_chart.woody;

    if (value === (woody * 100)) {
        return (<i class="fas fa-check"></i>)
    }
    else if (value === (0)) {
      return (<div>
        <div className = "labeltitle">Light and Earthy Scents</div>
        <div className = "labelsubtitle">Leaves, Grass, Moss</div>
      </div>)
    }
    else if (value === (100)) {
      return (<div>
        <div className = "labeltitle">Warm and Smoky Scents of Woods</div>
        <div className = "labelsubtitle">Sandalwood, Patchouli</div>
      </div>)
    }
  }

  function valueLabelFormat_spicy(value) {
    const perfume_id = localStorage.getItem('perfume_id');
  const temp = perfume_info
  const spicy = temp[perfume_id].radar_chart.spicy;
  
    if ( value === (spicy * 100)) {
        return (<i class="fas fa-check"></i>)
    }
    else if ( value === (0)) {
      return (<div>
        <div className = "labeltitle">Smooth and Sweet Spices</div>
        <div className = "labelsubtitle">Vanilla, Tonka Beans</div>
      </div>)
    }
    else if ( value === (100)) {
      return (<div>
        <div className = "labeltitle">Dark and Pungent Spices</div>
        <div className = "labelsubtitle">Cinammon, Pepper</div>
      </div>)
    }
  }


export default function ContinuousSlider() {
  const classes = useStyles();
  const perfume_id = localStorage.getItem('perfume_id');
  const temp = perfume_info
  const citrus = temp[perfume_id].radar_chart.citrus;
  const fruity = temp[perfume_id].radar_chart.fruity;
  const floral = temp[perfume_id].radar_chart.flowery;
  const woody = temp[perfume_id].radar_chart.woody;
  const spicy = temp[perfume_id].radar_chart.spicy;
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
  
  return (
    <div className={classes.root}>
      <CustomSlidercitrus
        defaultValue={citrus*100}
        valueLabelFormat={valueLabelFormat_citrus}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks_citrus}
        track={false}
      /><br/>
            <CustomSliderfloral
        defaultValue={floral*100}
        valueLabelFormat={valueLabelFormat_floral}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks_floral}
        track={false}
      />
      <br/>
            <CustomSliderfruity
        defaultValue={fruity*100}
        valueLabelFormat={valueLabelFormat_fruity}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks_fruity}
        track={false}
      />
            <br/>
            <CustomSliderwoody
        defaultValue={woody*100}
        valueLabelFormat={valueLabelFormat_woody}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks_woody}
        track={false}
      />
      <br/>
            <CustomSliderspicy
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

export function Citrus2() {
  const classes = useStyles();
  const perfume_id = localStorage.getItem('perfume_id');
  const temp = perfume_info
  const citrus = temp[perfume_id].radar_chart.citrus;
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


  return (
    <div className={classes.root}>
      <div className="slidername">Citrus<br/></div>
      <CustomSlidercitrus
        ValueLabelComponent={ValueLabelComponent}
        defaultValue={citrus*100}
        valueLabelFormat={valueLabelFormat_citrus}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks_citrus}
        track={false}
      />
        <br/><div className="sliderexplain">Drag to Understand Fragrance Scale<br/></div>
    </div>
  )
}

export function Floral2() {
  const classes = useStyles();
  const perfume_id = localStorage.getItem('perfume_id');
  const temp = perfume_info
  const floral = temp[perfume_id].radar_chart.flowery;
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

  
  return (
    <div className={classes.root}>
      <div className="slidername">Floral<br/></div>
      <CustomSliderfloral
        ValueLabelComponent={ValueLabelComponent}
        defaultValue={floral*100}
        valueLabelFormat={valueLabelFormat_floral}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks_floral}
        track={false}
      />
        <br/><div className="sliderexplain">Drag to Understand Fragrance Scale<br/></div>
    </div>
  )
}

export function Woody2() {
  const classes = useStyles();
  const perfume_id = localStorage.getItem('perfume_id');
  const temp = perfume_info
  const woody = temp[perfume_id].radar_chart.woody;
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


  return (
    <div className={classes.root}>
      <div className="slidername">Woody<br/></div>
      <CustomSliderwoody
        ValueLabelComponent={ValueLabelComponent}
        defaultValue={woody*100}
        valueLabelFormat={valueLabelFormat_woody}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks_woody}
        track={false}
      />
        <br/><div className="sliderexplain">Drag to Understand Fragrance Scale<br/></div>
    </div>
  )
}

export function Fruity2() {
  const classes = useStyles();
  const perfume_id = localStorage.getItem('perfume_id');
  const temp = perfume_info
  const fruity = temp[perfume_id].radar_chart.fruity;

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


  return (
    <div className={classes.root}>
      <div className="slidername">Fruity<br/></div>
      <CustomSliderfruity
        ValueLabelComponent={ValueLabelComponent}
        defaultValue={fruity*100}
        valueLabelFormat={valueLabelFormat_fruity}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks_fruity}
        track={false}
      />
        <br/><div className="sliderexplain">Drag to Understand Fragrance Scale<br/></div>
    </div>
  )
}

export function Spicy2() {
  const classes = useStyles();
  const perfume_id = localStorage.getItem('perfume_id');
  const temp = perfume_info
  const spicy = temp[perfume_id].radar_chart.spicy;
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
  
  return (
    <div className={classes.root}>
      <div className="slidername">Spicy<br/></div> 
      <CustomSliderspicy
        ValueLabelComponent={ValueLabelComponent}
        defaultValue={spicy*100}
        valueLabelFormat={valueLabelFormat_spicy}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks_spicy}
        track={false}
      />
    <br/><div className="sliderexplain">Drag to Understand Fragrance Scale<br/></div>
    </div>
  )
}