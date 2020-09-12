import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomComponent } from '@common/class';
import { Subscription } from 'rxjs';
import { IPayroll, PayrollField } from '@common/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { FormPayrollComponent } from '../form/form.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListPayrollComponent extends CustomComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['period', 'salaries', 'deductions', 'total'];
  dataSource: MatTableDataSource<IPayroll>;
  items: IPayroll[] = [
    {
      id: '1',
      date: '2020-09-15',
      dateFrom: '2020-09-01',
      dateTo: '2020-09-15',
      deductions: 5000,
      salaries: 55000,
      personalId: ['', ''],
    }
  ];
  itemsSubs = new Subscription();
  PayrollField = PayrollField;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  nameClass = 'ListPayrollComponent';

  constructor(
    private dialoge: MatDialog,
  ) {
    super();
   }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.items);
  }

  ngOnDestroy(): void {
    this.itemsSubs.unsubscribe();
  }

  DialogeForm(dataUpd?: IPayroll) {
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

}
