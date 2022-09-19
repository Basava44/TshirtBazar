import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/service/productservice.service';
import { Product } from 'src/app/shared/store-utilities/interfaces/product.interface';

@Component({
  selector: 'app-men-section',
  templateUrl: './men-section.component.html',
  styleUrls: ['./men-section.component.scss'],
})
export class MenSectionComponent implements OnInit {
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.products.subscribe((data) => {
      console.log(data);
      this.products = [];
      data.map((item: Product) => {
        if (item.idealFor === ('M' || 'B')) this.products.push(item);
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
