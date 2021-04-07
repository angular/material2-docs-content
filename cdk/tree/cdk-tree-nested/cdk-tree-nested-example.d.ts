import { ArrayDataSource } from '@angular/cdk/collections';
import { NestedTreeControl } from '@angular/cdk/tree';
import * as i0 from "@angular/core";
/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface FoodNode {
    name: string;
    children?: FoodNode[];
}
/**
 * @title Tree with nested nodes
 */
export declare class CdkTreeNestedExample {
    treeControl: NestedTreeControl<FoodNode, FoodNode>;
    dataSource: ArrayDataSource<FoodNode>;
    hasChild: (_: number, node: FoodNode) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTreeNestedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTreeNestedExample, "cdk-tree-nested-example", never, {}, {}, never, never>;
}
export {};
