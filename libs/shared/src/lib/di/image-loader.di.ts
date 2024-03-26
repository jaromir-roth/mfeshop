import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
import { Provider } from '@angular/core';

import { BACKEND_URL } from './backend-url.di';

export function provideImageLoader(): Provider[] {
  return [
    {
      provide: IMAGE_LOADER,
      useFactory(backendUrl: string) {
        return (config: ImageLoaderConfig) => {
          return `${backendUrl}images/${config.src}`;
        };
      },
      deps: [BACKEND_URL],
    },
  ];
}
