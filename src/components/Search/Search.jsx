import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { GEO_API_URL, geoApiOptions } from "/API/api.js";
import PropTypes from "prop-types";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?&namePrefix=${inputValue}&limit=10&sort=-population`,
      geoApiOptions,
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "250px",
      backgroundColor: "#1A191B",
      borderRadius: "10px",
      color: "#EEEEF0",
      marginBottom: "15px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#1A191B" : "#121113",
      color: state.isFocused ? "#EEEEF0" : "#B5B2BC",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#1A191B",
      borderRadius: "10px",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#EEEEF0",
    }),
    input: (provided) => ({
      ...provided,
      color: "#EEEEF0",
    }),
  };

  return (
    <AsyncPaginate
      placeholder="Rechercher une ville"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      styles={customStyles}
    />
  );
};

Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default Search;
