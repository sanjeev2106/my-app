import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Person name="Sanjeev" age="26" />
//         <Person name="Shubham" age="27"> My hobbie is Trouble Shooting</Person>
//         <Person name="Rohan" age="23" />
//       </header>
      
//     </div>
//   );
// }

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
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    )
  }
}

export default App;
