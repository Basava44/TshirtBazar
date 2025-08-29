import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ProductsService } from 'src/app/core/service/productservice.service';
import { UserService } from 'src/app/core/service/user.service';
import { Product } from 'src/app/shared/store-utilities/interfaces/product.interface';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  localCurrency = '₹';
  logoImgPath = 'assets/images/Logo-India(2x).png';

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.loggedIn = this.userService.userLoggedIn();
    this.productService.cartItems.subscribe((data) => {
      this.cost = -100;
      data.map((item: Product) => {
        this.cost +=
          item.discountedPrice > 0 ? item.discountedPrice : item.actualPrice;
      });
      this.cartItems = data.length;
    });
    this.productService.wishlistItems.subscribe((data) => {
      this.wishlistItems = data.length;
    });
  }

  loggedIn: Boolean = false;
  cartItems: number = 0;
  cost: number = 0;
  wishlistItems: number = 0;
  navOpen = false;

  topNav: string[] = ['Support', 'Delivery', 'Legal', 'About Us'];
  navItems = [
    { item: 'Home', path: 'dashboard' },
    { item: 'Men', path: '/dashboard/mens' },
    { item: 'Women', path: '/dashboard/womens' },
    { item: 'offers', path: '/dashboard/offers' },
  ];

  register() {
    this.dialog.open(RegisterComponent);
  }

  login() {
    this.dialog.open(LoginComponent);
  }

  logOut() {
    this.userService.signOut();
    window.location.reload();
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }
}
