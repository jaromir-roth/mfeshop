import { HttpInterceptorFn, provideHttpClient as provideNgHttpClient, withInterceptors } from '@angular/common/http';
import { EnvironmentProviders, inject } from '@angular/core';

import { BACKEND_URL } from './backend-url.di';

const ApiBaseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const backendUrl = inject(BACKEND_URL);
  const apiReq = req.clone({
    url: `${backendUrl}api/${req.url}`,
  });
  return next(apiReq);
};

export function provideHttpClient(): EnvironmentProviders {
  return provideNgHttpClient(withInterceptors([ApiBaseUrlInterceptor]));
}
