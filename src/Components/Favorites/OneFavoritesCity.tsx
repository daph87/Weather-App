/** @format */

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { showUnit } from "../../Helpers/showUnit";
import { weatherActionCreators } from "../../Redux";
import { setCity } from "../../Redux/Actions/actions-creators/weatherAction";
import { ActionWeather, WeatherState } from "../../Redux/Actions/types/weather";
import jsonFile from "../../Redux/currentWeather.json";
import { RootState } from "../../Redux/Reducers/rootReducer";
import { CityData } from "../../Types/CityDataType";
import { CurrentWeatherData } from "../../Types/CurrentWeatherDataType";
import WeatherCard from "../Home/WeatherComponents/WeatherCard";

type Props = {
  city: CityData;
  
};
const OneFavoritesCity: React.FC<Props> = (props) => {
  const { city } = props;

  const [currentWeather, setCurrentWeather] = useState<any>(undefined);
  const history = useHistory();

  const dispatch = useDispatch();
  const { getCurrentWeather, setCity } = bindActionCreators(
    weatherActionCreators,
    dispatch
  );

  const metric = useSelector<RootState, WeatherState["metric"]>(
    (state) => state.weatherInfo.metric
  );

  useEffect(() => {
    const getFavCurrentWeather = async()=>{
      const favCurrentWeater = await getCurrentWeather(city);
    setCurrentWeather(favCurrentWeater)
    }
    getFavCurrentWeather()
    // const currentWeather = jsonFile;
    // setCurrentWeather(currentWeather);
  }, []);
 
  const onGoBack = () =>{
    setCity(city)
    history.push("/home")
  }

  return (
    <div>
      {currentWeather ? (
        <WeatherCard
        onClick={onGoBack}
          iconPhrase={currentWeather.WeatherText}
          iconSource={currentWeather.WeatherIcon}
          className='currentWeatherCard'
          cardKey={`currentWeather${city.Key}`}
          cityName={city.LocalizedName}
          temperature={showUnit(metric, currentWeather)}
        />
      ) : null}
    </div>
  );
};

export default OneFavoritesCity;
