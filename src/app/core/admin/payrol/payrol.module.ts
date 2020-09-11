import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';


import { ListPayrollComponent } from './list/list.component';
import { FormPayrollComponent } from './form/form.component';
import { EmptyModule } from '@common/components';
import { PayrollRoutingModule } from './payroll-routing.module';


@NgModule({
  declarations: [ListPayrollComponent, FormPayrollComponent],
  imports: [
    CommonModule,
    PayrollRoutingModule,
    EmptyModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
  ]
})
export class PayrolModule { }
