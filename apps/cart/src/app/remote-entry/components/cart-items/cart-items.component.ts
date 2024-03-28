import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { ButtonComponent, CartItem, PricePipe, QuantityInputComponent } from '@jaromir-roth/shared';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-items',
  standalone: true,
  imports: [FormsModule, RouterLink, NgOptimizedImage, QuantityInputComponent, PricePipe, ButtonComponent],
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemsComponent {
  @Input({ required: true }) items: CartItem[] = [];

  #cartService = inject(CartService);

  public changeItemQuantity(item: CartItem, quantity: number) {
    this.#cartService.updateProductQuantity(item.product.id, quantity);
  }

  public removeItem(item: CartItem) {
    this.#cartService.removeProduct(item.product.id);
  }
}
