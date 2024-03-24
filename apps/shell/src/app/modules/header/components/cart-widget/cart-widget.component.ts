import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-cart-widget',
  standalone: true,
  template: `<ng-container #container></ng-container>`,
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
