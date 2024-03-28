import { Route } from '@angular/router';

import { HomePageComponent } from './pages/home-page.component';

export const remoteRoutes: Route[] = [{ path: '', title: 'Úvodní strana', component: HomePageComponent }];
