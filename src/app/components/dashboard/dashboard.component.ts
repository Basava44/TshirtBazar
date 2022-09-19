import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private store: Store, private router: Router) {
    this.store
      .select((state) => state.users.loggedIn)
      .subscribe((data: boolean) => {
        if (!data) {
          this.router.navigate(['/']);
        }
      });
  }
}
