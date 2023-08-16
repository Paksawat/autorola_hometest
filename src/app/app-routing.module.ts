import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionsComponent } from './modules/auctions/auctions.component';
import { VehiclesComponent } from './modules/vehicles/vehicles.component';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { AuctionResultComponent } from './modules/auction-result/auction-result.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'auctions',
    component: AuctionsComponent,
  },
  {
    path: 'auction_result',
    component: AuctionResultComponent,
  },
  {
    path: 'vehicles',
    component: VehiclesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
