import { FlatTreeControl } from '@angular/cdk/tree';
import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
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
}
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
export declare class DynamicDataSource {
    private treeControl;
    private database;
    dataChange: BehaviorSubject<DynamicFlatNode[]>;
    data: DynamicFlatNode[];
    constructor(treeControl: FlatTreeControl<DynamicFlatNode>, database: DynamicDatabase);
    connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]>;
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
}
