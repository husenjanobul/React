import React from 'react'

function Button({ getPhoto }) {
    return (
        <div>
            <button onClick={getPhoto}>Get a dog</button>
        </div>
    )
}

export default Button
