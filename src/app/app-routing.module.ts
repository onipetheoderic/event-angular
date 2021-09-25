import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PromotionsComponent } from './promotions/promotions.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'promotions', component: PromotionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [HomeComponent, PromotionsComponent];
