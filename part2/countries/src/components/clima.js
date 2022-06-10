import React, {useEffect, useState} from "react";
import axios from 'axios';

export const Clima = ({country}) => {
//console.log('country object',country);
    const [weather,setWeather] = useState({});

    const capital = country.capital;
    //console.log('Capital tiene', capital);
    const apiKey = process.env.REACT_APP_API_KEY;


     useEffect(() => {
          
           axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`)
             .then(response => {
               const apiResponse = response.data;
               //console.log('apiResponse:', apiResponse)
               setWeather(apiResponse)
             }).catch(error => {
               console.log(error);
             });
       }, [capital]);
    
//console.log('objeto Weather tiene:' , weather)

if(Object.keys(weather).length === 0){
    //console.log('no hay datos de clima para este lugar')
return <h2>No weather data for this location, try another one</h2>;
}
else{
    return (<div>
        <h1> Weather in {country.capital}</h1>
        <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt={weather.weather[0].description}/>
        <h1> {weather.main.temp} &#8451;</h1>
        <h2> {weather.weather[0].description}</h2>
 </div>

  )}
}
