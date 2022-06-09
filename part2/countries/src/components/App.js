import React, { useEffect, useState } from "react";
import axios from "axios";
import Busqueda from "./busqueda";
import { Ficha } from "./ficha";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [country, setCountry] = useState();

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  //console.log('countries', countries)

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const doSearch = (e) => {
    e.preventDefault();
    let result = countries.filter((x) =>
      x.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCountry(result[0]);
    setSearchResults(result.map((e) => `${e.name.common}`));
  };

  const handleClick = (e) => {
    let result = countries.filter((x) => x.name.common.includes(e));
    setCountry(result[0]);
    setSearchResults(result);
    setSearchTerm(result[0].name.common);
  };

  return (
    <>
      <Busqueda
        handleSearchInput={handleSearchInput}
        searchTerm={searchTerm}
        doSearch={doSearch}
      />
      <Ficha
        country={country}
        searchResults={searchResults}
        handleClick={handleClick}
      />
    </>
  );
};

export default App;
