import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './page/home/home.module';
import { MyUIModule } from 'src/app/modules/my-ui/my-ui.module';
import { AboutModule } from './page/about/about.module';
import { PageErrorModule } from './page/page-error/page-error.module';
import { DataServiceService } from './services/data-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    MyUIModule,
    AboutModule,
    PageErrorModule,
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
