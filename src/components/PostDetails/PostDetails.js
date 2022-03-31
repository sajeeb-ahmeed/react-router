import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const { PostId } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const url = (`https://jsonplaceholder.typicode.com/posts/${PostId}`);
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))

    }, [PostId])

    return (
        <div className='m-5 p-3 bg-info rounded'>
            <h4 className='mb-3 bg-light p-4 text-uppercase'>{posts.id} : {posts.title}</h4>
            <h6 className='p-2'>{posts.body}</h6>
        </div>
    );
};

export default PostDetails;