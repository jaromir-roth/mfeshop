import { Injectable } from '@nestjs/common';

import { Cart, CartItemsMap } from '@jaromir-roth/shared';

import { ProductsService } from './products.service';

@Injectable()
export class CartService {
  constructor(private readonly productsService: ProductsService) {}

  public async get(cartItemsMap: CartItemsMap): Promise<Cart> {
    const cart: Cart = {
      items: [],
      quantity: 0,
      total: 0,
    };

    for (const [productId, quantity] of Object.entries(cartItemsMap)) {
      const product = await this.productsService.getProductById(productId);

      cart.items.push({
        product,
        quantity,
        total: product.price * quantity,
      });

      cart.quantity += quantity;
      cart.total += product.price * quantity;
    }

    return cart;
  }
}
