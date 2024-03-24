import { Injectable } from '@nestjs/common';

import productsData from './products.data.json';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  public async getProducts(): Promise<Product[]> {
    return Promise.resolve(productsData as Product[]);
  }

  public async getProductById(id: string): Promise<Product> {
    return Promise.resolve(productsData.find((product) => product.id === id));
  }
}
