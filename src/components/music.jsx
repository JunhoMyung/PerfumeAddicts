import React, { useState } from "react";
import {
    MusicH1,
    MusicH2,
    Musiccontent,
    MusicH3,
    Marginbtn
} from './music_style';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { db } from './firebase';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'absolute',
        width: "50%",
        alignItems: 'center',
        marginLeft: '25%',
        marginTop: '12%',
        border: '100px'
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

export default function Music() {
    
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [vote, setVote] = useState(false);
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [url, setURL] = useState('')
    const [description, setDescription] = useState('')


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handlevote = () => {
        setVote((prev) => !prev)
    }

    const returnvote = () => {
        if(vote){
            return(
                <div>thumbs up</div>
            )
        }
    }

    const onsubmit = () => {
        setOpen(false);
        updateDB();
    }

    const updateDB = () => {
        const newKey = db.ref('/record/').push();
        newKey.set({
            title: title,
            artist: artist,
            url: url,
            description: description
        });
    }

    return (
        <div>
            <MusicH1>Top Recommendations</MusicH1>
            <table width = "80%" align = "center">
                <tbody>
                    <tr>
                        <td width = "80%">
                            <MusicH2>Perfect - Ed Sheeran</MusicH2>
                        </td>
                        <td width = "15%">
                            <MusicH3>23 Likes</MusicH3>
                        </td>
                        <td>
                            <Button onClick = {handlevote}>{returnvote}</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <table width = "70%" align = "center">
                <tbody>
                    <tr>
                        <td>
                            <Musiccontent>ID: Perfume Addict</Musiccontent>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Musiccontent>
                                The scent from patchouli and Iris makes me feel as if I’m in a fresh forest full of flowers. It directly resembled me of the MV of perfect, which starts from a mountain!
                            </Musiccontent>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table width = "80%" align = "center">
                <tbody>
                    <tr>
                        <td width = "80%">
                            <MusicH2>Perfect - Ed Sheeran</MusicH2>
                        </td>
                        <td width = "15%">
                            <MusicH3>23 Likes</MusicH3>
                        </td>
                        <td>
                            <Button onClick = {handlevote}>{returnvote}</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <table width = "70%" align = "center">
                <tbody>
                    <tr>
                        <td>
                            <Musiccontent>ID: Perfume Addict</Musiccontent>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Musiccontent>The scent from patchouli and Iris makes me feel as if I’m in a fresh forest full of flowers. It directly resembled me of the MV of perfect, which starts from a mountain!</Musiccontent>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Marginbtn>
                <Button variant="contained" onClick = {handleOpen} size="large">Recommend Music by Myself</Button>
            </Marginbtn>
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
                <Fade in={open}>
                    <div className={classes.paper}>
                        Title 
                        <TextField 
                            style={{ margin: 8 }}
                            required 
                            id="music_title" 
                            label="Title" 
                            // helperText="Full width!"
                            fullWidth
                            margin="normal"
                            onChange = {event => setTitle(event.target.value)}
                        />
                        Artist
                        <TextField 
                            style={{ margin: 8 }}
                            required 
                            id="music_artist" 
                            label="Artist" 
                            defaultValue="" 
                            // helperText="Full width!"
                            fullWidth
                            margin="normal"
                            onChange = {event => setArtist(event.target.value)}
                        />
                        Music URL (YouTube Link)
                        <TextField 
                            style={{ margin: 8 }}
                            required 
                            id="music_url" 
                            label="URL (YouTube)" 
                            defaultValue="" 
                            // helperText="Full width!"
                            fullWidth
                            margin="normal"
                            onChange = {event => setURL(event.target.value)}
                        />
                        Brief Reason
                        <TextField 
                            style={{ margin: 8 }}
                            required 
                            id="music_reason" 
                            label="Brief Reason" 
                            defaultValue="" 
                            // helperText="Full width!"
                            fullWidth
                            margin="normal"
                            onChange = {event => setDescription(event.target.value)}
                        />
                        <Button id = "submit" variant="contained" size="large" onClick = {onsubmit}>Submit Response</Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
    
}
