import { User } from '../interfaces/user.interface';

export class AddUser {
  static readonly type = '[User] Add';
  constructor(public payload: User) {}
}

export class LoggedIn {
  static readonly type = '[User] loggedIn Status';
}

export class AddToCart {
  static readonly type = '[Product] Add To Cart';
  constructor(public payload: any) {}
}

export class RemoveFromCart {
  static readonly type = '[Product] Remove From Cart';
  constructor(public payload: any) {}
}
