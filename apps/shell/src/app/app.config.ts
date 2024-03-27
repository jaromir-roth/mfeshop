import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { provideBackendUrl, provideHttpClient, provideImageLoader } from '@jaromir-roth/shared';

import { environment } from '../environments/environment';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withComponentInputBinding()),
    provideBackendUrl(environment.backendUrl),
    provideHttpClient(),
    provideImageLoader(),
  ],
};
