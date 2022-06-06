import React from 'react';
import { Link } from 'react-router-dom';
import { CheckOutlined, CalendarOutlined, EditOutlined } from '@ant-design/icons';
import './style.css';

const Navbar = () => {

    return (
        <>
            <div className='navbar'>
                <div className='navbar-links'>
                    <Link to='/'>
                        <button><CalendarOutlined /> Home</button>
                    </Link>
                    {' '}        
                    <Link to='/newtask'>
                        <button><EditOutlined /> Add task</button>
                    </Link>
                    {' '}
                    <Link to='/archive'>
                        <button><CheckOutlined /> Tasks done</button>
                    </Link>
                </div>
            </div>
            
        </>
    );

};

export default Navbar;