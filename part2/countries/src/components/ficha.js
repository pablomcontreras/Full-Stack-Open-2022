import React from "react";
import { Clima } from "./clima";

export const Ficha = ({ country, searchResults, handleClick }) => {
  //console.log("Props de ficha(country)", country);
  //console.log("SearchResults", searchResults.length);

  if (searchResults.length > 10) {
    return "Too Many Matches.";
  } else if (searchResults.length < 1) {
    return "No matches found";
  } else if (searchResults.length >= 2 && searchResults.length <= 10) {
    //CUANDO HAY HASTA 10 RESULTADOS
    const listaResultados =  searchResults.map((e) => <li key={e}>{e} <button onClick={() => handleClick(e)}>Show</button></li>);
   
      return (
      <ul style={{ marginLeft: "10px" }}>{listaResultados}
      </ul>
    );
  } else if (searchResults.length === 1) {
    //CUANDO HAY SOLO UN RESULTADO
    const { languages } = country;
    const idiomas = Object.values(languages).map((i) => <li key={i}>{i}</li>);

    return (
      <>
        <div style={{ margin: "10px" }}>
          <h1>{country.name.common}</h1>
          <h4>Capital: {country.capital} </h4>
          <h4>Population: {country.population} </h4>
          <h3>Languages:</h3>
          <ul>{idiomas}</ul>
          <img alt="flag" src={country.flags.png}></img>
        </div>
        <div> <Clima country={country}/></div>
      </>
    );
  }
};
