import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ButtonComponent } from '@jaromir-roth/shared';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RouterLink, ButtonComponent],
  template: `
    <div class="content">
      <span class="subheading">mfeShop</span>
      <h1>Micro frontend ecommerce app</h1>
      <p>
        Aplikace slouží jako demonstrační nástroj v rámci bakalářské práce,
        která je na téma Vývoj webových aplikací s využitím micro frontend
        architektury.
      </p>
      <a routerLink="/produkty">
        <app-button class="mt-2">
          Zobrazit produkty <i class="pi pi-arrow-right font-bold ml-2.5"></i>
        </app-button>
      </a>
    </div>
  `,
  styleUrl: './banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent {}
