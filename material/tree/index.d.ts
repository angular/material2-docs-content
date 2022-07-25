import { BehaviorSubject } from 'rxjs';
import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import * as i0 from '@angular/core';
import * as i10 from '@angular/material/icon';
import * as i11 from '@angular/material/legacy-input';
import * as i12 from '@angular/material/legacy-progress-bar';
import * as i13 from '@angular/material/tree';
import * as i7 from '@angular/common';
import * as i8 from '@angular/material/button';
import * as i9 from '@angular/material/checkbox';
import { MatTreeFlatDataSource } from '@angular/material/tree';
import { MatTreeFlattener } from '@angular/material/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Observable } from 'rxjs';
import { SelectionChange } from '@angular/cdk/collections';
import { SelectionModel } from '@angular/cdk/collections';

/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
declare class ChecklistDatabase {
    dataChange: BehaviorSubject<TodoItemNode[]>;
    get data(): TodoItemNode[];
    constructor();
    initialize(): void;
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     */
    buildFileTree(obj: {
        [key: string]: any;
    }, level: number): TodoItemNode[];
    /** Add an item to to-do list */
    insertItem(parent: TodoItemNode, name: string): void;
    updateItem(node: TodoItemNode, name: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChecklistDatabase, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ChecklistDatabase>;
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

declare namespace i1 {
    export {
        TodoItemNode,
        TodoItemFlatNode,
        ChecklistDatabase,
        TreeChecklistExample
    }
}

declare namespace i2 {
    export {
        DynamicFlatNode,
        DynamicDatabase,
        DynamicDataSource,
        TreeDynamicExample
    }
}

declare namespace i3 {
    export {
        TreeFlatOverviewExample
    }
}

declare namespace i4 {
    export {
        TreeHarnessExample
    }
}

declare namespace i5 {
    export {
        LoadmoreNode,
        LoadmoreFlatNode,
        LoadmoreDatabase,
        TreeLoadmoreExample
    }
}

declare namespace i6 {
    export {
        TreeNestedOverviewExample
    }
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

/** Flat to-do item node with expandable and level information */
declare class TodoItemFlatNode {
    item: string;
    level: number;
    expandable: boolean;
}

/**
 * Node for to-do item
 */
declare class TodoItemNode {
    children: TodoItemNode[];
    item: string;
}

/**
 * @title Tree with checkboxes
 */
export declare class TreeChecklistExample {
    private _database;
    /** Map from flat node to nested node. This helps us finding the nested node to be modified */
    flatNodeMap: Map<TodoItemFlatNode, TodoItemNode>;
    /** Map from nested node to flattened node. This helps us to keep the same object for selection */
    nestedNodeMap: Map<TodoItemNode, TodoItemFlatNode>;
    /** A selected parent node to be inserted */
    selectedParent: TodoItemFlatNode | null;
    /** The new item's name */
    newItemName: string;
    treeControl: FlatTreeControl<TodoItemFlatNode>;
    treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;
    dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;
    /** The selection for checklist */
    checklistSelection: SelectionModel<TodoItemFlatNode>;
    constructor(_database: ChecklistDatabase);
    getLevel: (node: TodoItemFlatNode) => number;
    isExpandable: (node: TodoItemFlatNode) => boolean;
    getChildren: (node: TodoItemNode) => TodoItemNode[];
    hasChild: (_: number, _nodeData: TodoItemFlatNode) => boolean;
    hasNoContent: (_: number, _nodeData: TodoItemFlatNode) => boolean;
    /**
     * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
     */
    transformer: (node: TodoItemNode, level: number) => TodoItemFlatNode;
    /** Whether all the descendants of the node are selected. */
    descendantsAllSelected(node: TodoItemFlatNode): boolean;
    /** Whether part of the descendants are selected */
    descendantsPartiallySelected(node: TodoItemFlatNode): boolean;
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    todoItemSelectionToggle(node: TodoItemFlatNode): void;
    /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
    todoLeafItemSelectionToggle(node: TodoItemFlatNode): void;
    checkAllParentsSelection(node: TodoItemFlatNode): void;
    /** Check root node checked state and change it accordingly */
    checkRootNodeSelection(node: TodoItemFlatNode): void;
    getParentNode(node: TodoItemFlatNode): TodoItemFlatNode | null;
    /** Select the category so we can insert the new item. */
    addNewItem(node: TodoItemFlatNode): void;
    /** Save the node to database */
    saveNode(node: TodoItemFlatNode, itemValue: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeChecklistExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeChecklistExample, "tree-checklist-example", never, {}, {}, never, never, false>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeDynamicExample, "tree-dynamic-example", never, {}, {}, never, never, false>;
}

export declare class TreeExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TreeExamplesModule, [typeof i1.TreeChecklistExample, typeof i2.TreeDynamicExample, typeof i3.TreeFlatOverviewExample, typeof i4.TreeHarnessExample, typeof i5.TreeLoadmoreExample, typeof i6.TreeNestedOverviewExample], [typeof i7.CommonModule, typeof i8.MatButtonModule, typeof i9.MatCheckboxModule, typeof i10.MatIconModule, typeof i11.MatLegacyInputModule, typeof i12.MatLegacyProgressBarModule, typeof i13.MatTreeModule], [typeof i1.TreeChecklistExample, typeof i2.TreeDynamicExample, typeof i3.TreeFlatOverviewExample, typeof i4.TreeHarnessExample, typeof i5.TreeLoadmoreExample, typeof i6.TreeNestedOverviewExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TreeExamplesModule>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeFlatOverviewExample, "tree-flat-overview-example", never, {}, {}, never, never, false>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeHarnessExample, "tree-harness-example", never, {}, {}, never, never, false>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeLoadmoreExample, "tree-loadmore-example", never, {}, {}, never, never, false>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeNestedOverviewExample, "tree-nested-overview-example", never, {}, {}, never, never, false>;
}

export { }
