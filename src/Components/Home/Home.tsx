/** @format */

import React, { useEffect, useState } from "react";
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
type Props = {
  getCurrentWeather: () => void;
};

const Home: React.FC<Props> = (props) => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();
  const { getCurrentWeather, getFiveDaysWeather } = bindActionCreators(
    weatherActionCreators,
    dispatch
  );

  const city = useSelector<RootState, WeatherState["city"]>(
    (state) => state.weatherInfo.city
  );

  const metric = useSelector<RootState, WeatherState["metric"]>(
    (state) => state.weatherInfo.metric
  );

  useEffect(() => {
    const currentWeather = jsonFile;
    setCurrentWeather(currentWeather);
    // if (city) console.log(city, "city in home");
    // console.log("json", currentWeather);
    // const getWeather = async () => {
    //   await getCurrentWeather();
    // };
    // getWeather();
  }, [city]);

  const [currentWeather, setCurrentWeather] = useState<any>(undefined);

  return (
    <div>
      <SearchBar />
      {currentWeather ? (
        <>
          <WeatherCard
            iconPhrase={currentWeather.WeatherText}
            iconSource={currentWeather.WeatherIcon}
            className='currentWeatherCard'
            cardKey={`currentWeather${city.Key}`}
            cityName={city.LocalizedName}
            temperature={showUnit(metric, currentWeather)}
          />
          <FavoriteButton city={city} />
        </>
      ) : null}
    </div>
  );
};

export default Home;
