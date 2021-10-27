/** @format */

import { WeatherTypes } from "../Enums/weatherTypes";
import { REHYDRATE } from "redux-persist";
import { WeatherState, ActionWeather } from "../Actions/types/weather";

const initialState: WeatherState = {
  currentWeather: undefined,
  // currentWeatherError: undefined,
  city: undefined,
  unit: "Celsius",
  // weather: undefined,
  // fiveDaysForecastError: undefined,
  fiveDaysForecast: undefined,
};
export default (state = initialState, action: ActionWeather): WeatherState => {
  switch (action.type) {
    case WeatherTypes.CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: action.payload,
      };
    // case WeatherTypes.CURRENT_WEATHER_ERROR:
    //   return {
    //     ...state,
    //     currentWeatherError: action.payload,
    //   };

    case WeatherTypes.SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    // case WeatherTypes.SET_WEATHER:
    //   return {
    //     ...state,
    //     weather: action.payload,
    //   };
    case WeatherTypes.SET_UNIT_CONVERSION:
      return {
        ...state,
        unit: action.payload,
      };

    case WeatherTypes.FIVE_DAYS_FORECAST:
      return {
        ...state,
        fiveDaysForecast: action.payload,
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
