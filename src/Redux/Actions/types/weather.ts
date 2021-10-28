/** @format */

import { CurrentWeatherData } from "../../../Types/CurrentWeatherDataType";
import { WeatherTypes } from "../../Enums/weatherTypes";
import { AxiosResponse } from "axios";
import { CityData } from "../../../Types/CityDataType";
import { FiveDaysData } from "../../../Types/FiveDaysDataType";

export interface CurrentWeatherAction {
  type: WeatherTypes.CURRENT_WEATHER;
  // payload: AxiosResponse<CurrentWeatherData> | CurrentWeatherData;
  payload:  CurrentWeatherData | undefined;
}

export interface CurrentWeatherActionError {
  type: WeatherTypes.CURRENT_WEATHER_ERROR;
  // payload: AxiosResponse<CurrentWeatherData> | CurrentWeatherData;
  payload:  string;
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
  // | AxiosResponse<CurrentWeatherData>
  // | CurrentWeatherData
  // | undefined;
  currentWeatherError: string | undefined;
  fiveDaysForecastError: string | undefined;
  city: CityData | undefined;
  unit: string;
  // weather: any;
  fiveDaysForecast:  FiveDaysData | undefined;
}


export type ActionWeather =
  | CurrentWeatherAction
  | CityAction
  | UnitConversionAction
  | GetFiveDaysForecastAction
  | CurrentWeatherActionError
  |GetFiveDaysForecastErrorAction
