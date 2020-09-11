export interface IPayroll {
  id: string;
  salaries: number;
  deductions: number;
  dateFrom: string;
  dateTo: string;
  date: string;
  personalId: string[];
}

export enum PayrollField {
  id = 'id',
  salaries = 'salaries',
  deductions = 'deductions',
  dateFrom = 'dateFrom',
  dateTo = 'dateTo',
  date = 'date',
  personalId = 'personalId',
}

