import { useState, useEffect } from "react";
import Country from "./components/Country";

export default function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  function handleChange(e) {
    setSearch(e.target.value.toLowerCase());
  }

  let list = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search)
  );

  let display =
    list.length > 10 ? (
      <p>Too many matches, specify another filter</p>
    ) : list.length === 1 ? (
      list.map((country) => {
        return <Country key={country.ccn3} country={country} />;
      })
    ) : (
      list.map((country) => <Country key={country.ccn3} country={country} />)
    );

  return (
    <div>
      <label>
        find countries
        <input type="text" value={search} onChange={handleChange} />
      </label>
      <ul>{display}</ul>
    </div>
  );
}
