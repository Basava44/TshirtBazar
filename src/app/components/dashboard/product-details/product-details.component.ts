import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/service/productservice.service';
import { Product } from 'src/app/shared/store-utilities/interfaces/product.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {


  config = environment.config;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.products.subscribe((data) => {
      this.route.params.subscribe((object) => {
        this.product = data[object.id];
      });
    });
  }

  showSizeChart: boolean = false;
  sizeChartSrc =
    'https://www.shopsflp.com/wp-content/uploads/2020/11/Men-tshirt-size-guide-2-600x600.jpg';

  stock!: string;

  product!: Product;

  getDiscount(item: Product): number {
    return item.discountedPrice > 0
      ? Math.round(
          ((item.actualPrice - item.discountedPrice) / item.actualPrice) * 100
        )
      : 0;
  }

  addToCart() {
    this.productService.addToCart(this.product.id);
  }
  goToCart() {
    this.router.navigate(['/bag', 'cart']);
  }
  addToWishlist() {
    this.productService.addToWishlist(this.product.id);
  }
  goToWishlist() {
    this.router.navigate(['/bag', 'wishlist']);
  }
  getStock(size: any) {
    this.stock = ` - last ${size.stock} pieces available`;
  }

  closeSizeChart() {
    this.showSizeChart = false;
  }

  openSizeChart() {
    this.showSizeChart = true;
  }
}
