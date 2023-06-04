import * as i0 from '@angular/core';

/**
 * @title Testing with MatListHarness
 */
export declare class ListHarnessExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ListHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListHarnessExample, "list-harness-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Basic list
 */
export declare class ListOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ListOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListOverviewExample, "list-overview-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title List with sections
 */
export declare class ListSectionsExample {
    folders: Section[];
    notes: Section[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ListSectionsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListSectionsExample, "list-sections-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title List with selection
 */
export declare class ListSelectionExample {
    typesOfShoes: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ListSelectionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListSelectionExample, "list-selection-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title List with single selection
 */
export declare class ListSingleSelectionExample {
    typesOfShoes: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ListSingleSelectionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListSingleSelectionExample, "list-single-selection-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title List variants
 */
export declare class ListVariantsExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ListVariantsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListVariantsExample, "list-variants-example", never, {}, {}, never, never, true, never, false>;
}

declare interface Section {
    name: string;
    updated: Date;
}

export { }
