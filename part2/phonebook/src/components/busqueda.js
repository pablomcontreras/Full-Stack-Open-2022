import React, { useState} from "react";

const Busqueda = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };
  const doSearch = (e) => {
    e.preventDefault();
    let result = props.persons.filter((e) => e.name === searchTerm);
    //console.log('La variable Results tiene: ', result);
    setSearchResults(result.map((e) => `${e.name}: ${e.number}`));
  };


  return (
    <>
      <h2>Search</h2>
      <form onSubmit={doSearch}>
        <div>
          Name:{" "}
          <input
            value={searchTerm}
            onChange={(event) => handleSearchInput(event)}
          />
        </div>
        <div>
          <button type="submit">Search</button>
        </div>
        <div style={{ marginTop: "10px" }}>
          {" "}
          Results:{" "} 
          <hr></hr>
          {searchResults.length < 1
            ? "No coincidence"
            : searchResults}{" "}
        </div>
      </form>
    </>
  );
};
export default Busqueda;
