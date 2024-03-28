import { Route } from '@angular/router';

import { CartPageComponent } from './pages/cart/cart-page.component';

export const remoteRoutes: Route[] = [{ path: '', title: 'Nákupní košík', component: CartPageComponent }];
