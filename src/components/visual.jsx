import './visual.css'
import Perfume1 from "../perfume_pictures/Perfume1.jpg"
import radar_chart from "../perfume_pictures/radar_chart.PNG"

const visual = () => {

    const info = {
        id: 1,
        name: "BLEU DE CHANEL",
        price: ["$75 | ","$100",],
        sizes: ["1.7 mL", "3.4 mL"]
    }

    function music(){
        window.location.href = "/music";
    }

    function detail(){
        window.location.href = "/visual_detail";
    }

    const total_price = "0"

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
                        <h3><b>{info.name} &emsp;</b></h3>
                        <table>
                            <tr> 
                                <td><b>Volume:  </b></td>
                                <td className='inner_second_td'>
                                    <form>
                                    <select name='volume' id='volume' className='form'>
                                        <option value='vol1'>{info.sizes[0]}</option>
                                        <option value='vol2'>{info.sizes[1]}</option>
                                    </select>
                                </form></td>   
                            </tr>
                            <tr>
                                <td><b>Price: </b></td>
                                <td className='inner_second_td'>{info.price}</td>   
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
                                <td className='inner_second_td'>${total_price}</td>
                            </tr>
                        </table>
                        <td><button>BUY NOW</button> &emsp;
                            <button>ADD TO CART</button>
                        </td>
                    </td>
                    
                </tr>
            </table>

            &emsp; &emsp; Currently playing: Perfect - Ed Sheeran

            <br/><br/>

            <ul className='detail_ul'>
                <li><button className='detail_ul_bytton' onClick = {detail}>DETAIL</button></li>
                <li><button className='detail_ul_bytton'>REVIEW</button></li>
                <li><button className='detail_ul_bytton' onClick = {music}>MUSIC</button></li>
                <li><button className='detail_ul_bytton'>Q&A</button></li>
            </ul>
            <br></br>
            <img src={radar_chart} className='radar_chart'/>
            
        </div>
    )
}

export default visual
