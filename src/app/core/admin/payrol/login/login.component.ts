import { Component, OnInit } from '@angular/core';
import { CustomComponent } from '@common/class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends CustomComponent implements OnInit {
  visibility = false;
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
