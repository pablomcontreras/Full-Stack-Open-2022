import React, { useState } from "react";
import AddForm from './addForm';
import Busqueda from "./busqueda";
import Numbers from "./numbers";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  return (
    <div style={{ margin: "10px" }}>
      <div>debug: {newName}</div>
      <Busqueda persons={persons}/>
      <AddForm
        nameContainer={newName}
        phoneContainer={newPhone}
        phoneSetter={setNewPhone}
        nameSetter={setNewName}
        buttonHandler={setPersons}
        persons={persons}
      />
      <Numbers persons={persons} />
    </div>
  );
};

export default App;
