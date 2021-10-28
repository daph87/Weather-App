/** @format */

import { CurrentWeatherData } from "../../../Types/CurrentWeatherDataType";
import { WeatherTypes } from "../../Enums/weatherTypes";
import { CityData } from "../../../Types/CityDataType";
import { FiveDaysData } from "../../../Types/FiveDaysDataType";

export interface CurrentWeatherAction {
  type: WeatherTypes.CURRENT_WEATHER;
  payload: CurrentWeatherData | undefined;
}

export interface CurrentWeatherActionError {
  type: WeatherTypes.CURRENT_WEATHER_ERROR;
  payload: string;
}

export interface CloseModalAction {
  type: WeatherTypes.CLOSE_MODAL;
}

export interface CityAction {
  type: WeatherTypes.SET_CITY;
  payload: CityData;
}

export interface UnitConversionAction {
  type: WeatherTypes.SET_UNIT_CONVERSION;
  payload: string;
}

export interface GetFiveDaysForecastAction {
  type: WeatherTypes.FIVE_DAYS_FORECAST;
  payload: FiveDaysData | undefined;
}

export interface GetFiveDaysForecastErrorAction {
  type: WeatherTypes.FIVE_DAYS_FORECAST_ERROR;
  payload: string;
}

export interface WeatherState {
  currentWeather?: CurrentWeatherData | undefined;
  currentWeatherError: string | undefined;
  fiveDaysForecastError: string | undefined;
  city: CityData | undefined;
  unit: string;
  fiveDaysForecast: FiveDaysData | undefined;
  showModal: boolean;
  modalMessageCurrent: string;
  modalMessageForecast: string;
}

export type ActionWeather =
  | CurrentWeatherAction
  | CityAction
  | UnitConversionAction
  | GetFiveDaysForecastAction
  | CurrentWeatherActionError
  | GetFiveDaysForecastErrorAction
  | CloseModalAction;
