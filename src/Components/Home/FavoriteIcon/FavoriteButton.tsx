/** @format */

import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Redux/Reducers/rootReducer";
import { WeatherState } from "../../../Redux/Actions/types/Weather";
import { FavoriteCitiesState } from "../../../Redux/Actions/types/FavoriteCities";
import { bindActionCreators } from "redux";
import { favoriteCitiesActionCreators } from "../../../Redux";

const FavoriteButton = () => {
  //   const [favoriteIconActive, setFavoriteIconActive] = useState<boolean>(false);

  const dispatch = useDispatch();

  const { addFavoriteCity, deleteFavoriteCity, setFavoriteIconActive } =
    bindActionCreators(favoriteCitiesActionCreators, dispatch);

  const city = useSelector<RootState, WeatherState["city"]>(
    (state) => state.weatherInfo.city
  );

  const favoriteIconActive = useSelector<
    RootState,
    FavoriteCitiesState["favoriteIconActive"]
  >((state) => state.favoriteCities.favoriteIconActive);

  const removeCityFromFavorites = () => {};
  const addCityToFavorites = () => {
    // favoriteIconActive ? addFavoriteCity(city) : deleteFavoriteCity(city.key);
    setFavoriteIconActive(true);
  };

  return (
    <FontAwesomeIcon
      onClick={
        favoriteIconActive ? addCityToFavorites : removeCityFromFavorites
      }
      icon={faStar}
      size='3x'
      color={favoriteIconActive ? "#d7d705" : "#a09da2"}
    />
  );
};

export default FavoriteButton;
