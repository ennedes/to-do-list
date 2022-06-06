import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <Link to='/'>
                <button>Dashboard</button>
            </Link>
            {' '}        
            <Link to='/newtask'>
                <button>Add a new task</button>
            </Link>
            {' '}
            <Link to='/archive'>
                <button>Completed Tasks</button>
            </Link>
            
        </>
    );

};

export default Navbar;