import * as rxjs from 'rxjs';
import { Observable } from 'rxjs';
import { ArrayDataSource } from '@angular/cdk/collections';
import { CdkTree, FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import * as i0 from '@angular/core';
import { OnInit } from '@angular/core';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface NestedFoodNode$1 {
    name: string;
    children?: NestedFoodNode$1[];
}
/**
 * @title Tree with flat nodes
 */
declare class CdkTreeFlatChildrenAccessorExample {
    tree: CdkTree<NestedFoodNode$1>;
    childrenAccessor: (dataNode: NestedFoodNode$1) => rxjs.Observable<NestedFoodNode$1[]>;
    dataSource: ArrayDataSource<NestedFoodNode$1>;
    hasChild: (_: number, node: NestedFoodNode$1) => boolean;
    getParentNode(node: NestedFoodNode$1): NestedFoodNode$1 | null;
    shouldRender(node: NestedFoodNode$1): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTreeFlatChildrenAccessorExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTreeFlatChildrenAccessorExample, "cdk-tree-flat-children-accessor-example", never, {}, {}, never, never, true, never>;
}

/** Flat node with expandable and level information */
interface FlatFoodNode$1 {
    expandable: boolean;
    name: string;
    level: number;
    isExpanded?: boolean;
}
/**
 * @title Tree with flat nodes
 */
declare class CdkTreeFlatLevelAccessorExample {
    tree: CdkTree<FlatFoodNode$1>;
    levelAccessor: (dataNode: FlatFoodNode$1) => number;
    dataSource: ArrayDataSource<FlatFoodNode$1>;
    hasChild: (_: number, node: FlatFoodNode$1) => boolean;
    getParentNode(node: FlatFoodNode$1): FlatFoodNode$1 | null;
    shouldRender(node: FlatFoodNode$1): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTreeFlatLevelAccessorExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTreeFlatLevelAccessorExample, "cdk-tree-flat-level-accessor-example", never, {}, {}, never, never, true, never>;
}

/** Flat node with expandable and level information */
interface ExampleFlatNode$1 {
    expandable: boolean;
    name: string;
    level: number;
    isExpanded?: boolean;
}
/**
 * @title Tree with flat nodes
 */
declare class CdkTreeFlatExample {
    treeControl: FlatTreeControl<ExampleFlatNode$1, ExampleFlatNode$1>;
    dataSource: ArrayDataSource<ExampleFlatNode$1>;
    hasChild: (_: number, node: ExampleFlatNode$1) => boolean;
    getParentNode(node: ExampleFlatNode$1): ExampleFlatNode$1 | null;
    shouldRender(node: ExampleFlatNode$1): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTreeFlatExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTreeFlatExample, "cdk-tree-flat-example", never, {}, {}, never, never, true, never>;
}

/** Flat node with expandable and level information */
interface FlatFoodNode {
    expandable: boolean;
    name: string;
    level: number;
    isExpanded?: boolean;
}
/**
 * @title Tree with nested nodes and level accessor
 */
declare class CdkTreeNestedLevelAccessorExample {
    tree: CdkTree<FlatFoodNode>;
    levelAccessor: (dataNode: FlatFoodNode) => number;
    dataSource: ArrayDataSource<FlatFoodNode>;
    hasChild: (_: number, node: FlatFoodNode) => boolean;
    getParentNode(node: FlatFoodNode): FlatFoodNode | null;
    shouldRender(node: FlatFoodNode): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTreeNestedLevelAccessorExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTreeNestedLevelAccessorExample, "cdk-tree-nested-level-accessor-example", never, {}, {}, never, never, true, never>;
}

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface NestedFoodNode {
    name: string;
    children?: NestedFoodNode[];
}
/**
 * @title Tree with nested nodes using childAccessor
 */
declare class CdkTreeNestedChildrenAccessorExample {
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
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
    name: string;
    children?: FoodNode[];
}
/**
 * @title Tree with nested nodes
 */
declare class CdkTreeNestedExample {
    treeControl: NestedTreeControl<FoodNode, FoodNode>;
    dataSource: ArrayDataSource<FoodNode>;
    hasChild: (_: number, node: FoodNode) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTreeNestedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTreeNestedExample, "cdk-tree-nested-example", never, {}, {}, never, never, true, never>;
}

type LoadingState = 'INIT' | 'LOADING' | 'LOADED';
interface RawData {
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
/**
 * @title Complex example making use of the redux pattern.
 */
declare class CdkTreeComplexExample implements OnInit {
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

/** Flat node with expandable and level information */
interface ExampleFlatNode {
    expandable: boolean;
    name: string;
    level: number;
    isExpanded?: boolean;
}
/**
 * @title Tree with vim keyboard commands.
 */
declare class CdkTreeCustomKeyManagerExample {
    treeControl: FlatTreeControl<ExampleFlatNode, ExampleFlatNode>;
    dataSource: ArrayDataSource<ExampleFlatNode>;
    hasChild: (_: number, node: ExampleFlatNode) => boolean;
    getParentNode(node: ExampleFlatNode): ExampleFlatNode | null;
    shouldRender(node: ExampleFlatNode): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTreeCustomKeyManagerExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTreeCustomKeyManagerExample, "cdk-tree-custom-key-manager-example", never, {}, {}, never, never, true, never>;
}

export { CdkTreeComplexExample, CdkTreeCustomKeyManagerExample, CdkTreeFlatChildrenAccessorExample, CdkTreeFlatExample, CdkTreeFlatLevelAccessorExample, CdkTreeNestedChildrenAccessorExample, CdkTreeNestedExample, CdkTreeNestedLevelAccessorExample };
