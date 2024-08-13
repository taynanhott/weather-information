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
      <div className="max-w-md mx-auto bg-slate-100 rounded-xl border shadow-xl p-6 w-full">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LocateIcon className="w-6 h-6 text-primary" />
              <h2 className="text-lg font-bold">
                {data.name}, {data.sys.country}
              </h2>
            </div>
            <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center">
              <img
                className="text-primary-foreground scale-150"
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon === "01n" ? "01d" : data.weather[0].icon
                  }.png`}
              />
            </div>
          </div>

          <div className="flex items-center mx-auto gap-4">
            <div
              className="flex flex-col items-start"
              title="Temperatura Atual"
            >
              <div className="text-8xl md:text-9xl lg:text-9xl font-bold">
                {data.main.temp.toFixed(0)}°
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2" title="Umidade do Ar">
                <CloudFogIcon className="w-5 h-5 text-muted-foreground" />
                <div className="text-xl text-muted-foreground">
                  {data.main.humidity}%
                </div>
              </div>
              <div className="flex items-center gap-2" title="Sensação Térmica">
                <ThermometerIcon className="w-5 h-5 text-muted-foreground" />
                <div className="text-xl text-muted-foreground">
                  {data.main.feels_like.toFixed(1)}ºC
                </div>
              </div>

              <div className="text-lg text-muted-foreground">Atualmente</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CloudFogIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M16 17H7" />
      <path d="M17 21H9" />
    </svg>
  );
}

function LocateIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function ThermometerIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </svg>
  );
}
