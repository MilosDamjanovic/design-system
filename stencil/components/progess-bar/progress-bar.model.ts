export interface ProgressBarItems {
  color: string;
  title: string;
  value: string;
  percentage: number;
}

export interface Subtitle {
  left: string;
  right: string;
}

export enum LegendPosition {
  bottom = 'bottom',
  top = 'top'
}

export interface TotalAmount {
  title: string;
  value: string; // should be a sum of all values passed in the ProgressBarItems[]
}