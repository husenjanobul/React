import React from 'react'

function Button({getData}) {
    return (
        <div>
            <button onClick={()=> getData()} >Get a friend</button>
        </div>
    )
}

export default Button
