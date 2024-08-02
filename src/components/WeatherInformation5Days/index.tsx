import { motion } from "framer-motion";

export default function WeatherInformation5Days({ data }: any) {
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
    <motion.div {...itemVariants} className="mt-6 mb-36">
      <div className="max-w-md mx-auto bg-slate-100 rounded-xl border shadow-lg p-8">
        <div className="flex justify-between">
          {next5Days.map((day: any, index: number) => (
            <div
              key={`day-weather-${index}`}
              className="flex flex-col items-center"
            >
              <img
                src={`http://openweathermap.org/img/wn/${data.list[index].weather[0].icon}.png`}
                className="mb-2"
              />
              <div>{data.list[index].main.temp}º</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
