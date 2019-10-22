import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * @title Filter autocomplete
 */
export declare class AutocompleteFilterExample implements OnInit {
    myControl: FormControl;
    options: string[];
    filteredOptions: Observable<string[]>;
    ngOnInit(): void;
    private _filter;
    static ngFactoryDef: i0.ɵɵFactoryDef<AutocompleteFilterExample>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<AutocompleteFilterExample, "autocomplete-filter-example", never, {}, {}, never>;
}
