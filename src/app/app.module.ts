import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RocketComponent } from './rocket/rocket.component';
import { RocketDetailComponent } from './rocket/rocket-detail/rocket-detail.component';
import { RocketInformationComponent } from './rocket/rocket-detail/rocket-information/rocket-information.component';
import { HttpClientModule } from '@angular/common/http';
import { YearfilterPipe } from './rocket/rocket-detail/yearfilter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchRocketComponent } from './rocket/rocket-detail/search-rocket/search-rocket.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // JAAP: ↓ kan in losse rocket module
    RocketComponent,
    RocketDetailComponent,
    RocketInformationComponent,
    YearfilterPipe,
    SearchRocketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    // JAAP: rocketModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
