/** @format */

import { WeatherTypes } from "../Enums/WeatherTypes";
import { REHYDRATE } from "redux-persist";
import { WeatherState, ActionWeather } from "../Actions/types/Weather";

const initialState: WeatherState = {
  currentWeather: undefined,
  currentWeatherError: undefined,
  city: undefined,
  metric: "Celsius",
  weather: undefined,
};
export default (state = initialState, action: ActionWeather): WeatherState => {
  switch (action.type) {
    case WeatherTypes.CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: action.payload,
      };
    case WeatherTypes.CURRENT_WEATHER_ERROR:
      return {
        ...state,
        currentWeatherError: action.payload,
      };

    case WeatherTypes.SET_CITY_KEY:
      return {
        ...state,
        city: action.payload,
      };
    case WeatherTypes.SET_WEATHER:
      return {
        ...state,
        weather: action.payload,
      };
    case WeatherTypes.SET_METRIC_CONVERSION:
      return {
        ...state,
        metric: action.payload,
      };
    default:
      return state;
  }
};
