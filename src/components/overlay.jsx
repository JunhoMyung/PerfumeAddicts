import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './overlay.css'
import ONE from "../filter_icons/1.png"
import TWO from "../filter_icons/2.png"
import THREE from "../filter_icons/3.png"
import FOUR from "../filter_icons/4.png"
import FIVE from "../filter_icons/5.png"
import SIX from "../filter_icons/6.png"
import SEVEN from "../filter_icons/7.png"
import EIGHT from "../filter_icons/8.png"
import NINE from "../filter_icons/9.png"
import TEN from "../filter_icons/10.png"
import ELEVEN from "../filter_icons/11.png"
import TWELVE from "../filter_icons/12.png"
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    height: "80%",
    width: "120%",
    backgroundColor: '#b1b2b0',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5, 10, 5),
    overflow: 'scroll',
    overflowX: "hidden"
  },
  modal: {
    display: 'absolute',
    width: "50%",
    alignItems: 'center',
    marginLeft: '15%',
    marginTop: "5%",
    border: '100px'
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [imgColor1, setimgColor1] = React.useState("transparent")
  const [imgOpacity1, setimgOpacity1] = React.useState("100")
  const [imgColor2, setimgColor2] = React.useState("transparent")
  const [imgOpacity2, setimgOpacity2] = React.useState("100")
  const [imgColor3, setimgColor3] = React.useState("transparent")
  const [imgOpacity3, setimgOpacity3] = React.useState("100")
  const [imgColor4, setimgColor4] = React.useState("transparent")
  const [imgOpacity4, setimgOpacity4] = React.useState("100")
  const [imgColor5, setimgColor5] = React.useState("transparent")
  const [imgOpacity5, setimgOpacity5] = React.useState("100")
  const [imgColor6, setimgColor6] = React.useState("transparent")
  const [imgOpacity6, setimgOpacity6] = React.useState("100")
  const [imgColor7, setimgColor7] = React.useState("transparent")
  const [imgOpacity7, setimgOpacity7] = React.useState("100")
  const [imgColor8, setimgColor8] = React.useState("transparent")
  const [imgOpacity8, setimgOpacity8] = React.useState("100")
  const [imgColor9, setimgColor9] = React.useState("transparent")
  const [imgOpacity9, setimgOpacity9] = React.useState("100")
  const [imgColor10, setimgColor10] = React.useState("transparent")
  const [imgOpacity10, setimgOpacity10] = React.useState("100")
  const [imgColor11, setimgColor11] = React.useState("transparent")
  const [imgOpacity11, setimgOpacity11] = React.useState("100")
  const [imgColor12, setimgColor12] = React.useState("transparent")
  const [imgOpacity12, setimgOpacity12] = React.useState("100")

  const SelectedIcon1 = () => {
    if (imgColor1 === "transparent") {setimgColor1("gray"); setimgOpacity1("0.3")}
    else {setimgColor1("transparent"); setimgOpacity1("100")}
  }

  const SelectedIcon2 = () => {
    if (imgColor2 === "transparent") {setimgColor2("gray"); setimgOpacity2("0.3")}
    else {setimgColor2("transparent"); setimgOpacity2("100")}
  }

  const SelectedIcon3 = () => {
    if (imgColor3 === "transparent") {setimgColor3("gray"); setimgOpacity3("0.3")}
    else {setimgColor3("transparent"); setimgOpacity3("100")}
  }

  const SelectedIcon4 = () => {
    if (imgColor4 === "transparent") {setimgColor4("gray"); setimgOpacity4("0.3")}
    else {setimgColor4("transparent"); setimgOpacity4("100")}
  }

  const SelectedIcon5 = () => {
    if (imgColor5 === "transparent") {setimgColor5("gray"); setimgOpacity5("0.3")}
    else {setimgColor5("transparent"); setimgOpacity5("100")}
  }

  const SelectedIcon6 = () => {
    if (imgColor6 === "transparent") {setimgColor6("gray"); setimgOpacity6("0.3")}
    else {setimgColor6("transparent"); setimgOpacity6("100")}
  }

  const SelectedIcon7 = () => {
    if (imgColor7 === "transparent") {setimgColor7("gray"); setimgOpacity7("0.3")}
    else {setimgColor7("transparent"); setimgOpacity7("100")}
  }

  const SelectedIcon8 = () => {
    if (imgColor8 === "transparent") {setimgColor8("gray"); setimgOpacity8("0.3")}
    else {setimgColor8("transparent"); setimgOpacity8("100")}
  }

  const SelectedIcon9 = () => {
    if (imgColor9 === "transparent") {setimgColor9("gray"); setimgOpacity9("0.3")}
    else {setimgColor9("transparent"); setimgOpacity9("100")}
  }

  const SelectedIcon10 = () => {
    if (imgColor10 === "transparent") {setimgColor10("gray"); setimgOpacity10("0.3")}
    else {setimgColor10("transparent"); setimgOpacity10("100")}
  }

  const SelectedIcon11 = () => {
    if (imgColor11 === "transparent") {setimgColor11("gray"); setimgOpacity11("0.3")}
    else {setimgColor11("transparent"); setimgOpacity11("100")}
  }

  const SelectedIcon12 = () => {
    if (imgColor12 === "transparent") {setimgColor12("gray"); setimgOpacity12("0.3")}
    else {setimgColor12("transparent"); setimgOpacity12("100")}
  }

  const handleFilter = () =>{
    var temp_list = []
    if (imgColor1 !== "transparent"){
      temp_list.push("fruity")
    }
    if (imgColor2 !== "transparent"){
      temp_list.push("floral")
    }
    if (imgColor3 !== "transparent"){
      temp_list.push("powdery")
    }
    if (imgColor4 !== "transparent"){
      temp_list.push("citrus")
    }
    if (imgColor5 !== "transparent"){
      temp_list.push("green")
    }
    if (imgColor6 !== "transparent"){
      temp_list.push("water")
    }
    if (imgColor7 !== "transparent"){
      temp_list.push("aromatic")
    }
    if (imgColor8 !== "transparent"){
      temp_list.push("drywood")
    }
    if (imgColor9 !== "transparent"){
      temp_list.push("mossywood")
    }
    if (imgColor10 !== "transparent"){
      temp_list.push("musk")
    }
    if (imgColor11 !== "transparent"){
      temp_list.push("softspicy")
    }
    if (imgColor12 !== "transparent"){
      temp_list.push("sharpspicy")
    }
    let deselect_item = []
    for (let i = 0; i < temp_list.length; i++){
      deselect_item.push("index" + i)
    }
    for (let j = 0; j < temp_list.length; j++){
      localStorage.setItem(deselect_item[j], temp_list[j])
    }
    localStorage.setItem("length", temp_list.length)
    setOpen(false);
    window.location.reload();
  }

  const body = (
    <Fade in={open}>
      <div className={classes.paper}>
          <div className='overlaytitle'>DESELECT SCENTS YOU AVOID</div>
          <table className = "overlaytable" width = "100%">
            <tbody>
              <tr>
                <td align = 'center'>
                  <img src={ONE} style={{tintColor: imgColor1, opacity: imgOpacity1}}
                          onClick={SelectedIcon1} alt = "" className='icon'/>
                </td>
                <td align = 'center'>
                  <img src={TWO} style={{tintColor: imgColor2, opacity: imgOpacity2}}
                          onClick={SelectedIcon2} alt = "" className='icon'/>
                </td>
                <td align = 'center'>
                  <img src={THREE} style={{tintColor: imgColor3, opacity: imgOpacity3}}
                          onClick={SelectedIcon3} alt = "" className='icon'/>
                </td>
                <td align = 'center'>
                  <img src={FOUR} style={{tintColor: imgColor4, opacity: imgOpacity4}}
                          onClick={SelectedIcon4} alt = "" className='icon'/>
                </td>
              </tr>
              <tr>
                <td align = 'center'>
                  <img src={FIVE} style={{tintColor: imgColor5, opacity: imgOpacity5}}
                          onClick={SelectedIcon5} alt = "" className='icon'/>
                </td>
                <td align = 'center'>
                  <img src={SIX} style={{tintColor: imgColor6, opacity: imgOpacity6}}
                          onClick={SelectedIcon6} alt = "" className='icon'/>
                </td>
                <td align = 'center'>
                  <img src={SEVEN} style={{tintColor: imgColor7, opacity: imgOpacity7}}
                          onClick={SelectedIcon7} alt = "" className='icon'/>
                </td>
                <td align = 'center'>
                  <img src={EIGHT} style={{tintColor: imgColor8, opacity: imgOpacity8}}
                          onClick={SelectedIcon8} alt = "" className='icon'/>
                </td>
              </tr>
              <tr>
                <td align = 'center'>
                  <img src={NINE} style={{tintColor: imgColor9, opacity: imgOpacity9}}
                          onClick={SelectedIcon9} alt = "" className='icon'/>  
                </td>
                <td align = 'center'>
                  <img src={TEN} style={{tintColor: imgColor10, opacity: imgOpacity10}}
                          onClick={SelectedIcon10} alt = "" className='icon'/>
                </td>   
                <td align = 'center'>
                  <img src={ELEVEN} style={{tintColor: imgColor11, opacity: imgOpacity11}}
                          onClick={SelectedIcon11} alt = "" className='icon'/>
                </td>
                <td align = 'center'>
                  <img src={TWELVE} style={{tintColor: imgColor12, opacity: imgOpacity12}}
                          onClick={SelectedIcon12} alt = "" className='icon'/>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="button2" onClick = {handleFilter}>Explore</div>     
          <br/>   
          <br/>     
      </div>
    </Fade>
  );

  return (
    <div>
      <button type="button" className = "button3" onClick={handleOpen} height="50px">
        <div id = 'txt'> Start Filtering </div>
      </button>

      <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
          timeout: 500,
          }}
      >
        {body}
      </Modal>
    </div>
  );
}