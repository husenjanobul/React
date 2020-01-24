import React, { useState } from 'react'
import Button from './Button'
import FriendProfile from './FriendProfile'


function Friend() {
    const [friend, setFriend] = useState({})
    const [isLoading, setLoading] = useState(' ')
    const [error, setError] = useState(false)

    const getFriend = () => {
        setLoading('Loading')
        fetch('https://www.randomuser.me/api?results=1')
            .then(res => res.json())
            .then(data => {
                setFriend(data.results[0])
                setLoading('done')
            })
            .catch(err => {
                console.log(err)
                setError(true)
                setLoading(' ')
            })
    }

    return (
        <div>
            <h2>Friend Info</h2>
            <Button getData={getFriend} />
            {isLoading === 'Loading' && <p>Loading...</p>}
            {isLoading === 'done' && <FriendProfile friend={friend} />}
            {error && <p>Something went wrong.</p>}
        </div>
    )
}

export default Friend
