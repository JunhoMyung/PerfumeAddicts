import './visual.css'
import Perfume1 from "../perfume_pictures/Perfume1.jpg"
import React, { Component } from "react";
import MyMusic from "./music.jsx";
import ReactPlayer from 'react-player/youtube'
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import NavBar from "./NavBar.jsx"
import firebase from './firebase';
import { ThreeSixtySharp } from '@material-ui/icons';


class visual extends Component {

    constructor(props) {
        super(props);

        this.state = {
            page : "detail",
            info : {
                id: 1,
                name: "BLEU DE CHANEL",
                price: ["$75 | ","$100",],
                sizes: ["1.7 mL", "3.4 mL"]
            },
            total_price : 0,
            tab_state : 0,
            url: "",
        };        
        this.componentDidMount = this.componentDidMount.bind(this) 

    }

    componentDidMount = () => {
        let current_component = this
        firebase.database().ref('/'+ this.state.info.name +'/').orderByChild('vote').on("child_added", function(snapshot) {
            current_component.setState({url: snapshot.val().url})
        });
        console.log()
    }

    music = () => {
        this.setState({page : "music"});
    }

    detail = () => {
        this.setState({page : "detail"});
    }

    render_tab = () => {
        const data = [
            {
              data: {
                citrus: 0.7,
                woody: .8,
                spicy: 0.9,
                flower: 0.67,
                fruit: 0.8
              },
              meta: { color: 'blue' }
            },
            {
              data: {
                citrus: 0.6,
                woody: .85,
                spicy: 0.5,
                flower: 0.6,
                fruit: 0.7
              },
              meta: { color: 'red' }
            }
          ];
       
          const captions = {
            // columns
            citrus: 'Citrus',
            woody: 'Woody',
            spicy: 'Spicy',
            flower: 'Flower',
            fruit: 'Fruit'
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
    render(){
        return (
            <div>
                <NavBar />
                <br/><br/>
                <table>
                    <tbody>
                    <tr>
                        <td className='main_table'><img src={Perfume1} alt = "" /></td>
                        <td className='main_table'>
                            <h3><b>{this.state.info.name} &emsp;</b></h3>
                            <table>
                                <tbody>
                                <tr> 
                                    <td><b>Volume:  </b></td>
                                    <td className='inner_second_td'>
                                        <form>
                                        <select name='volume' id='volume' className='form'>
                                            <option value='vol1'>{this.state.info.sizes[0]}</option>
                                            <option value='vol2'>{this.state.info.sizes[1]}</option>
                                        </select>
                                    </form></td>   
                                </tr>
                                <tr>
                                    <td><b>Price: </b></td>
                                    <td className='inner_second_td'>{this.state.info.price}</td>   
                                </tr>
                                <tr>
                                    <td><b>Options:  </b></td>
                                    <td className='inner_second_td'>
                                        <form>
                                            <select name='options' id='options' className='form'>
                                                <option value='option1'>Option 1</option>
                                                <option value='option1'>Option 1</option>
                                                <option value='option1'>Option 1</option>
                                            </select>
                                        </form>
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>Quantity:  </b></td>
                                    <td className='inner_second_td'>
                                        <form action="/action_page.php">
                                            <input type="text" id="quantity" name="quantity" className='form'/>
                                        </form>
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>Total:  </b></td>
                                    <td className='inner_second_td'>${this.state.total_price}</td>
                                </tr>
                                </tbody>
                            </table>
                            <button>BUY NOW</button> &emsp;
                            <button>ADD TO CART</button>
                        </td>            
                    </tr>
                    </tbody>
                </table>
    
                &emsp; &emsp; Currently playing: Perfect - Ed Sheeran
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
