import React, { useState } from 'react';
//import logo from './logo.svg';
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

const App = propes =>{

  const [personState, setPersonState] = useState({
    persons: [
      { name:"Max", age:28 },
      { name:"John", age:27 },
      { name:"Manu", age:24 }
    ]//,
    // otherState : "some other value" 
  });

  // we can have as many useSatate  
  const [otherState, setOtherState] = useState('some other value')

  //console.log(personState);
  console.log(personState, otherState);

  const personHandler = () => {
    setPersonState({
      persons: [
        { name:"Maximo", age:28 },
        { name:"John", age:27 },
        { name:"Manu", age:30 }
      ]
      //,otherState : personState.otherState
    });
  };

// here when we click on button personState object i.e.
// persons: [
//   { name:"Max", age:28 },
//   { name:"John", age:27 },
//   { name:"Manu", age:24 }
// ],
// otherState : "some other value" +
// will replaced by setPersonState i.e.
// persons: [
//   { name:"Maximo", age:28 },
//   { name:"John", age:27 },
//   { name:"Manu", age:30 }
// ]
// means it does't merge them to still be there otherState we need to add :
// otherState : personState.otherState

    return (
      <div className="App">
        <button onClick={personHandler}>Click to Change</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}></Person>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}></Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}></Person>
      </div>
    )
  }


export default App;


