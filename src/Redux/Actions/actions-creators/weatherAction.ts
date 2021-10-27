/** @format */
import { Dispatch } from "redux";

import api from "../../../Services/api";
import { WeatherTypes } from "../../Enums/weatherTypes";
import { ActionWeather } from "../types/weather";
import { CurrentWeatherData } from "../../../Types/CurrentWeatherDataType";
import { AxiosResponse } from "axios";
import { CityData } from "../../../Types/CityDataType";


// apikey=HJEPQTZCWxhq8IqpXFNwM9vbUgHi1PHP
export const getCurrentWeather  =
  // location: number, apiKey: string
  (city: CityData) => async (dispatch: Dispatch<ActionWeather>) => {
    let data;
    await api
      .get(
        `currentconditions/v1/${city.Key}?apikey=Bdtfu2OnDFSAmpquELvzARuxy4FlE2E1`
      )
      .then(
        (response) => {
           data = response.data[0];

          dispatch({
            type: WeatherTypes.CURRENT_WEATHER,
            payload: data,
          });
        },
        (error) => {
        console.log(error)
        }
      );
      return data
  };
// export const getCurrentWeather =
//   (weather: CurrentWeatherData) => (dispatch: Dispatch<ActionWeather>) => {
//     dispatch({
//       type: WeatherTypes.CURRENT_WEATHER,
//       payload: weather,
//     });
//   };


export const setCity = (city: CityData) => (dispatch: Dispatch<ActionWeather>) => {
  console.log('city in redux')
  dispatch({
    type: WeatherTypes.SET_CITY,
    payload: city,
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
  // location: number, apiKey: string
  (unit: string, city: CityData) => async (dispatch: Dispatch<ActionWeather>) => {
    // console.log(unit, "unit");
    // console.log(city, "city");

    await api
      .get(
        `forecasts/v1/daily/5day/${
          city.Key
        }?apikey=Bdtfu2OnDFSAmpquELvzARuxy4FlE2E1&metric=${
          unit === "C" ? true : false
        }`
      )
      .then(
        (response) => {
          // console.log(response, "get5daysRedux");
          const data = response.data;

          dispatch({
            type: WeatherTypes.FIVE_DAYS_FORECAST,
            payload: data,
          });
        },
        (error) => {
          console.log(error)

        }
      );
  };
