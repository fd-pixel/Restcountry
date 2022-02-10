import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   fetch("https://restcountries.com/v3.1/all")
  //     .then((response) => response.json())
  //     .then((response) => setCountries(response));
  // }, []);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.log({ error }));
  }, []);
  console.log(countries);

  return (
    <div className="App">
      <h2> React Dersleri</h2>

      {countries.map((country, index) => {
        return (
          <div style={{ border: "2px solid ", margin: "5px" }} key={index}>
            <h2>{country.name.common}</h2>
            <h2>{country.name.official}</h2>
            <h3>{country.capital}</h3>
            <p>{country.flag}</p>
          </div>
        );
      })}
    </div>
  );
}
