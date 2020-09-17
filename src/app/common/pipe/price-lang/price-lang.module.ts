import { NgModule } from '@angular/core';
import { PriceLangPipe } from './price-lang.pipe';



@NgModule({
  declarations: [PriceLangPipe],
  exports: [PriceLangPipe],
})
export class PriceLangModule { }
