import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import * as i0 from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';

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
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTreeFlatExample, "cdk-tree-flat-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Tree with nested nodes
 */
export declare class CdkTreeNestedExample {
    treeControl: NestedTreeControl<FoodNode, FoodNode>;
    dataSource: ArrayDataSource<FoodNode>;
    hasChild: (_: number, node: FoodNode) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTreeNestedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTreeNestedExample, "cdk-tree-nested-example", never, {}, {}, never, never, true, never, false>;
}

/** Flat node with expandable and level information */
declare interface ExampleFlatNode {
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

export { }
