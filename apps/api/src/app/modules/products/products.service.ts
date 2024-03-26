import { Injectable } from '@nestjs/common';

import { Product } from '@jaromir-roth/shared';

import productsData from './products.data.json';

@Injectable()
export class ProductsService {
  public async getProducts(): Promise<Product[]> {
    return Promise.resolve(productsData as Product[]);
  }

  public async getFeatured(limit: number): Promise<Product[]> {
    return Promise.resolve(
      (productsData as Product[])
        .filter((product) => product.featured)
        .slice(0, limit)
    );
  }

  public async getProductById(id: string): Promise<Product> {
    return Promise.resolve(productsData.find((product) => product.id === id));
  }
}
