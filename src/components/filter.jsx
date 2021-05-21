import React from 'react'
import NavBar from './NavBar.jsx'


const filter = () => {
    // perfume_list = [[perfume_name, [tobefiltered_metric_list], img], [], []]
    var perfume_list = [["ck", ["citrus", "metallic"], "img"], ["ck2", ["woody", "metallic"], "img"], ["ck3", ["metallic"], "img"]];
    // checked elements to be filtered
    var filter_list = ["citrus"];
    var showlist = [];
    var remove = [];

    function nextpage(){
        var tobeshown = perfume_list;
        for (let i = 0; filter_list.length; i++){
            for (let j = 0; tobeshown.length; j++){
                console.log(tobeshown);
                console.log(tobeshown[0][1], 'herehre');
                for (let ind = 0; tobeshown[j][i].length; ind++){
                    if (filter_list[i] == tobeshown[j][1][ind]){
                        // var z = json.loads(remove);
                        // z.update(j);
                        remove.push(j);
                    }
                }
                // if (filter_list[i] in tobeshown[j][1]){
                //     remove.append(j)
                // }
            }
            for (let k = 0; remove.length; k ++){
                delete (tobeshown[tobeshown.index(k)])
            remove = []
        }
        console.log(tobeshown, 'fin');
        }
    }
    
    function handleclick(){
        window.location.href = "/visual";
    }

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
        <input name="input1" type="checkbox" value="1" id="choice_musk"></input>
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
