import { FormGroup } from '@angular/forms';

export class CustomComponent {

  nameClass: string;
  inputAppearance = 'legacy';
  isLoading: boolean;
  form: FormGroup;

  print(data) {
    console.log(this.nameClass, data);
  }
}
