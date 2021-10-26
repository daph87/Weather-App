/** @format */

import { setCity } from "../Redux/Actions/actions-creators/weatherAction";
import api from "./api";

/** @format */
export const getCityWithGeolocalisation = () => {
  navigator.permissions.query({ name: "geolocation" }).then((result) => {
    if (result.state === "prompt" || "granted") {
      navigator.geolocation.getCurrentPosition(async (location) => {
        const { latitude, longitude } = location.coords;
        await api
          .get(
            `locations/v1/cities/geoposition/search?apikey=HJEPQTZCWxhq8IqpXFNwM9vbUgHi1PHP&q=${latitude},${longitude}`
          )
          .then((response) => {
            const res = response.data;
            console.log(res, "response geo");
            setCity({ Key: res.Key, LocalizedName: res.LocalizedName });
          })
          .catch((error) => {
            console.log(error, "test failed");
          });
      });
    } else if (result.state === "denied") {
      setCity({ Key: "215854", LocalizedName: "Tel Aviv" });
    }
  });
};
