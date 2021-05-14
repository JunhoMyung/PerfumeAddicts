import React from 'react'

const main = () => {

    function handleclick(){
        window.location.href = "/filter";
    }

    return (
        <div>
            <button onClick = {handleclick}>Find My Perfume</button>
        </div>
    )
}

export default main
