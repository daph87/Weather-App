/** @format */

import React from "react";

type Props = {
  className: string;
  cardKey: string;
  cityName: string;
  iconSource?: string;
  alt?: string;
  temperature: string;
  iconPhrase?: string;
};

const WeatherCard = (props: Props) => {
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
        <img src={iconSource} alt={alt} />
      </div>
      <div className='cityName'>{cityName}</div>

      <div className='temperature'>{temperature}</div>
      {iconPhrase ? <div className='iconPhrase'>{iconPhrase}</div> : null}
    </div>
  );
};

export default WeatherCard;
