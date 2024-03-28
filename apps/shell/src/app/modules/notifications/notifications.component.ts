import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { NotificationComponent } from './components/notification.component';
import { NotificationsService } from './services/notifications.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [AsyncPipe, NotificationComponent],
  template: `
    @for (notification of notifications$ | async; track notification) {
      <app-notification [message]="notification.message" />
    }
  `,
  styleUrl: './notifications.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsComponent {
  public readonly notifications$ = inject(NotificationsService).getAll();
}
