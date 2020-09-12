import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldControl } from '@angular/material/form-field';
import { CustomComponent } from '@common/class';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [
    { provide: MatFormFieldControl, useExisting: FormPayrollComponent }
  ]
})
export class FormPayrollComponent extends CustomComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<FormPayrollComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
  ) {
    super();
   }

  ngOnInit() {
    this.createForm();
  }

  OnSubmit() {

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
