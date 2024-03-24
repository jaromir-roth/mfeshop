import { Route } from '@angular/router';

import { ProductDetailPageComponent } from './product-detail.page.component';
import { ProductListPageComponent } from './product-list-page.component';

export const remoteRoutes: Route[] = [
  { path: '', component: ProductListPageComponent },
  { path: ':id', component: ProductDetailPageComponent },
];
