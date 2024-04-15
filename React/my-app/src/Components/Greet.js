import React from 'react'

function Greet(props)
{
    return ( <div><h1>{props.name} Login</h1>
    <label>Name</label>
    <input type='text'></input><br/><br/>
    <label>E mail</label>
    <input type='text'></input><br/><br/>
    <button>save</button>
    </div>
    
    )
}

export default Greet