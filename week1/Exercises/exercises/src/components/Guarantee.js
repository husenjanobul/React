import React from 'react'

function Guarantee({img, title, description}) {
    return (
        <div className="guarantee">
                <img src={img} alt={title}/>
                <h3> {title} </h3>
                <p> {description} </p>
        </div>
    )
}

export default Guarantee
