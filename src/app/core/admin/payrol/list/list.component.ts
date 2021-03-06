import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomComponent } from '@common/class';
import { Subscription } from 'rxjs';
import { IPeriod, PeriodField } from '@common/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { FormPayrollComponent } from '../form/form.component';
import { PayrollManagementService } from '@common/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListPayrollComponent extends CustomComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['period', 'salaries', 'deductions', 'total'];
  dataSource: MatTableDataSource<IPeriod>;
  items: IPeriod[] = [
    {
      id: '1',
      date: '2020-09-15',
      dateFrom: '2020-09-01',
      dateTo: '2020-09-15',
      deductions: 5000,
      salaries: 55000,
    }
  ];
  itemsSubs = new Subscription();
  PayrollField = PeriodField;
  subsPeriod = new Subscription();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  nameClass = 'ListPayrollComponent';

  constructor(
    private dialoge: MatDialog,
    private payrollManagementService: PayrollManagementService,
    private router: Router,
  ) {
    super();
   }

  ngOnInit(): void {
    this.subsPeriod = this.payrollManagementService.periods$.subscribe(
      (periods) => {
        this.items = periods;
        this.dataSource = new MatTableDataSource(this.items);
      }
    );
    this.items = this.payrollManagementService.periods;
    this.dataSource = new MatTableDataSource(this.items);
  }

  ngOnDestroy(): void {
    this.itemsSubs.unsubscribe();
  }

  DialogeForm(dataUpd?: IPeriod) {
    const dialogRef = this.dialoge.open(FormPayrollComponent, {
      width: '40rem',
      disableClose: true,
      data: dataUpd ? dataUpd : null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goReport(period: IPeriod) {
    this.router.navigate([`/admin/payroll/report/${period.id}`]);
  }

}
