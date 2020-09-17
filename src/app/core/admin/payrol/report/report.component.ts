import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPayment, IPeriod, IPersonal } from '@common/interfaces';
import { PayrollManagementService } from '@common/services';
import { Location } from '@angular/common';
import { nameDepartament } from '@common/data';
import { PriceLangPipe } from '../../../../common/pipe';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  periodId: string;
  period: IPeriod;
  payments: IPayment[] = [];
  personal: IPersonal[] = [];
  items = new Map<string, IPayment[]>();
  nameDepartament = nameDepartament;

  constructor(
    private route: ActivatedRoute,
    private payrollManagementService: PayrollManagementService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    const param = this.route.snapshot.params;
    this.personal = this.payrollManagementService.personal;
    if (param.id) {
      this.periodId = param.id;
      console.log(this.periodId);
      this.period =  this.payrollManagementService.periods.find(period => period.id === this.periodId);
      const payment = this.payrollManagementService.payments;
      this.payments = payment.filter(
        (item) => {
          return item.periodId === this.periodId;
        }
      );
      this.loadPersonsalPayment();
    }
  }

  loadPersonsalPayment() {
    this.payments = this.payments.map(
      (payment) => {
        payment.personal = this.personal.find( (item) => item.id === payment.personalId);
        return payment;
      }
    );
    // this.sortDepartament();
    this.loadItems();
  }

  sortDepartament() {
    this.payments = this.payments.sort(
      (a, b) => {
        let sort = 0;
        if (a.personal.departmanet > b.personal.departmanet) {
          sort = 1;
        } else if (a.personal.departmanet < b.personal.departmanet) {
          sort = -1;
        }
        return sort;
      }
    );
  }

  loadItems() {
    this.payments.forEach(
      (payment) => {
        const departament = payment.personal.departmanet;
        if (this.items.has(departament)) {
          const payments = this.items.get(departament);
          payments.push(payment);
          this.items.set(departament, payments);
        } else {
          this.items.set(departament, [payment]);
        }
      }
    );
  }

  get getItems() {
    return Array.from(this.items);
  }

  goBack() {
    this.location.back();
  }

  toPrint() {
    window.print();
  }

  formatNumber(value) {
    return PriceLangPipe.Transform(value);
  }

}
