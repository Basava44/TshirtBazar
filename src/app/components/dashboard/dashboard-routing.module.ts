import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MenSectionComponent } from './men-section/men-section.component';
import { OffersComponent } from './offers/offers.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WomenSectionComponent } from './women-section/women-section.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: LandingPageComponent },
      { path: 'mens', component: MenSectionComponent },
      { path: 'womens', component: WomenSectionComponent },
      { path: 'offers', component: OffersComponent },
      { path: 'products/:id', component: ProductDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
