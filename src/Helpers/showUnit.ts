/** @format */

import { CurrentWeatherData } from "../Types/CurrentWeatherDataType";

export const showUnit = (metric: string, currentWeather: CurrentWeatherData) => {
  const unit =
    metric !== "C"
      ? `${currentWeather.Temperature.Imperial.Value}° ${currentWeather.Temperature.Imperial.Unit}`
      : `${currentWeather.Temperature.Metric.Value}° ${currentWeather.Temperature.Metric.Unit}`;
  return unit;
};
