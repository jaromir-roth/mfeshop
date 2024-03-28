import { Route } from '@angular/router';

import { ProductDetailPageComponent } from './pages/product-detail/product-detail.page.component';
import { ProductListPageComponent } from './pages/product-list/product-list-page.component';
import { productDataResolver } from './resolvers/product-data.resolver';
import { productTitleResolver } from './resolvers/product-title.resolver';

export const remoteRoutes: Route[] = [
  { path: '', title: 'Výpis produktů', component: ProductListPageComponent },
  {
    path: ':url',
    title: productTitleResolver,
    component: ProductDetailPageComponent,
    resolve: { product: productDataResolver },
  },
];
