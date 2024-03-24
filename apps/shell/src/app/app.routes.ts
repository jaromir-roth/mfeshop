import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('home/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'cart',
    loadChildren: () => import('cart/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'product',
    loadChildren: () => import('product/Routes').then((m) => m.remoteRoutes),
  },
];
