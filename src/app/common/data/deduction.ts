import { IDeduction } from '../interfaces';

export const deductionKey = 'Deduction';

export const deductionJSON: IDeduction[] = [
  {
    name: 'Seguro social obligatorio',
    abbreviation: 'SSO',
    value: 0.04
  },
  {
    name: 'Ley de Régimen Prestacional de empleo',
    abbreviation: 'LRPE - Paro forzoso',
    value: 0.005
  },
  {
    name: 'Fondo de Ahorro Obligatorio para la Vivienda',
    abbreviation: 'FAOV',
    value: 0.01
  },
];
