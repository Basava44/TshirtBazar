import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductsService } from 'src/app/core/service/productservice.service';
import { Product } from 'src/app/shared/store-utilities/interfaces/product.interface';
import { QueryComponent } from '../query/query.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(
    private productService: ProductsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productService.products.subscribe((data) => {
      this.topPicks = data.slice(0, 8);
    });
  }

  topPicks: Product[] = [];
  openQuery() {
    this.dialog.open(QueryComponent);
  }
}
