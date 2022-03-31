import React, { useEffect, useState } from 'react';
import SingleFriend from '../singleFriend/SingleFriend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return (
        <div>
            <h1>Hello friends how are you ?</h1>
            <h4>Parle kisu tk dis {friends.length}</h4>
            {
                friends.map(friend => <SingleFriend key={friend.id} friend={friend}></SingleFriend>)
            }
        </div>
    );
};

export default Friends;