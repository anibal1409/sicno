import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';



import { EmptyModule } from '@common/components';
import { PayrollRoutingModule } from './payroll-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormPayrollComponent } from './form/form.component';
import { ListPayrollComponent } from './list/list.component';
import { ReportComponent } from './report/report.component';
import { PriceLangModule } from '@common/pipe';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { LoginComponent } from './login/login.component';

export const DateFormats = {
  parse: {
      dateInput: ['dddd DD/MM/YYYY'],
  },
  display: {
      dateInput: 'dddd DD/MM/YYYY',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
  },
};
@NgModule({
  declarations: [ListPayrollComponent, FormPayrollComponent, ReportComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PayrollRoutingModule,
    EmptyModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatInputModule,
    PriceLangModule,
    MatCardModule,
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: DateFormats },
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
  ]
})
export class PayrolModule {}
