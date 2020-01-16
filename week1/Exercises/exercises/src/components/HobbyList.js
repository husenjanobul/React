import React from 'react'

function HobbyList({hobbies}) {
    return (
        <div className="hobbies">
            {hobbies.map((hobby, index)=>{
                return(
                    <li key={index}> {hobby} </li>
                )
            })}
        </div>
    )
}

export default HobbyList
