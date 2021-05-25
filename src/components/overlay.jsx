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


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 700,
    height: 400,
    backgroundColor: '#b1b2b0',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5, 10, 5),
    overflow: 'scroll'
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
        <div className='overlaytitle'>CHOOSE SCENTS YOU AVOID</div>
        <img src={ONE} alt = "" className='icon'/>
        <img src={TWO} alt = "" className='icon'/>
        <img src={THREE} alt = "" className='icon'/>
        <img src={FOUR} alt = "" className='icon'/>
        <img src={FIVE} alt = "" className='icon'/>
        <img src={SIX} alt = "" className='icon'/>
        <img src={SEVEN} alt = "" className='icon'/>
        <img src={EIGHT} alt = "" className='icon'/>
        <img src={NINE} alt = "" className='icon'/>
        <img src={TEN} alt = "" className='icon'/>
        <img src={ELEVEN} alt = "" className='icon'/>
        <img src={TWELVE} alt = "" className='icon'/>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen} height="50px">
        Filter
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}