import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { catchError, map, of } from 'rxjs';

import { Product } from '@jaromir-roth/shared';

import { ProductsService } from '../services/products.service';

export const productTitleResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot) => {
  const url = route.paramMap.get('url') as string;
  return inject(ProductsService)
    .getProductByUrl(url)
    .pipe(
      map((product: Product) => product?.name ?? ''),
      catchError(() => of('')),
    );
};
