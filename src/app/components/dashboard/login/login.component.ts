import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { UserService } from 'src/app/core/service/user.service';
import { LoggedIn } from 'src/app/shared/store-utilities/actions/user.action';
import { User } from 'src/app/shared/store-utilities/interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private snackbar: MatSnackBar,
    private userService: UserService,
    private router: Router
  ) {
    this.createForm();
  }

  loginForm!: FormGroup;
  warningContent = 'Warning Message';

  openSnackBar(message: string, action: string) {
    const snackBarRef = this.snackbar.open(message, action, {
      duration: 3000,
    });

    snackBarRef.afterDismissed().subscribe(() => {
      this.loginForm.reset();
    });
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  verifyUser(user: User): boolean {
    const data = this.store.snapshot().users.users;
    let userFound: Boolean = false;
    data.map((_data: User) => {
      if (user.email === _data.email) {
        userFound = true;
      }
    });
    if (userFound) {
      return true;
    } else {
      return false;
    }
  }

  validatePassword(): boolean {
    const password = this.loginForm.value.password;
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if (password.length < 8) {
      this.warningContent =
        'Password should be greater than or equal to 8 Characters';
      this.openSnackBar(this.warningContent, 'okay');
      return false;
    }

    if (!password.match(lowerCaseLetters)) {
      this.warningContent = 'Password atleast should have one lowercase letter';
      this.openSnackBar(this.warningContent, 'okay');
      return false;
    }

    if (!password.match(upperCaseLetters)) {
      this.warningContent = 'Password atleast should have one uppercase letter';
      this.openSnackBar(this.warningContent, 'okay');
      return false;
    }

    if (!password.match(numbers)) {
      this.warningContent = 'Password atleast should have one number';
      this.openSnackBar(this.warningContent, 'okay');
      return false;
    }

    return true;
  }

  checkPassword(data: User): boolean {
    const users = this.store.snapshot().users.users;
    let userVerified = false;
    users.map((user: User) => {
      if (data.email === user.email) {
        if (data.password === user.password) {
          userVerified = true;
        } else {
          this.warningContent = 'Password is InCorrect';
          // this.warning = true;
          this.openSnackBar(this.warningContent, 'close');
        }
      }
    });

    if (userVerified) return true;
    else {
      return false;
    }
  }

  login() {
    const data: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    console.log(data);
    this.userService.signIn();
    this.router.navigate(['/']);
  }
}
