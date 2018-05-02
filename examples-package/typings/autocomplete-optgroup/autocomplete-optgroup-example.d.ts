import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
export interface StateGroup {
    letter: string;
    names: string[];
}
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
    filterGroup(val: string): StateGroup[];
    private _filter(opt, val);
}
