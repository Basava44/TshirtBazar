import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() filterValues: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild(MatAccordion) accordion!: MatAccordion;
  selectedSort = 'Relevence';
  sortOptions: string[] = [
    'Relevence',
    'Price Low-High',
    'Price High-Low',
    // 'Discount Low-High',
    // 'Discount High-Low',
  ];
  priceValue = 0;

  changeInFilter(sort?: string) {
    this.filterValues.emit({
      sort: sort,
      price: this.priceValue,
    });
  }

  removeAllFilters() {
    this.filterValues.emit({ sort: 'remove', price: 'remove' });
  }

  // CHIPS

  sortFilter: string[] = [];
  priceFilter: string[] = [];

  filters: string[] = [];

  remove(filter: string): void {
    const index = this.filters.indexOf(filter);

    if (index >= 0) {
      this.filters.splice(index, 1);
    }
    if (this.filters.length === 0) {
      this.priceFilter.pop();
      this.sortFilter.pop();
      this.priceValue = 0;
      this.selectedSort = 'Relevence';
      this.removeAllFilters();
    }
  }

  addSortFilter(value: string) {
    this.sortFilter.pop();
    this.sortFilter.push(value);
    this.filters = [...this.priceFilter, ...this.sortFilter];
  }
  addPriceFilter(value: any) {
    this.priceFilter.pop();
    this.priceFilter.push(`below ₹ ${value}`);
    this.filters = [...this.priceFilter, ...this.sortFilter];
  }
}
