import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainCartRoutingModule } from './main-cart-routing.module';
import { MainCartComponent } from './main-cart.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ProductsDetailsModule } from '../products-details/products-details.module';


@NgModule({
  declarations: [MainCartComponent],
  imports: [
    CommonModule,
    MainCartRoutingModule,
    MatDividerModule,
    MatListModule,
    ProductsDetailsModule
  ]
})
export class MainCartModule { }
