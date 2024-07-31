import "./App.css";
import axios from "axios";
import { useState, useRef } from "react";
import WeatherInformation from "./components/WeatherInformation";
import WeatherInformation5Days from "./components/WeatherInformation5Days";

export default function App() {
  const [weather, setWeather] = useState({});
  const [weather5Days, setWeather5Days] = useState({});
  const inputRef = useRef(null);

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "d37adfb5e86e9a179b48e4e92fadbf27";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const result = await axios.get(url);
    const result5Days = await axios.get(url5Days);

    setWeather(result.data);
    setWeather5Days(result5Days.data);
  }

  return (
    <div>
      <h1>Teste Title</h1>

      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button onClick={searchCity}>Buscar</button>

      {Object.keys(weather).length !== 0 && (
        <WeatherInformation data={weather} />
      )}
      {Object.keys(weather5Days).length !== 0 && (
        <WeatherInformation5Days data={weather5Days} />
      )}
    </div>
  );
}
