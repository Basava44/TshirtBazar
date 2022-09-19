import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/service/productservice.service';
import { Product } from 'src/app/shared/store-utilities/interfaces/product.interface';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.products.subscribe((data) => {
      this.products = [];
      data.map((item: Product) => {
        if (item.discountedPrice > 0) this.products.push(item);
      });
    });
  }

  products: Product[] = [];

  sortValue!: string;
  price!: number;

  filterValues(values: any) {
    this.sortValue = values.sort;
    this.price = values.price;
  }
}
