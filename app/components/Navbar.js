import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <Link to='/'>
                <button>Home</button>
            </Link>
            {' '}        
            <Link to='/newtask'>
                <button>Add task</button>
            </Link>
            {' '}
            <Link to='/archive'>
                <button>Tasks done</button>
            </Link>
            
        </>
    );

};

export default Navbar;