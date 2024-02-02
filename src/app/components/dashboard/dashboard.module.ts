import {
  CUSTOM_ELEMENTS_SCHEMA,
  Injector,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCarouselModule } from 'ng-mat-carousel';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatChipsModule } from '@angular/material/chips';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { PostersComponent } from './posters/posters.component';
import { ProductComponent } from './product/product.component';
import { QueryComponent } from './query/query.component';
import { MenSectionComponent } from './men-section/men-section.component';
import { OffersComponent } from './offers/offers.component';
import { WomenSectionComponent } from './women-section/women-section.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FilterComponent } from './filter/filter.component';
import { FilterPipe } from 'src/app/core/pipes/filter.pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    LandingPageComponent,
    FooterComponent,
    PostersComponent,
    ProductComponent,
    QueryComponent,
    MenSectionComponent,
    OffersComponent,
    WomenSectionComponent,
    ProductDetailsComponent,
    FilterComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCarouselModule.forRoot(),
    MatCardModule,
    MatSnackBarModule,
    MatRippleModule,
    MatBadgeModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatRadioModule,
    MatSliderModule,
    MatChipsModule,
  ],
  entryComponents: [ProductComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {
  // constructor(injector: Injector) {
  //   const element = createCustomElement(ProductComponent, {
  //     injector: injector,
  //   });
  //   customElements.define('individual-product', element);
  // }
}
