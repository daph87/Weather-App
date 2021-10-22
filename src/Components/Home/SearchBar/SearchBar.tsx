/** @format */

import React, { useEffect, useState } from "react";
import debounce from "lodash.debounce";
// import { getLocations } from "../../../Services/getLocations";
import jsonFile from "../../../Redux/autocomplete.json";
import _ from "lodash";

const SearchBar = () => {
  const [city, setCity] = useState<string>("");
  const [locations, setLocations] = useState<any>(undefined);

  useEffect(() => {
    _.debounce(function () {
      //debounce the fetch() while searching a city
      getLocations();
    }, 500);
    // debouncedFetchData(city, (res: any) => {
    //   setResults(res);
    //   console.log(results, "Test results");
    // });
  });

  //   const debouncedFetchData = debounce((city, cb) => {
  //     getLocations(city, cb);
  //   }, 500);

  const getLocations = async () => {
    const locations_cb = await jsonFile;
    const locations = _.map(locations_cb, (location) => {
      return {
        id: location.Key,
        name: location.LocalizedName,
        country: location.Country.LocalizedName,
      };
    });
    setLocations(locations);
    console.log(locations, "debounce");
  };

  const onChangeCity = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setCity(target.value);
  };
  return (
    <form
      className='LocationSearch'
      onSubmit={() => {
        console.log("Hello World");
      }}>
      <input
        onChange={onChangeCity}
        value={city}
        type='text'
        className='form-control'
        placeholder='Search by city name...'
      />
      {/* <div className='autocomplete'>
    {this.renderAutoComplete()}
  </div> */}
    </form>
  );
};

export default SearchBar;
