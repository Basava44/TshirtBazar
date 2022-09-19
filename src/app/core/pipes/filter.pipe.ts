import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/shared/store-utilities/interfaces/product.interface';
import { ProductsService } from '../service/productservice.service';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  constructor(private productService: ProductsService) {}
  transform(value: Product[], ...args: any[]): Product[] {
    let products: Product[] = [];
    if (args[0] === 'remove' && args[1] === 'remove') {
      return value;
    }
    if (args[1] > 0) {
      value.map((item: Product) => {
        if (item.discountedPrice > 0) {
          if (item.discountedPrice <= args[1]) products.push(item);
        } else {
          if (item.actualPrice <= args[1]) products.push(item);
        }
      });
    } else {
      products = value;
    }
    if (args[0] === 'Relevence') {
      return products;
    } else if (args[0] === 'Price Low-High') {
      products.sort((a, b) => {
        if (a.discountedPrice && b.discountedPrice) {
          return a.discountedPrice > b.discountedPrice ? 1 : -1;
        } else if (a.discountedPrice && b.actualPrice) {
          return a.discountedPrice > b.actualPrice ? 1 : -1;
        } else if (a.actualPrice && b.discountedPrice) {
          return a.actualPrice > b.discountedPrice ? 1 : -1;
        } else {
          return a.actualPrice > b.actualPrice ? 1 : -1;
        }
      });
    } else if (args[0] === 'Price High-Low') {
      products.sort((a, b) => {
        if (a.discountedPrice && b.discountedPrice) {
          return a.discountedPrice > b.discountedPrice ? -1 : 1;
        } else if (a.discountedPrice && b.actualPrice) {
          return a.discountedPrice > b.actualPrice ? -1 : 1;
        } else if (a.actualPrice && b.discountedPrice) {
          return a.actualPrice > b.discountedPrice ? -1 : 1;
        } else {
          return a.actualPrice > b.actualPrice ? -1 : 1;
        }
      });
    }

    return products;
  }
}
