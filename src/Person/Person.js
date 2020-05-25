import React from 'react';

const person = (propes) => {
    return (
        <div>
            <p>I'm {propes.name} and my age is {propes.age}!</p>
            <p>{propes.children}</p>
        </div>
        
    )
};

export default person;