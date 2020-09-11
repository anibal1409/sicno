import { Component, OnInit } from '@angular/core';
import { CustomComponent } from '@common/class';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormPayrollComponent extends CustomComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
