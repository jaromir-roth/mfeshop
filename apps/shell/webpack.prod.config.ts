import { withModuleFederation } from '@nx/angular/module-federation';

import config from './module-federation.config';

export default withModuleFederation({
  ...config,
  remotes: [
    ['home', 'https://jr-mfeshop-home.netlify.app'],
    ['product', 'https://jr-mfeshop-product.netlify.app'],
    ['cart', 'https://jr-mfeshop-cart.netlify.app'],
  ],
});
