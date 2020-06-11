import React from 'react';
import classes from './Person.css';


const person = (props) => {
    return (
        //<div className="Person" style={style} onClick={props.click}>
        <div className={classes.Person}>
            <p>I'm {props.name} and my age is {props.age}!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
        
    )
};


export default person;