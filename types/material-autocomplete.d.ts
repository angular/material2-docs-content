import * as i0 from '@angular/core';
import { OnInit, ElementRef } from '@angular/core';
import * as _angular_forms from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

/**
 * @title Highlight the first autocomplete option
 */
declare class AutocompleteAutoActiveFirstOptionExample implements OnInit {
    myControl: FormControl<string | null>;
    options: string[];
    filteredOptions: Observable<string[]>;
    ngOnInit(): void;
    private _filter;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteAutoActiveFirstOptionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteAutoActiveFirstOptionExample, "autocomplete-auto-active-first-option-example", never, {}, {}, never, never, true, never>;
}

interface User {
    name: string;
}
/**
 * @title Display value autocomplete
 */
declare class AutocompleteDisplayExample implements OnInit {
    myControl: FormControl<string | User | null>;
    options: User[];
    filteredOptions: Observable<User[]>;
    ngOnInit(): void;
    displayFn(user: User): string;
    private _filter;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteDisplayExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteDisplayExample, "autocomplete-display-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Filter autocomplete
 */
declare class AutocompleteFilterExample implements OnInit {
    myControl: FormControl<string | null>;
    options: string[];
    filteredOptions: Observable<string[]>;
    ngOnInit(): void;
    private _filter;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteFilterExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteFilterExample, "autocomplete-filter-example", never, {}, {}, never, never, true, never>;
}

interface StateGroup {
    letter: string;
    names: string[];
}
/**
 * @title Option groups autocomplete
 */
declare class AutocompleteOptgroupExample implements OnInit {
    private _formBuilder;
    stateForm: _angular_forms.FormGroup<{
        stateGroup: _angular_forms.FormControl<string | null>;
    }>;
    stateGroups: StateGroup[];
    stateGroupOptions: Observable<StateGroup[]>;
    ngOnInit(): void;
    private _filterGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteOptgroupExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteOptgroupExample, "autocomplete-optgroup-example", never, {}, {}, never, never, true, never>;
}

interface State {
    flag: string;
    name: string;
    population: string;
}
/**
 * @title Autocomplete overview
 */
declare class AutocompleteOverviewExample {
    stateCtrl: FormControl<string | null>;
    filteredStates: Observable<State[]>;
    states: State[];
    constructor();
    private _filterStates;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteOverviewExample, "autocomplete-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Plain input autocomplete
 */
declare class AutocompletePlainInputExample implements OnInit {
    control: FormControl<string | null>;
    streets: string[];
    filteredStreets: Observable<string[]>;
    ngOnInit(): void;
    private _filter;
    private _normalizeValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompletePlainInputExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompletePlainInputExample, "autocomplete-plain-input-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Simple autocomplete
 */
declare class AutocompleteSimpleExample {
    myControl: FormControl<string | null>;
    options: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteSimpleExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteSimpleExample, "autocomplete-simple-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Require an autocomplete option to be selected
 */
declare class AutocompleteRequireSelectionExample {
    input: ElementRef<HTMLInputElement>;
    myControl: FormControl<string | null>;
    options: string[];
    filteredOptions: string[];
    constructor();
    filter(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteRequireSelectionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteRequireSelectionExample, "autocomplete-require-selection-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatAutocompleteHarness
 */
declare class AutocompleteHarnessExample {
    states: {
        code: string;
        name: string;
    }[];
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteHarnessExample, "autocomplete-harness-example", never, {}, {}, never, never, true, never>;
}

export { AutocompleteAutoActiveFirstOptionExample, AutocompleteDisplayExample, AutocompleteFilterExample, AutocompleteHarnessExample, AutocompleteOptgroupExample, AutocompleteOverviewExample, AutocompletePlainInputExample, AutocompleteRequireSelectionExample, AutocompleteSimpleExample };
