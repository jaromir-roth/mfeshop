import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '@jaromir-roth/shared';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  #http = inject(HttpClient);

  public getProducts(): Observable<Product[]> {
    return this.#http.get<Product[]>('products');
  }

  public getFeaturedProducts(limit: number): Observable<Product[]> {
    return this.#http.get<Product[]>('products/featured', {
      params: { limit: limit.toString() },
    });
  }
}
