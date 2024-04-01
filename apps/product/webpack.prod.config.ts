import { withModuleFederation } from '@nx/angular/module-federation';

import config from './module-federation.config';

export default withModuleFederation({
  ...config,
  remotes: [['cart', 'https://jr-mfeshop-cart.netlify.app']],
});
