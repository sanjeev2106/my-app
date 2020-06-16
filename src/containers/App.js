import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass'; // starts with small letter bcoz not using it as a component.
import Aux from '../hoc/Aux';
class App extends Component{

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
    //this.state = {} //we can initialize any state in constructor also. 
  }

  state = {
    persons: [
      { id:"p1", name:"Max", age:28 },
      { id:"p2", name:"John", age:27 },
      { id:"p3", name:"Manu", age:24 }
    ],
    showPerson: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state; // A updated state
  }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(){
      console.log('[App.js] shouldComponentUpdate');
      return true;
  }

  componentDidUpdate(){
      console.log('[App.js] componentDidUpdate');
  }

  togglePersonHandler = () =>{
      const doesShow = this.state.showPerson;     
      this.setState({ showPerson: !doesShow }); 
  }

  deletePersonHandler = (index) => {
    console.log('clicked'); 
      //const persons = this.state.persons;   // Here not creating a new persons array, just refering the same
      const persons = [...this.state.persons]; // Creating a new array of persons. This is the best practice.
      persons.splice(index, 1);
      this.setState({persons:persons});
  } 

  nameChangeHandler = (event, id) => {
    
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex] // creating new person object
    }

    // or we can do above as:
    //const person = Object.assign(this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({ persons: persons })
  }

  render(){
    console.log('[App.js] render');
    let persons = null;  

    if(this.state.showPerson){      
      persons = 
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />;
    }     

    return (    
        <Aux>
          <button onClick={()=> {
            this.setState({showCockpit: false}); 
          }}
          >
            Remove Cockpit</button>
          { this.state.showCockpit ? 
          <Cockpit 
          title={this.props.appTitle}
          showPerson={this.state.showPerson}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonHandler}/>
          : null }
         {persons}  
        </Aux>     
    )
  }
}

export default withClass(App, classes.App);
