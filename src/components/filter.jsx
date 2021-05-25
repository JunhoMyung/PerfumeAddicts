import { ScreenLockPortraitSharp } from '@material-ui/icons';
import React from 'react'
import NavBar from './NavBar.jsx'


import Table from "./Table.js";

function App() {
  const data = [
    {
      Name: "Anssam",
      Age: "20"
    },
    {
      Name: "Rihab",
      Age: "12"
    },
    {
      Name: "Amir",
      Age: "3"
    }
  ];

  return (
    <div className="App">
      <Table
        data={data}
        theme={Table.THEME.DARK}
        density={Table.DENSITY.AVERAGE}
      >
        <Table.TR>
          <Table.TD>Seif</Table.TD>
          <Table.TD>3</Table.TD>
        </Table.TR>
      </Table>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);




// import ReactDOM from 'react-dom'
// import { Router, Route, browserHistory, IndexRoute  } from 'react-router'

// class Table extends React.Component {
//   constructor(props) {
//      super(props)
//      this.state = {
//         students: [
//         ]
//      }
//   }

//   renderTableHeader() {
//      let header = Object.keys(this.state.students[0])
//      return header.map((key, index) => {
//         return <th key={index}>{key.toUpperCase()}</th>
//      })
//   }

//   renderTableData() {
//      return this.state.students.map((student, index) => {
//         const { id, name, age, email } = student //destructuring
//         return (
//            <tr key={id}>
//               <td>{id}</td>
//               <td>{name}</td>
//               <td>{age}</td>
//               <td>{email}</td>
//            </tr>
//         )
//      })
//   }

//   render() {
//      return (
//         <div>
//            <h1 id='title'>React Dynamic Table</h1>
//            <table id='students'>
//               <tbody>
//                  <tr>{this.renderTableHeader()}</tr>
//                  {this.renderTableData()}
//               </tbody>
//            </table>
//         </div>
//      )
//   }
// }

// ReactDOM.render(<Table />, document.getElementById('root'));

const filter = () => {
    // perfume_list = [[perfume_name, [tobefiltered_metric_list], img], [], []]
    const perfume_list = [
      {
        "name": "CK One",
        "ingredient": ["citrus", "green", "drywood", "mossywood", "powdery"]
      },
      {
        "name": "English Pear & Freesia",
        "ingredient": ["floral", "fruity", "water", "musk", "aromatic"]
      },
      {
        "name": "Do Son",
        "ingredient": ["floral", "citrus", "musk"]
      },
      {
        "name": "Un Jardin En Mediterranee",
        "ingredient": ["citrus", "aromatic", "floral", "mossywood"]
      },
      {
        "name": "Voyage d'Hermes",
        "ingredient": ["softspicy", "citrus", "green", "aromatic", "drywood"]
      },
      {
        "name": "La Vie Est Belle",
        "ingredient": ["fruity", "aromatic", "softspicy"]
      },
      {
        "name": "Cherry Blossom",
        "ingredient": ["floral", "fruity", "musk"]
      },
      {
        "name": "A La Rose ",
        "ingredient": ["citrus", "musk", "drywood", "floral"]
      },
      {
        "name": "Modern Princess",
        "ingredient": ["fruity", "aromatic", "floral"]
      },
      {
        "name": "Baccarat Rouge",
        "ingredient": ["drywood", "softspicy", "aromatic"]
      },
      {
        "name": "Alien",
        "ingredient": ["floral", "powdery", "softspicy", "drywood"] 
      },
      {
        "name": "Tobacco Vanille",
        "ingredient": ["softspicy", "powdery", "drywood"]
      },
      {
        "name": "Aventus",
        "ingredient": ["drywood", "green", "musk", "citrus"]
      },
      {
        "name": "Coco Mademoiselle",
        "ingredient": ["citrus", "drywood", "floral", "softspicy"]
      },
      {
        "name": "Black Opium",
        "ingredient": ["floral", "powdery", "drywood", "fruity"]
      },
      {
        "name": "Black Orchid",
        "ingredient": ["softspicy", "drywood", "floral"]
      },
      {
        "name": "La Nuit de I'Homme",
        "ingredient": ["aromatic", "softspicy", "drywood", "citrus"]
      },
      {
        "name": "Rock Volume One",
        "ingredient": ["musk", "sharpspicy"]
      },
      {
        "name": "Fahrenheit",
        "ingredient": ["musk", "drywood"]
      },
      {
        "name": "Acqua di Giò Profumo",
        "ingredient": ["aromatic", "water"]
      },
      {
        "name": "Sailing Day",
        "ingredient": ["mossywood", "water"]
      },
      {
        "name": "Snow Mint",
        "ingredient": ["green", "aromatic"]
      },
      {
        "name": "Aqva Pour Homme Atlantiqve ",
        "ingredient": ["aromatic", "water", "citrus"]
      },
      {
        "name": "Aqua Allegoria Herba Fresca",
        "ingredient": ["green", "citrus", "aromatic"]
      },
      {
        "name": "Poolside Breeze",
        "ingredient": ["water", "floral"]
      },
      {
        "name": "Luna Rossa Carbon",
        "ingredient": ["sharpspicy", "aromatic"]
      },
      {
        "name": "Radish Vetiver ",
        "ingredient": ["drywood", "green"]
      },
      {
        "name": "Dry Wood Ramon",
        "ingredient": ["drywood", "sharpspicy"]
      },
      {
        "name": "Honey Oud",
        "ingredient": ["powdery", "floral", "fruity"]
      }
  ]

    // checked elements to be filtered
    // when img file of 12 icons clicked --> the value should be added to the filter_list file

    var filter_list = ["metallic", "citrus"];
    var showlist = [];
    var remove = [];

    //filtering 
    function nextpage(){
        var tobeshown = perfume_list;
        for (let i = 0; i < tobeshown.length; i++){
            for (let j = 0; j < filter_list.length; j++){
                if (tobeshown[i]['ingredient'].includes(filter_list[j])){
                    remove.push(i);
                    break;
                }
            }
        }

        // console.log(remove);
        for (let i = 0; i < tobeshown.length; i++){
            if (!remove.includes(i)){
                showlist.push(tobeshown[i]['name']);
            }
        }

        console.log(showlist);
        console.log(filter_list);

        showlist = [];
    }


    function handleclick(){
        window.location.href = "/visual";
    }

//     function checkbox(){
//         document.getElementById("choice_musk").onclick = function(){
//             if (filter_list.includes('musk')){
//                 filter_list.remove('musk');
//             }
//             filter_list.push('musk');
//         }
//     }

// checkbox()
    // var [printlist] = useState([]);
    var printlist = [];
    printlist = [
      {img: "img file tbd"},
      {img: "img file tbd"},
    ]
    // function show_result(){
    //   var printTable = document.getElementById('resultTable');
    //   for (let i = 0; i < printlist.length; i++ ){
    //     var newRow = printTable.insertRow(i+1);
    //     var newCell1 = newRow.insertCell(0);
    //     var newIdeaTitle = printlist[i]["img"];
    //     newCell1.innerHTML = newIdeaTitle;
    //   }
    // }
    // show_result()


    // function show_perfume_() {
    //   var table = document.getElementById("resultTable");
    //   for (let i = 0; i < printlist.length; i++ ){
    //     var row = table.insertRow(0);
    //     var cell1 = row.insertCell(0);
    //     cell1.innerHTML = printlist[i]["img"];
    //   }
    // }
  
    function show_perfume_list(){
      var lst = [];
      lst = printlist
      for (let i = 0; i < lst.length; i++){
        console.log(lst[i], i);
      }
    }
    // this.state = []
    // changestate = () => {
    //     this.setState(['musk'])
    //     console.log(this)
    // }
    var lst = [];
    return (
        
        <div>
        <button onClick = {nextpage}> do filter </button>

        <NavBar />
        <button onClick = {handleclick}> perfume info </button>
        

        <div> filter </div>
        <h1> PERFUME FINDER </h1>
        <h2> Choose scents to avoid: </h2>

        {/* clickable image here for 16 options, if image clicked --> perfume info page redirect.*/}
        <li class="choice1">
        <input name="input1" type="checkbox" value="1" id="choice_musk" ></input>
        {/* onClick = {this.changestate} */}
        <label for="choice_musk" id="musk"> Musk </label>
        </li>

        <li class="choice2">
        <input name="input2" type="checkbox" value="2" id="choice_aromatic"></input>
        <label for="choice_aromatic" id="aromatic"> aromatic </label>
        </li>

        <li class="choice3">
        <input name="input3" type="checkbox" value="3" id="choice_woody"></input>
        <label for="choice_woody" id="woody"> Woody </label>
        </li>

        <li class="choice4">
        <input name="input4" type="checkbox" value="4" id="choice_citrus"></input>
        <label for="choice_citrus" id="citrus"> Citrus </label>
        </li>

        <li class="choice5">
        <input name="input5" type="checkbox" value="5" id="choice_oriental"></input>
        <label for="choice_oriental" id="oriental"> oriental </label>
        </li>

        <li class="choice6">
        <input name="input6" type="checkbox" value="6" id="choice_metallic"></input>
        <label for="choice_metallic" id="metallic"> metallic </label>
        </li>

        <li class="choice7">
        <input name="input7" type="checkbox" value="7" id="choice_honey"></input>
        <label for="choice_honey" id="honey"> Honey </label>
        </li>

        <li class="choice8">
        <input name="input8" type="checkbox" value="8" id="choice_green"></input>
        <label for="choice_green" id="green"> Green </label>
        </li>

        <li class="choice9">
        <input name="input9" type="checkbox" value="9" id="choice_dry"></input>
        <label for="choice_dry" id="dry"> Dry </label>
        </li>

        <li class="choice10">
        <input name="input10" type="checkbox" value="10" id="choice_leathery"></input>
        <label for="choice_leathery" id="leathery"> Leathery </label>
        </li>

        <li class="choice11">
        <input name="input11" type="checkbox" value="11" id="choice_marine"></input>
        <label for="choice_marine" id="marine"> Marine </label>
        </li>

        <li class="choice12">
        <input name="input12" type="checkbox" value="12" id="choice_minty"></input>
        <label for="choice_minty" id="minty"> Minty </label>
        </li>

        <li class="choice13">
        <input name="input13" type="checkbox" value="13" id="choice_spicy"></input>
        <label for="choice_spicy" id="spicy"> Spicy </label>
        </li>

        <li class="choice14">
        <input name="input14" type="checkbox" value="14" id="choice_floral"></input>
        <label for="choice_floral" id="floral"> Floral </label>
        </li>

        <li class="choice15">
        <input name="input15" type="checkbox" value="15" id="choice_powdery"></input>
        <label for="choice_powdery" id="powdery"> Powdery </label>
        </li>

        <li class="choice16">
        <input name="input16" type="checkbox" value="16" id="choice_watery"></input>
        <label for="choice_watery" id="watery"> Watery </label>
        </li>


        <table id='resultTable'>
          <tr>
            <td> Perfume List available </td>
          </tr>
        </table>

        <button onclick={show_perfume_list}> Show Perfume list available </button>
        

        {/* <div id='root'></div> */}
        

        {/* perfumeimg_list = [
        {
                title: value.title,
                artist: value.artist,
                url: value.url,
                description: value.description,
                vote: value.vote - 1,
                voteID: value.voteID
            }] */}


        {/* <script>
        for (var i = 0; i < lst.length; i++) {
            document.write('<tr><td>' +  + '</td><td>' +  + '</td><td>' + jobs[i].salary + '</td></tr>');
          }
        </script> */}


        {/* {[print_list].reverse().map((value, index) => {
            return (
                    <tbody>
                        <tr>
                            <td width = "80%">{value.img} </td>
                        </tr>
                        <tr>
                        </tr>
                    </tbody>
                )
        })}   */}
        

        {/* <div class="cell box" style="flex-grow: 0;">
        <div class="card-section"> */}

     
        {/* <img src="https://.jpg"></img>
        <div class="card-section"><p><a href="https://www.html"> Name of perfume 
        

        <span class="link-span"></span></a></p> 
        <p><small> Type </small></p>

        </div> */}

        {/* </div>
        </div> */}

        </div>
        

            )
        }

export default filter
