/** @format */

import React, { useRef, useState } from "react";
import debounce from "lodash.debounce";
import { getLocationsAutoComplete } from "../../../Services/getAutoComplete";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { weatherActionCreators } from "../../../Redux";

const SearchBar: React.FC = () => {
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
    console.log(location, "city");
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
      console.log(cityInput, "cityInput");
      await getLocationsAutoComplete().then((response) => {
        setLocations(response);
        console.log(response, "response");
      });
      console.log(locations, "haaaaaaaaaaaaaaaaaaaaaaaaaaa");
      setShowAutoComplete(true);
    }, 500)
  ).current;

  // const renderAutoComplete = () => {
  //   console.log(locations, "loc");
  //   if (!showAutoComplete || !locations) return false;
  //   let locationDiv = locations.locationsJson.map((location: any) => {
  //     return (
  //       <div
  //         className={`location${location}`}
  //         key={location.Key}
  //         onClick={() => chooseCity(location)}>
  //         {location.LocalizedName}, {location.Country.LocalizedName}
  //       </div>
  //     );
  //   });
  //   return locationDiv;
  // };
  console.log(locations, "locations before render");

  return (
    <form
      id='locationSearch'
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
      {/* <div>{renderAutoComplete()}</div> */}
    </form>
  );
};

export default SearchBar;
