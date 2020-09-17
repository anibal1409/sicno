import { IPersonal } from './personal';

export interface IPayment {
  id: string;
  salary: number;
  personalId: string;
  periodId: string;
  deduction: IPaymentDeduction[];
  total: number;
  personal?: IPersonal;
}
export interface IPaymentDeduction {
  abbreviation: string;
  value: number;
}

