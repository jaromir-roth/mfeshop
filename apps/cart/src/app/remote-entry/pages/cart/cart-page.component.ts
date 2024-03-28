import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonComponent, Cart } from '@jaromir-roth/shared';

import { CartItemsComponent } from '../../components/cart-items/cart-items.component';
import { CartTotalComponent } from '../../components/cart-total/cart-total.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [ButtonComponent, CartItemsComponent, CartTotalComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartPageComponent {
  public submitOrder() {
    alert('Not implemented yet!');
  }

  public readonly cart: Cart = {
    items: [],
    quantity: 0,
    total: 0,
  };

  // public readonly cart: Cart = {
  //   items: [
  //     {
  //       product: {
  //         id: '3e97b13a-625c-4a6c-9a24-3b0e2b3449c1',
  //         name: 'Kancelářská židle',
  //         price: 5190,
  //         description:
  //           'Komfortní kancelářská židle s nastavitelnými funkcemi pro optimální podporu a pohodlí během dlouhé práce.',
  //         imageUrl: 'products/chair.svg',
  //         url: 'kancelarska-zidle',
  //         featured: false,
  //       },
  //       quantity: 5,
  //       total: 25950,
  //     },
  //     {
  //       product: {
  //         id: '5f6b7c8a-3d6f-4a5e-9f5f-537e17f1a069',
  //         name: 'Herní klávesnice',
  //         price: 990,
  //         description:
  //           'Profesionální herní klávesnice s odolnými tlačítky a podsvícením pro maximální výkon a pohodlí při hraní.',
  //         imageUrl: 'products/keyboard.svg',
  //         url: 'herni-klavesnice',
  //         featured: true,
  //       },
  //       quantity: 3,
  //       total: 2970,
  //     },
  //     {
  //       product: {
  //         id: '4m5n6o7a-3g9i-4a8j-9i8j-537e17f1a072',
  //         name: 'LCD projektor',
  //         price: 19690,
  //         description:
  //           'LCD projektor s jasným obrazem a funkcemi, ideální pro prezentace ve firemním prostředí či domácím kině.',
  //         imageUrl: 'products/projector.svg',
  //         url: 'lcd-projektor',
  //         featured: false,
  //       },
  //       quantity: 1,
  //       total: 19690,
  //     },
  //   ],
  //   quantity: 10,
  //   total: 48610,
  // };
}
