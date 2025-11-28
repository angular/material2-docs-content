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

/**
 * @title List with single selection
 */
declare class ListSingleSelectionExample {
    typesOfShoes: string[];
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

/**
 * @title Action list
 */
declare class ListActionExample {
    action(task: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListActionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListActionExample, "list-action-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Selection list with avatars
 */
declare class ListAvatarExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ListAvatarExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListAvatarExample, "list-avatar-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Navigation list
 */
declare class ListNavigationExample {
    fragments: string[];
    activeLink: string | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListNavigationExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListNavigationExample, "list-navigation-example", never, {}, {}, never, never, true, never>;
}

export { ListActionExample, ListAvatarExample, ListHarnessExample, ListNavigationExample, ListOverviewExample, ListSectionsExample, ListSelectionExample, ListSingleSelectionExample, ListSingleSelectionReactiveFormExample, ListVariantsExample };
