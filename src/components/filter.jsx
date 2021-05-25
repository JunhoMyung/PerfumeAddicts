import Overlay from './overlay.jsx'
import './filter.css'
import React, { useState, useEffect } from "react";
import NavBar from './NavBar.jsx'
import perfume_info from './perfume_info.jsx'
import { ThemeProvider } from '@material-ui/core';

export default function Filter() {
    
  const [displayList, setDisplay] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]);
  const filter_list = []
  const filter_length = localStorage.getItem('length')
    // var filter_list = ["metallic", "citrus"];
    // var showlist = [];
    // var remove = [];

    // //filtering 
    // function nextpage(){
    //     var tobeshown = perfume_list;
    //     for (let i = 0; i < tobeshown.length; i++){
    //         for (let j = 0; j < filter_list.length; j++){
    //             if (tobeshown[i]['ingredient'].includes(filter_list[j])){
    //                 remove.push(i);
    //                 break;
    //             }
    //         }
    //     }

    //     for (let i = 0; i < tobeshown.length; i++){
    //         if (!remove.includes(i)){
    //             showlist.push(tobeshown[i]['name']);
    //         }
    //     }

    //     console.log(showlist);
    //     console.log(filter_list);

    //     showlist = [];
    // }


    // function handleclick(){
    //     //localStorage.setItem('perfume_id', 0)
    //     window.location.href = "/visual";
    // }
  
    // var perfume_image_list = []; 
    // for (let i = 1; i < 28; i++){
    //   perfume_image_list.push("Perfume" + String(i))
    // }
    // console.log(perfume_image_list);

  useEffect(() => {
      renew()
  })


  const renew = () => {
    for (let k = 0; k < filter_length; k++){
      filter_list.push(localStorage.getItem('index' + k))
    }
    var temp = [];
    for (let i = 0; i < 29; i++){
      for (let j = 0; j < filter_length; j++){
        if (perfume_info[i].ingredient.includes(filter_list[j])){
          temp.push(i);
          break
        }
      }
    }
    var temp2 = []
    for (let j = 0; j < 29; j ++){
      if(!temp.includes(j)){
        temp2.push(j)
      }
    }
    setDisplay(temp2)
    // console.log(perfume_info[1].ingredient.includes(filter_list[1]))
    // console.log(filter_list[0])
    // console.log(filter_list)
    // console.log(temp2)
  }


  const display = () => {
    let table =[]
    const temp = Math.floor(displayList.length/4)
    for (var i = 0; i < (temp+1); i++){
      let children = []
      for (var j = 0; j < 4; j++){
        if((i*4+j)<= (displayList.length - 1)){          
          children.push(<td>{perfume_info[displayList[i*4 + j]].pic_name}</td>)
        }
        else{
          children.push(<td></td>)
        }
      }
      table.push(<tr>{children}</tr>)
    }
    return table
  }

    return (
        <div>
          <NavBar/>
          <Overlay/>
          <table>
            {display()}
          </table>
        </div>
    )
}