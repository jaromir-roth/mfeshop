import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { PricePipe } from '@jaromir-roth/shared';

@Component({
  selector: 'app-cart-total',
  standalone: true,
  imports: [PricePipe],
  template: `
    <!-- Quantity -->
    <div class="quantity">
      <small>Celkové množství:</small>
      <strong>{{ quantity }} ks</strong>
    </div>
    <!-- Total -->
    <div class="price">
      <small>Celková částka:</small>
      <strong>{{ total | price }}</strong>
    </div>
  `,
  styleUrl: './cart-total.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartTotalComponent {
  @Input({ required: true }) quantity!: number;
  @Input({ required: true }) total!: number;
}
