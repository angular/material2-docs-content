import { MatChipInputEvent } from '@angular/material';
/**
 * @title Chips with input
 */
export declare class ChipsInputExample {
    visible: boolean;
    selectable: boolean;
    removable: boolean;
    addOnBlur: boolean;
    separatorKeysCodes: number[];
    fruits: {
        name: string;
    }[];
    add(event: MatChipInputEvent): void;
    remove(fruit: any): void;
}
