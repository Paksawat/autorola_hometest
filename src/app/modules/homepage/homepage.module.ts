import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuctionsModule } from '../auctions/auctions.module';

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule, SharedModule, AuctionsModule],
  exports: [HomepageComponent],
})
export class HomepageModule {}
