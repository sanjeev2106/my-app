import React, {Component} from 'react';
import classes from './Person.css';


class Person extends Component {
    render(){
        console.log('[Person.js] rendering...');
        return (
        //<div className="Person" style={style} onClick={props.click}>
            <div className={classes.Person}>
                <p>I'm {this.props.name} and my age is {this.props.age}!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>        
        )
    }   
};


export default Person;