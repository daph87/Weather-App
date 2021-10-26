/** @format */

export type CurrentWeatherData = [
  {
    LocalObservationDateTime: string;
    EpochTime: number;
    WeatherIcon?: number;
    HasPrecipitation: boolean;
    PrecipitationType: string | null;
    IsDayTime: boolean;
    Temperature: {
      Metric: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      Imperial: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
    };
    MobileLink: string;
    Link: string;
  }
];
