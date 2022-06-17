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
    setSearch(e.target.value.toLowerCase);
  }

  return (
    <div>
      <label>
        find countries
        <input type="text" value={search} onChange={handleChange} />
      </label>
      <ul></ul>
    </div>
  );
}
