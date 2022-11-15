import * as i0 from '@angular/core';
import * as i7 from '@angular/common';
import * as i8 from '@angular/material/icon';
import * as i9 from '@angular/material/list';

declare namespace i1 {
    export {
        ListHarnessExample
    }
}

declare namespace i2 {
    export {
        ListOverviewExample
    }
}

declare namespace i3 {
    export {
        Section,
        ListSectionsExample
    }
}

declare namespace i4 {
    export {
        ListSelectionExample
    }
}

declare namespace i5 {
    export {
        ListSingleSelectionExample
    }
}

declare namespace i6 {
    export {
        ListVariantsExample
    }
}

export declare class ListExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ListExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ListExamplesModule, [typeof i1.ListHarnessExample, typeof i2.ListOverviewExample, typeof i3.ListSectionsExample, typeof i4.ListSelectionExample, typeof i5.ListSingleSelectionExample, typeof i6.ListVariantsExample], [typeof i7.CommonModule, typeof i8.MatIconModule, typeof i9.MatListModule], [typeof i1.ListHarnessExample, typeof i2.ListOverviewExample, typeof i3.ListSectionsExample, typeof i4.ListSelectionExample, typeof i5.ListSingleSelectionExample, typeof i6.ListVariantsExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ListExamplesModule>;
}

/**
 * @title Testing with MatListHarness
 */
export declare class ListHarnessExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ListHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListHarnessExample, "list-harness-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Basic list
 */
export declare class ListOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ListOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListOverviewExample, "list-overview-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title List with sections
 */
export declare class ListSectionsExample {
    folders: Section[];
    notes: Section[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ListSectionsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListSectionsExample, "list-sections-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title List with selection
 */
export declare class ListSelectionExample {
    typesOfShoes: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ListSelectionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListSelectionExample, "list-selection-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title List with single selection
 */
export declare class ListSingleSelectionExample {
    typesOfShoes: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ListSingleSelectionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListSingleSelectionExample, "list-single-selection-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title List variants
 */
export declare class ListVariantsExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ListVariantsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListVariantsExample, "list-variants-example", never, {}, {}, never, never, false, never>;
}

declare interface Section {
    name: string;
    updated: Date;
}

export { }
