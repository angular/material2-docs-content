import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export interface StateGroup {
    letter: string;
    names: string[];
}
export declare const _filter: (opt: string[], value: string) => string[];
/**
 * @title Option groups autocomplete
 */
export declare class AutocompleteOptgroupExample implements OnInit {
    private _formBuilder;
    stateForm: import("@angular/forms").FormGroup<{
        stateGroup: import("@angular/forms").FormControl<string | null>;
    }>;
    stateGroups: StateGroup[];
    stateGroupOptions: Observable<StateGroup[]>;
    constructor(_formBuilder: FormBuilder);
    ngOnInit(): void;
    private _filterGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteOptgroupExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteOptgroupExample, "autocomplete-optgroup-example", never, {}, {}, never, never, false>;
}
