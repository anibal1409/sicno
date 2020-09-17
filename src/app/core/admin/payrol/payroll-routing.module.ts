import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPayrollComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: '',
    component: ListPayrollComponent,
  },
  {
    path: 'report/:id',
    component: ReportComponent
  },
  {
    path: 'auth',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollRoutingModule { }
