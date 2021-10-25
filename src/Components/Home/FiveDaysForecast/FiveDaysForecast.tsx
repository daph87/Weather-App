/** @format */

import React from "react";
import DailyForecast from "./DailyForecast";
import "./fiveDaysForecast.scss";
import WeatherCard from "../WeatherComponents/WeatherCard";

type Props = {
  fiveDaysForecast: any;
  city: any;
  metric:string
};
const FiveDaysForecast: React.FC<Props> = (props) => {
  const { fiveDaysForecast, city,metric } = props;
  return (
    <>
      <h1 key="helo">{fiveDaysForecast.data.Headline.Text}</h1>
      <div key="hello" className='fiveDaysForecastBox'>
        {fiveDaysForecast.data.DailyForecasts.map((dailyForecast: any) => (
          <DailyForecast key={dailyForecast.EpochDate} metric={metric} dailyForecast={dailyForecast} city={city} />
        ))}
      </div>
    </>
  );
};

export default FiveDaysForecast;
