/** @format */

import React from "react";

import { CityData } from "../../../Types/CityDataType";
import { DailyDataType } from "../../../Types/DailyDataType";
import { FiveDaysData } from "../../../Types/FiveDaysDataType";
import DailyForecast from "./DailyForecast";
import "./fiveDaysForecast.scss";

type Props = {
  fiveDaysForecast?: FiveDaysData ;
  city: CityData;
  unit: string;
};
const FiveDaysForecast: React.FC<Props> = (props) => {
  const { fiveDaysForecast, city, unit } = props;
  return (
    <>
      <h1>{fiveDaysForecast?.Headline.Text}</h1>
      <div className='fiveDaysForecastBox'>
        {fiveDaysForecast?.DailyForecasts.map((dailyForecast: DailyDataType) => (
          <DailyForecast
            key={dailyForecast.EpochDate}
            unit={unit}
            dailyForecast={dailyForecast}
            city={city}
          />
        ))}
      </div>
    </>
  );
};

export default FiveDaysForecast;
