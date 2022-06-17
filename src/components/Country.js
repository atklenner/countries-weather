export default function Country({ country }) {
  console.log(country);
  return (
    <li>
      <h1>{country.name.common}</h1>
      <p>{country.capital[0]}</p>
      <p>{country.area}</p>
      <h2>languages</h2>
      <ul></ul>
      <p>{country.flag}</p>
    </li>
  );
}
