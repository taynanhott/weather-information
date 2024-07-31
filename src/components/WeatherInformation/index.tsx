import { motion } from "framer-motion";

export default function WeatherInformation({ data }: any) {
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
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
        />
      </div>
    </motion.div>
  );
}
