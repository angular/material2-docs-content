import { ArrayDataSource } from '@angular/cdk/collections';
import { CdkTree } from '@angular/cdk/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import * as i0 from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';

/**
 * @title Complex example making use of the redux pattern.
 */
export declare class CdkTreeComplexExample implements OnInit {
    private readonly _dataStore;
    areRootsLoading: Observable<boolean>;
    roots: Observable<TransformedData[]>;
    getChildren: (node: TransformedData) => Observable<TransformedData[]>;
    trackBy: (index: number, node: TransformedData) => string;
    expansionKey: (node: TransformedData) => string;
    ngOnInit(): void;
    onExpand(node: TransformedData, expanded: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTreeComplexExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTreeComplexExample, "cdk-tree-complex-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Tree with vim keyboard commands.
 */
export declare class CdkTreeCustomKeyManagerExample {
    treeControl: FlatTreeControl<ExampleFlatNode_2, ExampleFlatNode_2>;
    dataSource: ArrayDataSource<ExampleFlatNode_2>;
    hasChild: (_: number, node: ExampleFlatNode_2) => boolean;
    getParentNode(node: ExampleFlatNode_2): ExampleFlatNode_2 | null;
    shouldRender(node: ExampleFlatNode_2): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTreeCustomKeyManagerExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTreeCustomKeyManagerExample, "cdk-tree-custom-key-manager-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Tree with flat nodes
 */
export declare class CdkTreeFlatChildrenAccessorExample {
    tree: CdkTree<NestedFoodNode>;
    childrenAccessor: (dataNode: NestedFoodNode) => Observable<NestedFoodNode[]>;
    dataSource: ArrayDataSource<NestedFoodNode>;
    hasChild: (_: number, node: NestedFoodNode) => boolean;
    getParentNode(node: NestedFoodNode): NestedFoodNode | null;
    shouldRender(node: NestedFoodNode): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTreeFlatChildrenAccessorExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTreeFlatChildrenAccessorExample, "cdk-tree-flat-children-accessor-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Tree with flat nodes
 */
export declare class CdkTreeFlatExample {
    treeControl: FlatTreeControl<ExampleFlatNode, ExampleFlatNode>;
    dataSource: ArrayDataSource<ExampleFlatNode>;
    hasChild: (_: number, node: ExampleFlatNode) => boolean;
    getParentNode(node: ExampleFlatNode): ExampleFlatNode | null;
    shouldRender(node: ExampleFlatNode): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTreeFlatExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTreeFlatExample, "cdk-tree-flat-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Tree with flat nodes
 */
export declare class CdkTreeFlatLevelAccessorExample {
    tree: CdkTree<FlatFoodNode>;
    levelAccessor: (dataNode: FlatFoodNode) => number;
    dataSource: ArrayDataSource<FlatFoodNode>;
    hasChild: (_: number, node: FlatFoodNode) => boolean;
    getParentNode(node: FlatFoodNode): FlatFoodNode | null;
    shouldRender(node: FlatFoodNode): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTreeFlatLevelAccessorExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTreeFlatLevelAccessorExample, "cdk-tree-flat-level-accessor-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Tree with nested nodes, using childAccessor
 */
export declare class CdkTreeNestedChildrenAccessorExample {
    tree: CdkTree<NestedFoodNode>;
    childrenAccessor: (dataNode: NestedFoodNode) => NestedFoodNode[];
    dataSource: ArrayDataSource<NestedFoodNode>;
    hasChild: (_: number, node: NestedFoodNode) => boolean;
    getParentNode(node: NestedFoodNode): NestedFoodNode | null;
    shouldRender(node: NestedFoodNode): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTreeNestedChildrenAccessorExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTreeNestedChildrenAccessorExample, "cdk-tree-nested-children-accessor-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Tree with nested nodes
 */
export declare class CdkTreeNestedExample {
    treeControl: NestedTreeControl<FoodNode, FoodNode>;
    dataSource: ArrayDataSource<FoodNode>;
    hasChild: (_: number, node: FoodNode) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTreeNestedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTreeNestedExample, "cdk-tree-nested-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Tree with nested nodes
 */
export declare class CdkTreeNestedLevelAccessorExample {
    tree: CdkTree<FlatFoodNode>;
    levelAccessor: (dataNode: FlatFoodNode) => number;
    dataSource: ArrayDataSource<FlatFoodNode>;
    hasChild: (_: number, node: FlatFoodNode) => boolean;
    getParentNode(node: FlatFoodNode): FlatFoodNode | null;
    shouldRender(node: FlatFoodNode): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTreeNestedLevelAccessorExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTreeNestedLevelAccessorExample, "cdk-tree-nested-level-accessor-example", never, {}, {}, never, never, true, never>;
}

/** Flat node with expandable and level information */
declare interface ExampleFlatNode {
    expandable: boolean;
    name: string;
    level: number;
    isExpanded?: boolean;
}

/** Flat node with expandable and level information */
declare interface ExampleFlatNode_2 {
    expandable: boolean;
    name: string;
    level: number;
    isExpanded?: boolean;
}

/** Flat node with expandable and level information */
declare interface FlatFoodNode {
    expandable: boolean;
    name: string;
    level: number;
    isExpanded?: boolean;
}

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
declare interface FoodNode {
    name: string;
    children?: FoodNode[];
}

declare type LoadingState = 'INIT' | 'LOADING' | 'LOADED';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
declare interface NestedFoodNode {
    name: string;
    children?: NestedFoodNode[];
}

declare interface RawData {
    id: string;
    name: string;
    parentId?: string;
    childrenIds?: string[];
    childrenLoading: LoadingState;
}

declare class TransformedData {
    raw: RawData;
    constructor(raw: RawData);
    areChildrenLoading(): boolean;
    isExpandable(): boolean;
    isLeaf(): boolean;
}

export { }
