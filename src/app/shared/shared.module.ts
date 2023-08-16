import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCardComponent } from './components/car-card/car-card.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SearchComponent } from './components/search/search.component';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CarCardComponent,
    NavigationComponent,
    SearchComponent,
    FooterComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule],
  exports: [
    NavigationComponent,
    CarCardComponent,
    SearchComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
