import React from 'react'

const visual = () => {

    function handleclick(){
        window.location.href = "/music";
    }
    return (
        <div>
            <div>visual</div>
            <button onClick = {handleclick}>music</button>
        </div>
    )
}

export default visual
