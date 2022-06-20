import { useState } from "react";
import Weather from "./Weather";

export default function Country({ country }) {
  const [toggle, setToggle] = useState(false);
  let langs = [];
  for (let language in country.languages) {
    langs.push(country.languages[language]);
  }
  return toggle ? (
    <li>
      <h1>{country.name.common}</h1>
      <button onClick={() => setToggle(!toggle)}>hide</button>
      <p>capital: {country.capital}</p>
      <p>area: {country.area}</p>
      <h2>languages</h2>
      <ul>
        {langs.map((lang) => (
          <li key={lang}>
            <p>{lang}</p>
          </li>
        ))}
      </ul>
      <img src={country.flags.png} alt={`The flag of ${country.name.common}`} />
      <Weather
        city={country.name.common}
        lat={country.capitalInfo.latlng[0]}
        lon={country.capitalInfo.latlng[1]}
      />
    </li>
  ) : (
    <li>
      <p>{country.name.common}</p>
      <button onClick={() => setToggle(!toggle)}>show</button>
    </li>
  );
}
