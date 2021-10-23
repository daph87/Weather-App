/** @format */

import { CurrentWeatherData } from "../../../Types/CurrentWeatherDataType";
import { WeatherTypes } from "../../Enums/WeatherTypes";
import { AxiosResponse } from "axios";

export interface CurrentWeatherAction {
  type: WeatherTypes.CURRENT_WEATHER;
  payload: AxiosResponse<CurrentWeatherData> | CurrentWeatherData;
}

export interface CityKeyAction {
  type: WeatherTypes.SET_CITY_KEY;
  payload: string;
}

export interface CurrentWeatherErrorsAction {
  type: WeatherTypes.CURRENT_WEATHER_ERROR;
  payload: AxiosResponse<string> | string;
}
export interface MetricConversionAction {
  type: WeatherTypes.SET_METRIC_CONVERSION;
  payload: string;
}
export interface SetWeatherAction {
  type: WeatherTypes.SET_WEATHER;
  payload: any;
}
export interface WeatherState {
  currentWeather: any;
  // | AxiosResponse<CurrentWeatherData>
  // | CurrentWeatherData
  // | undefined;
  currentWeatherError: AxiosResponse<string> | string | undefined;
  city: any | undefined;
  metric: string;
  weather: any;
}

export type ActionWeather =
  | CurrentWeatherAction
  | CurrentWeatherErrorsAction
  | CityKeyAction
  | MetricConversionAction
  | SetWeatherAction;
