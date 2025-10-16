import { FormControl } from '@angular/forms';
import * as i0 from '@angular/core';

/** @title Configurable Tabs. */
declare class TabsConfigurableExample {
    orientation: 'vertical' | 'horizontal';
    focusMode: 'roving' | 'activedescendant';
    selectionMode: 'explicit' | 'follow';
    tabSelection: string;
    wrap: FormControl<boolean>;
    disabled: FormControl<boolean>;
    skipDisabled: FormControl<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabsConfigurableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabsConfigurableExample, "tabs-configurable-example", never, {}, {}, never, never, true, never>;
}

/** @title Explicit selection */
declare class TabsExplicitSelectionExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabsExplicitSelectionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabsExplicitSelectionExample, "tabs-explicit-selection-example", never, {}, {}, never, never, true, never>;
}

/** @title Selection Follows Focus */
declare class TabsSelectionFollowsFocusExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabsSelectionFollowsFocusExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabsSelectionFollowsFocusExample, "tabs-selection-follows-focus-example", never, {}, {}, never, never, true, never>;
}

/** @title Vertical */
declare class TabsVerticalExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabsVerticalExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabsVerticalExample, "tabs-vertical-example", never, {}, {}, never, never, true, never>;
}

/** * @title RTL */
declare class TabsRtlExample {
    selectedIndex: number;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabsRtlExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabsRtlExample, "tabs-rtl-example", never, {}, {}, never, never, true, never>;
}

/** @title Active Descendant */
declare class TabsActiveDescendantExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabsActiveDescendantExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabsActiveDescendantExample, "tabs-active-descendant-example", never, {}, {}, never, never, true, never>;
}

/** @title Disabled Tabs are Focusable */
declare class TabsDisabledFocusableExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabsDisabledFocusableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabsDisabledFocusableExample, "tabs-disabled-focusable-example", never, {}, {}, never, never, true, never>;
}

/** @title Disabled Tabs are Skipped */
declare class TabsDisabledSkippedExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabsDisabledSkippedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabsDisabledSkippedExample, "tabs-disabled-skipped-example", never, {}, {}, never, never, true, never>;
}

/** @title Disabled */
declare class TabsDisabledExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabsDisabledExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabsDisabledExample, "tabs-disabled-example", never, {}, {}, never, never, true, never>;
}

export { TabsActiveDescendantExample, TabsConfigurableExample, TabsDisabledExample, TabsDisabledFocusableExample, TabsDisabledSkippedExample, TabsExplicitSelectionExample, TabsRtlExample, TabsSelectionFollowsFocusExample, TabsVerticalExample };
