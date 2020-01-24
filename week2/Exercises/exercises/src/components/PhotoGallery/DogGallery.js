import React, { useState } from 'react'
import Button from './Button'
import DogPhoto from './DogPhoto'

function DogGallery() {
    const [dogPhotos, setDogPhotos] = useState([])
    const [error, setError] = useState(false)
    const [isLoading, setLoading] = useState(' ')

    const getDogPhoto = () => {
        setLoading('loading')
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                setDogPhotos([...dogPhotos, data.message])
                setLoading('done')
            })
            .catch(err => {
                console.log(err)
                setError(true)
                setLoading(' ')
            })
    }

    return (
        <div className="photoGallery">
            <h2>Phot Gallery</h2>
            <Button getPhoto={() => getDogPhoto()} />
            {isLoading === 'loading' && <p>Image is Loading...</p>}
            {error && <p>Photo loading failed.</p>}
            {dogPhotos.length === 0 && error === false && <p>Get your first dog by clicking the button!</p>}
            {isLoading === 'done' &&
                <div className="photoList">
                    {dogPhotos.map((photo, index) => {
                        return (
                            <DogPhoto key={index} url={photo} />
                        )
                    })}
                </div>
            }

        </div>
    )
}

export default DogGallery
