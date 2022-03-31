import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleFriend = (props) => {
    const { name, username } = props.friend;
    const navigate = useNavigate()
    const showFriendsDetail = () => {
        const path = navigate(`/friends/${username}`);
        return path;
    }
    return (
        <div>
            <h1>Name : {name}</h1>
            <button onClick={showFriendsDetail}>{username}</button>
        </div>
    );
};

export default SingleFriend;