import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay, switchMap } from 'rxjs';

import { Cart, CartItemsMap, NotificationEvent } from '@jaromir-roth/shared';

const CART_STORAGE_KEY = 'cart';

@Injectable({ providedIn: 'root' })
export class CartService {
  #httpClient = inject(HttpClient);

  #cartItemsMap = new BehaviorSubject<CartItemsMap>(this.getFromStorage());
  #cart: Observable<Cart> = this.#cartItemsMap.asObservable().pipe(
    switchMap((data) => this.#httpClient.post<Cart>('cart', data)),
    shareReplay({ bufferSize: 1, refCount: true }),
  );

  public get(): Observable<Cart> {
    return this.#cart;
  }

  public addProduct(productId: string, quantity: number) {
    const data = this.getFromStorage();
    data[productId] = (data[productId] || 0) + quantity;
    this.setToStorage(data);
    this.dispatchNotification('Produkt byl přidán do košíku.');
  }

  public updateProductQuantity(productId: string, quantity: number) {
    const data = this.getFromStorage();
    data[productId] = quantity;
    this.setToStorage(data);
    this.dispatchNotification('Množství produktu bylo změněno.');
  }

  public removeProduct(productId: string) {
    const data = this.getFromStorage();
    delete data[productId];
    this.setToStorage(data);
    this.dispatchNotification('Produkt byl odebrán z košíku.');
  }

  private getFromStorage() {
    const data = localStorage.getItem(CART_STORAGE_KEY);
    return (data ? JSON.parse(data) : {}) as CartItemsMap;
  }

  private setToStorage(data: CartItemsMap) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(data));
    this.#cartItemsMap.next(data);
  }

  private dispatchNotification(message: string) {
    window.dispatchEvent(new CustomEvent<NotificationEvent>('notification', { detail: { message } }));
  }
}
