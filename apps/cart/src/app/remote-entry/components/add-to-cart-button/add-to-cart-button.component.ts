import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';

import { ButtonComponent } from '@jaromir-roth/shared';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-add-to-cart-button',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <app-button [size]="'large'" (click)="onAddToCart()">
      Přidat do košíku <i class="pi pi-cart-plus font-medium ml-2.5 text-lg"></i>
    </app-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddToCartButtonComponent {
  @Input({ required: true }) productId!: string;
  @Input({ required: true }) quantity!: number;

  #cartService = inject(CartService);

  public onAddToCart() {
    this.#cartService.addProduct(this.productId, this.quantity);
  }
}
