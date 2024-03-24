import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `<p class="text-center leading-relaxed">
    Unicorn Vysoká škola s.r.o., obor Softwarový vývoj<br />
    Vypracoval: Jaromír Roth, 2024.
  </p>`,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;

        @apply py-6 sm:py-8 text-sm text-slate-500;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
