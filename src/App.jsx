import { WEATHER_API_KEY, WEATHER_API_URL } from "../API/api";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
// import FavCity from "./components/FavCity/FavCity";
import Search from "./components/Search/Search";
import { useEffect, useState } from "react";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  // const [favCities, setFavCities] = useState([]);

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

  // useEffect(() => {
  //   const storedFavCities = localStorage.getItem("favCities");
  //   if (storedFavCities) {
  //     setFavCities(JSON.parse(storedFavCities));
  //   }
  // }, []);

  // const handleAddToFavorites = (city) => {
  //   if (favCities.includes(city)) {
  //     console.log("Cette ville est déjà dans les favoris.");
  //   } else if (favCities.length >= 4) {
  //     console.log("Vous ne pouvez pas ajouter plus de 5 villes en favoris.");
  //   } else {
  //     const newFavCities = [...favCities, city];
  //     setFavCities(newFavCities);
  //     localStorage.setItem("favCities", JSON.stringify(newFavCities));
  //     console.log("ville ajoutée!");
  //   }
  // };

  // const handleRemoveFromFavorites = (city) => {
  //   const newFavCities = favCities.filter((favCity) => favCity !== city);
  //   setFavCities(newFavCities);
  //   localStorage.setItem("favCities", JSON.stringify(newFavCities));
  // };
  // console.log(localStorage);

  return (
    <>
      <header>
        <h1 className="mt-4 flex justify-center bg-gradient-to-t from-[#262626] to-[#a3a3a3] bg-clip-text text-2xl font-semibold text-transparent">
          MétéoMojo
        </h1>
      </header>
      <main className="">
        <div className="bg-[#121113]"></div>
        <div className=" my-4 flex flex-col justify-center space-y-7 md:flex-row md:space-x-7 md:space-y-0">
          <div className=" mx-4 flex flex-col items-center justify-center rounded-2xl bg-[#1A191B] p-6 shadow-lg md:mx-36 md:p-10 lg:p-12">
            <Search onSearchChange={handleOnSearchChange} />
            {currentWeather && (
              <CurrentWeather
                data={currentWeather}
                // addFavorite={handleAddToFavorites}
              />
            )}
            {/* {forecastWeather && <ForecastWeather data={forecastWeather} />} */}
          </div>
          {/* <FavCity
          favCities={favCities}
          removeFavCities={handleRemoveFromFavorites}
        /> */}
        </div>
      </main>
    </>
  );
};

export default App;
