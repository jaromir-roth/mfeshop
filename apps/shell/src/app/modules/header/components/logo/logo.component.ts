import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  template: `<p>LOGO</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {}
