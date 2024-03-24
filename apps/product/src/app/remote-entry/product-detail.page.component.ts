import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  template: `<p>product-detail works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailPageComponent {}
