/** @format */

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FavoriteCitiesState } from "../Redux/Actions/types/FavoriteCities";
import { RootState } from "../Redux/Reducers/rootReducer";

const Favorites = () => {
  const favoriteCities = useSelector<
    RootState,
    FavoriteCitiesState["favoriteCities"]
  >((state) => state.weatherInfo.city);

  useEffect(() => {
    console.log(favoriteCities, "favoriteCities");
  }, []);
  return <div>hi</div>;
};

export default Favorites;
