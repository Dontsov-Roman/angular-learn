import { Injectable, InjectionToken } from '@angular/core';
import { computed, signal } from '@angular/core';

import { ID } from '../services/rest/base-service.types';
import { CartItem, ICartService } from './cart.types';

export const CART_INJECTION_TOKEN = new InjectionToken('Cart injection token'); 

@Injectable({
  providedIn: 'root'
})
export class CartService<Item extends ID = ID> implements ICartService<Item> {
  private itemsRecords = signal<Record<number, CartItem<Item>>>({});
  items = computed(() => Object.values(this.itemsRecords()).map(({ item }) => item));
  count = computed(() => Object.values(this.itemsRecords()).reduce((prev, cur) => prev + cur.count, 0));

  private getCartItem(item: Item): CartItem<Item> | undefined {
    return this.itemsRecords()[item.id];
  }
  addItem(item: Item): void {
    const itemsRecords = this.itemsRecords();
    const cartItem = this.getCartItem(item);
    if (cartItem) {
      this.itemsRecords.set({
        ...itemsRecords,
        [item.id]: {
          ...cartItem,
          count: cartItem.count + 1,
        }
      });
    } else {
      this.itemsRecords.set({
        ...itemsRecords,
        [item.id]: {
          count: 1,
          item,
        }
      });
    }
  }
  removeItem(item: Item): void {
    const cartItem = this.getCartItem(item);
    if (cartItem && cartItem?.count! > 1) {
      this.itemsRecords.set({
        ...this.itemsRecords(),
        [item.id]: {
          count: cartItem?.count - 1,
          item,
        }
      })
    } else {
      const { [item.id]: _, ...newItems } = this.itemsRecords();
      this.itemsRecords.set(newItems);
    }
  }
  alreadyAdded(item: Item): boolean {
    return this.items().some((t) => t.id === item.id);
  }
  removeAll(): void {
    this.itemsRecords.set({});
  }
  countByItem(item?: Item | undefined): number {
    if (item) {
      const cartItem = this.getCartItem(item);
      return cartItem?.count || 0;
    }
    return 0;
  }
}
