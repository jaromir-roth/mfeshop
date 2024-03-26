import { Route } from '@angular/router';

import { ProductDetailPageComponent } from './pages/product-detail.page.component';
import { ProductListPageComponent } from './pages/product-list-page.component';

export const remoteRoutes: Route[] = [
  { path: '', component: ProductListPageComponent },
  { path: ':id', component: ProductDetailPageComponent },
];
