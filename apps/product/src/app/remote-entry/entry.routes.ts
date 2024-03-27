import { Route } from '@angular/router';

import { ProductDetailPageComponent } from './pages/product-detail/product-detail.page.component';
import { ProductListPageComponent } from './pages/product-list/product-list-page.component';
import { productResolver } from './resolvers/product.resolver';

export const remoteRoutes: Route[] = [
  { path: '', component: ProductListPageComponent },
  { path: ':url', component: ProductDetailPageComponent, resolve: { product: productResolver } },
];
