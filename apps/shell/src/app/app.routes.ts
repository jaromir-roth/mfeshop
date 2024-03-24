import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('home/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'kosik',
    loadChildren: () => import('cart/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'produkty',
    loadChildren: () => import('product/Routes').then((m) => m.remoteRoutes),
  },
];
