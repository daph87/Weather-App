/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { weatherActionCreators } from "../../Redux";
import { FavoritesCitiesState } from "../../Redux/Actions/types/favoritesCities";
import { RootState } from "../../Redux/Reducers/rootReducer";
import OneFavoritesCity from "./OneFavoritesCity";
import "./favorites.scss";

const Favorites: React.FC = () => {
  const dispatch = useDispatch();
  const { setCity } = bindActionCreators(weatherActionCreators, dispatch);

  const favoritesCities = useSelector<
    RootState,
    FavoritesCitiesState["favoritesCities"]
  >((state) => state.favoritesCitiesInfo.favoritesCities);

  useEffect(() => {
    console.log(favoritesCities, "favoritesCities in favorites Page");
  }, []);
  return (
    // <div></div>
    <div className='favorites'>
      {favoritesCities.map((city: any) => (
        <OneFavoritesCity city={city} onGoBack={() => setCity(city)} />
      ))}
    </div>
  );
};

export default Favorites;
