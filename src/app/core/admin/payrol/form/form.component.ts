import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldControl } from '@angular/material/form-field';
import { CustomComponent } from '@common/class';
import { PayrollManagementService } from '@common/services';
import * as moment from 'moment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [
    { provide: MatFormFieldControl, useExisting: FormPayrollComponent }
  ]
})
export class FormPayrollComponent extends CustomComponent implements OnInit {

  formatDate = 'YYYY-MM-DD';

  constructor(
    public dialogRef: MatDialogRef<FormPayrollComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private payrollManagementService: PayrollManagementService,
  ) {
    super();
   }

  ngOnInit() {
    this.createForm();
  }

  OnSubmit() {
    console.log(this.form.value);
    const from = moment(this.form.value.from).format(this.formatDate);
    const to = moment(this.form.value.to).format(this.formatDate);
    console.log(from);
    console.log(to);
    this.payrollManagementService.addPeriod(from, to);
  }

  private createForm() {
    this.form = this.formBuilder.group({
      to: new FormControl( null, [
        Validators.required,
      ]),
      from: new FormControl( null, [
        Validators.required,
      ]),
    });
  }

}
