import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MyUIModule } from 'src/app/modules/my-ui/my-ui.module';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
// import { DataServiceService } from 'src/app/services/data-service.service';
// import { NavBarComponent } from 'src/app/modules/my-ui/nav-bar/nav-bar.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule,
    CommonModule,
    MyUIModule,
    MatListModule,
    MatButtonModule
    // NavBarComponent,
    // DataServiceService
  ]
})
export class HomeModule { }
