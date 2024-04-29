import PropTypes from "prop-types";

const CurrentWeather = ({ data, addFavorite }) => {
  return (
    <>
      <p className="mb-6 flex items-center gap-2 text-2xl font-semibold text-[#EEEEF0] lg:text-4xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-8 w-8"
        >
          <path
            fillRule="evenodd"
            d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            clipRule="evenodd"
          />
        </svg>
        {data.name} | {data.sys.country}{" "}
      </p>
      {/* <button onClick={() => addFavorite(data.name)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      </button> */}
      <img
        src={`mojoIcons/${data.weather[0].icon}.svg`}
        alt="weather"
        className="max-w-32 lg:max-w-48"
      />
      <p className="text-6xl font-semibold text-[#EEEEF0] lg:text-8xl">
        {data.main.temp.toFixed()}°
      </p>
      <p className="text-xl text-[#B5B2BC] lg:text-3xl">
        {data.weather[0].description}
      </p>
      <div className=" mt-12 flex space-x-12">
        <div className="flex-col items-center">
          <img src="mojoIcons/wind.svg" alt="" className="h-14 w-14" />
          <p className="flex flex-col items-center text-lg font-semibold text-[#EEEEF0]">
            {data.main.feels_like.toFixed()}°
            <span className="text-[#B5B2BC]">Ressenti</span>
          </p>
        </div>
        <div>
          <img
            src="mojoIcons/raindrop-measure.svg"
            alt=""
            className="h-14 w-14"
          />
          <p className="flex flex-col items-center text-lg font-semibold text-[#EEEEF0]">
            {data.main.humidity}%
            <span className="text-[#B5B2BC]">Humidité</span>
          </p>
        </div>
        <div>
          <img
            src="mojoIcons/thermometer-celsius.svg"
            alt=""
            className="h-14 w-14"
          />
          <p className="flex flex-col items-center text-lg font-semibold text-[#EEEEF0]">
            {data.wind.speed.toFixed()} kmH
            <span className="text-[#B5B2BC]">Vent</span>
          </p>
        </div>
      </div>
    </>
  );
};

CurrentWeather.propTypes = {
  data: PropTypes.object,
};

export default CurrentWeather;
