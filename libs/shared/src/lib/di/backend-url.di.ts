import { InjectionToken, Provider } from '@angular/core';

export const BACKEND_URL = new InjectionToken('BACKEND_URL');

export function provideBackendUrl(backendUrl: string): Provider[] {
  return [
    {
      provide: BACKEND_URL,
      useValue: backendUrl,
    },
  ];
}
