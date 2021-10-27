/** @format */

import { CurrentWeatherData } from "../Types/CurrentWeatherDataType";

export const showUnit = (unit: string, currentWeather: CurrentWeatherData) => {
  const checkUnit =
    unit !== "C"
      ? `${currentWeather.Temperature.Imperial.Value}° ${currentWeather.Temperature.Imperial.Unit}`
      : `${currentWeather.Temperature.Metric.Value}° ${currentWeather.Temperature.Metric.Unit}`;
  return checkUnit;
};
