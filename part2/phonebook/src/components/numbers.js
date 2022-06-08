import React from "react";


const Numbers = (persons) => {
    return (
      <div>
        <h2>Numbers</h2>
        <ul>
          {persons.persons.map((person) => (
            <li key={person.name}>
              {person.name}, {person.number}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Numbers;