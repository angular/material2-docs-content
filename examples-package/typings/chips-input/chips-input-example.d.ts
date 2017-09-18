import { MdChipInputEvent } from '@angular/material';
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
    add(event: MdChipInputEvent): void;
    remove(fruit: any): void;
}
