import * as i0 from '@angular/core';
import { Combobox } from '@angular/aria/combobox';
import { Listbox } from '@angular/aria/listbox';

/** @title Autocomplete with auto-select filtering. */
declare class AutocompleteAutoSelectExample {
    /** The selected value of the combobox. */
    readonly listbox: i0.Signal<Listbox<any> | undefined>;
    readonly combobox: i0.Signal<Combobox | undefined>;
    popupExpanded: i0.WritableSignal<boolean>;
    searchString: i0.WritableSignal<string>;
    selectedOption: i0.WritableSignal<string[]>;
    /** The query string used to filter the list of countries. */
    query: i0.Signal<string>;
    /** The list of countries filtered by the query. */
    countries: i0.Signal<string[]>;
    constructor();
    /** Clears the query and the listbox value. */
    clear(): void;
    onCommit(): void;
    /** Handles keydown events on the clear button. */
    onKeydown(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteAutoSelectExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteAutoSelectExample, "autocomplete-auto-select-example", never, {}, {}, never, never, true, never>;
}

/** @title Disabled autocomplete. */
declare class AutocompleteDisabledExample {
    /** The selected value of the combobox. */
    readonly listbox: i0.Signal<Listbox<any> | undefined>;
    readonly combobox: i0.Signal<Combobox | undefined>;
    popupExpanded: i0.WritableSignal<boolean>;
    searchString: i0.WritableSignal<string>;
    selectedOption: i0.WritableSignal<string[]>;
    /** The query string used to filter the list of countries. */
    query: i0.Signal<string>;
    /** The list of countries filtered by the query. */
    countries: i0.Signal<string[]>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteDisabledExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteDisabledExample, "autocomplete-disabled-example", never, {}, {}, never, never, true, never>;
}

/** @title Autocomplete with highlighted filtering. */
declare class AutocompleteHighlightExample {
    /** The selected value of the combobox. */
    readonly listbox: i0.Signal<Listbox<any> | undefined>;
    readonly combobox: i0.Signal<Combobox | undefined>;
    popupExpanded: i0.WritableSignal<boolean>;
    searchString: i0.WritableSignal<string>;
    selectedOption: i0.WritableSignal<string[]>;
    navigated: i0.WritableSignal<boolean>;
    /** The query string used to filter the list of countries. */
    query: i0.Signal<string>;
    /** The list of countries filtered by the query. */
    countries: i0.Signal<string[]>;
    constructor();
    /** Clears the query and the listbox value. */
    clear(): void;
    onCommit(): void;
    /** Handles keydown events on the clear button. */
    onKeydown(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteHighlightExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteHighlightExample, "autocomplete-highlight-example", never, {}, {}, never, never, true, never>;
}

/** @title Combobox Autocomplete with manual filtering. */
declare class AutocompleteManualExample {
    /** The selected value of the combobox. */
    readonly listbox: i0.Signal<Listbox<any> | undefined>;
    readonly combobox: i0.Signal<Combobox | undefined>;
    popupExpanded: i0.WritableSignal<boolean>;
    searchString: i0.WritableSignal<string>;
    selectedOption: i0.WritableSignal<string[]>;
    /** The query string used to filter the list of countries. */
    query: i0.Signal<string>;
    /** The list of countries filtered by the query. */
    countries: i0.Signal<string[]>;
    constructor();
    /** Clears the query and the listbox value. */
    clear(): void;
    onCommit(): void;
    /** Handles keydown events on the clear button. */
    onKeydown(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteManualExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteManualExample, "autocomplete-manual-example", never, {}, {}, never, never, true, never>;
}

export { AutocompleteAutoSelectExample, AutocompleteDisabledExample, AutocompleteHighlightExample, AutocompleteManualExample };
