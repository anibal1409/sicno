export class CustomComponent {

  nameClass: string;
  inputAppearance = 'legacy';
  isLoading: boolean;

  print(data) {
    console.log(this.nameClass, data);
  }
}
