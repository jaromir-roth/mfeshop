import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cart-widget',
  standalone: true,
  template: `
    <span class="icon" data-quantity="0">
      <i class="pi pi-shopping-cart"></i>
    </span>
    <div class="content hidden sm:flex">
      <span class="title">Nákupní košík</span>
      <span class="subtitle">Zboží za <strong class="price">0 kč</strong></span>
    </div>
  `,
  styleUrl: './cart-widget.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartWidgetComponent {}
