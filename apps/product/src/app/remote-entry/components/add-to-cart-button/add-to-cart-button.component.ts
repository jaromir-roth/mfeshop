import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-add-to-cart-button',
  standalone: true,
  template: `<ng-container #container></ng-container>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddToCartButtonComponent implements OnInit, OnChanges {
  @Input({ required: true }) productId!: string;
  @Input({ required: true }) quantity!: number;

  @ViewChild('container', { read: ViewContainerRef })
  public cartWidgetContainer!: ViewContainerRef;

  #componentRef: ComponentRef<any> | null = null;

  public async ngOnInit() {
    const { AddToCartButtonComponent } = await import('cart/AddToCartButton');
    this.#componentRef = this.cartWidgetContainer.createComponent(AddToCartButtonComponent);
    this.#componentRef.instance.productId = this.productId;
    this.#componentRef.instance.quantity = this.quantity;
    this.#componentRef.changeDetectorRef.detectChanges();
  }

  public ngOnChanges() {
    if (this.#componentRef) {
      this.#componentRef.instance.productId = this.productId;
      this.#componentRef.instance.quantity = this.quantity;
    }
  }
}
