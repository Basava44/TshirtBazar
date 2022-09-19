import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/service/authGuard.service';
import { BagComponent } from './bag.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path: '',
    component: BagComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'cart' },
      { path: 'cart', component: CartComponent },
      { path: 'wishlist', component: WishlistComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BagRoutingModule {}
