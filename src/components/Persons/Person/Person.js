import React from 'react';
import styled from 'styled-components'
import classes from './Person.css'

// const StyledDiv = styled.div`  
//   width: 60%;
//   margin: 20px auto;
//   border: 1px solid #eef;
//   padding: 16px;
//   text-align: center;
//   box-shadow: 0 2px 3px #ccc; 

//   @media (min-width: 500px) {
//     width:'450px';
// }
// `;

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