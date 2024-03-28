import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { ButtonComponent, CartItem, PricePipe, QuantityInputComponent } from '@jaromir-roth/shared';

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

  public changeItemQuantity(item: CartItem, quantity: number) {
    console.log('Changing item quantity...', { item, quantity });
  }

  public removeItem(item: CartItem) {
    console.log('Removing item from cart...', { item });
  }
}
