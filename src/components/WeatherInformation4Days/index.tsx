import { motion } from "framer-motion";
import moment from "moment";
import "moment/locale/pt-br";

export default function WeatherInformation4Days({ data }: any) {
  moment.locale("pt-br");
  let dailyForecast: any = {};

  for (let forecast of data.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }

  const dailyForecastValues = [];
  const keys = Object.keys(dailyForecast);

  for (let i = 1; i < 5; i++) {
    if (i < keys.length) {
      dailyForecastValues.push(dailyForecast[keys[i]]);
    }
  }

  const next4Days = dailyForecastValues;

  console.log(next4Days)

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 1,
      delay: 0,
    },
    viewport: { once: true },
  };

  function capitalizeFirstLetter(word: string): string {
    if (word.length === 0) return word;

    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  function convertDate(date: any) {
    return new Date(date * 1000).toLocaleDateString('pt-BR', { weekday: 'long' })
  }

  return (
    <motion.div
      {...itemVariants}
      className="mt-6 z-10 grid grid-cols-4 gap-4 max-w-md mx-auto"
    >
      {next4Days.map((day: any, index: number) => (
        <div
          key={`day-container-${index}`}
          className="relative col-span-2 w-full rounded-xl border shadow-xl"
        >
          <div
            className={`absolute rounded-xl top-0 left-0 w-full h-full z-0 bg-cover bg-center ${day.weather[0].main !== 'Clear' ? 'filter grayscale' : ''}`}
            style={{
              backgroundImage: `
                linear-gradient(
                  to top, 
                  ${day.weather[0].main === "Clear"
                  ? "rgba(6, 182, 212, 0.8), rgba(59, 130, 246, 0.8)"
                  : "rgba(148, 163, 184, 0.8), rgba(100, 116, 139, 0.7)"
                }),
                url('/img/background.jpg')`,
            }}
          />
          <div className="relative text-center py-4 z-10">
            <div
              className="flex items-center mx-auto p-2 grid grid-cols-4"
              key={`day-weather-${index}`}
            >
              <div className="font-bold text-xl col-span-4 lg:text-2xl text-center">
                {capitalizeFirstLetter(convertDate(day.dt))}
              </div>
              <div className="col-span-4 flex justify-center">
                <img
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon === '01n' ? '01d' : day.weather[0].icon
                    }.png`}
                  className="ml-2"
                  alt="Weather icon"
                />
              </div>
              <div className="flex justify-center col-span-4 mb-4">
                <div className="text-6xl md:text-6xl lg:text-6xl font-bold">
                  {day.main.temp.toFixed(0)}º
                </div>
              </div>
              <div className="col-span-4">
                <div className="text-muted-foreground">
                  {capitalizeFirstLetter(day.weather[0].description)}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
