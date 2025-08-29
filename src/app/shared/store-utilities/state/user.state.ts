import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import {
  AddToCart,
  AddUser,
  LoggedIn,
  RemoveFromCart,
} from '../actions/user.action';
import { User } from '../interfaces/user.interface';

export class UserStateModel {
  users!: User[];
  loggedIn!: boolean;
  cart!: any;
}

@State<UserStateModel>({
  name: 'users',
  defaults: {
    users: [
      { email: 'karibasaveshwara.tg@moonraft.com', password: 'basava@123' },
    ],
    loggedIn: false,
    cart: [],
  },
})
@Injectable({providedIn: 'root'})
export class UserState {
  @Action(AddUser)
  add(
    { getState, patchState }: StateContext<UserStateModel>,
    { payload }: AddUser
  ): void {
    const state = getState();
    patchState({
      users: [...state.users, payload],
    });
  }

  @Action(LoggedIn)
  logged({ getState, patchState }: StateContext<UserStateModel>): void {
    const state = getState();
    patchState({
      loggedIn: !state.loggedIn,
    });
  }

  @Action(AddToCart)
  addtoCart(
    { getState, patchState }: StateContext<UserStateModel>,
    { payload }: AddToCart
  ): void {
    const state = getState();
    patchState({
      cart: [...state.cart, payload],
    });
  }

  @Action(RemoveFromCart)
  removefromCart(
    { getState, patchState }: StateContext<UserStateModel>,
    { payload }: RemoveFromCart
  ): void {
    let state = getState().cart;
    state = state.filter((data: any) => {
      return data.id != payload.id;
    });
    patchState({
      cart: state,
    });
  }
}
