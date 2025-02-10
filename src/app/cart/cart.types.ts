import { Signal } from "@angular/core";
import { ID } from "../services/rest/base-service.types";

export interface ICartService<Item extends ID = ID> {
    items: Signal<Item[]>;
    count: Signal<number>;
    addItem(item?: Item): void;
    removeItem(item?: Item): void;
    alreadyAdded(item?: Item): boolean;
    countByItem(item?: Item): number;
    removeAll(): void;
}

export type CartItem<Item extends ID = ID> = {
    count: number;
    item: Item;
}