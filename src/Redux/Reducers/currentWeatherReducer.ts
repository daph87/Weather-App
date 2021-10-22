/** @format */

import { CurrentWeatherTypes } from "../Enums/CurrentWeatherTypes";
import { REHYDRATE } from "redux-persist";
import { CurrentWeatherState, Action } from "../Actions/types/CurrentWeather";

const initialState: CurrentWeatherState = {
  currentWeather: undefined,
  currentWeatherError: undefined,
};
export default (state = initialState, action: Action): CurrentWeatherState => {
  switch (action.type) {
    case CurrentWeatherTypes.CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: action.payload,
      };
    case CurrentWeatherTypes.CURRENT_WEATHER_ERROR:
      return {
        ...state,
        currentWeatherError: action.payload,
      };
    default:
      return state;
  }
};
