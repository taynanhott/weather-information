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
  console.log(next5Days);

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
    <motion.div {...itemVariants} className="mt-6">
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl">
        <img
          src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`}
        />
      </div>
    </motion.div>
  );
}
