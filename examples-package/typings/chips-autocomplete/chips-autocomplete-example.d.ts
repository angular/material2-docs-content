import { ElementRef } from '@angular/core';
import { MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
/**
 * @title Chips Autocomplete
 */
export declare class ChipsAutocompleteExample {
    visible: boolean;
    selectable: boolean;
    removable: boolean;
    addOnBlur: boolean;
    separatorKeysCodes: number[];
    fruitCtrl: FormControl;
    filteredFruits: Observable<any[]>;
    fruits: {
        name: string;
    }[];
    allFruits: string[];
    fruitInput: ElementRef;
    constructor();
    add(event: MatChipInputEvent): void;
    remove(fruit: any): void;
    filter(name: string): string[];
    selected(event: MatAutocompleteSelectedEvent): void;
}
