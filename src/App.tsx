import axios from "axios";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

import Sun from "./components/Sun";
import Moon from "./components/Moon";
import Welcome from "./components/Welcome";
import WeatherInformation from "./components/WeatherInformation";
import WeatherInformation4Days from "./components/WeatherInformation4Days";
import Bird from "./components/Bird";

import moment from "moment";
import "moment/locale/pt-br";
import { useWeather } from "./context/WeatherContext";
import Cloud from "./components/Cloud";
import Rain from "./components/Rain";
import { AlertDestructive } from "./components/ui/alert";

export default function App() {
  const { weatherCondition, setWeatherCondition } = useWeather();
  const [request, setRequest] = useState<boolean>(true);
  const [weather, setWeather] = useState({});
  const [weather4Days, setWeather4Days] = useState({});
  const [time, setTime] = useState(true);
  const [background, setBackground] = useState("from-cyan-500 to-blue-500");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const currentTime = moment();
    const start = moment("06:00", "HH:mm");
    const end = moment("18:00", "HH:mm");

    if (currentTime.isBetween(start, end, undefined, "[)")) {
      setTime(true);
      setBackground("linear-gradient(to top, rgba(6, 182, 212, 0.5), rgba(59, 130, 246, 0.5))");
    } else {
      setTime(false);
      setBackground("linear-gradient(to top, rgba(51, 65, 85, 0.8), rgba(15, 23, 42, 0.6))");
    }
  }, [time]);

  async function searchCity() {
    const city = inputRef.current ? inputRef.current.value : "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d37adfb5e86e9a179b48e4e92fadbf27&lang=pt_br&units=metric`;
    const url4Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d37adfb5e86e9a179b48e4e92fadbf27&lang=pt_br&units=metric`;

    try {
      const result = await axios.get(url);
      const result4Days = await axios.get(url4Days);

      setWeatherCondition(result.data.weather[0].main);
      setWeather(result.data);
      setWeather4Days(result4Days.data);
      setRequest(true);
    } catch {
      setRequest(false);
    }
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

  const weatherComponents = (weather: string) => {
    switch (weather) {
      case "Clear":
        return <>{time ? <Sun /> : <Moon />}</>;
      case "Clouds":
        return (
          <>
            <Cloud />
            {time ? <Sun /> : <Moon />}
          </>
        );
      case "Rain":
        return (
          <>
            <Rain />
          </>
        );
      default:
        return <>{time ? <Sun /> : <Moon />}</>;
    }
  };

  return (
    <div className="relative min-h-screen pb-24">
      <div
        className="absolute top-0 left-0 w-full h-full z-0 bg-cover bg-center"
        style={{ backgroundImage: time ? `url('/img/background.jpg')` : `url('/img/background-night.jpg')` }}
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{
          background: weatherCondition === "Clear"
            ? background
            : "linear-gradient(to top, rgba(148, 163, 184, 0.8), rgba(100, 116, 139, 0.6))",
          opacity: 1,
        }}
        transition={{ duration: 1 }}
      />
      <div className="relative">
        {weatherComponents(weatherCondition)}
        <motion.div
          {...itemVariants}
          className="pt-40 mx-4 md:mx-8 lg:mx-16 xl:mx-32 z-30"
        >
          <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-xl">
            <div className="text-center mb-4">
              <div className="text-xl font-bold">Informações do Clima</div>
              <div className="text-gray-600">
                Digite o nome de uma cidade para mais informações.
              </div>
            </div>
            <div className="grid gap-4">
              <div className="flex flex-col md:flex-row items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Digite uma cidade"
                  className="p-2 border rounded w-full z-40"
                  onKeyDown={(e) => e.key === 'Enter' && searchCity()}
                />
                <button
                  onClick={searchCity}
                  className="mt-2 md:mt-0 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 z-40"
                >
                  Buscar
                </button>
              </div>
            </div>
          </div>
          {request ? (
            <>
              {Object.keys(weather).length !== 0 && (
                <WeatherInformation data={weather} />
              )}
              {Object.keys(weather4Days).length !== 0 && (
                <WeatherInformation4Days data={weather4Days} />
              )}
            </>
          ) : (
            <div className="max-w-md mx-auto bg-white rounded-xl border shadow-lg mt-6 p-6 w-full">
              <AlertDestructive />
            </div>)}
        </motion.div>
      </div>
      {time ? <Bird /> : <></>}
      <Welcome />
    </div>

  );
}
