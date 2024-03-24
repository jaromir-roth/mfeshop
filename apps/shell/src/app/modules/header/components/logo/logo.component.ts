import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterLink],
  template: `<a routerLink="/" class="flex flex-col">
    <span class="font-bold text-2xl text-slate-700 tracking-wide">mfeShop</span>
    <small class="hidden sm:block text-sm text-slate-500"
      >micro frontend ecommerce app</small
    >
  </a> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {}
