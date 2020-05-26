import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
    persons: [
      { name:"Max", age:28 },
      { name:"John", age:27 },
      { name:"Manu", age:24 }
    ]
  }

  personHandler = () => {
    this.setState({
      persons: [
        { name:"Maximo", age:28 },
        { name:"John", age:27 },
        { name:"Manu", age:30 }
      ]
    })
  }

  render(){
    return (
      <div className="App">
        <button onClick={this.personHandler}>Click to Change</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          // pass method as reference
          click={this.personHandler}>
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
