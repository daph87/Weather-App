/** @format */
import "./home.scss";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { weatherActionCreators } from "../../Redux/index";
import jsonFile from "../../Redux/currentWeather.json";
import SearchBar from "./SearchBar/SearchBar";
import WeatherCard from "./WeatherComponents/WeatherCard";
import { RootState } from "../../Redux/Reducers/rootReducer";
import { WeatherState } from "../../Redux/Actions/types/weather";
import { getWeatherIconUrl } from "../../Helpers/getWeatherIconUrl";
import { showUnit } from "../../Helpers/showUnit";
import FavoriteButton from "./FavoriteIcon/FavoriteButton";
import FiveDaysForecast from "./FiveDaysForecast/FiveDaysForecast";
import { getCityWithGeolocalisation } from "../../Services/getGeolocalisation";
import { CityData } from "../../Types/CityDataType";
type Props = {
  getCurrentWeather: () => void;
};

const Home: React.FC<Props> = (props) => {

  const dispatch = useDispatch();
  const { getCurrentWeather, getFiveDaysForecast, setCity } =
    bindActionCreators(weatherActionCreators, dispatch);

  const city = useSelector<RootState, WeatherState["city"]>(
    (state) => state.weatherInfo.city
  );

  const fiveDaysForecast = useSelector<
    RootState,
    WeatherState["fiveDaysForecast"]
  >((state) => state.weatherInfo.fiveDaysForecast);

  const currentWeather = useSelector<RootState, WeatherState["currentWeather"]>(
    (state) => state.weatherInfo.currentWeather
  );

  const metric = useSelector<RootState, WeatherState["metric"]>(
    (state) => state.weatherInfo.metric
  ); 

  const stateRef: { current: CityData | undefined; } = useRef();
  stateRef.current = city;


  useEffect(() => {
    if(city){
      console.log(city, "city in in metric use effect");

      getCurrentWeather(city);
      getFiveDaysForecast(metric, city);
    }
    else{
      console.log(city,'city in geoloc')
      getCityWithGeolocalisation(setCity);

    }
  }, [metric, city]);


  return (
    <div id='homeContainer'>
      <SearchBar />
      {currentWeather && city ? (
        <>
          <div id='currentWeatherContainer'>
            <WeatherCard
              iconPhrase={currentWeather.WeatherText}
              iconSource={currentWeather.WeatherIcon}
              className='currentWeatherCard'
              cardKey={`currentWeather${city.Key}`}
              cityName={city.LocalizedName}
              temperature={showUnit(metric, currentWeather)}
            />
            <FavoriteButton city={city} />
          </div>
        </>
      ) : null}
      <div id='fiveDaysForecastContainer'>
        {fiveDaysForecast && city ? (
          <FiveDaysForecast
            metric={metric}
            fiveDaysForecast={fiveDaysForecast}
            city={city}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Home;
