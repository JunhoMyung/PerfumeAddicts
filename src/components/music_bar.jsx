import React, { Component } from 'react'
import {db} from './firebase'
import perfume_info from './perfume_info.jsx'
import ReactPlayer from 'react-player/youtube'


export default class Music_bar extends Component {

    constructor(props) {
        super(props);
        this.perfume_id = {
            id: localStorage.getItem('perfume_id'),
        }
        this.state = {
            page : "detail",
            info : {
                name: perfume_info[this.perfume_id.id].name
            },
            url: "",
            music_title: "",
            music_artist: "",
            playing: true,
            youtubeOpen: false,
        };        
        this.componentDidMount = this.componentDidMount.bind(this) 

    }

    componentDidMount = () => {
        let current_component = this
        db.ref('/'+ this.state.info.name +'/').orderByChild('vote').on("child_added", function(snapshot) {
            current_component.setState({url: snapshot.val().url, music_title: snapshot.val().title, music_artist: snapshot.val().artist})
        });
    }

    pauseorplay = () =>{
        if (this.state.playing){
            return(
                <div className = "pointer">
                    <i className="fas fa-pause" onClick = {() => this.setState({playing: false})}></i>
                </div>
            )
        }
        else{
            return(
                <div className = "pointer">
                    <i className="fas fa-play" onClick = {() => this.setState({playing: true})}></i>
                </div>
            )
        }
    }

    getYoutubeVideo() {
        return (
          <div className="invisible">
            <ReactPlayer
            url={this.state.url}
            controls={true}
            width="340px"
            height="200px"
            playing={this.state.playing}
            volume = {0.2}
            />
          </div>
        );
      }
    

    render() {
        return (
            <div>
                <div className = "music_bar">
                    <div className = "column left">{this.pauseorplay()}</div>
                    <div className = "music_info column right">Currently Playing: {this.state.music_title} - {this.state.music_artist}</div>
                </div>
                {this.getYoutubeVideo()}
            </div>
        )
    }
}
