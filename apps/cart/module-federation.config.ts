import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'cart',
  exposes: {
    './Routes': 'apps/cart/src/app/remote-entry/entry.routes.ts',
    './Widget': 'apps/cart/src/app/remote-entry/components/cart-widget/cart-widget.component.ts',
  },
};

export default config;
