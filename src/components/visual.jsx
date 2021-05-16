import './visual.css'
import Perfume1 from "../perfume_pictures/Perfume1.jpg"
import radar_chart from "../perfume_pictures/radar_chart.PNG"
import React, { Component } from "react";
import MyMusic from "./music.jsx";
import ReactPlayer from 'react-player/youtube'

class visual extends Component {

    state = {
        page : "detail",
        info : {
            id: 1,
            name: "BLEU DE CHANEL",
            price: ["$75 | ","$100",],
            sizes: ["1.7 mL", "3.4 mL"]
        },
        total_price : 0,
        tab_state : 0,
        url: "https://www.youtube.com/watch?v=UDDMYw_IZnE&ab_channel=DopeLyrics"
    }

    music = () => {
        this.setState({page : "music"});
    }

    detail = () => {
        this.setState({page : "detail"});
    }

    render_tab = () =>{
        if (this.state.page == "detail"){
            return(
                <img src={radar_chart} className='radar_chart'/> 
            )
        }
        else if (this.state.page == "music"){
            return(
               <MyMusic />
            )
        }
    }

    render(){
        return (
            <div>
                <header className='header'><h1><i>Perdict</i></h1></header>
                <ul className='tab_ul'>
                    <li>HOME</li>
                    <li>BEST</li>
                    <li>BRANDS</li>
                    <li>SEARCH</li>
                    <li>MY PAGE</li>
                </ul>
                <br/><br/>
    
                <table>
                    <tr>
                        <td className='main_table'><img src={Perfume1} /></td>
                        <td className='main_table'>
                            <h3><b>{this.state.info.name} &emsp;</b></h3>
                            <table>
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
                            </table>
                            <td><button>BUY NOW</button> &emsp;
                                <button>ADD TO CART</button>
                            </td>
                        </td>
                        
                    </tr>
                </table>
    
                &emsp; &emsp; Currently playing: Perfect - Ed Sheeran
                <ReactPlayer url = {this.state.url} controls = {true} playing = {true} width="340px" height="200px" volume = "0.2"/>
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
