/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { showUnit } from "../../Helpers/showUnit";
import { weatherActionCreators } from "../../Redux";
import { WeatherState } from "../../Redux/Actions/types/weather";
import jsonFile from "../../Redux/currentWeather.json";
import { RootState } from "../../Redux/Reducers/rootReducer";
import WeatherCard from "../Home/WeatherComponents/WeatherCard";

type Props = {
  city: any;
  onGoBack: any;
};
const OneFavoritesCity: React.FC<Props> = (props) => {
  const { city, onGoBack } = props;
  const [currentWeather, setCurrentWeather] = useState<any>(undefined);

  const dispatch = useDispatch();
  const { getCurrentWeather } = bindActionCreators(
    weatherActionCreators,
    dispatch
  );

  const metric = useSelector<RootState, WeatherState["metric"]>(
    (state) => state.weatherInfo.metric
  );

  useEffect(() => {
    // getCurrentWeather(city.Key);
    const currentWeather = jsonFile;
    setCurrentWeather(currentWeather);
    console.log(currentWeather, "current in one favorite");
  }, []);

  return (
    <div>
      {currentWeather ? (
        <WeatherCard
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
