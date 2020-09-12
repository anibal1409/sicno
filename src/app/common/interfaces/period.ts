export interface IPeriod {
  id: string;
  salaries: number;
  deductions: number;
  dateFrom: string;
  dateTo: string;
  date: string;
}

export enum PeriodField {
  id = 'id',
  salaries = 'salaries',
  deductions = 'deductions',
  dateFrom = 'dateFrom',
  dateTo = 'dateTo',
  date = 'date',
  personalId = 'personalId',
}

