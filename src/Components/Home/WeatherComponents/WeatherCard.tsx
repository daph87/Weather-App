/** @format */

import React from "react";
import "./weatherCard.scss";
import { getWeatherIconUrl } from "../../../Helpers/getWeatherIconUrl";

type Props = {
  className: string;
  cardKey: string;
  cityName?: string;
  iconSource?: any;
  alt?: string;
  temperature?: string;
  iconPhrase?: string;
};

const WeatherCard: React.FC<Props> = (props) => {
  const {
    className,
    cardKey,
    cityName,
    iconSource,
    alt,
    temperature,
    iconPhrase,
  } = props;
  return (
    <div key={cardKey} className='weatherCard'>
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
