import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list-page',
  standalone: true,
  imports: [AsyncPipe, ProductCardComponent],
  template: `
    <h1 class="text-2xl font-bold mt-2 mb-8 text-center leading-tight">Výpis produktů</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      @if (products$ | async; as products) {
        @for (product of products; track product.id) {
          <app-product-card [product]="product" />
        }
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListPageComponent {
  #productsService = inject(ProductsService);

  public readonly products$ = this.#productsService.getProducts();
}
