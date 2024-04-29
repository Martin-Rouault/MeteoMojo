import PropTypes from "prop-types";

const CurrentWeather = ({ data }) => {
  return (
    <>
      <p className="flex items-center gap-2 text-4xl font-semibold text-[#EEEEF0]">
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
        {data.name} | {data.sys.country}
      </p>
      <img
        src={`mojoIcons/${data.weather[0].icon}.svg`}
        alt="weather"
        className="max-w-80"
      />
      <p className="text-8xl font-semibold text-[#EEEEF0]">
        {data.main.temp.toFixed()}°
      </p>
      <p className="text-3xl text-[#B5B2BC]">{data.weather[0].description}</p>
      <div className=" mt-12 flex max-w-fit gap-20 bg-[#1A191B] px-12 py-3">
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
