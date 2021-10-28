/** @format */

import React from "react";
import loader from "../../assets/loader.gif";
import "./Loader.scss";

const Loader: React.FC = () => {
  return (
    <div id='loaderContainer'>
      <img src={loader} />
    </div>
  );
};

export default Loader;
