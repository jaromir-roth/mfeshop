import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cart-widget',
  standalone: true,
  template: `<p>Cart-widget works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartWidgetComponent {}
