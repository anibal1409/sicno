export enum PersonalStatus {
  Active = 'Activo',
  Inactive = 'Inactivo',
  Holidays = 'Vacaciones',
}


export interface IPersonal {
  id: string;
  name: string;
  lastName: string;
  dateBirth: string;
  dateAdmission: string;
  position: string;
  departmanet: string;
  salary: number;
  profession: string;
  address: string;
  status: PersonalStatus;
}
