/** @format */

import api from "./api";
// import jsonFile from "../Redux/autocomplete.json";

export const getLocationsAutoComplete = async (city: string) => {
  let res;
  try {
    res = await api.get(
      `locations/v1/cities/autocomplete?apikey=Bdtfu2OnDFSAmpquELvzARuxy4FlE2E1&q=${city}`
    );
  } catch (error) {
    console.log(error);
  }

  return res?.data;
};

// export const getLocationsAutoComplete = () => {
//   const json: any = jsonFile;
//   // console.log(json, "json");
//   return json;
// };
