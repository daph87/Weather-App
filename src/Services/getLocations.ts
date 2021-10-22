/** @format */

import api from "./api";
import jsonFile from "../Redux/autocomplete.json";
import _ from "lodash";

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

export const getLocations = async () => {
  const locations_cb = await jsonFile;
  const locations = _.map(locations_cb, (location) => {
    return {
      id: location.Key,
      name: location.LocalizedName,
      country: location.Country.LocalizedName,
    };
  });
  const json = jsonFile;
};
