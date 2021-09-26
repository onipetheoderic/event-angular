import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { LoginComponent } from './login/login.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventListingComponent } from './event-listing/event-listing.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create_event', component: CreateEventComponent },
  { path: 'event_listing', component: EventListingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  HomeComponent,
  PromotionsComponent,
  LoginComponent,
  CreateEventComponent,
  EventListingComponent,
];
