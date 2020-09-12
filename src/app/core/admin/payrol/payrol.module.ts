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
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatInputModule } from '@angular/material/input';

import { EmptyModule } from '@common/components';
import { PayrollRoutingModule } from './payroll-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormPayrollComponent } from './form/form.component';
import { ListPayrollComponent } from './list/list.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [ListPayrollComponent, FormPayrollComponent, ReportComponent],
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
  ],
})
export class PayrolModule {}
