import React, {Component} from 'react'
import NavBar from './NavBar'
import {auth, db} from "./firebase.jsx";
import { DataGrid } from '@material-ui/data-grid';
import perfume_info from './perfume_info.jsx'
import Perfume1 from "../perfume_pictures/350x250/Perfume1.png"


export default class Mypage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          columns: [
            { field: 'PerfumeName', headerName: 'Perfume Name', sortable: false, width: 200 },
            { field: 'img', headerName: 'Image', width: 400, sortable: false, 
                renderCell: (params) => {
                    console.log(params)
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
          shoppingcart: 0
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
        console.log(this.state.rows)
        if(this.state.rows !== null){
            return(
                <DataGrid rows={this.state.rows} columns={this.state.columns} pageSize={3} checkboxSelection rowHeight = {200} />
            )
        }
    }


    render (){
        return (
            <div>
                <NavBar/>
                <h1>Wish-List</h1>
                <div style={{ height: 700, width: '80%', margin: "10%" }}>
                    {this.print()}
                </div>
            </div>
        )
    }
}

