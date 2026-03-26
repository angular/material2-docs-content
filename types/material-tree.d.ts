import * as i0 from '@angular/core';
import { signal } from '@angular/core';
import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';

/** Node with expandable and level information */
interface DynamicNode {
    name: string;
    level: number;
    expandable: boolean;
    isLoading: ReturnType<typeof signal<boolean>>;
    children?: DynamicNode[];
}
/**
 * @title Tree with dynamic data
 */
declare class TreeDynamicExample {
    private _database;
    dataSource: DynamicNode[];
    childrenAccessor: (node: DynamicNode) => DynamicNode[];
    hasChild: (_: number, node: DynamicNode) => boolean;
    /**
     * Load children on node expansion.
     * Called from template via (expandedChange) output.
     */
    onNodeExpanded(node: DynamicNode, expanded: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeDynamicExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeDynamicExample, "tree-dynamic-example", never, {}, {}, never, never, true, never>;
}

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode$3 {
    name: string;
    children?: FoodNode$3[];
}
/**
 * @title Tree with flat nodes
 */
declare class TreeFlatOverviewExample {
    dataSource: FoodNode$3[];
    childrenAccessor: (node: FoodNode$3) => FoodNode$3[];
    hasChild: (_: number, node: FoodNode$3) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeFlatOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeFlatOverviewExample, "tree-flat-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode$2 {
    name: string;
    children?: FoodNode$2[];
}
/**
 * @title Tree with flat nodes (childrenAccessor)
 */
declare class TreeFlatChildAccessorOverviewExample {
    dataSource: FoodNode$2[];
    childrenAccessor: (node: FoodNode$2) => FoodNode$2[];
    hasChild: (_: number, node: FoodNode$2) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeFlatChildAccessorOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeFlatChildAccessorOverviewExample, "tree-flat-child-accessor-overview-example", never, {}, {}, never, never, true, never>;
}

interface Node {
    name: string;
    children?: Node[];
}
/**
 * @title Testing with MatTreeHarness
 */
declare class TreeHarnessExample {
    dataSource: Node[];
    childrenAccessor: (node: Node) => Node[];
    hasChild: (_: number, node: Node) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeHarnessExample, "tree-harness-example", never, {}, {}, never, never, true, never>;
}

/** Node data with optional children */
interface TreeNode {
    name: string;
    parent: string | null;
    expandable: boolean;
    isLoadMore: boolean;
    children?: TreeNode[];
}
/**
 * @title Tree with partially loaded data
 */
declare class TreeLoadmoreExample {
    private _database;
    dataSource: i0.WritableSignal<TreeNode[]>;
    childrenAccessor: (node: TreeNode) => TreeNode[];
    hasChild: (_: number, node: TreeNode) => boolean;
    isLoadMore: (_: number, node: TreeNode) => boolean;
    constructor();
    loadChildren(node: TreeNode): void;
    /** Load more nodes when clicking on "Load more" node. */
    loadOnClick(event: MouseEvent, node: TreeNode): void;
    /** Load more nodes on keypress when focused on "Load more" node */
    loadOnKeypress(event: KeyboardEvent, node: TreeNode): void;
    private _loadSiblings;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeLoadmoreExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeLoadmoreExample, "tree-loadmore-example", never, {}, {}, never, never, true, never>;
}

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode$1 {
    name: string;
    children?: FoodNode$1[];
}
/**
 * @title Tree with nested nodes
 */
declare class TreeNestedOverviewExample {
    childrenAccessor: (node: FoodNode$1) => FoodNode$1[];
    dataSource: FoodNode$1[];
    hasChild: (_: number, node: FoodNode$1) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeNestedOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeNestedOverviewExample, "tree-nested-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
    name: string;
    children?: FoodNode[];
}
/**
 * @title Tree with nested nodes (childrenAccessor)
 */
declare class TreeNestedChildAccessorOverviewExample {
    childrenAccessor: (node: FoodNode) => FoodNode[];
    dataSource: FoodNode[];
    hasChild: (_: number, node: FoodNode) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeNestedChildAccessorOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeNestedChildAccessorOverviewExample, "tree-nested-child-accessor-overview-example", never, {}, {}, never, never, true, never>;
}

/** Flat node with expandable and level information */
interface ExampleFlatNode {
    expandable: boolean;
    name: string;
    level: number;
}
/**
 * @title Tree with flat nodes
 */
declare class TreeLegacyKeyboardInterfaceExample {
    treeControl: FlatTreeControl<ExampleFlatNode, ExampleFlatNode>;
    dataSource: ArrayDataSource<ExampleFlatNode>;
    hasChild: (_: number, node: ExampleFlatNode) => boolean;
    getParentNode(node: ExampleFlatNode): ExampleFlatNode | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeLegacyKeyboardInterfaceExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeLegacyKeyboardInterfaceExample, "tree-legacy-keyboard-interface-example", never, {}, {}, never, never, true, never>;
}

export { TreeDynamicExample, TreeFlatChildAccessorOverviewExample, TreeFlatOverviewExample, TreeHarnessExample, TreeLegacyKeyboardInterfaceExample, TreeLoadmoreExample, TreeNestedChildAccessorOverviewExample, TreeNestedOverviewExample };
