import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductsService } from 'src/app/core/service/productservice.service';
import { Product } from 'src/app/shared/store-utilities/interfaces/product.interface';

@Component({
  // selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {

  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}
  
  localCurrency = "₹";

  @Input()
  item!: Product;
  // = {
  //   id: 0,
  //   name: '',
  //   type: '',
  //   actualPrice: 0,
  //   discountedPrice: 0,
  //   img: '',
  //   size: [],
  //   selectedSize: '',
  //   wishlist: false,
  //   cart: false,
  //   rating: 0,
  //   idealFor: ''
  // };
  

  getDiscount(item: Product): number {
    return item.discountedPrice > 0
      ? Math.round(
          ((item.actualPrice - item.discountedPrice) / item.actualPrice) * 100
        )
      : 0;
  }

  openProduct(id: Number) {
    this.router.navigate(['dashboard', 'products', id]);
  }

  addToWishlist() {
    this.productService.addToWishlist(this.item.id);
  }

  goToWishlist() {
    this.router.navigate(['/bag', 'wishlist']);
  }
}
