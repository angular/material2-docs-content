import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import * as i0 from "@angular/core";
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
export declare class TreeNestedOverviewExample {
    treeControl: NestedTreeControl<FoodNode, FoodNode>;
    dataSource: MatTreeNestedDataSource<FoodNode>;
    constructor();
    hasChild: (_: number, node: FoodNode) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeNestedOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeNestedOverviewExample, "tree-nested-overview-example", never, {}, {}, never, never>;
}
export {};
