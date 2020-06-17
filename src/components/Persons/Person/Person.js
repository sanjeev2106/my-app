import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';


class Person extends Component {

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef(); 
    }

    static contextType = AuthContext;

    componentDidMount(){
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

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
            <Aux>  
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Login!</p>}                
                {/* {this.props.isAuth ? <p>Authenticated!</p> : <p>Please Login!</p>} */}
                <p key="i1">I'm {this.props.name} and my age is {this.props.age}!</p>
                <p key="i2">{this.props.children}</p>
                <input 
                    key="i3" 
                    //ref={(inputEl) => {this.inputElement = inputEl}} // Get last input focused or
                    ref={this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </Aux>
      
        );
    }   
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number, 
    changed: PropTypes.func
}


export default withClass(Person, classes.Person);