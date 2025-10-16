import { FormControl } from '@angular/forms';
import * as i0 from '@angular/core';

/** @title Configurable Listbox. */
declare class ListboxConfigurableExample {
    orientation: 'vertical' | 'horizontal';
    focusMode: 'roving' | 'activedescendant';
    selectionMode: 'explicit' | 'follow';
    selection: string[];
    disabledOptions: string[];
    wrap: FormControl<boolean>;
    multi: FormControl<boolean>;
    disabled: FormControl<boolean>;
    readonly: FormControl<boolean>;
    skipDisabled: FormControl<boolean>;
    fruits: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ListboxConfigurableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListboxConfigurableExample, "listbox-configurable-example", never, {}, {}, never, never, true, never>;
}

/** @title Listbox with single selection. */
declare class ListboxSingleSelectExample {
    fruits: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ListboxSingleSelectExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListboxSingleSelectExample, "listbox-single-select-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Listbox with multi-selection.
 */
declare class ListboxMultiSelectExample {
    fruits: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ListboxMultiSelectExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListboxMultiSelectExample, "listbox-multi-select-example", never, {}, {}, never, never, true, never>;
}

/** @title Listbox with single selection and selection follows focus. */
declare class ListboxSingleSelectFollowFocusExample {
    fruits: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ListboxSingleSelectFollowFocusExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListboxSingleSelectFollowFocusExample, "listbox-single-select-follow-focus-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Listbox with multi-selection and selection following focus.
 */
declare class ListboxMultiSelectFollowFocusExample {
    fruits: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ListboxMultiSelectFollowFocusExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListboxMultiSelectFollowFocusExample, "listbox-multi-select-follow-focus-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Listbox with horizontal orientation.
 */
declare class ListboxHorizontalExample {
    fruits: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ListboxHorizontalExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListboxHorizontalExample, "listbox-horizontal-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Listbox with RTL and horizontal orientation.
 */
declare class ListboxRtlHorizontalExample {
    fruits: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ListboxRtlHorizontalExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListboxRtlHorizontalExample, "listbox-rtl-horizontal-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Listbox with active descendant.
 */
declare class ListboxActiveDescendantExample {
    fruits: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ListboxActiveDescendantExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListboxActiveDescendantExample, "listbox-active-descendant-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Listbox with focusable disabled options.
 */
declare class ListboxDisabledFocusableExample {
    fruits: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ListboxDisabledFocusableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListboxDisabledFocusableExample, "listbox-disabled-focusable-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Listbox with skipped disabled options.
 */
declare class ListboxDisabledSkippedExample {
    fruits: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ListboxDisabledSkippedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListboxDisabledSkippedExample, "listbox-disabled-skipped-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Listbox with readonly state.
 */
declare class ListboxReadonlyExample {
    fruits: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ListboxReadonlyExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListboxReadonlyExample, "listbox-readonly-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Listbox with disabled state.
 */
declare class ListboxDisabledExample {
    fruits: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ListboxDisabledExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListboxDisabledExample, "listbox-disabled-example", never, {}, {}, never, never, true, never>;
}

export { ListboxActiveDescendantExample, ListboxConfigurableExample, ListboxDisabledExample, ListboxDisabledFocusableExample, ListboxDisabledSkippedExample, ListboxHorizontalExample, ListboxMultiSelectExample, ListboxMultiSelectFollowFocusExample, ListboxReadonlyExample, ListboxRtlHorizontalExample, ListboxSingleSelectExample, ListboxSingleSelectFollowFocusExample };
