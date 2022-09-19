import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor() {}
  shopAddress = [
    "Tshirt Bazar Internet Private Limited,",
    "Buildings Alyssa, Begonia &",
    "Clove Embassy Tech Village,",
    "Outer Ring Road, Devarabeesanahalli Village,",
    "Bengaluru, 560103,",
    "Karnataka, India"
  ]

  about = ['Contact Us', 'About Us', 'Careers', 'Tshirt Bazar Stories', 'Press'];
  help = ['Payments', 'Shipping', 'Cancellation & Returns', 'FAQ'];
  social = ['Facebook', 'Twitter', 'YouTube'];
  mailus = this.shopAddress;
  address = this.shopAddress;
  countryName = "India";
}
