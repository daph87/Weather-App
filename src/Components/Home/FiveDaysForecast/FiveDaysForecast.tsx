/** @format */

import React from "react";
import DailyForecast from "./DailyForecast";
import "./fiveDaysForecast.scss";
import WeatherCard from "../WeatherComponents/WeatherCard";

type Props = {
  fiveDaysForecast: any;
  city: any;
};
const FiveDaysForecast: React.FC<Props> = (props) => {
  const { fiveDaysForecast, city } = props;
  return (
    <>
      <h1>{fiveDaysForecast.data.Headline.Text}</h1>
      <div className='fiveDaysForecastBox'>
        {fiveDaysForecast.data.DailyForecasts.map((dailyForecast: any) => (
          <DailyForecast dailyForecast={dailyForecast} city={city} />
        ))}
      </div>
    </>
  );
};

export default FiveDaysForecast;
