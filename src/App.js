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
    ],
    showPerson: false
  }

  togglePersonHandler = () =>{
      const doesShow = this.state.showPerson;
      console.log(!doesShow);
      this.setState({ showPerson: !doesShow }); 
  }

  // personHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       { name:newName, age:28 },
  //       { name:"John", age:27 },
  //       { name:"Manu", age:30 }
  //     ]
  //   })
  // }

  deletePersonHandler = (index) => {
      //const persons = this.state.persons;
      const persons = [...this.state.persons];
      persons.splice(index, 1);
      this.setState({persons:persons});
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
// inline styling
    const myStyle = {
      backgroundColor: '#eee',
      font: 'inherit',
      border: '1px solid blur',
      borderRadius: '25px',
      padding: '10px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPerson){      
      persons = (
        <div>
          {this.state.persons.map((person, index) => { 
              return <Person 
              click = {() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}/>
            })}           
        </div>
      )
    }
    return (
      <div className="App">        
        <button style={myStyle} onClick={this.togglePersonHandler}>Click to Change</button>        
        {persons}  
      </div>
    )
  }
}

export default App;
