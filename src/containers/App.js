import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';

class App extends Component{
  state = {
    persons: [
      { id:"p1", name:"Max", age:28 },
      { id:"p2", name:"John", age:27 },
      { id:"p3", name:"Manu", age:24 }
    ],
    showPerson: false
  }

  togglePersonHandler = () =>{
      const doesShow = this.state.showPerson;
      console.log(!doesShow);
      this.setState({ showPerson: !doesShow }); 
  }

  deletePersonHandler = (index) => {
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

    let persons = null;

    let btnClass = '';

    if(this.state.showPerson){      
      persons = (
        <div>
          {/* The map function used to map a js object of any type into an array of JSX element.  */}
          {this.state.persons.map((person, index) => { 
              return <Person 
              click = {() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}// each element should have unique id, after adding this Warning: Each child in a list should have a unique "key" prop will got removed.
              changed={(event)=> this.nameChangeHandler(event, person.id)} />
            })}           
        </div>
      )     

      btnClass= classes.Red;

      const assignedClasses = [];

      if(this.state.persons.length <=2){
        assignedClasses.push(classes.red); // classes = [red]
      }
      if(this.state.persons.length <=1){
        assignedClasses.push(classes.bold); //classes = [red, bold] and classes.join('' ) will be 'red bold'
      }
      
      var myClass = assignedClasses.join(' ');      
    }
    return (    
        <div className={classes.App}>
          <h1>Hi I'm a React App</h1>
          <p className={myClass}>Wow Its working!</p>      
          <button className={btnClass} onClick={this.togglePersonHandler}>Click to Change</button>        
          {persons}  
        </div>     
    )
  }
}

export default App;
