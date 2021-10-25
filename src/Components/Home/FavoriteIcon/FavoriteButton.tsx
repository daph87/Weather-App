/** @format */

import React, { useEffect, useState } from "react";

import "./favoriteButton.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Redux/Reducers/rootReducer";
import { WeatherState } from "../../../Redux/Actions/types/weather";
import { FavoritesCitiesState } from "../../../Redux/Actions/types/favoritesCities";
import { bindActionCreators } from "redux";
import { favoritesCitiesActionCreators } from "../../../Redux";

type Props = {
  city: any;
};
const FavoriteButton: React.FC<Props> = (props) => {
  const { city } = props;

  const dispatch = useDispatch();

  const { addCityToFavorites, deleteCityFromFavorites } = bindActionCreators(
    favoritesCitiesActionCreators,
    dispatch
  );

  const favoritesCities = useSelector<
    RootState,
    FavoritesCitiesState["favoritesCities"]
  >((state) => state.favoritesCitiesInfo.favoritesCities);

  const toggleFav = favoritesCities.find((fav: any) => fav.Key === city.Key);

  const toggleFavorites = async () => {
    await console.log(city, "city");

    console.log(favoritesCities);

    toggleFav ? deleteCityFromFavorites(city.Key) : addCityToFavorites(city);

    console.log(favoritesCities);
  };

  return (
    <div id="favoriteIcon">
      <FontAwesomeIcon
        onClick={toggleFavorites}
        icon={faStar}
        size='3x'
        color={toggleFav ? "#d7d705" : "#a09da2"}
      />
    </div>
  );
};

export default FavoriteButton;
