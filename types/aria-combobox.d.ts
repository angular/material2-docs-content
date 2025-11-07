import * as i0 from '@angular/core';
import { ElementRef } from '@angular/core';
import { ComboboxDialog, Combobox } from '@angular/aria/combobox';
import { Listbox } from '@angular/aria/listbox';
import { Tree } from '@angular/aria/tree';

/** @title Combobox with a dialog popup. */
declare class ComboboxDialogExample {
    dialog: i0.Signal<ComboboxDialog | undefined>;
    listbox: i0.Signal<Listbox<string> | undefined>;
    combobox: i0.Signal<Combobox<string> | undefined>;
    value: i0.WritableSignal<string>;
    searchString: i0.WritableSignal<string>;
    options: i0.Signal<string[]>;
    selectedStates: i0.WritableSignal<string[]>;
    constructor();
    positionDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComboboxDialogExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComboboxDialogExample, "combobox-dialog-example", never, {}, {}, never, never, true, never>;
}

/** @title Combobox with manual selection. */
declare class ComboboxManualExample {
    popover: i0.Signal<ElementRef<any> | undefined>;
    listbox: i0.Signal<Listbox<any> | undefined>;
    combobox: i0.Signal<Combobox<any> | undefined>;
    searchString: i0.WritableSignal<string>;
    options: i0.Signal<string[]>;
    constructor();
    showPopover(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComboboxManualExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComboboxManualExample, "combobox-manual-example", never, {}, {}, never, never, true, never>;
}

/** @title Combobox with auto-select filtering. */
declare class ComboboxAutoSelectExample {
    popover: i0.Signal<ElementRef<any> | undefined>;
    listbox: i0.Signal<Listbox<any> | undefined>;
    combobox: i0.Signal<Combobox<any> | undefined>;
    searchString: i0.WritableSignal<string>;
    options: i0.Signal<string[]>;
    constructor();
    showPopover(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComboboxAutoSelectExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComboboxAutoSelectExample, "combobox-auto-select-example", never, {}, {}, never, never, true, never>;
}

/** @title Combobox with highlight filtering. */
declare class ComboboxHighlightExample {
    popover: i0.Signal<ElementRef<any> | undefined>;
    listbox: i0.Signal<Listbox<any> | undefined>;
    combobox: i0.Signal<Combobox<any> | undefined>;
    searchString: i0.WritableSignal<string>;
    options: i0.Signal<string[]>;
    constructor();
    showPopover(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComboboxHighlightExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComboboxHighlightExample, "combobox-highlight-example", never, {}, {}, never, never, true, never>;
}

/** @title Readonly combobox. */
declare class ComboboxReadonlyExample {
    popover: i0.Signal<ElementRef<any> | undefined>;
    listbox: i0.Signal<Listbox<any> | undefined>;
    combobox: i0.Signal<Combobox<any> | undefined>;
    options: () => string[];
    searchString: i0.WritableSignal<string>;
    constructor();
    showPopover(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComboboxReadonlyExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComboboxReadonlyExample, "combobox-readonly-example", never, {}, {}, never, never, true, never>;
}

/** @title Readonly multiselectable combobox. */
declare class ComboboxReadonlyMultiselectExample {
    popover: i0.Signal<ElementRef<any> | undefined>;
    listbox: i0.Signal<Listbox<any> | undefined>;
    combobox: i0.Signal<Combobox<any> | undefined>;
    options: () => string[];
    searchString: i0.WritableSignal<string>;
    constructor();
    showPopover(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComboboxReadonlyMultiselectExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComboboxReadonlyMultiselectExample, "combobox-readonly-multiselect-example", never, {}, {}, never, never, true, never>;
}

interface TreeNode {
    name: string;
    children?: TreeNode[];
}

/** @title Combobox with tree popup and manual filtering. */
declare class ComboboxTreeManualExample {
    popover: i0.Signal<ElementRef<any> | undefined>;
    tree: i0.Signal<Tree<TreeNode> | undefined>;
    combobox: i0.Signal<Combobox<any> | undefined>;
    searchString: i0.WritableSignal<string>;
    nodes: i0.Signal<TreeNode[]>;
    firstMatch: i0.Signal<string | undefined>;
    flattenTreeNodes(nodes: TreeNode[]): TreeNode[];
    filterTreeNodes(nodes: TreeNode[]): TreeNode[];
    isMatch(node: TreeNode): boolean;
    constructor();
    showPopover(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComboboxTreeManualExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComboboxTreeManualExample, "combobox-tree-manual-example", never, {}, {}, never, never, true, never>;
}

/** @title Combobox with tree popup and auto-select filtering. */
declare class ComboboxTreeAutoSelectExample {
    popover: i0.Signal<ElementRef<any> | undefined>;
    tree: i0.Signal<Tree<TreeNode> | undefined>;
    combobox: i0.Signal<Combobox<any> | undefined>;
    searchString: i0.WritableSignal<string>;
    nodes: i0.Signal<TreeNode[]>;
    firstMatch: i0.Signal<string | undefined>;
    flattenTreeNodes(nodes: TreeNode[]): TreeNode[];
    filterTreeNodes(nodes: TreeNode[]): TreeNode[];
    isMatch(node: TreeNode): boolean;
    constructor();
    showPopover(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComboboxTreeAutoSelectExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComboboxTreeAutoSelectExample, "combobox-tree-auto-select-example", never, {}, {}, never, never, true, never>;
}

/** @title Combobox with tree popup and highlight filtering. */
declare class ComboboxTreeHighlightExample {
    popover: i0.Signal<ElementRef<any> | undefined>;
    tree: i0.Signal<Tree<TreeNode> | undefined>;
    combobox: i0.Signal<Combobox<any> | undefined>;
    searchString: i0.WritableSignal<string>;
    nodes: i0.Signal<TreeNode[]>;
    firstMatch: i0.Signal<string | undefined>;
    flattenTreeNodes(nodes: TreeNode[]): TreeNode[];
    filterTreeNodes(nodes: TreeNode[]): TreeNode[];
    isMatch(node: TreeNode): boolean;
    constructor();
    showPopover(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComboboxTreeHighlightExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComboboxTreeHighlightExample, "combobox-tree-highlight-example", never, {}, {}, never, never, true, never>;
}

export { ComboboxAutoSelectExample, ComboboxDialogExample, ComboboxHighlightExample, ComboboxManualExample, ComboboxReadonlyExample, ComboboxReadonlyMultiselectExample, ComboboxTreeAutoSelectExample, ComboboxTreeHighlightExample, ComboboxTreeManualExample };
