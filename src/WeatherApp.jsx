import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "india",
    feelsLike: 305.56,
    humidity: 81,
    temp: 301.21,
    tempMax: 301.21,
    tempMin: 301.21,
    weather: "overcast clouds",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App By Delta</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
  );
}
