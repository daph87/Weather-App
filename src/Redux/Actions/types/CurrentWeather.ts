/** @format */

import { CurrentWeatherData } from "../../../Types/CurrentWeatherDataType";
import { CurrentWeatherTypes } from "../../Enums/CurrentWeatherTypes";
import { AxiosResponse } from "axios";

export interface CurrentWeatherAction {
  type: CurrentWeatherTypes.CURRENT_WEATHER;
  payload: AxiosResponse<CurrentWeatherData> | CurrentWeatherData;
}

export interface CurrentWeatherErrorsAction {
  type: CurrentWeatherTypes.CURRENT_WEATHER_ERROR;
  payload: AxiosResponse<string> | string;
}

export interface CurrentWeatherState {
  currentWeather:
    | AxiosResponse<CurrentWeatherData>
    | CurrentWeatherData
    | undefined;
  currentWeatherError: AxiosResponse<string> | string | undefined;
}

export type Action = CurrentWeatherAction | CurrentWeatherErrorsAction;
