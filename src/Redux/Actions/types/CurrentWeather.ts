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

export interface WeatherState {
  currentWeather:
    | AxiosResponse<CurrentWeatherData>
    | CurrentWeatherData
    | undefined;
  currentWeatherError: AxiosResponse<string> | string | undefined;
  city: any | undefined;
  metric: string;
}

export type Action =
  | CurrentWeatherAction
  | CurrentWeatherErrorsAction
  | CityKeyAction
  | MetricConversionAction;
