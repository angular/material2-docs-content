import * as i0 from '@angular/core';
import { DataSource, CollectionViewer, SelectionChange, ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatTreeFlattener, MatTreeFlatDataSource, MatTreeNestedDataSource } from '@angular/material/tree';

/** Flat node with expandable and level information */
declare class DynamicFlatNode {
    item: string;
    level: number;
    expandable: boolean;
    isLoading: i0.WritableSignal<boolean>;
    constructor(item: string, level?: number, expandable?: boolean, isLoading?: i0.WritableSignal<boolean>);
}
/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
declare class DynamicDatabase {
    dataMap: Map<string, string[]>;
    rootLevelNodes: string[];
    /** Initial data from database */
    initialData(): DynamicFlatNode[];
    getChildren(node: string): string[] | undefined;
    isExpandable(node: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicDatabase, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DynamicDatabase>;
}
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
declare class DynamicDataSource implements DataSource<DynamicFlatNode> {
    private _treeControl;
    private _database;
    dataChange: BehaviorSubject<DynamicFlatNode[]>;
    get data(): DynamicFlatNode[];
    set data(value: DynamicFlatNode[]);
    constructor(_treeControl: FlatTreeControl<DynamicFlatNode>, _database: DynamicDatabase);
    connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]>;
    disconnect(collectionViewer: CollectionViewer): void;
    /** Handle expand/collapse behaviors */
    handleTreeControl(change: SelectionChange<DynamicFlatNode>): void;
    /**
     * Toggle the node, remove from display list
     */
    toggleNode(node: DynamicFlatNode, expand: boolean): void;
}
/**
 * @title Tree with dynamic data
 */
declare class TreeDynamicExample {
    constructor();
    treeControl: FlatTreeControl<DynamicFlatNode>;
    dataSource: DynamicDataSource;
    getLevel: (node: DynamicFlatNode) => number;
    isExpandable: (node: DynamicFlatNode) => boolean;
    hasChild: (_: number, _nodeData: DynamicFlatNode) => boolean;
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
/** Flat node with expandable and level information */
interface ExampleFlatNode$2 {
    expandable: boolean;
    name: string;
    level: number;
}
/**
 * @title Tree with flat nodes
 */
declare class TreeFlatOverviewExample {
    private _transformer;
    treeControl: FlatTreeControl<ExampleFlatNode$2, ExampleFlatNode$2>;
    treeFlattener: MatTreeFlattener<FoodNode$3, {
        expandable: boolean;
        name: string;
        level: number;
    }, {
        expandable: boolean;
        name: string;
        level: number;
    }>;
    dataSource: MatTreeFlatDataSource<FoodNode$3, {
        expandable: boolean;
        name: string;
        level: number;
    }, {
        expandable: boolean;
        name: string;
        level: number;
    }>;
    constructor();
    hasChild: (_: number, node: ExampleFlatNode$2) => boolean;
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
interface ExampleFlatNode$1 {
    expandable: boolean;
    name: string;
    level: number;
}
/**
 * @title Testing with MatTreeHarness
 */
declare class TreeHarnessExample {
    private _transformer;
    treeControl: FlatTreeControl<ExampleFlatNode$1, ExampleFlatNode$1>;
    treeFlattener: MatTreeFlattener<Node, {
        expandable: boolean;
        name: string;
        level: number;
    }, {
        expandable: boolean;
        name: string;
        level: number;
    }>;
    dataSource: MatTreeFlatDataSource<Node, {
        expandable: boolean;
        name: string;
        level: number;
    }, {
        expandable: boolean;
        name: string;
        level: number;
    }>;
    constructor();
    hasChild: (_: number, node: ExampleFlatNode$1) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeHarnessExample, "tree-harness-example", never, {}, {}, never, never, true, never>;
}

/** Nested node */
declare class NestedNode {
    name: string;
    hasChildren: boolean;
    parent: string | null;
    isLoadMore: boolean;
    childrenChange: BehaviorSubject<NestedNode[]>;
    get children(): NestedNode[];
    constructor(name: string, hasChildren?: boolean, parent?: string | null, isLoadMore?: boolean);
}
/** Flat node with expandable and level information */
declare class FlatNode {
    name: string;
    level: number;
    expandable: boolean;
    parent: string | null;
    isLoadMore: boolean;
    constructor(name: string, level?: number, expandable?: boolean, parent?: string | null, isLoadMore?: boolean);
}
/**
 * @title Tree with partially loaded data
 */
declare class TreeLoadmoreExample {
    private _database;
    nodeMap: Map<string, FlatNode>;
    treeControl: FlatTreeControl<FlatNode>;
    treeFlattener: MatTreeFlattener<NestedNode, FlatNode>;
    dataSource: MatTreeFlatDataSource<NestedNode, FlatNode>;
    constructor();
    getChildren: (node: NestedNode) => Observable<NestedNode[]>;
    transformer: (node: NestedNode, level: number) => FlatNode;
    getLevel: (node: FlatNode) => number;
    isExpandable: (node: FlatNode) => boolean;
    hasChild: (_: number, node: FlatNode) => boolean;
    isLoadMore: (_: number, node: FlatNode) => boolean;
    loadChildren(node: FlatNode): void;
    /** Load more nodes when clicking on "Load more" node. */
    loadOnClick(event: MouseEvent, node: FlatNode): void;
    /** Load more nodes on keyboardpress when focused on "Load more" node */
    loadOnKeypress(event: KeyboardEvent, node: FlatNode): void;
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
    treeControl: NestedTreeControl<FoodNode$1, FoodNode$1>;
    dataSource: MatTreeNestedDataSource<FoodNode$1>;
    constructor();
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
