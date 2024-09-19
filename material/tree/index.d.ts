import { ArrayDataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs';
import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import * as i0 from '@angular/core';
import { MatTreeFlatDataSource } from '@angular/material/tree';
import { MatTreeFlattener } from '@angular/material/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Observable } from 'rxjs';
import { SelectionChange } from '@angular/cdk/collections';
import { WritableSignal } from '@angular/core';

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

/** Flat node with expandable and level information */
declare class DynamicFlatNode {
    item: string;
    level: number;
    expandable: boolean;
    isLoading: WritableSignal<boolean>;
    constructor(item: string, level?: number, expandable?: boolean, isLoading?: WritableSignal<boolean>);
}

/** Flat node with expandable and level information */
declare interface ExampleFlatNode {
    expandable: boolean;
    name: string;
    level: number;
}

declare interface ExampleFlatNode_2 {
    expandable: boolean;
    name: string;
    level: number;
}

/** Flat node with expandable and level information */
declare interface ExampleFlatNode_3 {
    expandable: boolean;
    name: string;
    level: number;
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
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
declare interface FoodNode {
    name: string;
    children?: FoodNode[];
}

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
declare interface FoodNode_2 {
    name: string;
    children?: FoodNode_2[];
}

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
declare interface FoodNode_3 {
    name: string;
    children?: FoodNode_3[];
}

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
declare interface FoodNode_4 {
    name: string;
    children?: FoodNode_4[];
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

declare interface Node_2 {
    name: string;
    children?: Node_2[];
}

/**
 * @title Tree with dynamic data
 */
export declare class TreeDynamicExample {
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
 * @title Tree with flat nodes (childrenAccessor)
 */
export declare class TreeFlatChildAccessorOverviewExample {
    dataSource: FoodNode_2[];
    childrenAccessor: (node: FoodNode_2) => FoodNode_2[];
    hasChild: (_: number, node: FoodNode_2) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeFlatChildAccessorOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeFlatChildAccessorOverviewExample, "tree-flat-child-accessor-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Tree with flat nodes
 */
export declare class TreeFlatOverviewExample {
    private _transformer;
    treeControl: FlatTreeControl<ExampleFlatNode, ExampleFlatNode>;
    treeFlattener: MatTreeFlattener<FoodNode, {
        expandable: boolean;
        name: string;
        level: number;
    }, {
        expandable: boolean;
        name: string;
        level: number;
    }>;
    dataSource: MatTreeFlatDataSource<FoodNode, {
        expandable: boolean;
        name: string;
        level: number;
    }, {
        expandable: boolean;
        name: string;
        level: number;
    }>;
    constructor();
    hasChild: (_: number, node: ExampleFlatNode) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeFlatOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeFlatOverviewExample, "tree-flat-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatTreeHarness
 */
export declare class TreeHarnessExample {
    private _transformer;
    treeControl: FlatTreeControl<ExampleFlatNode_2, ExampleFlatNode_2>;
    treeFlattener: MatTreeFlattener<Node_2, {
        expandable: boolean;
        name: string;
        level: number;
    }, {
        expandable: boolean;
        name: string;
        level: number;
    }>;
    dataSource: MatTreeFlatDataSource<Node_2, {
        expandable: boolean;
        name: string;
        level: number;
    }, {
        expandable: boolean;
        name: string;
        level: number;
    }>;
    constructor();
    hasChild: (_: number, node: ExampleFlatNode_2) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeHarnessExample, "tree-harness-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Tree with flat nodes
 */
export declare class TreeLegacyKeyboardInterfaceExample {
    treeControl: FlatTreeControl<ExampleFlatNode_3, ExampleFlatNode_3>;
    dataSource: ArrayDataSource<ExampleFlatNode_3>;
    hasChild: (_: number, node: ExampleFlatNode_3) => boolean;
    getParentNode(node: ExampleFlatNode_3): ExampleFlatNode_3 | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeLegacyKeyboardInterfaceExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeLegacyKeyboardInterfaceExample, "tree-legacy-keyboard-interface-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Tree with partially loaded data
 */
export declare class TreeLoadmoreExample {
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
 * @title Tree with nested nodes (childrenAccessor)
 */
export declare class TreeNestedChildAccessorOverviewExample {
    childrenAccessor: (node: FoodNode_4) => FoodNode_4[];
    dataSource: FoodNode_4[];
    hasChild: (_: number, node: FoodNode_4) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeNestedChildAccessorOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeNestedChildAccessorOverviewExample, "tree-nested-child-accessor-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Tree with nested nodes
 */
export declare class TreeNestedOverviewExample {
    treeControl: NestedTreeControl<FoodNode_3, FoodNode_3>;
    dataSource: MatTreeNestedDataSource<FoodNode_3>;
    constructor();
    hasChild: (_: number, node: FoodNode_3) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeNestedOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeNestedOverviewExample, "tree-nested-overview-example", never, {}, {}, never, never, true, never>;
}

export { }
