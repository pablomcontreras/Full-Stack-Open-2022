import React, { useState } from "react";

const Busqueda = ({ persons }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };
  const doSearch = (e) => {
    e.preventDefault();
    if (persons.filter((e) => e.name === searchTerm)) {
      return console.log("Hay coincidencia: ", e.name);
    } else {
      return console.log("No hay coincidencia para el termino: ", e.name);
    }
  };

  return (
    <>
      <div>debug de SearchTerm: {searchTerm} </div>
      <h2>Busqueda</h2>
      <form onSubmit={doSearch}>
        <div>
          Name: <input value={searchTerm} onChange={handleSearchInput} />
        </div>
        <div>
          <button type="submit">Search</button>
        </div>
        <div style={{ marginTop: "10px" }}> Resultados: {searchResults}</div>
      </form>
    </>
  );
};
export default Busqueda;
