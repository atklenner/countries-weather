import { useEffect, useState } from "react";

export default function Weather({ city, lat, lon }) {
  const [temp, setTemp] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTemp((data.main.temp - 273).toFixed(2));
        setWind(data.wind.speed);
        setIcon(data.weather[0].icon);
      });
  }, [lat, lon]);
  return (
    <div>
      <h2>{`weather in ${city}`}</h2>
      <p>temperature: {temp}</p>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather logo"
      />
      <p>wind: {wind}</p>
    </div>
  );
}
