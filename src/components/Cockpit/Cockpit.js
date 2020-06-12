import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';

    if(props.showPerson){
      btnClass= classes.Red; 
    }    

    if(props.persons.length <=2){
        assignedClasses.push(classes.red); // classes = [red]
      }
      if(props.persons.length <=1){
        assignedClasses.push(classes.bold); //classes = [red, bold] and classes.join('' ) will be 'red bold'
      }
      
      //var myClass = assignedClasses.join(' ');  

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Wow Its working!</p>      
            <button className={btnClass} onClick={props.clicked}>Click to Toggle</button>        
        </div>
    );
};

export default cockpit;

