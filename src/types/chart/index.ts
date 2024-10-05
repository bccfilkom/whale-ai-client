export interface TimeSeriesData {
  Date: string;
  Open: number;
  High: number;
  Low: number;
  Close: number;
  Volume: number;
  Dividends: number;
  "Stock Splits": number;
}

export interface TimeSeriesWithSMA {
  "1-day SMA": number;
  Close: number;
  Date: "2019-10-07";
}

export interface VolumeTimeSeries {
  Date: string;
  Volume: number;
}

export interface PriceAndPercentTimeSeries {
  Close_Pct_Change: number;
  Date: string;
}
