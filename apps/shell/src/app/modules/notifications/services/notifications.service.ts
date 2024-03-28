import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, fromEvent, tap } from 'rxjs';

import { NotificationEvent } from '@jaromir-roth/shared';

const NOTIFICATION_TTL = 3000;

@Injectable({ providedIn: 'root' })
export class NotificationsService {
  #notifications = new BehaviorSubject<NotificationEvent[]>([]);

  constructor() {
    fromEvent<CustomEvent<NotificationEvent>>(window, 'notification')
      .pipe(
        tap((notification: CustomEvent<NotificationEvent>) =>
          this.#notifications.next([...this.#notifications.value, notification.detail]),
        ),
        delay(NOTIFICATION_TTL),
        tap((notification: CustomEvent<NotificationEvent>) =>
          this.#notifications.next(this.#notifications.value.filter((n) => n !== notification.detail)),
        ),
      )
      .subscribe();
  }

  public getAll() {
    return this.#notifications.asObservable();
  }
}
