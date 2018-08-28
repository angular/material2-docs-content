import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
export interface StateGroup {
    letter: string;
    names: string[];
}
export declare const _filter: (opt: string[], value: string) => string[];
/**
 * @title Option groups autocomplete
 */
export declare class AutocompleteOptgroupExample implements OnInit {
    private fb;
    stateForm: FormGroup;
    stateGroups: StateGroup[];
    stateGroupOptions: Observable<StateGroup[]>;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    private _filterGroup;
}
