import axios from "axios";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Welcome from "./components/Welcome";
import WeatherInformation5Days from "./components/WeatherInformation5Days";
import WeatherInformation from "./components/WeatherInformation";
import Sun from "./components/Sun";

export default function App() {
  const [weather, setWeather] = useState({});
  const [weather5Days, setWeather5Days] = useState({});
  const inputRef = useRef<HTMLInputElement | null>(null);

  async function searchCity() {
    const city = inputRef.current ? inputRef.current.value : "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d37adfb5e86e9a179b48e4e92fadbf27&lang=pt_br&units=metric`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d37adfb5e86e9a179b48e4e92fadbf27&lang=pt_br&units=metric`;

    const result = await axios.get(url);
    const result5Days = await axios.get(url5Days);

    setWeather(result.data);
    setWeather5Days(result5Days.data);
  }

  const largura = window.innerWidth;

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: largura > 674 ? 2 : 1.5,
      delay: largura > 674 ? 1.5 : 3,
    },
    viewport: { once: true },
  };

  return (
    <div className="h-screen bg-gradient-to-t from-cyan-500 to-blue-500">
      <motion.div
        {...itemVariants}
        className="pt-32 md:pt-40 lg:pt-40 mx-4"
      >
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl">
          <div className="text-center mb-4">
            <div className="text-xl font-bold">Informações do Clima</div>
            <div className="text-gray-600">
              Digite o nome de uma cidade para mais informações.
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex flex-row items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                placeholder="Digite uma cidade"
                className="p-2 border rounded w-full"
              />
              <button
                onClick={searchCity}
                className="mt-0 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
        {Object.keys(weather).length !== 0 && (
          <WeatherInformation data={weather} />
        )}

        {Object.keys(weather5Days).length !== 0 && (
          <WeatherInformation5Days data={weather5Days} />
        )}
      </motion.div>
      <Sun />
      <Welcome />
    </div>
  );
}
