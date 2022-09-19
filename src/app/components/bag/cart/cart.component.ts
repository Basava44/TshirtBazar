import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/service/productservice.service';
import { Product } from 'src/app/shared/store-utilities/interfaces/product.interface';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  config = environment.config;

  constructor(
    private productService: ProductsService,
    private fb: FormBuilder,
    private router: Router,
    private snackbar: MatSnackBar
  ) {
    this.createForm();
  }

  showSizeChart: boolean = false;
  sizeChartSrc =
    'https://www.shopsflp.com/wp-content/uploads/2020/11/Men-tshirt-size-guide-2-600x600.jpg';

  products: Product[] = [];
  newDate!: Date;
  shippingForm!: FormGroup;

  ngOnInit(): void {
    this.productService.cartItems.subscribe((data) => {
      this.products = data;
    });
    this.amountCalculate();
  }

  totalAmount = 0;
  removeFromCart(item: Product) {
    this.productService.removeFromCart(item);
    this.amountCalculate();
  }

  amountCalculate() {
    this.totalAmount = 0;
    this.products.map((item) => {
      this.totalAmount +=
        item.discountedPrice > 0 ? item.discountedPrice : item.actualPrice;
    });
  }

  createForm() {
    this.shippingForm = this.fb.group({
      name: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.email, Validators.required]],
      address: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  placeOrder() {
    if (this.confirmSize()) {
      console.log(this.shippingForm.value);
      Swal.fire({
        title: `Your Order has Been Placed\n Pay ${this.config.localCurrency}${this.totalAmount}.00 While Delivery`,
        icon: 'success',
        confirmButtonText: 'Go to Mainpage',
        showCloseButton: true,
        footer: 'Thank You For Shopping with us',
      }).then(() => {
        this.productService.emptyCart();
        this.router.navigate(['/dashboard']);
      });
    } else {
      this.snackbar.open('Please Select Size of all Products', 'okay', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 2000,
      });
    }
  }

  goToProduct(id: number) {

    this.router.navigate(['dashboard', 'products', id]);
  }

  confirmSize(): boolean {
    let confirm: boolean = true;
    this.products.map((product: Product) => {
      console.log(product.selectedSize);
      if(product.selectedSize === '' || product.selectedSize === '-')
      confirm = false;
    });
    return confirm;
  }

  sizeSelect(size: string, id: number) {
    this.productService.selectedSize(size, id);
  }

  closeSizeChart() {
    this.showSizeChart = false;
  }

  openSizeChart() {
    this.showSizeChart = true;
  }
}
