/** @format */

import { WeatherTypes } from "../Enums/weatherTypes";
import { REHYDRATE } from "redux-persist";
import { WeatherState, ActionWeather } from "../Actions/types/weather";

const initialState: WeatherState = {
  currentWeather: undefined,
  currentWeatherError: undefined,
  city: undefined,
  metric: "Celsius",
  weather: undefined,
  fiveDaysForecastError: undefined,
  fiveDaysForecast: undefined,
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

    case WeatherTypes.FIVE_DAYS_FORECAST:
      return {
        ...state,
        fiveDaysForecast: action.payload,
      };
    case WeatherTypes.FIVE_DAYS_FORECAST_ERROR:
      return {
        ...state,
        fiveDaysForecastError: action.payload,
      };
    // case WeatherTypes.SET_FAVORITE_ICON_ACTIVE:
    //   return {
    //     ...state,
    //     weather: action.payload,
    //   };
    default:
      return state;
  }
};
