/** @format */

import React from "react";
import moment from "moment";

import { getWeatherIconUrl } from "../../../Helpers/getWeatherIconUrl";
import { DailyDataType } from "../../../Types/DailyDataType";
import "./dailyForecast.scss";

type Props = {
  dailyForecast: DailyDataType;
  unit: string;
};
const DailyForecast: React.FC<Props> = (props) => {
  const { dailyForecast, unit } = props;

  const maxTemp = dailyForecast.Temperature.Maximum.Value;
  const minTemp = dailyForecast.Temperature.Minimum.Value;

  return (
    <div className='dailyForecastContainer'>
      <div className='dayAndDateContainer'>
        <p className='day'>{moment(dailyForecast.Date).format("dddd")}</p>
        <p className='date'>{moment(dailyForecast.Date).format("MMM Do")}</p>
      </div>
      <p className='temperature'>
        {minTemp} {unit}° - {maxTemp} {unit}°
      </p>
      <div className='icon'>
        <img
          src={getWeatherIconUrl(dailyForecast.Day.Icon)}
          alt={dailyForecast.Day.IconPhrase}
        />
      </div>
      <p className='description'>{dailyForecast.Day.IconPhrase}</p>
    </div>
  );
};

export default DailyForecast;
