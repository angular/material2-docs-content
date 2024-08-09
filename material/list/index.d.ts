import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import * as i0 from '@angular/core';

/**
 * @title Testing with MatListHarness
 */
export declare class ListHarnessExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ListHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListHarnessExample, "list-harness-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Basic list
 */
export declare class ListOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ListOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListOverviewExample, "list-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title List with sections
 */
export declare class ListSectionsExample {
    folders: Section[];
    notes: Section[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ListSectionsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListSectionsExample, "list-sections-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title List with selection
 */
export declare class ListSelectionExample {
    typesOfShoes: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ListSelectionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListSelectionExample, "list-selection-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title List with single selection using Reactive Forms
 */
export declare class ListSingleSelectionExample {
    form: FormGroup;
    shoes: Shoes[];
    shoesControl: FormControl<any>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ListSingleSelectionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListSingleSelectionExample, "list-single-selection-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title List with single selection using Reactive forms
 */
export declare class ListSingleSelectionReactiveFormExample {
    form: FormGroup;
    shoes: Shoes_2[];
    shoesControl: FormControl<any>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ListSingleSelectionReactiveFormExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListSingleSelectionReactiveFormExample, "list-single-selection-reactive-form-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title List variants
 */
export declare class ListVariantsExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ListVariantsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListVariantsExample, "list-variants-example", never, {}, {}, never, never, true, never>;
}

declare interface Section {
    name: string;
    updated: Date;
}

declare interface Shoes {
    value: string;
    name: string;
}

declare interface Shoes_2 {
    value: string;
    name: string;
}

export { }
