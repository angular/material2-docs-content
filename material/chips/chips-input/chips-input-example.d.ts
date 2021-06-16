import { MatChipInputEvent } from '@angular/material/chips';
import * as i0 from "@angular/core";
export interface Fruit {
    name: string;
}
/**
 * @title Chips with input
 */
export declare class ChipsInputExample {
    selectable: boolean;
    removable: boolean;
    addOnBlur: boolean;
    readonly separatorKeysCodes: readonly [13, 188];
    fruits: Fruit[];
    add(event: MatChipInputEvent): void;
    remove(fruit: Fruit): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsInputExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsInputExample, "chips-input-example", never, {}, {}, never, never>;
}
