/** @format */

import React from "react";
import { useSelector } from "react-redux";

import { WeatherState } from "../../../Redux/Actions/types/weather";
import { RootState } from "../../../Redux/Reducers/rootReducer";
import { DailyDataType } from "../../../Types/DailyDataType";
import DailyForecast from "./DailyForecast";
import "./fiveDaysForecast.scss";

type Props = {
  unit: string;
};

const FiveDaysForecast: React.FC<Props> = (props) => {
  const { unit } = props;

  const fiveDaysForecast = useSelector<
    RootState,
    WeatherState["fiveDaysForecast"]
  >((state) => state.weatherInfo.fiveDaysForecast);

  return (
    <>
      <h1>{fiveDaysForecast?.Headline.Text}</h1>
      <div id='fiveDaysForecastBox'>
        {fiveDaysForecast?.DailyForecasts.map(
          (dailyForecast: DailyDataType) => (
            <DailyForecast
              key={dailyForecast.EpochDate}
              unit={unit}
              dailyForecast={dailyForecast}
            />
          )
        )}
      </div>
    </>
  );
};

export default FiveDaysForecast;
