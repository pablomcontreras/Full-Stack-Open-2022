import React, { useState } from "react";

const AddForm = ({ newName, handler, buttonHandler }) => {
  const addPerson = (e) => {
    e.preventDefault();
    console.log("Clickeado boton", e.target);
    buttonHandler(newName);
  };
  const handleInputChange = (e) => {
    handler(e.target.value);
  };
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleInputChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const Numbers = (props) => {
  console.log("Numbers props", props);
  return (
    <div>
      <h2>Numbers</h2>
      {props.persons[0].name}
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  return (
    <>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <AddForm
        names={newName}
        handler={setNewName}
        buttonHandler={setPersons}
      />
      <Numbers persons={persons} />
    </>
  );
};

export default App;
