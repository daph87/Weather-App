/** @format */

import { apikey } from "../global";
import api from "./api";

export const getLocationsAutoComplete = async (city: string) => {
  let res;
  try {
    res = await api.get(
      `locations/v1/cities/autocomplete?apikey=${apikey}&q=${city}`
    );
  } catch (error) {
    console.log(error);
  }

  return res?.data;
};
