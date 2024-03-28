import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ButtonComponent } from '@jaromir-roth/shared';

import { CartItemsComponent } from '../../components/cart-items/cart-items.component';
import { CartTotalComponent } from '../../components/cart-total/cart-total.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [AsyncPipe, ButtonComponent, CartItemsComponent, CartTotalComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartPageComponent {
  public readonly cart$ = inject(CartService).get();

  public submitOrder() {
    alert('Not implemented yet!');
  }
}
