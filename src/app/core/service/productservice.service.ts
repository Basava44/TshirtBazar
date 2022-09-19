import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/shared/store-utilities/interfaces/product.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private userService: UserService,
    private snackbar: MatSnackBar
  ) {}

  cart: Product[] = [];
  wishlist: Product[] = [];

  product: Product[] = [
    {
      id: 0,
      name: 'HRX by Hrithik Roshan',
      img: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      type: 'Printed T-shirt',
      discountedPrice: 0,
      actualPrice: 688,
      wishlist: false,
      cart: false,
      rating: 4,
      size: [
        { type: 'S', stock: 10 },
        { type: 'M', stock: 0 },
        { type: 'L', stock: 1 },
        { type: 'XL', stock: 2 },
        { type: 'XXL', stock: 5 },
      ],
      selectedSize: '',
      idealFor: 'M',
    },
    {
      id: 1,
      name: 'Roadster',
      img: 'https://merchshop.in/wp-content/uploads/2019/05/github-the-place-where-i-fork-black-t-shirts.jpg',
      type: 'Printed Round Neck T-Shirt',
      actualPrice: 499,
      discountedPrice: 0,
      wishlist: false,
      cart: false,
      rating: 4,
      size: [
        { type: 'S', stock: 10 },
        { type: 'M', stock: 0 },
        { type: 'L', stock: 1 },
        { type: 'XL', stock: 2 },
        { type: 'XXL', stock: 5 },
      ],
      selectedSize: '',
      idealFor: 'M',
    },
    {
      id: 2,
      name: 'Moda Rapido Round Neck',
      img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      type: 'Printed T-shirt',
      discountedPrice: 384,
      actualPrice: 1099,
      wishlist: false,
      cart: false,
      rating: 4,
      size: [
        { type: 'S', stock: 10 },
        { type: 'M', stock: 0 },
        { type: 'L', stock: 1 },
        { type: 'XL', stock: 2 },
        { type: 'XXL', stock: 5 },
      ],
      selectedSize: '',
      idealFor: 'M',
    },
    {
      id: 3,
      name: 'Dillinger',
      img: 'https://images.bewakoof.com/t540/friends-logo-half-sleeve-t-shirt-frl-men-s-printed-t-shirts-234662-1630836298.jpg',
      type: 'Red Striped Round Neck T-shirt',
      actualPrice: 1199,
      discountedPrice: 999,
      wishlist: false,
      cart: false,
      rating: 4,
      size: [
        { type: 'S', stock: 10 },
        { type: 'M', stock: 10 },
        { type: 'L', stock: 1 },
        { type: 'XL', stock: 2 },
        { type: 'XXL', stock: 5 },
      ],
      selectedSize: '',
      idealFor: 'M',
    },
    {
      id: 4,
      name: 'Nautica',
      img: 'https://ih1.redbubble.net/image.604459680.9730/ssrco,classic_tee,mens,101010:01c5ca27c6,front_alt,square_product,600x600.u2.jpg',
      type: 'Typography Printed T-shirt',
      actualPrice: 1699,
      discountedPrice: 0,
      wishlist: false,
      cart: false,
      rating: 4,
      size: [
        { type: 'S', stock: 10 },
        { type: 'M', stock: 5 },
        { type: 'L', stock: 1 },
        { type: 'XL', stock: 2 },
        { type: 'XXL', stock: 0 },
      ],
      selectedSize: '',
      idealFor: 'M',
    },
    {
      id: 5,
      name: 'HRX by Hrithik Roshan',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9vl0DU-9n-hBPykp5jud4I23-1pIaXm_daw&usqp=CAU',
      type: 'Printed T-shirt',
      actualPrice: 688,
      discountedPrice: 0,
      wishlist: false,
      cart: false,
      rating: 4,
      size: [
        { type: 'S', stock: 10 },
        { type: 'M', stock: 2 },
        { type: 'L', stock: 1 },
        { type: 'XL', stock: 0 },
        { type: 'XXL', stock: 5 },
      ],
      selectedSize: '',
      idealFor: 'M',
    },
    {
      id: 6,
      name: 'Roadster',
      img: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      type: 'Printed Round Neck T-Shirt',
      discountedPrice: 249,
      actualPrice: 499,
      wishlist: false,
      cart: false,
      rating: 4,
      size: [
        { type: 'S', stock: 10 },
        { type: 'M', stock: 0 },
        { type: 'L', stock: 1 },
        { type: 'XL', stock: 2 },
        { type: 'XXL', stock: 5 },
      ],
      selectedSize: '',
      idealFor: 'M',
    },
    {
      id: 7,
      name: 'Moda Rapido Round Neck',
      img: 'https://merchshop.in/wp-content/uploads/2019/05/github-the-place-where-i-fork-black-t-shirts.jpg',
      type: 'Printed T-shirt',
      actualPrice: 1099,
      discountedPrice: 499,
      wishlist: false,
      cart: false,
      rating: 4,
      size: [
        { type: 'S', stock: 10 },
        { type: 'M', stock: 0 },
        { type: 'L', stock: 1 },
        { type: 'XL', stock: 2 },
        { type: 'XXL', stock: 5 },
      ],
      selectedSize: '',
      idealFor: 'M',
    },
    {
      id: 8,
      name: 'Dillinger',
      img: 'https://www.beyoung.in/api/cache/catalog/products/merry_bugs_bunny_red/merry_bugs_bunny_red_men_model_400x400.jpg',
      type: 'Red Striped Round Neck T-shirt',
      actualPrice: 1199,
      discountedPrice: 499,
      wishlist: false,
      cart: false,
      rating: 4,
      size: [
        { type: 'S', stock: 10 },
        { type: 'M', stock: 0 },
        { type: 'L', stock: 1 },
        { type: 'XL', stock: 2 },
        { type: 'XXL', stock: 5 },
      ],
      selectedSize: '',
      idealFor: 'M',
    },
    {
      id: 9,
      name: 'Nautica',
      img: 'https://ih1.redbubble.net/image.604459680.9730/ssrco,classic_tee,mens,101010:01c5ca27c6,front_alt,square_product,600x600.u2.jpg',
      type: 'Typography Printed T-shirt',
      discountedPrice: 764,
      actualPrice: 1699,
      wishlist: false,
      cart: false,
      rating: 4,
      size: [
        { type: 'S', stock: 10 },
        { type: 'M', stock: 0 },
        { type: 'L', stock: 1 },
        { type: 'XL', stock: 2 },
        { type: 'XXL', stock: 5 },
      ],
      selectedSize: '',
      idealFor: 'M',
    },
    {
      id: 10,
      name: 'HRX by Hrithik Roshan',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9vl0DU-9n-hBPykp5jud4I23-1pIaXm_daw&usqp=CAU',
      type: 'Printed T-shirt',
      actualPrice: 688,
      discountedPrice: 0,
      wishlist: false,
      cart: false,
      rating: 4,
      size: [
        { type: 'S', stock: 10 },
        { type: 'M', stock: 0 },
        { type: 'L', stock: 1 },
        { type: 'XL', stock: 2 },
        { type: 'XXL', stock: 5 },
      ],
      selectedSize: '',
      idealFor: 'M',
    },
    {
      id: 11,
      name: 'Roadster',
      img: 'https://5.imimg.com/data5/LC/UO/MY-12867087/men-stylish-t-shirt-500x500.jpg',
      type: 'Printed Round Neck T-Shirt',
      actualPrice: 499,
      discountedPrice: 0,
      wishlist: false,
      cart: false,
      rating: 4,
      size: [
        { type: 'S', stock: 10 },
        { type: 'M', stock: 0 },
        { type: 'L', stock: 1 },
        { type: 'XL', stock: 2 },
        { type: 'XXL', stock: 5 },
      ],
      selectedSize: '',
      idealFor: 'M',
    },
    {
      id: 12,
      name: 'HRX by Hrithik Roshan',
      img: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      type: 'Printed T-shirt',
      discountedPrice: 279,
      actualPrice: 688,
      wishlist: false,
      cart: false,
      rating: 4,
      size: [
        { type: 'S', stock: 10 },
        { type: 'M', stock: 0 },
        { type: 'L', stock: 1 },
        { type: 'XL', stock: 2 },
        { type: 'XXL', stock: 5 },
      ],
      selectedSize: '',
      idealFor: 'M',
    },
    {
      id: 13,
      name: 'Roadster',
      img: 'https://merchshop.in/wp-content/uploads/2019/05/github-the-place-where-i-fork-black-t-shirts.jpg',
      type: 'Printed Round Neck T-Shirt',
      actualPrice: 499,
      discountedPrice: 0,
      wishlist: false,
      cart: false,
      rating: 4,
      size: [
        { type: 'S', stock: 10 },
        { type: 'M', stock: 0 },
        { type: 'L', stock: 1 },
        { type: 'XL', stock: 2 },
        { type: 'XXL', stock: 5 },
      ],
      selectedSize: '',
      idealFor: 'M',
    },
    {
      id: 14,
      name: 'Moda Rapido Round Neck',
      img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      type: 'Printed T-shirt',
      discountedPrice: 384,
      actualPrice: 1099,
      wishlist: false,
      cart: false,
      rating: 4,
      size: [
        { type: 'S', stock: 10 },
        { type: 'M', stock: 0 },
        { type: 'L', stock: 1 },
        { type: 'XL', stock: 2 },
        { type: 'XXL', stock: 5 },
      ],
      selectedSize: '',
      idealFor: 'M',
    },
    {
      id: 15,
      name: 'Dillinger',
      img: 'https://images.bewakoof.com/t540/friends-logo-half-sleeve-t-shirt-frl-men-s-printed-t-shirts-234662-1630836298.jpg',
      type: 'Red Striped Round Neck T-shirt',
      actualPrice: 1199,
      discountedPrice: 0,
      wishlist: false,
      cart: false,
      rating: 4,
      size: [
        { type: 'S', stock: 10 },
        { type: 'M', stock: 0 },
        { type: 'L', stock: 1 },
        { type: 'XL', stock: 2 },
        { type: 'XXL', stock: 5 },
      ],
      selectedSize: '',
      idealFor: 'M',
    },
  ];

  products = new BehaviorSubject<Product[]>(this.product);
  cartItems = new BehaviorSubject<Product[]>(this.cart);
  wishlistItems = new BehaviorSubject<Product[]>(this.wishlist);

  addToCart(index: number) {
    if (this.userService.userLoggedIn()) {
      let product = this.product.slice();
      product[index].cart = true;
      this.products.next(product);
      this.cart.push(product[index]);
      this.cartItems.next(this.cart);
    } else {
      this.openSnackbar();
    }
  }

  selectedSize(size: string, id: number) {
    this.product[id].selectedSize = size;
    this.products.next(this.product);
  }

  addToWishlist(index: number) {
    if (this.userService.userLoggedIn()) {
      let product = this.product.slice();
      product[index].wishlist = true;
      this.products.next(product);
      this.wishlist.push(product[index]);
      this.wishlistItems.next(this.wishlist);
    } else {
      this.openSnackbar();
    }
  }

  removeFromCart(item: Product) {
    this.cart = this.cart.filter((product: Product) => {
      if (item.id === product.id) {
        this.product[item.id].cart = false;
      }
      return item.id !== product.id;
    });
    this.cartItems.next(this.cart);
  }

  removeFromWishlist(item: Product) {
    this.wishlist = this.wishlist.filter((product: Product) => {
      if (item.id === product.id) {
        this.product[item.id].wishlist = false;
      }
      return item.id !== product.id;
    });
    this.wishlistItems.next(this.wishlist);
  }

  emptyCart() {
    this.product.map((item: Product) => {
      item.cart = false;
      item.selectedSize = '';
    });
    this.cart = [];
    this.cartItems.next(this.cart);
  }

  openSnackbar() {
    this.snackbar.open('Please Login/Register', 'Okay', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 3000,
    });
  }
}
