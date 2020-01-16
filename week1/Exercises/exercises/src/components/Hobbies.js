import React from 'react'
import HobbyList from './HobbyList'

function Hobbies() {
    const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];

    return (
        <div>
            <h3>Hobbies:</h3>
            <HobbyList hobbies={hobbies} />
        </div>
    )
}

export default Hobbies
