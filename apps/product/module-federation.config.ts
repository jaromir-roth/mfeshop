import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'product',
  exposes: {
    './Routes': 'apps/product/src/app/remote-entry/entry.routes.ts',
    './FeaturedWidget':
      'apps/product/src/app/remote-entry/components/featured-products/featured-products.component.ts',
  },
};

export default config;
