import Search from "./components/Search/Search";
import { useState } from "react";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${WEATHER_API_KEY}`,
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${WEATHER_API_KEY}`,
    );

    Promise.all([currentWeatherFetch, forecastFetch]).then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();
      setCurrentWeather({ city: searchData.label, ...weatherResponse });
      setForecastWeather({ city: searchData.label, ...forecastResponse });
    });
  };
  console.log(currentWeather);
  console.log(forecastWeather);

  return (
    <>
      <div className="bg-[#121113]"></div>
      <div className="mx-auto my-4 max-w-xl">
        <div className="flex flex-col items-center justify-center rounded-2xl bg-[#1A191B] p-6 shadow-lg">
          <Search onSearchChange={handleOnSearchChange} />
          {/* {currentWeather && <CurrentWeather data={currentWeather} />} */}
          {/* {forecastWeather && <ForecastWeather data={forecastWeather} />} */}
        </div>
        <h1 className="mt-4 flex justify-center bg-gradient-to-t from-[#262626] to-[#a3a3a3] bg-clip-text text-2xl font-semibold text-transparent">
          MétéoMojo
        </h1>
      </div>
    </>
  );
};

export default App;