import { CollectionViewer, SelectionChange, DataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { BehaviorSubject, Observable } from 'rxjs';
import * as i0 from "@angular/core";
/** Flat node with expandable and level information */
export declare class DynamicFlatNode {
    item: string;
    level: number;
    expandable: boolean;
    isLoading: boolean;
    constructor(item: string, level?: number, expandable?: boolean, isLoading?: boolean);
}
/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
export declare class DynamicDatabase {
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
export declare class DynamicDataSource implements DataSource<DynamicFlatNode> {
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
