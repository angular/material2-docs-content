import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export interface User {
    name: string;
}
/**
 * @title Display value autocomplete
 */
export declare class AutocompleteDisplayExample implements OnInit {
    myControl: FormControl;
    options: User[];
    filteredOptions: Observable<User[]>;
    ngOnInit(): void;
    displayFn(user: User): string;
    private _filter;
    static ɵfac: i0.ɵɵFactoryDef<AutocompleteDisplayExample>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AutocompleteDisplayExample, "autocomplete-display-example", never, {}, {}, never>;
}
