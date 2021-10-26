/** @format */

import api from "./api";
import jsonFile from "../Redux/autocomplete.json";
import axios from "axios";

// export const getLocationsAutoComplete = async (city: string) => {
//   await api
//     .get(
//       `locations/v1/cities/autocomplete?apikey=HJEPQTZCWxhq8IqpXFNwM9vbUgHi1PHP&q=${city}`
//     )
//     .then((response) => {
//       const res = response.data;
//       console.log(response.data, "test succeeded data");
//       // return cb(res);
//       return res;
//     })
//     .catch((error) => {
//       console.log(error, "test failed");
//     });
// };
const apiTest = axios.create({
  baseURL: "https://api.coingecko.com/api/",
});
export const getLocationsAutoComplete = async () => {
  await apiTest
    .get("v3/coins")
    .then((response) => {
      const res = response.data;
      console.log(response, "test succeeded data");
      // return cb(res);
      return res;
    })
    .catch((error) => {
      console.log(error, "test failed");
    });
};

// export const getLocationsAutoComplete = () => {
//   const json: any = jsonFile;
//   // console.log(json, "json");
//   return json;
// };
