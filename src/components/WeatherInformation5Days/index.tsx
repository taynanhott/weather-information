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

  const next5Days = Object.values(dailyForecast).slice(1, 6);

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
    <motion.div {...itemVariants} className="mt-6 z-10">
      <div className="max-w-md mx-auto bg-slate-100 rounded-xl border shadow-lg p-8">
        <div className="grid grid-cols-10 gap-10">
          {next5Days.map((day: any, index: number) => (
            <div
              key={`day-weather-${index}`}
              className="col-span-5 sm:col-span-2 flex flex-col items-center"
            >
              <div className="font-bold">
                {moment.unix(day.dt).locale("pt-br").format("dddd")}
              </div>
              <img
                src={`http://openweathermap.org/img/wn/${
                  day.weather[0].icon === "01n" ? "01d" : day.weather[0].icon
                }.png`}
                className="mb-2"
                alt="Weather icon"
              />
              <div className="text-lg font-bold">
                {day.main.temp.toFixed(0)}º
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
