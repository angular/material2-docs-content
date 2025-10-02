import * as i0 from '@angular/core';
import { FormControl } from '@angular/forms';

type TreeNode = {
    name: string;
    value: string;
    children?: TreeNode[];
    disabled?: boolean;
};

/** @title Configurable Tree. */
declare class TreeConfigurableExample {
    nodes: TreeNode[];
    selectionMode: 'explicit' | 'follow';
    focusMode: 'roving' | 'activedescendant';
    multi: FormControl<boolean>;
    disabled: FormControl<boolean>;
    wrap: FormControl<boolean>;
    skipDisabled: FormControl<boolean>;
    nav: FormControl<boolean>;
    selectedValues: i0.ModelSignal<string[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeConfigurableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeConfigurableExample, "tree-configurable-example", ["TreeConfigurableExample"], { "selectedValues": { "alias": "selectedValues"; "required": false; "isSignal": true; }; }, { "selectedValues": "selectedValuesChange"; }, never, never, true, never>;
}

/**
 * @title Tree with active descendant focus.
 */
declare class TreeActiveDescendantExample {
    nodes: TreeNode[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeActiveDescendantExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeActiveDescendantExample, "tree-active-descendant-example", ["TreeActiveDescendantExample"], {}, {}, never, never, true, never>;
}

/**
 * @title Tree with disabled state.
 */
declare class TreeDisabledExample {
    nodes: TreeNode[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeDisabledExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeDisabledExample, "tree-disabled-example", ["TreeDisabledExample"], {}, {}, never, never, true, never>;
}

/**
 * @title Tree with focusable disabled items.
 */
declare class TreeDisabledFocusableExample {
    nodes: TreeNode[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeDisabledFocusableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeDisabledFocusableExample, "tree-disabled-focusable-example", ["TreeDisabledFocusableExample"], {}, {}, never, never, true, never>;
}

/**
 * @title Tree with skipped disabled items.
 */
declare class TreeDisabledSkippedExample {
    nodes: TreeNode[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeDisabledSkippedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeDisabledSkippedExample, "tree-disabled-skipped-example", ["TreeDisabledSkippedExample"], {}, {}, never, never, true, never>;
}

/**
 * @title Tree with multi-selection.
 */
declare class TreeMultiSelectExample {
    nodes: TreeNode[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeMultiSelectExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeMultiSelectExample, "tree-multi-select-example", ["TreeMultiSelectExample"], {}, {}, never, never, true, never>;
}

/**
 * @title Tree with multi-selection and follow focus.
 */
declare class TreeMultiSelectFollowFocusExample {
    nodes: TreeNode[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeMultiSelectFollowFocusExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeMultiSelectFollowFocusExample, "tree-multi-select-follow-focus-example", ["TreeMultiSelectFollowFocusExample"], {}, {}, never, never, true, never>;
}

/**
 * @title Tree with nav mode.
 */
declare class TreeNavExample {
    nodes: TreeNode[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeNavExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeNavExample, "tree-nav-example", ["TreeNavExample"], {}, {}, never, never, true, never>;
}

/**
 * @title Tree with single selection.
 */
declare class TreeSingleSelectExample {
    nodes: TreeNode[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeSingleSelectExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeSingleSelectExample, "tree-single-select-example", ["TreeSingleSelectExample"], {}, {}, never, never, true, never>;
}

/**
 * @title Tree with single selection and follow focus.
 */
declare class TreeSingleSelectFollowFocusExample {
    nodes: TreeNode[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeSingleSelectFollowFocusExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeSingleSelectFollowFocusExample, "tree-single-select-follow-focus-example", ["TreeSingleSelectFollowFocusExample"], {}, {}, never, never, true, never>;
}

export { TreeActiveDescendantExample, TreeConfigurableExample, TreeDisabledExample, TreeDisabledFocusableExample, TreeDisabledSkippedExample, TreeMultiSelectExample, TreeMultiSelectFollowFocusExample, TreeNavExample, TreeSingleSelectExample, TreeSingleSelectFollowFocusExample };
