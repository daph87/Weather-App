/** @format */

import React from "react";

import "./weatherCard.scss";
import { getWeatherIconUrl } from "../../../Helpers/getWeatherIconUrl";

type Props = {
  onClick?: ()=> void;
  className: string;
  cardKey: string;
  cityName?: string;
  iconSource: string|number;
  alt?: string;
  temperature?: string;
  iconPhrase?: string;
};

const WeatherCard: React.FC<Props> = (props) => {
  const {
    cardKey,
    cityName,
    iconSource,
    alt,
    temperature,
    iconPhrase,
    onClick
  } = props;
  return (
    <div key={cardKey} className='weatherCard' onClick={onClick}>
      <p className='cityName'>{cityName}</p>
      <div className='icon'>
        <img src={getWeatherIconUrl(iconSource)} alt={alt} />
      </div>
      <p className='currentTemperature'>{temperature}</p>
      <p className='iconPhrase'>{iconPhrase}</p>
    </div>
  );
};

export default WeatherCard;
