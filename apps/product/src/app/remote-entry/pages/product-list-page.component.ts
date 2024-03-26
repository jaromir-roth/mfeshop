import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FeaturedProductsComponent } from '../components/featured-products/featured-products.component';

@Component({
  selector: 'app-product-list-page',
  standalone: true,
  imports: [FeaturedProductsComponent],
  template: `<app-featured-products />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListPageComponent {}
