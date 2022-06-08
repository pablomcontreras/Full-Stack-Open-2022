import React, { useEffect, useState } from "react";
import AddForm from "./addForm";
import Busqueda from "./busqueda";
import Numbers from "./numbers";
import axios from "axios";
const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  
  useEffect (() => {
    axios
    .get("http://localhost:3001/persons")
    .then((response) => {
      setPersons(response.data);
    })
  }, []);

  return (
    <div style={{ margin: "10px" }}>
      <Busqueda persons={persons} />
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
