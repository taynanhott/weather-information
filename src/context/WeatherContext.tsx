import React, { createContext, useState, useContext, ReactNode } from "react";

interface WeatherContextType {
  weatherCondition: string;
  setWeatherCondition: (condition: string) => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [weatherCondition, setWeatherCondition] = useState<string>("Clear");

  return (
    <WeatherContext.Provider value={{ weatherCondition, setWeatherCondition }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = (): WeatherContextType => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
};
