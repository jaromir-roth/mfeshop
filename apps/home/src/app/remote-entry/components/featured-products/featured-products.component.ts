import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  template: `<ng-container #container></ng-container>`,
})
export class FeaturedProductsComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef })
  public cartWidgetContainer!: ViewContainerRef;

  public async ngOnInit() {
    const { FeaturedProductsComponent } = await import(
      'product/FeaturedWidget'
    );
    this.cartWidgetContainer
      .createComponent(FeaturedProductsComponent)
      .changeDetectorRef.detectChanges();
  }
}
