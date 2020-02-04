import { NgModule, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { SearchResultComponent } from './search-result/search-result.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ClickButtonResultComponent } from './click-button-result/click-button-result.component';


@NgModule({
  declarations: [NavBarComponent, SearchBarComponent, SearchResultComponent, ClickButtonResultComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule
  ],
  exports: [
    NavBarComponent,
    SearchBarComponent,
    SearchResultComponent,
    ClickButtonResultComponent
  ]
})
export class MyUIModule { }
