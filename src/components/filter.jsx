import React from 'react'

const filter = () => {

    function handleclick(){
        window.location.href = "/visual";
    }

    return (
        
        <div>
            <div>filter</div>
            <button onClick = {handleclick}>perfume info</button>
        </div>
    )
}

export default filter
