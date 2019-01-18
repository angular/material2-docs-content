import { ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { Observable } from 'rxjs';
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
    filteredFruits: Observable<string[]>;
    fruits: string[];
    allFruits: string[];
    fruitInput: ElementRef<HTMLInputElement>;
    matAutocomplete: MatAutocomplete;
    constructor();
    add(event: MatChipInputEvent): void;
    remove(fruit: string): void;
    selected(event: MatAutocompleteSelectedEvent): void;
    private _filter;
}
