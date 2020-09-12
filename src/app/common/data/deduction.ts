import { IDeduction } from '../interfaces';

export const deductionKey = 'Deduction';

export enum Deductions {
  'SSO' = 'SSO',
  'LRPE' = 'LRPE',
  'FAOV' = 'FAOV',
}

export const deductions = [
  [Deductions.SSO],
  [Deductions.LRPE],
  [Deductions.FAOV],
];

export const deductionJSON: IDeduction[] = [];
deductionJSON[Deductions.SSO] = {
  name: 'Seguro social obligatorio',
  abbreviation: 'SSO',
  value: 0.04
};

deductionJSON[Deductions.LRPE] = {
  name: 'Ley de Régimen Prestacional de empleo - Paro forzoso',
  abbreviation: 'LRPE',
  value: 0.005
};

deductionJSON[Deductions.FAOV] = {
  name: 'Fondo de Ahorro Obligatorio para la Vivienda',
  abbreviation: 'FAOV',
  value: 0.01
};

