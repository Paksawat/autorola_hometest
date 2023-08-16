import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuctionsModule } from './modules/auctions/auctions.module';
import { HttpClientModule } from '@angular/common/http';
import { HomepageModule } from './modules/homepage/homepage.module';
import { VehiclesModule } from './modules/vehicles/vehicles.module';
import { AuctionResultModule } from './modules/auction-result/auction-result.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuctionsModule,
    HttpClientModule,
    HomepageModule,
    AuctionsModule,
    VehiclesModule,
    AuctionResultModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
