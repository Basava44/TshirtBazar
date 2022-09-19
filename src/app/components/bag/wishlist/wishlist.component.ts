import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/service/productservice.service';
import { Product } from 'src/app/shared/store-utilities/interfaces/product.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {

  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  products: Product[] = [];
  localCurrency = '₹';

  ngOnInit(): void {
    this.productService.wishlistItems.subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(id: number) {
    this.productService.addToCart(id);
  }
  goToCart() {
    this.router.navigate(['/bag', 'cart']);
  }
  removeFromWishlist(item: Product) {
    this.productService.removeFromWishlist(item);
  }
}
