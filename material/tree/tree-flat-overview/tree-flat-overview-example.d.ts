import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import * as i0 from "@angular/core";
/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
    name: string;
    children?: FoodNode[];
}
/** Flat node with expandable and level information */
interface ExampleFlatNode {
    expandable: boolean;
    name: string;
    level: number;
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
export {};
