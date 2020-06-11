import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => { 
        return <Person 
        click = {() => props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}// each element should have unique id, after adding this Warning: Each child in a list should have a unique "key" prop will got removed.
        changed={(event)=> props.changed(event, person.id)} />
      });

export default persons;