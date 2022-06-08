import axios from "axios";
import React from "react";


const AddForm = ({
    persons,
    nameContainer,
    nameSetter,
    phoneContainer,
    phoneSetter,
    buttonHandler,
  }) => {
    const addPerson = (e) => {
      e.preventDefault();
      const personObject = {
        name: nameContainer,
        number: phoneContainer,
      };
  
      if (persons.some((e) => e.name === personObject.name)) {
        alert(`El nombre ${personObject.name} ya se encuentra en la lista`);
        nameSetter("");
        phoneSetter('');
      } else {
        buttonHandler(persons.concat(personObject));
        axios
        .post('http://localhost:3001/persons/',personObject)
      }
      nameSetter("");
      phoneSetter("")
  
      //console.log("Ahora el array persons tiene", persons);
    };
    const handleInputChange = (e) => {
      nameSetter(e.target.value);
    };
    const handlePhoneChange = (e) => {
      phoneSetter(e.target.value);
    };
  
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={addPerson}>
          <div>
            Name: <input value={nameContainer} onChange={handleInputChange} />
          </div>
          <div>
            Number: <input value={phoneContainer} onChange={handlePhoneChange} />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      </>
    );
  };
  export default AddForm;