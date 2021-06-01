import React, { Component } from 'react'
import {db} from './firebase'
import perfume_info from './perfume_info.jsx'

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
        };        
        this.componentDidMount = this.componentDidMount.bind(this) 

    }

    componentDidMount = () => {
        let current_component = this
        db.ref('/'+ this.state.info.name +'/').orderByChild('vote').on("child_added", function(snapshot) {
            current_component.setState({url: snapshot.val().url, music_title: snapshot.val().title, music_artist: snapshot.val().artist})
        });
    }

    render() {
        return (
            <div className = "music_bar">
                Currently Playing: {this.state.music_title} - {this.state.music_artist}
            </div>
        )
    }
}
