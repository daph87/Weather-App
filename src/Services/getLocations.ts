/** @format */

import api from "./api";
import jsonFile from "../Redux/autocomplete.json";

// export const getLocations = async (city: string, cb: any) => {
//   await api
//     .get(
//       `locations/v1/cities/autocomplete?apikey=HJEPQTZCWxhq8IqpXFNwM9vbUgHi1PHP&q=${city}`
//     )
//     .then((response) => {
//       const res = response;
//       console.log(response, "test succeeded");
//       return cb(res);
//     })
//     .catch((error) => {
//       console.log(error, "test failed");
//     });
// };

export const getLocations = () => {
  const json: any = jsonFile;
  // const jsonObj = JSON.parse(json);
  // console.log(typeof json, "calling server");
  return json;
};
