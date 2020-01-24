import React from 'react'

function DogPhoto({ url }) {
    return (
        <div className="dogPhotos">
            <img src={url} alt="dog" />
        </div>
    )
}

export default DogPhoto
