/** @format */

import React from "react";
import { getWeatherIconUrl } from "../../../Helpers/getWeatherIconUrl";

type Props = {
  className: string;
  cardKey: string;
  cityName: string;
  iconSource?: any;
  alt?: string;
  temperature?: string;
  iconPhrase?: string;
};

const FiveDaysWeatherCard: React.FC<Props> = (props) => {
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
    <div key={cardKey} className={className}>
      <div className='icon'>
        <img src={getWeatherIconUrl(iconSource)} alt={alt} />
      </div>
      <div className='cityName'>{cityName}</div>

      <div className='temperature'>{temperature}</div>
      {iconPhrase ? <div className='iconPhrase'>{iconPhrase}</div> : null}
    </div>
  );
};

export default FiveDaysWeatherCard;
