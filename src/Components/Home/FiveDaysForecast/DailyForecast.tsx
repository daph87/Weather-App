/** @format */

import React from "react";
import { getWeatherIconUrl } from "../../../Helpers/getWeatherIconUrl";
import moment from "moment";
import "./dailyForecast.scss";

type Props = {
  dailyForecast: any;
  city: any;
  metric:string;
};
const DailyForecast: React.FC<Props> = (props) => {
  const { dailyForecast, city,metric } = props;

  const maxTemp = dailyForecast.Temperature.Maximum.Value;
  const minTemp = dailyForecast.Temperature.Minimum.Value;

  const timeInt = Number(moment().format("HH"));
  const dayOrNight = timeInt >= 5 && timeInt < 17 ? "Day" : "Night";
  const iconSource = getWeatherIconUrl(dailyForecast[dayOrNight].Icon);
  const iconPhrase = dailyForecast[dayOrNight].IconPhrase;

  return (
    <div className='dailyForecastContainer'>
      <p className='day'>{moment(dailyForecast.Date).format("dddd")}</p>
      <p className='temperature'>
        {minTemp} {metric}° - {maxTemp} {metric}°
      </p>
      <div className='icon'>
        <img src={iconSource} alt={iconPhrase} />
      </div>
      <div className='alt'>{iconPhrase}</div>
    </div>
  );
};

export default DailyForecast;
