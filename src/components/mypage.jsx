import React, {Component} from 'react'
import NavBar from './NavBar_copy'
import {auth, db} from "./firebase.jsx";
import { DataGrid } from '@material-ui/data-grid';
import perfume_info from './perfume_info.jsx'
import RadarChart from 'react-svg-radar-chart';
import LOGO_Full from "../perfume_pictures/LOGO_Full.PNG"
import LOGO_Thumbnail from "../perfume_pictures/LOGO_Thumbnail.PNG"


export default class Mypage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          columns: [
            { field: 'img', headerName: 'Image', width: 170, sortable: false, 
                renderCell: (params) => {
                    return (
                        <div className = "mypage">
                            {params.row.img}
                        </div>
                    );
            }},
            { field: 'PerfumeName', headerName: 'Perfume Name', sortable: false, width: 350 },
            { field: 'Price', headerName: 'Price ($)', width: "13vw" },
            { field: 'Quantity', headerName: 'Volume (mL)', width: "13vw" },
            { field: 'Delete', headerName: "Remove", width: "10vw", sortable: false, renderCell: (params) => {
                return (
                    <div className = "delete">
                        {params.row.Delete}
                    </div>
                );
        }},
          ],
          rows: [],
          currentUser: null,
          data: [],
          captions: {
            citrus: 'Citrus',
            woody: 'Woody',
            spicy: 'Spicy',
            flower: 'Floral',
            fruit: 'Fruity'
          },
          select: []
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
          this.setState({ currentUser: user });
          this.renew()
        })
    }

    renew = () =>{
        if (this.state.currentUser !== null){
            var temp = []
            var temp_this = this
            var temp2 = []

            db.ref('/'+ this.state.currentUser.displayName +'/').get().then((snapshot)=> {
                if (snapshot.exists()){
                    temp = Object.values(snapshot.val())
                    for (var i of temp){
                        const num = i
                        temp2.push({
                            id: i, PerfumeName: perfume_info[i].name, 
                            img: perfume_info[i].pic_name, 
                            Price: perfume_info[i].price[0], 
                            Quantity: perfume_info[i].volume[0], 
                            Delete: <i className="far fa-trash-alt fa-lg pointer" onClick = {() => this.removerow(num)}></i>
                        })
                    }
                    temp_this.setState({rows: temp2})
                }
            })
        }
    }

    removerow = (num) =>{
        var temp = [];
        var temp2 = [];
        temp = this.state.rows;
        db.ref('/'+ this.state.currentUser.displayName +'/').get().then((snapshot)=> {
            snapshot.forEach((child) => {
                if(child.val() === num){
                    db.ref('/'+ this.state.currentUser.displayName +'/' + child.key).remove()
                }
            })
        })
        for (var i of temp){
            if (i.id !== num){
                temp2.push(i)
            }
        }
        this.setState({rows: temp2})

    }

    print = () =>{
        if(this.state.rows.length !== 0){
            return(
                <div>
                    <div className ="datatable" style={{ height: "70vh", width: '80%'}}>
                        <DataGrid rows={this.state.rows} columns={this.state.columns} pageSize={3} checkboxSelection rowHeight = {100} 
                        onSelectionModelChange={(e) => this.selected_list(e)}/>
                    </div>
                    <br/>
                    <div className="filtersubtitle">Compare Selected Perfumes</div>
                    <br/>
                    <div className = "radarcolumn radarleft">
                        <RadarChart
                            captions={this.state.captions}
                            data={this.state.data}
                            size={600}
                        />
                    </div>
                    <div className = "radarcolumn radarright">
                        <table height = "600px" className = "radartable">
                            <tbody>
                                <tr>
                                    <td>
                                        {this.state.select.map((value) => {
                                            var r = 255*((perfume_info[value].radar_chart.fruity + perfume_info[value].radar_chart.flowery) / 2)
                                            var g = 255*perfume_info[value].radar_chart.woody
                                            var b = 255*perfume_info[value].radar_chart.citrus;
                                            var a = 1*((perfume_info[value].radar_chart.woody + perfume_info[value].radar_chart.spicy) / 2)
                                            return(
                                                <div className = "legendspecific">
                                                    <span className = "box" style = {{backgroundColor: "rgba(" + r + "," + g + "," + b + "," + a + ")"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                                    {perfume_info[value].name}
                                                </div>
                                            )
                                        })}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br/><br/><br/><br/>
                </div>
                </div>
            )
        }
        else{
            return(
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <img className = "logo" src={LOGO_Thumbnail} alt = "" />
                    <div className = "nodata">There are no perfumes in your wish list!</div>
                </div>
            )
        }
    }

    selected_list = (e) => {
        console.log(e)
        this.setState({select: e.selectionModel})
        var temp2 = [];
        for (let i of e.selectionModel){
            var r = 255*((perfume_info[i].radar_chart.fruity + perfume_info[i].radar_chart.flowery) / 2)
            var g = 255*perfume_info[i].radar_chart.woody
            var b = 255*perfume_info[i].radar_chart.citrus;
            var a = 1*((perfume_info[i].radar_chart.woody + perfume_info[i].radar_chart.spicy) / 2)
            temp2.push(
                {
                    data: {
                        citrus: perfume_info[i].radar_chart.citrus,
                        woody: perfume_info[i].radar_chart.woody,
                        spicy: perfume_info[i].radar_chart.spicy,
                        flower: perfume_info[i].radar_chart.flowery,
                        fruit: perfume_info[i].radar_chart.fruity
                    },
                    meta: { color: "rgba(" + r + "," + g + "," + b + "," + a + ")" }
                }
            )
        }
        this.setState({data: temp2})
    }

    render (){
        return (
            <div>
                <img src={LOGO_Full} alt = "" className='logo' onClick={() => {window.location.href = "/"}}/>
                <NavBar/>
                <div className="filtertitle">Wish-List</div>
                {this.print()}
            </div>
        )
    }
}



