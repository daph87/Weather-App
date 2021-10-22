/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { weatherActionCreators } from "../../Redux/index";
import jsonFile from "../../Redux/currentWeather.json";
import SearchBar from "./SearchBar/SearchBar";
type Props = {
  getCurrentWeather: () => void;
};

const Home = (props: Props) => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();
  const { getCurrentWeather } = bindActionCreators(
    weatherActionCreators,
    dispatch
  );

  useEffect(() => {
    const currentWeather = jsonFile.EpochTime;
    // console.log("json", currentWeather);
    // const getWeather = async () => {
    //   await getCurrentWeather();
    // };
    // getWeather();
  }, []);
  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default Home;
