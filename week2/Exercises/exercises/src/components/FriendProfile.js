import React from 'react'

function FriendProfile({ friend }) {
    return (
        <ul>
            <li>Name: {friend.name.first} {friend.name.first} </li>
            <li>Address:  {friend.location.street.name} {friend.location.street.number} {friend.location.city} </li>
            <li>Country: {friend.location.country} </li>
            <li>Email: {friend.email} </li>
            <li>Phone: {friend.phone} </li>
        </ul>
    )
}

export default FriendProfile
