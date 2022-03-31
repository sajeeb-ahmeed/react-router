import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h1>This is post facebook had : {posts.length} </h1>

            <div className='my-5 '>
                {
                    posts.map(post => <Link className='btn btn-outline-dark m-3' key={post.id} to={`/posts/${post.id}`}>{post.id} </Link>)
                }
            </div>
            <Outlet></Outlet>

        </div>
    );
};

export default Posts;