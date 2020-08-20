import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsDetailsRoutingModule } from './products-details-routing.module';
import { ProductsDetailsComponent } from './products-details.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ProductsDetailsComponent],
  imports: [
    CommonModule,
    ProductsDetailsRoutingModule,
    MatButtonModule
  ]
})
export class ProductsDetailsModule { }
