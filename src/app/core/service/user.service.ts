import { Injectable } from '@angular/core';

const loggedIn = 'LoggedIn';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  signOut(): void {
    window.sessionStorage.clear();
  }

  signIn() {
    window.sessionStorage.removeItem(loggedIn);
    window.sessionStorage.setItem(loggedIn, 'yes');
  }

  userLoggedIn() {
    if (window.sessionStorage.getItem(loggedIn) === 'yes') return true;
    else return false;
  }

  isUserLoggedIn() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.userLoggedIn());
      }, 80);
    });
    return promise;
  }
}
