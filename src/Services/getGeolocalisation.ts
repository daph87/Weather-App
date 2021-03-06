/** @format */

import { Dispatch } from "redux";

import { apikey } from "../global";
import { ActionWeather } from "../Redux/Actions/types/weather";
import { CityData } from "../Types/CityDataType";
import api from "./api";

export const getCityWithGeolocalisation = (
  setCity: (city: CityData) => (dispatch: Dispatch<ActionWeather>) => void
) => {
  navigator.permissions.query({ name: "geolocation" }).then((result) => {
    if (result.state === "prompt" || result.state === "granted") {
      navigator.geolocation.getCurrentPosition(async (location) => {
        const { latitude, longitude } = location.coords;
        await api
          .get(
            `locations/v1/cities/geoposition/search?apikey=${apikey}&q=${latitude},${longitude}`
          )
          .then((response) => {
            const res = response.data;
            setCity({ Key: res.Key, LocalizedName: res.LocalizedName });
          })
          .catch((error) => {
            console.log(error);
          });
      });
    } else if (result.state === "denied") {
      setCity({ Key: "215854", LocalizedName: "Tel Aviv" });
    }
  });
};
