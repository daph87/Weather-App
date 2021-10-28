/** @format */

import React, { useRef, useState } from "react";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { MDBInput } from "mdb-react-ui-kit";

import { getLocationsAutoComplete } from "../../../Services/getAutoComplete";
import { weatherActionCreators } from "../../../Redux";
import { CityData } from "../../../Types/CityDataType";
import ModalComponent from "../../Widgets/Modal/Modal";

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const { setCity } = bindActionCreators(weatherActionCreators, dispatch);

  const [cityInput, setCityInput] = useState<string>("");
  const [locations, setLocations] = useState<CityData[] | undefined>(undefined);
  
  const [showAutoComplete, setShowAutoComplete] = useState<boolean>(true);

  const onChangeCity = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setCityInput(target.value);
      const englishLetters = /^[A-Za-z]*$/

  if(!englishLetters.test(target.value)){
    setMessage("The search input can only contain english letters")
    handleShow()
  }else{
    doSearch(target.value);
  }
    
  };


  const chooseCity = (location: CityData) => {
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
      const locations = await getLocationsAutoComplete(cityInput)
      if(locations){
        setLocations(locations);
        setShowAutoComplete(true);
        setShow(false)
  
      }
      else{
        setShow(true)
        setMessage("We couldn't complete your search, please try again later")
      }

    }, 500)
  ).current;


  const renderAutoComplete = () => {
    if (!showAutoComplete || !locations) return false;
    let locationDiv = locations.map((location: CityData) => {
      return (
        <div
          className={`location${location}`}
          key={location.Key}
          onClick={() => chooseCity(location)}>
          {location.LocalizedName}, {location.Country?.LocalizedName}
        </div>
      );
    });
    return locationDiv;
  };

  const [show, setShow] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <ModalComponent message={message} show={show} handleClose={handleClose}/>

    <form
      id='locationSearch'
      onSubmit={() => {
        console.log("Hello World");
      }}>
      <MDBInput
        onChange={onChangeCity}
        value={cityInput}
        type='text'
        label='Search city'
      />
      <div>{renderAutoComplete()}</div>
    </form>
    </>
  );
};

export default SearchBar;
