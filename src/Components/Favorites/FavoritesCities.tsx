/** @format */

import React from "react";
import { useSelector } from "react-redux";

import "./favorites.scss";
import { FavoritesCitiesState } from "../../Redux/Actions/types/favoritesCities";
import { RootState } from "../../Redux/Reducers/rootReducer";
import OneFavoritesCity from "./OneFavoritesCity";
import { CityData } from "../../Types/CityDataType";

const Favorites: React.FC = () => {
  const favoritesCities = useSelector<
    RootState,
    FavoritesCitiesState["favoritesCities"]
  >((state) => state.favoritesCitiesInfo.favoritesCities);

  return (
    <div className='favorites'>
      {favoritesCities.map((city: CityData) => (
        <OneFavoritesCity city={city} />
      ))}
    </div>
  );
};

export default Favorites;
