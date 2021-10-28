/** @format */
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { weatherActionCreators } from "../../Redux/index";
import SearchBar from "./SearchBar/SearchBar";
import WeatherCard from "./WeatherComponents/WeatherCard";
import { RootState } from "../../Redux/Reducers/rootReducer";
import { WeatherState } from "../../Redux/Actions/types/weather";
import { showUnit } from "../../Helpers/showUnit";
import FavoriteButton from "./FavoriteIcon/FavoriteButton";
import FiveDaysForecast from "./FiveDaysForecast/FiveDaysForecast";
import { getCityWithGeolocalisation } from "../../Services/getGeolocalisation";
import { CityData } from "../../Types/CityDataType";
import Loader from "../Widgets/Loader/Loader";
import ModalComponent from "../Widgets/Modal/Modal";
import "./home.scss";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { getCurrentWeather, getFiveDaysForecast, setCity, closeModal } =
    bindActionCreators(weatherActionCreators, dispatch);

  const city = useSelector<RootState, WeatherState["city"]>(
    (state) => state.weatherInfo.city
  );
  const currentWeather = useSelector<RootState, WeatherState["currentWeather"]>(
    (state) => state.weatherInfo.currentWeather
  );
  const showModal = useSelector<RootState, WeatherState["showModal"]>(
    (state) => state.weatherInfo.showModal
  );
  const modalMessageCurrent = useSelector<
    RootState,
    WeatherState["modalMessageCurrent"]
  >((state) => state.weatherInfo.modalMessageCurrent);
  const currentWeatherError = useSelector<
    RootState,
    WeatherState["currentWeatherError"]
  >((state) => state.weatherInfo.currentWeatherError);
  const fiveDaysForecastError = useSelector<
    RootState,
    WeatherState["fiveDaysForecastError"]
  >((state) => state.weatherInfo.fiveDaysForecastError);
  const modalMessageForecast = useSelector<
    RootState,
    WeatherState["modalMessageForecast"]
  >((state) => state.weatherInfo.modalMessageForecast);
  const unit = useSelector<RootState, WeatherState["unit"]>(
    (state) => state.weatherInfo.unit
  );

  const stateRef: { current: CityData | undefined } = useRef();
  stateRef.current = city;

  useEffect(() => {
    if (city) {
      getCurrentWeather(city);
      getFiveDaysForecast(unit, city);
    } else {
      getCityWithGeolocalisation(setCity);
    }
  }, [city, unit]);

  const renderCurrentWeather = () => {
    if (currentWeather && city) {
      return (
        <div id='currentWeatherContainer'>
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
      );
    } else if (showModal) {
      const modalMessage = `Your request hasn't been processed for the following reason(s): 
      Current Weather - ${modalMessageForecast}, Forecast - ${modalMessageCurrent}`;
      return (
        <ModalComponent
          message={modalMessage}
          show={showModal}
          closeModal={closeModal}
        />
      );
    } else if (!currentWeatherError && city) {
      return <Loader />;
    }
  };

  const renderForecastWeather = () => {
    if (city) {
      return <FiveDaysForecast unit={unit} />;
    } else if (!fiveDaysForecastError && city) {
      return <Loader />;
    }
  };
  return (
    <>
      <div id='homeContainer'>
        <SearchBar />
        <div>{renderCurrentWeather()}</div>
        <div id='fiveDaysForecastContainer'>{renderForecastWeather()}</div>
      </div>
    </>
  );
};

export default Home;
