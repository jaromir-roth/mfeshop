import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-widget',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a routerLink="kosik">
      <ng-container #container></ng-container>
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartWidgetComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef })
  public cartWidgetContainer!: ViewContainerRef;

  public async ngOnInit() {
    const { CartWidgetComponent } = await import('cart/Widget');
    this.cartWidgetContainer.createComponent(CartWidgetComponent);
  }
}
