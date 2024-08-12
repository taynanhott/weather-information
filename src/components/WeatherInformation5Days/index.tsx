import { motion } from "framer-motion";
import moment from "moment";
import "moment/locale/pt-br";

export default function WeatherInformation5Days({ data }: any) {
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

  const next5Days = dailyForecastValues;

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 1,
      delay: 0,
    },
    viewport: { once: true },
  };

  return (

    <motion.div {...itemVariants} className="mt-6 z-10 grid grid-cols-4 gap-4 max-w-md mx-auto">
      {next5Days.map((day: any, index: number) => (
        <div className={`max-w-md mx-auto ${index < 2 ? 'bg-slate-300' : 'bg-slate-400'} rounded-xl border shadow-lg col-span-2 w-full`}>
          <div className="text-center py-4">
            <div
              key={`day-weather-${index}`}
              className="flex flex-col items-center p-2"
            >
              <div className="flex items-center mb-2">
                <div className="font-bold text-2xl lg:text-2xl text-center">
                  {moment.unix(day.dt).locale("pt-br").format("dddd")}
                </div>
                <img
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon === "01n" ? "01d" : day.weather[0].icon}.png`}
                  className="ml-2"
                  alt="Weather icon"
                />
              </div>
              <div className="text-5xl lg:text-6xl font-bold text-center">
                {day.main.temp.toFixed(0)}º
              </div>
            </div>
          </div>
        </div>
      ))
      }
    </motion.div>

  );
}
