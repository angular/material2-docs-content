import * as i0 from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

/**
 * @title Basic list
 */
declare class ListOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ListOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListOverviewExample, "list-overview-example", never, {}, {}, never, never, true, never>;
}

interface Section {
    name: string;
    updated: Date;
}
/**
 * @title List with sections
 */
declare class ListSectionsExample {
    folders: Section[];
    notes: Section[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ListSectionsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListSectionsExample, "list-sections-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title List with selection
 */
declare class ListSelectionExample {
    typesOfShoes: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ListSelectionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListSelectionExample, "list-selection-example", never, {}, {}, never, never, true, never>;
}

interface Shoes$1 {
    value: string;
    name: string;
}
/**
 * @title List with single selection using Reactive Forms
 */
declare class ListSingleSelectionExample {
    form: FormGroup;
    shoes: Shoes$1[];
    shoesControl: FormControl<any>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ListSingleSelectionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListSingleSelectionExample, "list-single-selection-example", never, {}, {}, never, never, true, never>;
}

interface Shoes {
    value: string;
    name: string;
}
/**
 * @title List with single selection using Reactive forms
 */
declare class ListSingleSelectionReactiveFormExample {
    form: FormGroup;
    shoes: Shoes[];
    shoesControl: FormControl<any>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ListSingleSelectionReactiveFormExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListSingleSelectionReactiveFormExample, "list-single-selection-reactive-form-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatListHarness
 */
declare class ListHarnessExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ListHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListHarnessExample, "list-harness-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title List variants
 */
declare class ListVariantsExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ListVariantsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListVariantsExample, "list-variants-example", never, {}, {}, never, never, true, never>;
}

export { ListHarnessExample, ListOverviewExample, ListSectionsExample, ListSelectionExample, ListSingleSelectionExample, ListSingleSelectionReactiveFormExample, ListVariantsExample };
