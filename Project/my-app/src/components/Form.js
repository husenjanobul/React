import React from 'react'

function Form({ getCity }) {
    return (
        <button onClick={()=> getCity()} >search</button>
    )
}

export default Form
