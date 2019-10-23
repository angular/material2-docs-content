import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
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
export declare class TreeNestedOverviewExample {
    treeControl: NestedTreeControl<FoodNode>;
    dataSource: MatTreeNestedDataSource<FoodNode>;
    constructor();
    hasChild: (_: number, node: FoodNode) => boolean;
    static ɵfac: i0.ɵɵFactoryDef<TreeNestedOverviewExample>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TreeNestedOverviewExample, "tree-nested-overview-example", never, {}, {}, never>;
}
export {};
