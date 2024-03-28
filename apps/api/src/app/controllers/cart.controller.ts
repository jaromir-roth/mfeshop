import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';

import { Cart, CartItemsMap } from '@jaromir-roth/shared';

import { CartService } from '../services/cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  public async get(@Body() payload): Promise<Cart> {
    try {
      const cart = await this.cartService.get(payload as CartItemsMap);
      return cart;
    } catch (error) {
      throw new HttpException('Invalid cart data provided', HttpStatus.BAD_REQUEST);
    }
  }
}
