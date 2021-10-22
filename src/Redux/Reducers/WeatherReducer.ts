/** @format */

import { WeatherTypes } from "../Enums/WeatherTypes";
import { REHYDRATE } from "redux-persist";
import { WeatherState, Action } from "../Actions/types/CurrentWeather";

const initialState: WeatherState = {
  currentWeather: undefined,
  currentWeatherError: undefined,
  city: undefined,
  metric: "Celsius",
};
export default (state = initialState, action: Action): WeatherState => {
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
    case WeatherTypes.SET_METRIC_CONVERSION:
      return {
        ...state,
        metric: action.payload,
      };
    default:
      return state;
  }
};
