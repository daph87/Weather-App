/** @format */

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { WeatherState } from "../../../Redux/Actions/types/weather";
import { RootState } from "../../../Redux/Reducers/rootReducer";

import { CityData } from "../../../Types/CityDataType";
import { DailyDataType } from "../../../Types/DailyDataType";
import { FiveDaysData } from "../../../Types/FiveDaysDataType";
import DailyForecast from "./DailyForecast";
import "./fiveDaysForecast.scss";

type Props = {
  // fiveDaysForecast?: FiveDaysData;
  city: CityData;
  unit: string;
  getFiveDaysForecast: (unit: string, city: CityData) => void;
};

const FiveDaysForecast: React.FC<Props> = (props) => {
  const { city, unit, getFiveDaysForecast } = props;

  const fiveDaysForecast = useSelector<
    RootState,
    WeatherState["fiveDaysForecast"]
  >((state) => state.weatherInfo.fiveDaysForecast);

  useEffect(() => {
    console.log("hello fiveDats");
    getFiveDaysForecast(unit, city);
  }, [unit]);
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
              city={city}
            />
          )
        )}
      </div>
    </>
  );
};

export default FiveDaysForecast;
