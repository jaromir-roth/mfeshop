import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ButtonComponent, PricePipe, Product, QuantityInputComponent } from '@jaromir-roth/shared';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [FormsModule, NgOptimizedImage, PricePipe, ButtonComponent, QuantityInputComponent],
  template: `
    @if (product) {
      <div class="image">
        <img [ngSrc]="product.imageUrl" [alt]="product.name" [width]="96" [height]="96" />
      </div>
      <div class="info">
        <h1>{{ product.name }}</h1>
        <p>{{ product.description }}</p>
        <div class="stock-price">
          <div class="stock">
            <span>Skladem</span>
            <small>připraveno k odeslání</small>
          </div>
          <div class="price">{{ product.price | price }}</div>
        </div>
        <div class="add-to-cart">
          <app-quantity-input [(ngModel)]="quantity" [size]="'large'" />
          <app-button [size]="'large'" (click)="onAddToCart()">
            Přidat do košíku <i class="pi pi-cart-plus font-medium ml-2.5 text-lg"></i>
          </app-button>
        </div>
      </div>
    }
  `,
  styleUrl: './product-detail.page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailPageComponent implements OnInit {
  @Input({ required: true }) product!: Product | null;

  #router = inject(Router);

  public readonly quantity = 1;

  public ngOnInit() {
    if (!this.product) {
      this.#router.navigate(['/produkty']);
    }
  }

  public onAddToCart() {
    console.log('Adding product to cart...', { quantity: this.quantity });
  }
}
