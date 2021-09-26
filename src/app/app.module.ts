import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './carousel/carousel.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { LoginComponent } from './login/login.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventListingComponent } from './event-listing/event-listing.component';
import { CrudService } from './crud.service';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    routingComponents,
    InfoCardComponent,
    LoginComponent,
    CreateEventComponent,
    EventListingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [CrudService],
  bootstrap: [AppComponent],
})
export class AppModule {}
