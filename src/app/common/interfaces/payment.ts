export interface IPayment {
  id: string;
  salary: number;
  personalId: string;
  periodId: string;
  deduction: IPaymentDeduction[];
  total: number;
}
export interface IPaymentDeduction {
  abbreviation: string;
  value: number;
}

