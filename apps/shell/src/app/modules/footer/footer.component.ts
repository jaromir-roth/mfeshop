import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `<p class="text-center leading-relaxed">
    Aplikace slouží k demonstrativním účelům v rámci bakalářské práce. <br />
    Vypracoval: Jaromír Roth, 2024.
  </p>`,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;

        @apply py-6 sm:py-6 text-sm text-slate-500;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
