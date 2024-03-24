import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './modules/footer';
import { HeaderComponent } from './modules/header';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  selector: 'app-root',
  template: `
    <app-header />
    <section class="content">
      <router-outlet></router-outlet>
    </section>
    <app-footer />
  `,
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
