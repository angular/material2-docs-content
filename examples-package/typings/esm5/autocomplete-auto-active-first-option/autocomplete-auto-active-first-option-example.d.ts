import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
/**
 * @title Highlight the first autocomplete option
 */
export declare class AutocompleteAutoActiveFirstOptionExample implements OnInit {
    myControl: FormControl;
    options: string[];
    filteredOptions: Observable<string[]>;
    ngOnInit(): void;
    filter(val: string): string[];
}
