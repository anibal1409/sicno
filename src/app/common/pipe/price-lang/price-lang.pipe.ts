import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceLang'
})
export class PriceLangPipe implements PipeTransform {

  static Transform(value: number,  lang = 'es') {
    let format = '0';
    console.log(value);
    if (value > 0) {
      format =  new Intl.NumberFormat(lang, {
        style: 'currency', currency: '',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(value);
    }
    console.log(format);

    return format;
  }

  transform(value: number,  lang = 'es') {
    return PriceLangPipe.Transform(value, lang);
  }

}
