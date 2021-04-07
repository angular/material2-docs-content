/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject, Observable } from 'rxjs';
import * as i0 from "@angular/core";
/** Nested node */
export declare class LoadmoreNode {
    item: string;
    hasChildren: boolean;
    loadMoreParentItem: string | null;
    childrenChange: BehaviorSubject<LoadmoreNode[]>;
    get children(): LoadmoreNode[];
    constructor(item: string, hasChildren?: boolean, loadMoreParentItem?: string | null);
}
/** Flat node with expandable and level information */
export declare class LoadmoreFlatNode {
    item: string;
    level: number;
    expandable: boolean;
    loadMoreParentItem: string | null;
    constructor(item: string, level?: number, expandable?: boolean, loadMoreParentItem?: string | null);
}
/**
 * A database that only load part of the data initially. After user clicks on the `Load more`
 * button, more data will be loaded.
 */
export declare class LoadmoreDatabase {
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
    static ɵprov: i0.ɵɵInjectableDef<LoadmoreDatabase>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeLoadmoreExample, "tree-loadmore-example", never, {}, {}, never, never>;
}
