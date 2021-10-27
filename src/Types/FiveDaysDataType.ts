import { DailyDataType } from "./DailyDataType";


export type FiveDaysData = {
    Headline: {
        EffectiveDate?: string;
        EffectiveEpochDate?: number;
        Severity?: number;
        Text?: string,
        Category?: string,
        EndDate?: string,
        EndEpochDate?: number,
        MobileLink?: string,
        Link?: string
      }
      DailyForecasts: DailyDataType[]
}

    