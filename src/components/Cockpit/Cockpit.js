import React, {useEffect, useRef} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    //we can't do this here because it calls befor the rendering of dom so this will give 
    //an error. Best place is useEffect because this will calls when dom rendered.
    //toggleBtnRef.current.click(); 

    // // for every change setTimeout() will call at 1 second delay.
    // useEffect(() => {
    //   console.log('[cockpit.js] useeffect')
    //   // Http Request..
    //   setTimeout(()=>{
    //     alert('Saved data to cloud!');
    //   }, 1000);
    // })

     // To restrict when person component changes then setTimeout() will call at 1 sec. delay.
     // We can add as more condition also (like persons)
     useEffect(() => {
      console.log('[cockpit.js] useEffect')
      // Http Request..
      // setTimeout(()=>{
      //   //alert('Saved data to cloud!');
      //   toggleBtnRef.current.click();
      // }, 1000);
      toggleBtnRef.current.click();
      return () =>{
         console.log('[Cockpit.js] cleanup work in useEffect');
      }
    },[]); 

    // can have multiple useEffect statements.
    useEffect(() => {
      console.log('[cockpit.js] 2nd useEffect')
      return () =>{
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
     }
    })

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPerson){
      btnClass= classes.Red; 
    }    

    if(props.personsLength <=2){
        assignedClasses.push(classes.red); // classes = [red]
      }
      if(props.personsLength <=1){
        assignedClasses.push(classes.bold); //classes = [red, bold] and classes.join('' ) will be 'red bold'
      }
      
      //var myClass = assignedClasses.join(' ');  

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Wow Its working!</p>      
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Click to Toggle</button>        
            <AuthContext.Consumer>
              {context => <button onClick={context.login}>Login</button> }
            </AuthContext.Consumer>
        </div>
    );
};

export default React.memo(cockpit);

