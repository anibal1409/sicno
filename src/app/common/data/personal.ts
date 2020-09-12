import { IPersonal } from '../interfaces';
import { Department } from './department';
import { Position } from './position';

export const personalKey = 'Personal';

export const minimumSalary = 400000;

export const personalJSON: IPersonal[] = [
  {
    id: '1',
    name: 'Pedro',
    lastName: 'Perez',
    dateBirth: '1990-01-20',
    address: '',
    dateAdmission: '2010-05-01',
    departmanet: Department.Comercial,
    position: Position.Jefe,
    profession: '',
    salary: minimumSalary * 3,
  },
  {
    id: '2',
    name: 'Maria',
    lastName: 'Gomez',
    dateBirth: '1995-01-20',
    address: '',
    dateAdmission: '2015-05-01',
    departmanet: Department.Comercial,
    position: Position.Asistente,
    profession: '',
    salary: minimumSalary * 2,
  },
  {
    id: '3',
    name: 'Pablo',
    lastName: 'Marmol',
    dateBirth: '1985-01-20',
    address: '',
    dateAdmission: '2015-10-01',
    departmanet: Department.Comercial,
    position: Position.Integral,
    profession: '',
    salary: minimumSalary * 1.5,
  },
  {
    id: '4',
    name: 'Luisa',
    lastName: 'PDiazDierez',
    dateBirth: '1980-01-20',
    address: '',
    dateAdmission: '2005-05-01',
    departmanet: Department.RRHH,
    position: Position.Jefe,
    profession: '',
    salary: minimumSalary * 3,
  },
  {
    id: '2',
    name: 'Pedro',
    lastName: 'Picapiedras',
    dateBirth: '1995-01-20',
    address: '',
    dateAdmission: '2015-05-01',
    departmanet: Department.RRHH,
    position: Position.Asistente,
    profession: '',
    salary: minimumSalary * 2,
  },
];
