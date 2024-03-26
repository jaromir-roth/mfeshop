import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [AsyncPipe, ProductCardComponent],
  template: `
    <h2>Doporučené produkty</h2>
    <div class="container">
      @if (featuredProducts$ | async; as products) {
        @for (product of products; track product.id) {
          <app-product-card [product]="product" />
        }
      }
    </div>
  `,
  styleUrl: './featured-products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedProductsComponent {
  #productsService = inject(ProductsService);

  public readonly featuredProducts$ = this.#productsService.getFeaturedProducts(4);
}
