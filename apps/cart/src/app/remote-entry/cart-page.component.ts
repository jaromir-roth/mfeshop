import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  template: `<p>Cart-page works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartPageComponent {}
