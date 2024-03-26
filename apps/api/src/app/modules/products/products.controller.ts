import { Controller, Get, HttpException, Param, Query } from '@nestjs/common';

import { Product } from '@jaromir-roth/shared';

import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  public async getAll(): Promise<Product[]> {
    return this.productsService.getProducts();
  }

  @Get('featured')
  public async getFeatured(@Query('limit') limit?: number): Promise<Product[]> {
    return this.productsService.getFeatured(limit);
  }

  @Get(':id')
  public async getById(@Param('id') id: string): Promise<Product> {
    const product = await this.productsService.getProductById(id);
    if (!product) {
      throw new HttpException('Product not found', 404);
    }
    return product;
  }
}
