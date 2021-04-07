import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * @title Highlight the first autocomplete option
 */
export declare class AutocompleteAutoActiveFirstOptionExample implements OnInit {
    myControl: FormControl;
    options: string[];
    filteredOptions: Observable<string[]>;
    ngOnInit(): void;
    private _filter;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteAutoActiveFirstOptionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteAutoActiveFirstOptionExample, "autocomplete-auto-active-first-option-example", never, {}, {}, never, never>;
}
