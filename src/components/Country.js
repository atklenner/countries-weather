export default function Country({ country }) {
  let langs = [];
  for (let language in country.languages) {
    langs.push(country.languages[language]);
  }
  return (
    <li>
      <h1>{country.name.common}</h1>
      <p>{country.capital}</p>
      <p>{country.area}</p>
      <h2>languages</h2>
      <ul>
        {langs.map((lang) => (
          <p key={lang}>{lang}</p>
        ))}
      </ul>
      <img src={country.flags.png} alt={`The flag of ${country.name.common}`} />
    </li>
  );
}
