import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `<p>Jaromir Roth 2024</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
