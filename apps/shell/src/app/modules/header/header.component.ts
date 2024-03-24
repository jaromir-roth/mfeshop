import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CartWidgetComponent } from './components/cart-widget/cart-widget.component';
import { LogoComponent } from './components/logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, CartWidgetComponent],
  template: `
    <app-logo />
    <app-cart-widget />
  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @apply py-6 px-4 sm:px-8;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
