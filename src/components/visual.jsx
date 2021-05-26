import './visual.css'
import React, { Component } from "react";
import MyMusic from "./music.jsx";
import ReactPlayer from 'react-player/youtube'
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import NavBar from "./NavBar.jsx"
import firebase from './firebase';
import perfume_info from './perfume_info.jsx'


class visual extends Component {
    
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
            wishlist: []
        };        
        this.componentDidMount = this.componentDidMount.bind(this) 

    }

    componentDidMount = () => {
        let current_component = this
        firebase.database().ref('/'+ this.state.info.name +'/').orderByChild('vote').on("child_added", function(snapshot) {
            current_component.setState({url: snapshot.val().url, music_title: snapshot.val().title, music_artist: snapshot.val().artist})
        });
    }

    music = () => {
        this.setState({page : "music"});
    }

    detail = () => {
        this.setState({page : "detail"});
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
            // columns
            citrus: 'Citrus',
            woody: 'Woody',
            spicy: 'Spicy',
            flower: 'Floral',
            fruit: 'Fruity'
          };
        if (this.state.page === "detail"){
            return(
                ////<img src={radar_chart} className='radar_chart' alt = ""/> 
                <div className='radar_chart'>
                    
        <RadarChart
            captions={captions}
            data={data}
            size={600}
          />
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
        if (firebase.auth().currentUser === null){
            alert("Sign in to add to wishlist")
        }
        else{
            firebase.database().ref('/'+ firebase.auth().currentUser.displayName +'/').get().then((snapshot)=> {
                if (snapshot.exists()){
                    if (!Object.values(snapshot.val()).includes(this.perfume_id.id)){
                        alert("Successfully added")
                        firebase.database().ref('/'+ firebase.auth().currentUser.displayName +'/').push(this.perfume_id.id);
                    }
                    else{
                        alert("Already in wishlist")
                    }
                }
                else{
                    alert("Successfully added")
                    firebase.database().ref('/'+ firebase.auth().currentUser.displayName +'/').push(this.perfume_id.id);
                }
            })            
        }
    }

    render(){
        //console.log(this.state.current_price)
        //const current_price = this.state.current_price
        //const quantity = this.state.quantity
        return (
            <div>
                <NavBar />
                <div>
                <table>
                    <tbody>
                    <tr>
                        <td className="perfume_picture">{perfume_info[this.perfume_id.id].pic_name}</td>
                        <td className='main_table'>
                            <h3 className="perfume_name"><b>{this.state.info.name} &emsp;</b></h3>
                            <table>
                                <tbody>
                                <tr> 
                                    <td className="inner_first_td"><b>Volume:  </b></td>
                                    <td className='inner_second_td'>
                                        <form>
                                        <select name='volume' id='volume' className='form' onChange={this.changePrice}>
                                            <option value={0} >{this.state.info.sizes[0]}</option>
                                            <option value={1} >{this.state.info.sizes[1]}</option>
                                        </select>
                                    </form></td>   
                                </tr>
                                <tr>
                                    <td className="inner_first_td"><b>Price: </b></td>
                                    <td className='inner_second_td'>${this.state.current_price}</td>   
                                </tr>
                                
                                <tr>
                                    <td className="inner_first_td"><b>Quantity:  </b></td>
                                    <td className='inner_second_td'>
                                        <form>
                                            <input type="text" id="quantity" name="quantity" className='quantity' value={this.state.quantity} onChange={this.changeTotalPrice} onKeyDown={this.changeQuantity} />
                                        </form>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="inner_first_td"><b>Total:  </b></td>
                                    <td className='inner_second_td'>${this.state.total_price} &emsp; &emsp; 
                                    <button className='reset' onClick={this.reset}>Reset</button>
                                    </td>
                                   
                                </tr>
                                </tbody>
                            </table>
                            <button onClick = {this.wishlist}>ADD TO WISH-LIST</button>
                        </td>            
                    </tr>
                    </tbody>
                </table>
                </div>
    
                &emsp; &emsp; Currently playing: {this.state.music_title} - {this.state.music_artist}
                <ReactPlayer url = {this.state.url} controls = {true} playing = {true} width="340px" height="200px" volume = {0.2}/>
                <br/><br/>
                <ul className='detail_ul'>
                    <li><button className='detail_ul_bytton' onClick = {this.detail}>DETAIL</button></li>
                    <li><button className='detail_ul_bytton'>REVIEW</button></li>
                    <li><button className='detail_ul_bytton' onClick = {this.music}>MUSIC</button></li>
                    <li><button className='detail_ul_bytton'>Q&A</button></li>
                </ul>
                <br></br>

                {this.render_tab()}
            </div>
        )
    }
}

export default visual
