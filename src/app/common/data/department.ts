export const departmentKey = 'Department';

export enum Department {
  RRHH = 'Recursos humanos',
  Comercial = 'Comercial',
  Finanzas = 'Finanzas',
  Operaciones = 'Operaciones'
}

export const nameDepartament = {
  [Department.Comercial]: 'Departamento comercial',
  [Department.RRHH]: 'Departamento de recursos humanos',
  [Department.Finanzas]: 'Departamento de finanzas',
  [Department.Operaciones]: 'Departamento de operaciones',
};

export const departmentJSON = [
  Department.Comercial,
  Department.Finanzas,
  Department.Operaciones,
  Department.RRHH,
];
