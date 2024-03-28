import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { CartController } from './controllers/cart.controller';
import { ProductsController } from './controllers/products.controller';
import { CartService } from './services/cart.service';
import { ProductsService } from './services/products.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'assets'),
      exclude: ['/api/(.*)'],
    }),
  ],
  controllers: [ProductsController, CartController],
  providers: [ProductsService, CartService],
})
export class AppModule {}
