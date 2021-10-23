/** @format */

import { CurrentWeatherData } from "../Types/CurrentWeatherDataType";

export const showUnit = (metric: string, currentWeather: any) => {
  const unit =
    metric !== "Celsius"
      ? `${currentWeather.Temperature.Imperial.Value}° ${currentWeather.Temperature.Imperial.Unit}`
      : `${currentWeather.Temperature.Metric.Value}° ${currentWeather.Temperature.Metric.Unit}`;
  return unit;
};
