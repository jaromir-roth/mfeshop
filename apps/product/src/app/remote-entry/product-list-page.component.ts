import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-list-page',
  standalone: true,
  template: `<p>product-list-page works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListPageComponent {}
