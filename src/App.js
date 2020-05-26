import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css'

class App extends Component{
  state = {
    persons: [
      { name:"Max", age:28 },
      { name:"John", age:27 },
      { name:"Manu", age:24 }
    ]
  }

  personHandler = (newName) => {
    this.setState({
      persons: [
        { name:newName, age:28 },
        { name:"John", age:27 },
        { name:"Manu", age:30 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name:'Max', age:28 },
        { name: event.target.value, age:27 },
        { name:"Manu", age:30 }
      ]
    })
  }

  render(){
    return (
      <div className="App">
        {/* <button onClick={this.personHandler.bind(this, 'Maximilion')}>Click to Change</button> */}
        {/* or */}
        <button onClick={() => this.personHandler('Maximilion!!')}>Click to Change</button> 
        {/* but 2nd one is not recommended, try to use 1st one */}
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          // pass method as reference
          click={this.personHandler.bind(this, 'Max!')}
          changed = {this.nameChangeHandler}>My Hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>
        </Person>
      </div>
    )
  }
}

export default App;
