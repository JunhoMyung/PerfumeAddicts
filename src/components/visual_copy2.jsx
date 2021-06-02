import './visual_copy2.css'
import React, { Component } from "react";
import MyMusic from "./music.jsx";
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import {db, auth} from './firebase';
import perfume_info from './perfume_info.jsx'
import Fruity from "../perfume_pictures/fruity.png"
import Floral from "../perfume_pictures/floral.png"
import Woody from "../perfume_pictures/woody.png"
import Spicy from "../perfume_pictures/spicy.png"
import Citrus from "../perfume_pictures/citrus.png"
import {Floral2, Fruity2, Woody2, Citrus2, Spicy2} from "./slider.jsx"



class visual_copy2 extends Component {  
    constructor(props) {
        super(props);
        this.perfume_id = {
            id: localStorage.getItem('perfume_id'),
        }
        this.state = {
            page : "detail",
            info : {
                name: perfume_info[this.perfume_id.id].name,
                price: perfume_info[this.perfume_id.id].price,
                sizes: perfume_info[this.perfume_id.id].volume
            },
            current_price: perfume_info[this.perfume_id.id].price[0],
            quantity: "",
            total_price : 0,
            tab_state : 0,
            url: "",
            music_title: "",
            music_artist: "",
            wishlist: [],
            scent: "",
        };        
        this.componentDidMount = this.componentDidMount.bind(this) 

    }

    componentDidMount = () => {
        let current_component = this
        db.ref('/'+ this.state.info.name +'/').orderByChild('vote').on("child_added", function(snapshot) {
            current_component.setState({url: snapshot.val().url, music_title: snapshot.val().title, music_artist: snapshot.val().artist})
        });
    }

    music = () => {
        this.setState({page : "music"});
    }

    detail = () => {
        this.setState({page : "detail"});
    }

    slider = () => {
        if(this.state.scent === "floral"){
            return(
                <Floral2 />
            )
        }
        else if(this.state.scent === "woody"){
            return(
                <Woody2 />
            )
        }
        else if(this.state.scent === "spicy"){
            return(
                <Spicy2 />
            )
        }
        else if(this.state.scent === "citrus"){
            return(
                <Citrus2 />
            )
        }
        else if(this.state.scent === "fruity"){
            return(
                <Fruity2 />
            )
        }
    }

    render_tab = () => {
        const r = 255*((perfume_info[this.perfume_id.id].radar_chart.fruity + perfume_info[this.perfume_id.id].radar_chart.flowery) / 2);
        const g = 255*perfume_info[this.perfume_id.id].radar_chart.woody;
        const b = 255*perfume_info[this.perfume_id.id].radar_chart.citrus;
        const a = 1*((perfume_info[this.perfume_id.id].radar_chart.woody + perfume_info[this.perfume_id.id].radar_chart.spicy) / 2);

        const data = [
            {
              data: {
                citrus: perfume_info[this.perfume_id.id].radar_chart.citrus,
                woody: perfume_info[this.perfume_id.id].radar_chart.woody,
                spicy: perfume_info[this.perfume_id.id].radar_chart.spicy,
                flower: perfume_info[this.perfume_id.id].radar_chart.flowery,
                fruit: perfume_info[this.perfume_id.id].radar_chart.fruity
              },
                meta: { color: "rgba(" + r + "," + g + "," + b + "," + a + ")" }
            }
          ];

          const captions = {
            citrus: 'Citrus',
            woody: 'Woody',
            spicy: 'Spicy',
            flower: 'Floral',
            fruit: 'Fruity'
          };
        if (this.state.page === "detail"){
            return(
                <div className='radar_chart'>
                    <table className="radar_chart_table">
                        <tr>
                        <td>
                            <RadarChart
                                captions={captions}
                                data={data}
                                size={450}
                                scales={3}
                                options={{zoomDistance: 1.3, captionMargin: 11}}/>
                        </td> 
                        <td className="radar_chart_explain">
                            <div className = "scenttitle">
                                SCENT DETAIL 
                            </div>
                            <div className = "scentsubtitle">
                                Click on scents for details
                            </div>
                            <br/>
                            <table className = "centertable">
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src = {Fruity} alt = "" className = "detail_pic" onClick = {() => this.setState({scent: "fruity"})}></img>
                                        </td>
                                        <td>
                                            <img src = {Floral} alt = "" className = "detail_pic" onClick = {() => this.setState({scent: "floral"})}></img>
                                        </td>
                                        <td>
                                            <img src = {Spicy} alt = "" className = "detail_pic" onClick = {() => this.setState({scent: "spicy"})}></img>
                                        </td>
                                        <td>
                                            <img src = {Woody} alt = "" className = "detail_pic" onClick = {() => this.setState({scent: "woody"})}></img>
                                        </td>
                                        <td>
                                            <img src = {Citrus} alt = "" className = "detail_pic" onClick = {() => this.setState({scent: "citrus"})}></img>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan = "5" align = "center">
                                            <br/>
                                            {this.slider()}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            
                        </td>
                        </tr>
                    </table>
                </div>
            )
        }
        else if (this.state.page === "music"){
            return(
               <MyMusic />
            )
        }
    }

    changePrice = (event) => {
        let value = event.target.value
        //console.log("value = " + value)
        var index = 0
        if (value === 1)
            {
                //console.log("Yes")
                index = 1
            }
        this.setState({current_price: this.state.info.price[index]})
        
    }

    changeTotalPrice = (event) => {
        let quantity = event.target.value
        this.setState({quantity: quantity})

        
    }

    changeQuantity = (event) => {
        if (event.key === 'Enter')
        {
            
            //event.stopPropagation()
            let quantity = event.target.value
            let tp = this.state.total_price + quantity * this.state.current_price
            this.setState({total_price: tp, quantity: ""})
            event.preventDefault()
        }
    }

    reset = () => {
        this.setState({total_price: 0})
    }

    wishlist = () => {
        if (auth.currentUser === null){
            alert("Sign in to add to wishlist")
        }
        else{
            db.ref('/'+ auth.currentUser.displayName +'/').get().then((snapshot)=> {
                if (snapshot.exists()){
                    if (!Object.values(snapshot.val()).includes(this.perfume_id.id)){
                        alert("Successfully added")
                        db.ref('/'+ auth.currentUser.displayName +'/').push(this.perfume_id.id);
                    }
                    else{
                        alert("Already in wishlist")
                    }
                }
                else{
                    alert("Successfully added")
                    db.ref('/'+ auth.currentUser.displayName +'/').push(this.perfume_id.id);
                }
            })            
        }
    }

    music_playing = () =>{
        if(this.state.music_title !== ""){
            return(<div className="yes">&emsp; &emsp; Currently playing: {this.state.music_title} - {this.state.music_artist}</div>)
        }
        else{
            return(<div className="no">There is no music recommendation at the moment.</div>)
        }

    }

    render(){
        return (
            <div>
                {this.render_tab()}
            </div>
        )
    }
}

export default visual_copy2
