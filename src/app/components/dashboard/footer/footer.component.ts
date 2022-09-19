import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor() {}

  config = environment.config;

  about = ['Contact Us', 'About Us', 'Careers', 'Tshirt Bazar Stories', 'Press'];
  help = ['Payments', 'Shipping', 'Cancellation & Returns', 'FAQ'];
  social = ['Facebook', 'Twitter', 'YouTube'];
  mailus = this.config.address;
  address = this.config.address;
}
