import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [AppComponent, CarouselComponent, routingComponents],
  imports: [BrowserModule, AppRoutingModule, CarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
