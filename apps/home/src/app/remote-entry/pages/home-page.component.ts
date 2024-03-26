import { Component } from '@angular/core';

import { BannerComponent } from '../components/banner/banner.component';
import { FeaturedProductsComponent } from '../components/featured-products/featured-products.component';

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [BannerComponent, FeaturedProductsComponent],
  template: `
    <app-banner class="mb-8" />
    <app-featured-products />
  `,
})
export class HomePageComponent {}
