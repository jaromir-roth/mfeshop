import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule],
  template: `
    <ul class="remote-menu">
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/product">Product</a></li>
      <li><a routerLink="/cart">Cart</a></li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {}
