import React from 'react'
import NavBar from './NavBar.jsx'

const filter = () => {

    function handleclick(){
        window.location.href = "/visual";
    }

    return (
        <div>
        <NavBar />
        <button onClick = {handleclick}> perfume info </button>
        

        <div> filter </div>
        <h1> PERFUME FINDER </h1>
        <h2> Choose scents to avoid: </h2>

        <li class="choice0">
        <input name="input0" type="checkbox" value="0" id="choice_citrus"></input>
        <label for="choice_citrus" id="Citrus"> Citrus </label>
        </li>

        <li class="choice1">
        <input name="input1" type="checkbox" value="1" id="choice_fruity"></input>
        <label for="choice_fruity" id="Fruity"> Fruity </label>
        </li>

        <li class="choice2">
        <input name="input2" type="checkbox" value="2" id="choice_flowerly"></input>
        <label for="choice_flowerly" id="flowerly"> flowerly </label>
        </li>

        <li class="choice3">
        <input name="input3" type="checkbox" value="3" id="choice_woody"></input>
        <label for="choice_woody" id="woody"> woody </label>
        </li>

        <li class="choice4">
        <input name="input4" type="checkbox" value="4" id="choice_oriental"></input>
        <label for="choice_oriental" id="oriental"> oriental </label>
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
