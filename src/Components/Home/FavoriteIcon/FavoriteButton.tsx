/** @format */

import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { RootState } from "../../../Redux/Reducers/rootReducer";
import { FavoritesCitiesState } from "../../../Redux/Actions/types/favoritesCities";
import { favoritesCitiesActionCreators } from "../../../Redux";
import { CityData } from "../../../Types/CityDataType";
import "./favoriteButton.scss"

type Props = {
  city: CityData;
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

  const toggleFav = favoritesCities.find((fav: CityData) => fav.Key === city.Key);

  const toggleFavorites = async () => {
    toggleFav ? deleteCityFromFavorites(city.Key) : addCityToFavorites(city);

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
