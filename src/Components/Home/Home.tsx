/** @format */
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { Toast } from "react-bootstrap";

import { weatherActionCreators } from "../../Redux/index";
// import jsonFile from "../../Redux/currentWeather.json";
import SearchBar from "./SearchBar/SearchBar";
import WeatherCard from "./WeatherComponents/WeatherCard";
import { RootState } from "../../Redux/Reducers/rootReducer";
import { WeatherState } from "../../Redux/Actions/types/weather";
import { showUnit } from "../../Helpers/showUnit";
import FavoriteButton from "./FavoriteIcon/FavoriteButton";
import FiveDaysForecast from "./FiveDaysForecast/FiveDaysForecast";
import { getCityWithGeolocalisation } from "../../Services/getGeolocalisation";
import { CityData } from "../../Types/CityDataType";
import "./home.scss";
import Loader from "../Loader/Loader";

// type Props = {
//   getCurrentWeather: () => void;
// };

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { getCurrentWeather, getFiveDaysForecast, setCity } =
    bindActionCreators(weatherActionCreators, dispatch);

  const city = useSelector<RootState, WeatherState["city"]>(
    (state) => state.weatherInfo.city
  );
  // const fiveDaysForecast = useSelector<
  //   RootState,
  //   WeatherState["fiveDaysForecast"]
  // >((state) => state.weatherInfo.fiveDaysForecast);

  const currentWeather = useSelector<RootState, WeatherState["currentWeather"]>(
    (state) => state.weatherInfo.currentWeather
  );

  const unit = useSelector<RootState, WeatherState["unit"]>(
    (state) => state.weatherInfo.unit
  );

  const stateRef: { current: CityData | undefined } = useRef();
  stateRef.current = city;

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (city) {
  //       console.log(city, "city in in unit use effect");
  //       getCurrentWeather(city);
  //     } else {
  //       console.log(city, "city in geoloc");
  //       getCityWithGeolocalisation(setCity);
  //     }
  //   }, 10000);
  // }, [city]);

  return (
    <div id='homeContainer'>
      <SearchBar />
      {/* {currentWeather && city ? ( */}
      {/* <> */}
      <Toast className='Dark'>
        <Toast.Header>
          <img src='holder.js/20x20?text=%20' className='rounded me-2' alt='' />
          <strong className='me-auto'>Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>

      {/* <div id='currentWeatherContainer'>
            <WeatherCard
              iconPhrase={currentWeather.WeatherText}
              iconSource={currentWeather.WeatherIcon}
              className='currentWeatherCard'
              cardKey={`currentWeather${city.Key}`}
              cityName={city.LocalizedName}
              temperature={showUnit(unit, currentWeather)}
            />
            <FavoriteButton city={city} />
          </div>
        </>
      ) : (
        <Loader />
      )} */}
      {/* <div id='fiveDaysForecastContainer'>
        {city ? (
          <FiveDaysForecast
            getFiveDaysForecast={getFiveDaysForecast}
            unit={unit}
            // fiveDaysForecast={fiveDaysForecast}
            city={city}
          />
        ) : (
          <Loader />
        )}
      </div> */}
    </div>
  );
};

export default Home;
