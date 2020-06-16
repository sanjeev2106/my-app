import React, {Component, Fragment} from 'react';
//import classes from './Person.css';
import Aux from '../../../hoc/Aux'


class Person extends Component {
    render(){
        console.log('[Person.js] rendering...');
        // As know, we can return only a single element means we have a root element and others are inside that.
        // In this case div is root element. But React provide a way where we don't neet to wrap in to root element
        // but nee to return these as a array with unique element key. 
        // return (
        // //<div className="Person" style={style} onClick={props.click}>
        //     <div className={classes.Person}>
        //         <p>I'm {this.props.name} and my age is {this.props.age}!</p>
        //         <p>{this.props.children}</p>
        //         <input type="text" onChange={this.props.changed} value={this.props.name}/>
        //     </div>        
        // )

        return (
            // React has build in Aux component that is Fragment so we don't need create this mannualy.
            <Fragment>  
            <p key="i1">I'm {this.props.name} and my age is {this.props.age}!</p>
            <p key="i2">{this.props.children}</p>
            <input key="i3" type="text" onChange={this.props.changed} value={this.props.name}/>
            </Fragment>
      
        );
    }   
};


export default Person;