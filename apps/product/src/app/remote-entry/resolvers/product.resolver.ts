import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { catchError, of } from 'rxjs';

import { Product } from '@jaromir-roth/shared';

import { ProductsService } from '../services/products.service';

export const productResolver: ResolveFn<Product | null> = (route: ActivatedRouteSnapshot) => {
  const url = route.paramMap.get('url') as string;
  return inject(ProductsService)
    .getProductByUrl(url)
    .pipe(
      catchError((error) => {
        console.error(`Can't resolve product with url ${url} because of the error:`);
        console.error(error);
        return of(null);
      }),
    );
};
