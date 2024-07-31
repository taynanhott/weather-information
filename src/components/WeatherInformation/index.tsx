export default function WeatherInformation({ data }: any) {
  console.log(data);

  return (
    <div>
      <h2>Renderizado</h2>
      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
      />
    </div>
  );
}
