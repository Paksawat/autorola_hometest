import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionsComponent } from './auctions.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [AuctionsComponent],
  imports: [CommonModule, HttpClientModule, AppRoutingModule],
  exports: [AuctionsComponent],
})
export class AuctionsModule {}
