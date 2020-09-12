import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { deductionJSON, deductions, Deductions, Department, paymentnKey, periodKey, personalKey } from '../data';
import { IDeduction, IPayment, IPaymentDeduction, IPeriod, IPersonal, PersonalStatus } from '../interfaces';
import { StorageService } from './storage.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class PayrollManagementService {
  private countPayment = 0;
  private deductionsSourc = new BehaviorSubject<IDeduction[]>([]);
  deductions$ = this.deductionsSourc.asObservable();

  private personalSourc = new BehaviorSubject<IPersonal[]>([]);
  personal$ = this.personalSourc.asObservable();

  private periodsSourc = new BehaviorSubject<IPeriod[]>([]);
  periods$ = this.periodsSourc.asObservable();

  private paymentsSourc = new BehaviorSubject<IPayment[]>([]);
  payments$ = this.paymentsSourc.asObservable();



  Department = Department;
  PersonalStatus = PersonalStatus;


  constructor() { }

  init() {
    const data = StorageService.GetItem(personalKey);
    if (data) {

    } else {

    }
  }

  public get deductions() {
    return this.deductionsSourc.value;
  }
  public set deductions(value) {
    this.deductionsSourc.next(value);
  }

  public get personal() {
    return this.personalSourc.value;
  }
  public set personal(value) {
    this.personalSourc.next(value);
  }

  public get payments() {
    return this.paymentsSourc.value;
  }
  public set payments(value) {
    this.paymentsSourc.next(value);
  }

  public get periods() {
    return this.periodsSourc.value;
  }
  public set periods(value) {
    this.periodsSourc.next(value);
  }

  addPeriod(dateFrom: string, dateTo: string) {
    const personal = this.personal;
    const payments: IPayment[] = this.payments;
    const periods = this.periods;
    const amountPayment = this.payments.length;
    const amountPeriod = this.periods.length + 1;
    let totalSalary = 0;
    let totalDeduction = 0;
    personal.forEach(
      (item, index) => {
        const salary = item.salary / 2;
        totalSalary += salary;
        const deduction: IPaymentDeduction[] = [
          {
            abbreviation: Deductions.SSO,
            value: salary * deductionJSON[Deductions.SSO].value
          },
          {
            abbreviation: Deductions.LRPE,
            value: salary * deductionJSON[Deductions.LRPE].value
          },
          {
            abbreviation: Deductions.FAOV,
            value: salary * deductionJSON[Deductions.FAOV].value
          },
        ];
        let totalDeductionPersonal = 0;
        deduction.forEach(
          (deductionItem) => {
            totalDeductionPersonal += deductionItem.value;
          }
        );
        totalDeduction += totalDeductionPersonal;
        payments.push({
          id: (amountPayment + index).toString(),
          periodId: amountPeriod.toString(),
          personalId: item.id,
          salary,
          deduction,
          total: salary - totalDeductionPersonal
        });
      }
    );
    periods.push({
      date: (new Date()).toISOString(),
      dateFrom,
      dateTo,
      salaries: totalSalary,
      deductions: totalDeduction,
      id: amountPeriod.toString()
    });
    this.storagePayment = payments;
    this.storagePeriod = periods;
  }

  generatePayment() {

  }

  get storagePersonal() {
    return StorageService.GetItem(personalKey);
  }

  get storagePeriod() {
    return StorageService.GetItem(periodKey);
  }

  get storagePayment() {
    return StorageService.GetItem(paymentnKey);
  }

  // tslint:disable-next-line: adjacent-overload-signatures
  set storagePersonal(personal: IPersonal[]) {
    StorageService.SetItem(personalKey, personal);
  }

  // tslint:disable-next-line: adjacent-overload-signatures
  set storagePayment(payment: IPayment[]) {
    StorageService.SetItem(paymentnKey, payment);
  }

  // tslint:disable-next-line: adjacent-overload-signatures
  set storagePeriod(period: IPeriod[]) {
    StorageService.SetItem(periodKey, period);
  }


}
