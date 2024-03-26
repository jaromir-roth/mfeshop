import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ButtonComponent, PricePipe, Product } from '@jaromir-roth/shared';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage, PricePipe, ButtonComponent],
  template: `<a [routerLink]="['produkty', product.url]">
    <div class="image">
      <img
        [ngSrc]="product.imageUrl"
        [alt]="product.name"
        [width]="64"
        [height]="64"
      />
    </div>
    <h3>{{ product.name }}</h3>
    <div class="info">
      <span class="price">{{ product.price | price }}</span>
      <app-button [size]="'small'">Detail</app-button>
    </div>
  </a>`,
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
}
