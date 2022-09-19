import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/service/productservice.service';
import { Product } from 'src/app/shared/store-utilities/interfaces/product.interface';

@Component({
  selector: 'app-women-section',
  templateUrl: './women-section.component.html',
  styleUrls: ['./women-section.component.scss'],
})
export class WomenSectionComponent implements OnInit {
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.products.subscribe((data) => {
      this.products = [];
      data.map((item: Product) => {
        if (item.idealFor === ('W'||'B')) this.products.push(item);
      });
    });
  }

  products: Product[] = [];
}
