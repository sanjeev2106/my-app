import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{

    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps', props);
    //     return state;
    // }

    // componentWillReceiveProps(props){
    //     console.log('[Persons.js] componentWillReceiveProps');
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     // So the situation where we check all props of the given component for changes 
    //     // then we should use PureComponents which has already implemeted with shouldComponentUpdate
    //     // with all props check. 
    //     if(nextProps.persons !== this.props.persons || 
    //         nextProps.changed !== this.props.changed || 
    //         nextProps.clicked !== this.props.clicked){
    //         return true;
    //     }else{
    //         return false;
    //     }
    //     //return true; // return boolean based on some condition; 
    // }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate'); 
        return {message: 'snapshot!'};       
    }

    // componentWillUpdate(){
        
    // }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    // we can do cleaning up job here
    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }

    render(){
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => { 
            return (
                <Person 
                click = {() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}// each element should have unique id, after adding this Warning: Each child in a list should have a unique "key" prop will got removed.
                changed={(event)=> this.props.changed(event, person.id)} />
            );
        });
        };
    }
    
export default Persons;