import React, {Component} from 'react'
import NavBar from './NavBar'
import {auth, db} from "./firebase.jsx";
import { DataGrid } from '@material-ui/data-grid';
import perfume_info from './perfume_info.jsx'
import RadarChart from 'react-svg-radar-chart';



export default class Mypage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          columns: [
            { field: 'PerfumeName', headerName: 'Perfume Name', sortable: false, width: 200 },
            { field: 'img', headerName: 'Image', width: 400, sortable: false, 
                renderCell: (params) => {
                    return (
                        <div className = "mypage">
                            {params.row.img}
                        </div>
                    );
            }},
            { field: 'Price', headerName: 'Price ($)', width: 200 },
            { field: 'Quantity', headerName: 'Quantity (mL)', width: 200 },
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
                        temp2.push({id: i, PerfumeName: perfume_info[i].name, img: perfume_info[i].pic_name, Price: perfume_info[i].price[0], Quantity: perfume_info[i].volume[0]})
                    }
                    temp_this.setState({rows: temp2})
                }
            })
        }
    }

    print = () =>{
        if(this.state.rows !== null){
            return(
                <DataGrid rows={this.state.rows} columns={this.state.columns} pageSize={3} checkboxSelection rowHeight = {200} 
                    onRowSelected={(e) => this.selected_list(e)}/>
            )
        }
    }

    selected_list = (e) => {
        var temp = this.state.select;
        if (temp.includes(e.data.id)){
            for (var i = 0; i < temp.length; i ++){
                if (temp[i] === e.data.id+""){
                    temp.splice(i, 1)
                }
            }
        }
        else{
            temp.push(e.data.id);
        }
        this.setState({select: temp})
        var temp2 = [];
        for (i of temp){
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
                <NavBar/>
                <h1>Wish-List</h1>
                <div style={{ height: 710, width: '80%', margin: "10%" }}>
                    {this.print()}
                </div>
                <div className = "radar_chart">
                <RadarChart
                    captions={this.state.captions}
                    data={this.state.data}
                    size={600}
                />
                </div>
            </div>
        )
    }
}



