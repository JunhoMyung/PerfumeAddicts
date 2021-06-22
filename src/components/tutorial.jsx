import React ,{ useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {db, auth} from './firebase';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade'
import MAIN_FILTER from "../perfume_pictures/MAIN_filter.svg"


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      height: "80%",
      width: "120%",
      backgroundColor: '#ffffff',
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
    
    const handleClose = () => {
      setOpen(false);
    };
  
    const body = (
      <Fade in={open}>
        <div className={classes.paper}>
            <div className='tutorialtitle'>Tutorial</div>
            <img src={MAIN_FILTER} alt = "tutorial_pic" className="tutorial_pic tutorialcolumn tutorialleft"/>
            <div className = "tutorialcolumn tutorialright tutorialsubtitle">
                <table>
                    <tbody>
                        <tr>
                            <td className = "tutorial1">
                                "I know what I hate better than what I like!"
                            </td>
                        </tr>
                        <tr>
                            <td className = "tutorial2">
                                Try filtering out scents you HATE through our filter!
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="tutorialbutton" onClick = {handleClose}>I Understood</div>     
        </div>
      </Fade>
    );

    const handleopen = () => {
        if (auth.currentUser !== null){
            db.ref('/tutorial/' + auth.currentUser.displayName +'/').get().then((snapshot)=> {
                if (snapshot.exists()){
                    console.log(false)
                    setOpen(false)
                }
                else{
                    setOpen(true)
                    db.ref('/tutorial/' + auth.currentUser.displayName +'/').push(true);
                }
            })            
        }
        else{
            setOpen(true)
        }
    }

    useEffect(() => {
        handleopen()
    })

  
    return (
      <div>
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