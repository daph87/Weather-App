/** @format */

import { WeatherTypes } from "../Enums/weatherTypes";
import { WeatherState, ActionWeather } from "../Actions/types/weather";

const initialState: WeatherState = {
  showModal: false,
  modalMessageCurrent: "",
  modalMessageForecast: "",
  currentWeather: undefined,
  currentWeatherError: undefined,
  city: undefined,
  unit: "Celsius",
  fiveDaysForecastError: undefined,
  fiveDaysForecast: undefined,
};
export default (state = initialState, action: ActionWeather): WeatherState => {
  switch (action.type) {
    case WeatherTypes.CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: action.payload,
        currentWeatherError: undefined,
        showModal: false,
        modalMessageCurrent: "",
      };
    case WeatherTypes.CURRENT_WEATHER_ERROR:
      return {
        ...state,
        currentWeatherError: action.payload,
        currentWeather: undefined,
        showModal: true,
        modalMessageCurrent: action.payload,
      };
    case WeatherTypes.SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case WeatherTypes.SET_UNIT_CONVERSION:
      return {
        ...state,
        unit: action.payload,
      };

    case WeatherTypes.CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    case WeatherTypes.FIVE_DAYS_FORECAST:
      return {
        ...state,
        fiveDaysForecast: action.payload,
        fiveDaysForecastError: undefined,
        showModal: false,
        modalMessageForecast: "",
      };
    case WeatherTypes.FIVE_DAYS_FORECAST_ERROR:
      return {
        ...state,
        fiveDaysForecast: undefined,
        fiveDaysForecastError: action.payload,
        showModal: true,
        modalMessageForecast: action.payload,
      };

    default:
      return state;
  }
};
