import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  template: `
    <div class="icon">
      <i class="pi pi-check"></i>
    </div>
    <p>{{ message }}</p>
  `,
  styleUrl: './notification.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {
  @Input({ required: true }) public message!: string;
}
