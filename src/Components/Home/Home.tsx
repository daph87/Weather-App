/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { weatherActionCreators } from "../../Redux/index";
import jsonFile from "../../Redux/currentWeather.json";
import SearchBar from "./SearchBar/SearchBar";
import WeatherCard from "./WeatherComponents/WeatherCard";
import { RootState } from "../../Redux/Reducers/rootReducer";
import { WeatherState } from "../../Redux/Actions/types/Weather";
import { getWeatherIconUrl } from "../../Helpers/getWeatherIconUrl";
import { showUnit } from "../../Helpers/showUnit";
import FavoriteButton from "./FavoriteIcon/FavoriteButton";
type Props = {
  getCurrentWeather: () => void;
};

const Home = (props: Props) => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();
  const { getCurrentWeather, setWeather } = bindActionCreators(
    weatherActionCreators,
    dispatch
  );

  const city = useSelector<RootState, WeatherState["city"]>(
    (state) => state.weatherInfo.city
  );

  const currentWeather = useSelector<RootState, WeatherState["currentWeather"]>(
    (state) => state.weatherInfo.currentWeather
  );

  const metric = useSelector<RootState, WeatherState["metric"]>(
    (state) => state.weatherInfo.metric
  );

  const weather = useSelector<RootState, WeatherState["weather"]>(
    (state) => state.weatherInfo.weather
  );

  useEffect(() => {
    const currentWeatherJson = jsonFile;
    getCurrentWeather(currentWeatherJson);
    console.log(currentWeather, "currentWeather");
    if (city && currentWeather) {
      const weatherCity = {
        currentWeather: {
          id: city.key,
          cityName: city.LocalizedName,
          iconActive: false,
          temperature: {
            Imperial: {
              Unit: currentWeather.Temperature.Imperial.Unit,
              UnitType: currentWeather.Temperature.Imperial.UnitType,
              Value: currentWeather.Temperature.Imperial.Value,
            },
            Metric: {
              Unit: currentWeather.Metric.Unit,
              UnitType: currentWeather.Metric.Unit,
              Value: currentWeather.Metric.Value,
            },
          },
          WeatherText: currentWeather.WeatherText,
          WeatherIcon: currentWeather.WeatherIcon,
        },
      };
      setWeather(weatherCity);
    }

    // console.log("json", currentWeather);
    // const getWeather = async () => {
    //   await getCurrentWeather();
    // };
    // getWeather();
  }, [city]);

  // const [currentWeather, setCurrentWeather] = useState<any>(undefined);

  return (
    <div>
      <SearchBar />
      {currentWeather ? (
        <>
          <WeatherCard
            className='currentWeatherCard'
            cardKey={`currentWeather${city.Key}`}
            cityName={city.LocalizedName}
            temperature={showUnit(metric, currentWeather)}
          />
          <FavoriteButton />
        </>
      ) : null}
    </div>
  );
};

export default Home;
