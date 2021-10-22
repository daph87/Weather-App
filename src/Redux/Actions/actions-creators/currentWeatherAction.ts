/** @format */
import { Dispatch } from "redux";

import api from "../../../Services/api";
import { CurrentWeatherTypes } from "../../Enums/CurrentWeatherTypes";
import { Action } from "../types/CurrentWeather";
import { CurrentWeatherData } from "../../../Types/CurrentWeatherDataType";
import { AxiosResponse } from "axios";

export const getCurrentWeather =
  // location: number, apiKey: string
  () => async (dispatch: Dispatch<Action>) => {
    await api
      .get(
        `currentconditions/v1/215854?apikey=HJEPQTZCWxhq8IqpXFNwM9vbUgHi1PHP`
      )
      .then(
        (response: AxiosResponse<CurrentWeatherData>) => {
          console.log(response, "getCountry");
          const data = response.data;

          dispatch({
            type: CurrentWeatherTypes.CURRENT_WEATHER,
            payload: data,
          });
        },
        (error) => {
          dispatch({
            type: CurrentWeatherTypes.CURRENT_WEATHER_ERROR,
            payload: error,
          });
        }
      );
  };

export const getFiveDaysWeather =
  // location: number, apiKey: string
  () => async (dispatch: Dispatch<Action>) => {
    await api
      .get(
        `forecasts/v1/daily/5day/215854?apikey=HJEPQTZCWxhq8IqpXFNwM9vbUgHi1PHP`
      )
      .then(
        (response) => {
          console.log(response, "get5days");
          const data = response;

          dispatch({
            type: CurrentWeatherTypes.CURRENT_WEATHER,
            payload: data,
          });
        },
        (error) => {
          dispatch({
            type: CurrentWeatherTypes.CURRENT_WEATHER_ERROR,
            payload: error,
          });
        }
      );
  };
