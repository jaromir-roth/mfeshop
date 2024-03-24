import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CartWidgetComponent } from './components/cart-widget/cart-widget.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, NavigationComponent, CartWidgetComponent],
  template: `
    <app-logo />
    <app-navigation />
    <app-cart-widget />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
