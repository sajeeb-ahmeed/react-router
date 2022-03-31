import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CoustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>

            <h1>React Router Header</h1>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <CustomLink className=' Link  btn-outline-dark' to="/home">Home</CustomLink>
                </Nav.Item>
                <Nav.Item>
                    <CustomLink className=' Link btn-outline-dark' to="/friends">Friends</CustomLink>
                </Nav.Item>
                <Nav.Item>
                    <CustomLink className=' Link btn-outline-dark' to="/Posts">Posts</CustomLink>
                </Nav.Item>
                <Nav.Item>
                    <CustomLink className='Link btn-outline-dark' to="/about" >
                        About
                    </CustomLink>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Header;