import React, { useState } from 'react';

const Card = (id) => {

    const [title, setTitle] = useState('');

    const handleComplete = () => {
        localStorage.removeItem('title'+id);
    };
    return (
        <>
            <p>---------------------------------------</p>
            <input type='checkbox' onChange={() => handleComplete()}/> <h2>{localStorage.getItem('title'+id)}</h2>
            <p>---------------------------------------</p>
        </>

    );
};

export default Card;