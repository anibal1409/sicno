import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'payroll',
        loadChildren: () => import('./payrol/payrol.module').then(m => m.PayrolModule),
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
