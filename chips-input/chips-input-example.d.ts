import { MatChipInputEvent } from '@angular/material';
export interface Fruit {
    name: string;
}
/**
 * @title Chips with input
 */
export declare class ChipsInputExample {
    visible: boolean;
    selectable: boolean;
    removable: boolean;
    addOnBlur: boolean;
    readonly separatorKeysCodes: number[];
    fruits: Fruit[];
    add(event: MatChipInputEvent): void;
    remove(fruit: Fruit): void;
}
