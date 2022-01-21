import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RocketComponent } from './rocket/rocket.component';
import { RocketDetailComponent } from './rocket/rocket-detail/rocket-detail.component';
import { RocketInformationComponent } from './rocket/rocket-detail/rocket-information/rocket-information.component'
import { HttpClientModule } from '@angular/common/http';
import { YearfilterPipe } from './rocket/rocket-detail/yearfilter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RocketComponent,
    RocketDetailComponent,
    RocketInformationComponent,
    YearfilterPipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
