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
import api from "../../Services/api";
type Props = {
  getCurrentWeather: () => void;
};

const Home: React.FC<Props> = (props) => {
  const state = useSelector((state) => state);

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
  ); // const [currentWeather, setCurrentWeather] = useState<any>(undefined);

  const stateRef = useRef();
  stateRef.current = city;

  // useEffect(() => {
  //   const getCityWithGeolocalisation = () => {
  //     navigator.permissions.query({ name: "geolocation" }).then((result) => {
  //       if (result.state === "prompt" || result.state === "granted") {
  //         console.log(result.state, "prompt");
  //         navigator.geolocation.getCurrentPosition(async (location) => {
  //           const { latitude, longitude } = location.coords;
  //           await api
  //             .get(
  //               `locations/v1/cities/geoposition/search?apikey=HJEPQTZCWxhq8IqpXFNwM9vbUgHi1PHP&q=${latitude},${longitude}`
  //             )
  //             .then((response) => {
  //               const res = response.data;
  //               console.log(res, "response geo");
  //               setCity({ Key: res.Key, LocalizedName: res.LocalizedName });
  //             })
  //             .catch((error) => {
  //               console.log(error, "test failed");
  //             });
  //         });
  //       } else if (result.state === "denied") {
  //         console.log("denied");
  //         setCity({ Key: "215854", LocalizedName: "Tel Aviv" });
  //       }
  //     });
  //   };
  //   getCityWithGeolocalisation();
  // }, []);

  // useEffect(() => {
  //   if (city) {
  //     getCurrentWeather(city);
  //     getFiveDaysForecast(metric, city);
  //     // const currentWeather = jsonFile;
  //     // setCurrentWeather(currentWeather);

  //     console.log(metric, "metric in metric use effect");

  //     console.log(city, "city in in metric use effect");
  //   }
  // }, [metric, city]);

  // const [currentWeather, setCurrentWeather] = useState<any>(undefined);

  return (
    <div id='homeContainer'>
      <SearchBar />
      {/* {currentWeather && city ? (
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
      </div> */}
    </div>
  );
};

export default Home;
