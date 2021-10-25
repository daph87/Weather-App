/** @format */
import { Dispatch } from "redux";

import api from "../../../Services/api";
import { WeatherTypes } from "../../Enums/weatherTypes";
import { ActionWeather } from "../types/weather";
import { CurrentWeatherData } from "../../../Types/CurrentWeatherDataType";
import { AxiosResponse } from "axios";

// export const getCurrentWeather =
//   // location: number, apiKey: string
//   () => async (dispatch: Dispatch<ActionWeather>) => {
//     await api
//       .get(
//         `currentconditions/v1/215854?apikey=HJEPQTZCWxhq8IqpXFNwM9vbUgHi1PHP`
//       )
//       .then(
//         (response: AxiosResponse<CurrentWeatherData>) => {
//           console.log(response, "getCountry");
//           const data = response.data;

//           dispatch({
//             type: WeatherTypes.CURRENT_WEATHER,
//             payload: data,
//           });
//         },
//         (error) => {
//           dispatch({
//             type: WeatherTypes.CURRENT_WEATHER_ERROR,
//             payload: error,
//           });
//         }
//       );
//   };
export const getCurrentWeather =
  (weather: CurrentWeatherData) => (dispatch: Dispatch<ActionWeather>) => {
    dispatch({
      type: WeatherTypes.CURRENT_WEATHER,
      payload: weather,
    });
  };

export const setWeather =
  (weather: any) => (dispatch: Dispatch<ActionWeather>) => {
    dispatch({
      type: WeatherTypes.SET_WEATHER,
      payload: weather,
    });
  };

export const setCity = (city: any) => (dispatch: Dispatch<ActionWeather>) => {
  dispatch({
    type: WeatherTypes.SET_CITY_KEY,
    payload: city,
  });
};

export const setMetricConversion =
  (metric: string) => (dispatch: Dispatch<ActionWeather>) => {
    dispatch({
      type: WeatherTypes.SET_METRIC_CONVERSION,
      payload: metric,
    });
  };

export const getFiveDaysForecast =
  // location: number, apiKey: string
  (metric:string) => async (dispatch: Dispatch<ActionWeather>) => {

    await api
      .get(
        `forecasts/v1/daily/5day/215854?apikey=HJEPQTZCWxhq8IqpXFNwM9vbUgHi1PHP&metric=${metric === "C"?true:false}`
      )
      .then(
        (response) => {
          console.log(response, "get5daysRedux");
          const data = response;

          dispatch({
            type: WeatherTypes.FIVE_DAYS_FORECAST,
            payload: data,
          });
        },
        (error) => {
          dispatch({
            type: WeatherTypes.FIVE_DAYS_FORECAST_ERROR,
            payload: error,
          });
        }
      );
  };
