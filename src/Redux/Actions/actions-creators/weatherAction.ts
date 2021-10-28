/** @format */
import { Dispatch } from "redux";

import api from "../../../Services/api";
import { WeatherTypes } from "../../Enums/weatherTypes";
import { ActionWeather } from "../types/weather";
import { CityData } from "../../../Types/CityDataType";
import { apikey } from "../../../global";

// apikey=HJEPQTZCWxhq8IqpXFNwM9vbUgHi1PHP
export const getCurrentWeather =
  (city: CityData) => async (dispatch: Dispatch<ActionWeather>) => {
    let data;
    await api.get(`currentconditions/v1/${city.Key}?apikey=${apikey}`).then(
      (response) => {
        data = response.data[0];

        dispatch({
          type: WeatherTypes.CURRENT_WEATHER,
          payload: data,
        });
      },
      (error) => {
        dispatch({
          type: WeatherTypes.CURRENT_WEATHER_ERROR,
          payload: error.message,
        });
      }
    );
    return data;
  };

export const setCity =
  (city: CityData) => (dispatch: Dispatch<ActionWeather>) => {
    dispatch({
      type: WeatherTypes.SET_CITY,
      payload: city,
    });
  };

export const closeModal = () => (dispatch: Dispatch<ActionWeather>) => {
  dispatch({
    type: WeatherTypes.CLOSE_MODAL,
  });
};

export const setUnitConversion =
  (unit: string) => (dispatch: Dispatch<ActionWeather>) => {
    dispatch({
      type: WeatherTypes.SET_UNIT_CONVERSION,
      payload: unit,
    });
  };

export const getFiveDaysForecast =
  (unit: string, city: CityData) =>
  async (dispatch: Dispatch<ActionWeather>) => {
    await api
      .get(
        `forecasts/v1/daily/5day/${city.Key}?apikey=${apikey}&metric=${
          unit === "C" ? true : false
        }`
      )
      .then(
        (response) => {
          const data = response.data;

          dispatch({
            type: WeatherTypes.FIVE_DAYS_FORECAST,
            payload: data,
          });
        },
        (error) => {
          dispatch({
            type: WeatherTypes.FIVE_DAYS_FORECAST_ERROR,
            payload: error.message,
          });
          console.log(error.message, "error message");
        }
      );
  };
