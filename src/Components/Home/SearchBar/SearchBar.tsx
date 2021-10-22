/** @format */

import React, { useRef, useState } from "react";
import debounce from "lodash.debounce";
import { getLocations } from "../../../Services/getLocations";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { weatherActionCreators } from "../../../Redux";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { setCity } = bindActionCreators(weatherActionCreators, dispatch);

  const [cityInput, setCityInput] = useState<string>("");
  const [locations, setLocations] = useState<any>(undefined);
  const [showAutoComplete, setShowAutoComplete] = useState<boolean>(true);

  const onChangeCity = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setCityInput(target.value);
    doSearch(target.value);
  };

  const chooseCity = (location: any) => {
    setShowAutoComplete(false);
    setCity(location);
  };

  const doSearch = useRef(
    // using debounce to delay request to backend
    debounce(async (cityInput) => {
      // backend request to do search
      if (!cityInput) {
        setShowAutoComplete(false);
        return false;
      }
      const loc = await getLocations();
      setLocations(loc);
      setShowAutoComplete(true);
    }, 500)
  ).current;

  const renderAutoComplete = () => {
    if (!showAutoComplete || !locations) return false;
    let locationDiv = locations.locationsJson.map((location: any) => {
      return (
        <div
          className='location'
          key={location.Key}
          onClick={() => chooseCity(location)}>
          {location.LocalizedName}, {location.Country.LocalizedName}
        </div>
      );
    });
    return locationDiv;
  };

  return (
    <form
      className='LocationSearch'
      onSubmit={() => {
        console.log("Hello World");
      }}>
      <input
        onChange={onChangeCity}
        value={cityInput}
        type='text'
        className='form-control'
        placeholder='Search city'
      />
      <div>{renderAutoComplete()}</div>
    </form>
  );
};

export default SearchBar;
