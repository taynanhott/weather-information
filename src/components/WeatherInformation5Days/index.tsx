export default function WeatherInformation5Days({ data }: any) {
  console.log(data);
  
  let dailyForecast = {};

  for (let forecast of data.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }

  const next5Days = Object.values(dailyForecast).slice(1, 6);

  return (
    <div>
      <h2>Renderizado</h2>
      <img
        src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`}
      />
    </div>
  );
}
