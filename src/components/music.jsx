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
import {db, auth} from './firebase';
import perfume_info from './perfume_info.jsx';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

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
        if (auth.currentUser === null){
            return (<i className="far fa-thumbs-up fa-lg"></i>)
        }
        else if(!Object.values(value.voteID).includes(auth.currentUser.email)){
            return(
                <i className="far fa-thumbs-up fa-lg"></i>
            )
        }
        else{
            return(
                <i className="fas fa-thumbs-up fa-lg"></i>
            )
        }
    }

    const handleVote = (value, index) => {
        if (auth.currentUser === null){
            alert("Please sign in to vote")
        }
        else if(!Object.values(value.voteID).includes(auth.currentUser.email)) {
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
            db.ref().update(updates);
            db.ref('/'+ perfume_name +'/'+ [...key_order].reverse()[index] + '/voteID/').push(auth.currentUser.email);
            setUpdate(update => update + 1)
            console.log(update)
        }
        else {
            var new_data2 = {
                title: value.title,
                artist: value.artist,
                url: value.url,
                description: value.description,
                vote: value.vote - 1,
                voteID: value.voteID
            }
            var updates2 = {};
            updates2['/'+ perfume_name +'/' + [...key_order].reverse()[index]] = new_data2;
            db.ref().update(updates2);
            var temp = db.ref('/'+ perfume_name +'/'+ [...key_order].reverse()[index] + '/voteID/')
            temp.get().then((snapshot) =>{
                snapshot.forEach((child) => {
                    if(child.val() === auth.currentUser.email){
                        db.ref('/'+ perfume_name +'/'+ [...key_order].reverse()[index] + '/voteID/' + child.key).remove()
                    }
                })
            })
            setUpdate(update => update + 1)
        }
    }

    const onsubmit = () => {
        if (title !== "" && artist !== "" && url !== "" && description !== ""){
            setOpen(false);
            updateDB();
        }
        else{
            alert("Please fill in all fields.")
        }
        
    }

    const updateDB = () => {
        const newKey = db.ref('/'+ perfume_name +'/').push();
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
        db.ref('/'+ perfume_name +'/').orderByChild('vote').on("child_added", function(snapshot) {
            temp1.push(snapshot.val())
            temp2.push(snapshot.key)
            review_order.push(snapshot.val());
            key_order.push(snapshot.key);
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
                <div className="hello">
                    No Recommendation Present
                </div>
            )
        }
        else if (showmore === false && review_order.length <= 3){
            return(
                <div>
                    {[...review_order].reverse().map((value, index) => {
                        if (index < 3){
                            return (
                                <ReviewTable className="reviewtable">
                                    <tbody>
                                        <tr>
                                            <td><MusicH2>{value.title} - {value.artist}</MusicH2></td>
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
                        else{
                            return null
                        }
                    })}
                </div>
            )
        }
        else if (showmore === false && review_order.length > 3){
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
                        else{
                            return null
                        }
                    })}
                    <KeyboardArrowDownIcon className = "show" onClick = {show_more} fontSize="large"/>
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
                    <KeyboardArrowUpIcon className = "show" onClick = {show_less} fontSize="large"/>
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
                        <div className = "overlaysubtitle2">
                        <div className = "recommendtext2">Title</div>
                        <TextField
                            className = "recommendtext"
                            required 
                            id="music_title" 
                            fullWidth
                            onChange = {event => setTitle(event.target.value)}
                        />
                        <div className = "recommendtext2">Artist</div>
                        <TextField 
                            // style={{ margin: 8 }}
                            className = "recommendtext"                            
                            required 
                            id="music_artist" 
                            // label="Artist" 
                            defaultValue="" 
                            // helperText="Full width!"
                            fullWidth
                            // margin="normal"
                            onChange = {event => setArtist(event.target.value)}
                        />
                        <div className = "recommendtext2">Music URL (YouTube Link)</div>
                        <TextField 
                            className = "recommendtext"
                            // style={{ margin: 8 }}
                            required 
                            id="music_url" 
                            // label="URL (YouTube)" 
                            defaultValue="" 
                            // helperText="Full width!"
                            fullWidth
                            // margin="normal"
                            onChange = {event => setURL(event.target.value)}
                        />
                        <div className = "recommendtext2">Brief Reason</div>
                        <TextField 
                            // style={{ margin: 8 }}
                            className = "recommendtext"
                            required 
                            id="music_reason" 
                            // label="Brief Reason" 
                            defaultValue="" 
                            // helperText="Full width!"
                            fullWidth
                            // margin="normal"
                            onChange = {event => setDescription(event.target.value)}
                        />
                        </div>
                        <div className = "recommendtext2">
                            <Button id = "submit" variant="contained" size="large" onClick = {onsubmit}>Submit Response</Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
    
}
