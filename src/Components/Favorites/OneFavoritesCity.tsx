/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";

import { showUnit } from "../../Helpers/showUnit";
import { weatherActionCreators } from "../../Redux";
import { WeatherState } from "../../Redux/Actions/types/weather";
import { RootState } from "../../Redux/Reducers/rootReducer";
import { CityData } from "../../Types/CityDataType";
import WeatherCard from "../Home/WeatherComponents/WeatherCard";
import Loader from "../Widgets/Loader/Loader";

type Props = {
  city: CityData;
};

const OneFavoritesCity: React.FC<Props> = (props) => {
  const { city } = props;

  const [currentWeather, setCurrentWeather] = useState<any>(undefined);
  const history = useHistory();

  const unit = useSelector<RootState, WeatherState["unit"]>(
    (state) => state.weatherInfo.unit
  );

  const dispatch = useDispatch();
  const { getCurrentWeather, setCity } = bindActionCreators(
    weatherActionCreators,
    dispatch
  );

  useEffect(() => {
    const getFavCurrentWeather = async () => {
      const favCurrentWeater = await getCurrentWeather(city);
      setCurrentWeather(favCurrentWeater);
    };
    getFavCurrentWeather();
    // const currentWeather = jsonFile;
    // setCurrentWeather(currentWeather);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onGoBack = () => {
    setCity(city);
    history.push("/home");
  };

  return (
    <div key={`favWeatherContainer${city.Key}`}>
      {currentWeather ? (
        <WeatherCard
          onClick={onGoBack}
          iconPhrase={currentWeather.WeatherText}
          iconSource={currentWeather.WeatherIcon}
          className='currentWeatherCard'
          cardKey={`currentWeather${city.Key}`}
          cityName={city.LocalizedName}
          temperature={showUnit(unit, currentWeather)}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default OneFavoritesCity;
