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
    isLoading: boolean;
    constructor(item: string, level?: number, expandable?: boolean, isLoading?: boolean);
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
 * A database that only load part of the data initially. After user clicks on the `Load more`
 * button, more data will be loaded.
 */
declare class LoadmoreDatabase {
    batchNumber: number;
    dataChange: BehaviorSubject<LoadmoreNode[]>;
    nodeMap: Map<string, LoadmoreNode>;
    /** The data */
    rootLevelNodes: string[];
    dataMap: Map<string, string[]>;
    initialize(): void;
    /** Expand a node whose children are not loaded */
    loadMore(item: string, onlyFirstTime?: boolean): void;
    private _generateNode;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadmoreDatabase, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoadmoreDatabase>;
}

/** Flat node with expandable and level information */
declare class LoadmoreFlatNode {
    item: string;
    level: number;
    expandable: boolean;
    loadMoreParentItem: string | null;
    constructor(item: string, level?: number, expandable?: boolean, loadMoreParentItem?: string | null);
}

/** Nested node */
declare class LoadmoreNode {
    item: string;
    hasChildren: boolean;
    loadMoreParentItem: string | null;
    childrenChange: BehaviorSubject<LoadmoreNode[]>;
    get children(): LoadmoreNode[];
    constructor(item: string, hasChildren?: boolean, loadMoreParentItem?: string | null);
}

declare interface Node_2 {
    name: string;
    children?: Node_2[];
}

/**
 * @title Tree with dynamic data
 */
export declare class TreeDynamicExample {
    constructor(database: DynamicDatabase);
    treeControl: FlatTreeControl<DynamicFlatNode>;
    dataSource: DynamicDataSource;
    getLevel: (node: DynamicFlatNode) => number;
    isExpandable: (node: DynamicFlatNode) => boolean;
    hasChild: (_: number, _nodeData: DynamicFlatNode) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeDynamicExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeDynamicExample, "tree-dynamic-example", never, {}, {}, never, never, true, never>;
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
 * @title Tree with partially loaded data
 */
export declare class TreeLoadmoreExample {
    private _database;
    nodeMap: Map<string, LoadmoreFlatNode>;
    treeControl: FlatTreeControl<LoadmoreFlatNode>;
    treeFlattener: MatTreeFlattener<LoadmoreNode, LoadmoreFlatNode>;
    dataSource: MatTreeFlatDataSource<LoadmoreNode, LoadmoreFlatNode>;
    constructor(_database: LoadmoreDatabase);
    getChildren: (node: LoadmoreNode) => Observable<LoadmoreNode[]>;
    transformer: (node: LoadmoreNode, level: number) => LoadmoreFlatNode;
    getLevel: (node: LoadmoreFlatNode) => number;
    isExpandable: (node: LoadmoreFlatNode) => boolean;
    hasChild: (_: number, _nodeData: LoadmoreFlatNode) => boolean;
    isLoadMore: (_: number, _nodeData: LoadmoreFlatNode) => boolean;
    /** Load more nodes from data source */
    loadMore(item: string): void;
    loadChildren(node: LoadmoreFlatNode): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeLoadmoreExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeLoadmoreExample, "tree-loadmore-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Tree with nested nodes
 */
export declare class TreeNestedOverviewExample {
    treeControl: NestedTreeControl<FoodNode_2, FoodNode_2>;
    dataSource: MatTreeNestedDataSource<FoodNode_2>;
    constructor();
    hasChild: (_: number, node: FoodNode_2) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeNestedOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeNestedOverviewExample, "tree-nested-overview-example", never, {}, {}, never, never, true, never>;
}

export { }
