import React, { useState, useEffect } from "react";
import {
    MusicH1,
    MusicH2,
    Musiccontent,
    MusicH3,
    Marginbtn,
    ReviewTable
} from './music_style';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import firebase from './firebase';
import perfume_info from './perfume_info.jsx'
import './overlay.css'

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
        border: '100px',
      },
}));

export default function Music() {

    const perfume_id = localStorage.getItem('perfume_id');
    const perfume_name = perfume_info[perfume_id].name
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [url, setURL] = useState('')
    const [description, setDescription] = useState('')
    const [update, setUpdate] = useState(0)
    const [review_order, setReviewOrder] = useState([]);
    const [key_order, setKeyOrder] = useState([]);
    const [showmore, setShowMore] = useState(false);
    

    const show_more = () => {
        setShowMore(true)
    }

    const show_less = () => {
        setShowMore(false)
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const returnvote = (value) => {
        if (firebase.auth().currentUser === null){
            return (<i className="far fa-thumbs-up"></i>)
        }
        else if(!Object.values(value.voteID).includes(firebase.auth().currentUser.email)){
            return(
                <i className="far fa-thumbs-up"></i>
            )
        }
        else{
            return(
                <i className="fas fa-thumbs-up"></i>
            )
        }
    }

    const handleVote = (value, index) => {
        if (firebase.auth().currentUser === null){
            alert("Please sign in to vote")
        }
        else if(!Object.values(value.voteID).includes(firebase.auth().currentUser.email)) {
            var new_data = {
                title: value.title,
                artist: value.artist,
                url: value.url,
                description: value.description,
                vote: value.vote + 1,
                voteID: value.voteID
            }
            var updates = {};
            updates['/'+ perfume_name +'/' + [...key_order].reverse()[index]] = new_data;
            firebase.database().ref().update(updates);
            firebase.database().ref('/'+ perfume_name +'/'+ [...key_order].reverse()[index] + '/voteID/').push(firebase.auth().currentUser.email);
            setUpdate(update => update + 1)
        }
        else {
            var new_data = {
                title: value.title,
                artist: value.artist,
                url: value.url,
                description: value.description,
                vote: value.vote - 1,
                voteID: value.voteID
            }
            var updates = {};
            updates['/'+ perfume_name +'/' + [...key_order].reverse()[index]] = new_data;
            firebase.database().ref().update(updates);
            var temp = firebase.database().ref('/'+ perfume_name +'/'+ [...key_order].reverse()[index] + '/voteID/')
            temp.get().then((snapshot) =>{
                var keys = Object.keys(snapshot.val());
                snapshot.forEach((child) => {
                    if(child.val() === firebase.auth().currentUser.email){
                        firebase.database().ref('/'+ perfume_name +'/'+ [...key_order].reverse()[index] + '/voteID/' + child.key).remove()
                    }
                })
            })
            setUpdate(update => update + 1)
        }
    }

    const onsubmit = () => {

        setOpen(false);
        updateDB();
    }

    const updateDB = () => {
        const newKey = firebase.database().ref('/'+ perfume_name +'/').push();
        newKey.set({
            title: title,
            artist: artist,
            url: url,
            description: description,
            vote: 0,
            voteID: {
                user1: "placeholder"
            }
        });
        setTitle("");
        setArtist("");
        setURL("");
        setDescription("");
    }

    const sortbyvote = () => {
        var temp1 = []
        var temp2 = []
        firebase.database().ref('/'+ perfume_name +'/').orderByChild('vote').on("child_added", function(snapshot) {
            temp1.push(snapshot.val())
            temp2.push(snapshot.key)
            // review_order.push(snapshot.val());
            // key_order.push(snapshot.key);
        });
        setReviewOrder(temp1)
        setKeyOrder(temp2)
    }

    useEffect(() => {
        sortbyvote()
    })

    const printRecommendation = () => {
        if (review_order.length === 0){
            return(
                <div>
                    No Recommendation Present
                </div>
            )
        }
        else if (showmore === false){
            return(
                <div>
                    {[...review_order].reverse().map((value, index) => {
                        if (index < 3){
                            return (
                                <ReviewTable  width = "80%">
                                    <tbody>
                                        <tr>
                                            <td width = "80%"><MusicH2>{value.title} - {value.artist}</MusicH2></td>
                                            <td>
                                                <MusicH3>Votes: {value.vote}</MusicH3>
                                            </td>
                                            <td>
                                                <MusicH3><Button onClick = {() => handleVote(value, index)}>{returnvote(value)}</Button></MusicH3>
                                            </td>
                                        </tr>
                                        <tr><Musiccontent>{value.description}</Musiccontent></tr>
                                    </tbody>
                                </ReviewTable>
                            )
                        }
                    })}
                    <button onClick = {show_more}>show more</button>
                </div>
            )
        }
        else{
            return (
                <div>
                    {[...review_order].reverse().map((value, index) => {
                        return (
                            <ReviewTable  width = "80%">
                                <tbody>
                                    <tr>
                                        <td width = "80%"><MusicH2>{value.title} - {value.artist}</MusicH2></td>
                                        <td>
                                            <MusicH3>Votes: {value.vote}</MusicH3>
                                        </td>
                                        <td>
                                            <MusicH3><Button onClick = {() => handleVote(value, index)}>{returnvote(value)}</Button></MusicH3>
                                        </td>
                                    </tr>
                                    <tr><Musiccontent>{value.description}</Musiccontent></tr>
                                </tbody>
                            </ReviewTable>
                        )
                    
                    })}
                    <button onClick = {show_less}>show less</button>
                </div>
            )
        }

    }
    

    

    return (
        <div>
            <MusicH1>Top Recommendations</MusicH1>
            {printRecommendation()}
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
                        <div className = "overlaytitle2">RECOMMEND MUSIC</div>
                        <div className = "overlaysubtitle">Title</div>
                        <TextField 
                            required 
                            id="music_title" 
                            fullWidth
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
