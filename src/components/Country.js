import { useState } from "react";

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
      <p>{country.capital}</p>
      <p>{country.area}</p>
      <h2>languages</h2>
      <ul>
        {langs.map((lang) => (
          <li key={lang}>
            <p>{lang}</p>
          </li>
        ))}
      </ul>
      <img src={country.flags.png} alt={`The flag of ${country.name.common}`} />
    </li>
  ) : (
    <li>
      <p>{country.name.common}</p>
      <button onClick={() => setToggle(!toggle)}>show</button>
    </li>
  );
}
