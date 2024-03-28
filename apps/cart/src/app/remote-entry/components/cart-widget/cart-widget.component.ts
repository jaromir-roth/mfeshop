import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { map } from 'rxjs';

import { PricePipe } from '@jaromir-roth/shared';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-widget',
  standalone: true,
  imports: [AsyncPipe, PricePipe],
  template: `
    <span class="icon" [attr.data-quantity]="(quantity$ | async) || 0">
      <i class="pi pi-shopping-cart"></i>
    </span>
    <div class="content hidden sm:flex">
      <span class="title">Nákupní košík</span>
      <span class="subtitle">
        Zboží za
        <strong class="price">{{ (total$ | async) || 0 | price }}</strong>
      </span>
    </div>
  `,
  styleUrl: './cart-widget.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartWidgetComponent {
  #cart$ = inject(CartService).get();

  public readonly quantity$ = this.#cart$.pipe(map((cart) => cart.quantity));
  public readonly total$ = this.#cart$.pipe(map((cart) => cart.total));
}
