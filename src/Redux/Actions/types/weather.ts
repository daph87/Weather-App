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

export interface CityAction {
  type: WeatherTypes.SET_CITY;
  payload: CityData;
}

export interface MetricConversionAction {
  type: WeatherTypes.SET_METRIC_CONVERSION;
  payload: string;
}

export interface GetFiveDaysForecastAction {
  type: WeatherTypes.FIVE_DAYS_FORECAST;
  payload: FiveDaysData | undefined;
}


export interface WeatherState {
  currentWeather?: CurrentWeatherData | undefined;
  // | AxiosResponse<CurrentWeatherData>
  // | CurrentWeatherData
  // | undefined;
  // currentWeatherError: string | undefined;
  city: CityData | undefined;
  metric: string;
  // weather: any;
  fiveDaysForecast:  FiveDaysData | undefined;
}


export type ActionWeather =
  | CurrentWeatherAction
  | CityAction
  | MetricConversionAction
  | GetFiveDaysForecastAction
