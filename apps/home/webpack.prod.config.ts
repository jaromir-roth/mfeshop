import { withModuleFederation } from '@nx/angular/module-federation';

import config from './module-federation.config';

export default withModuleFederation({
  ...config,
  remotes: [['product', 'https://jr-mfeshop-product.netlify.app']],
});
