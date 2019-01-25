import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
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
    private transformer;
    treeControl: FlatTreeControl<ExampleFlatNode>;
    treeFlattener: MatTreeFlattener<FoodNode, {
        expandable: boolean;
        name: string;
        level: number;
    }>;
    dataSource: MatTreeFlatDataSource<FoodNode, {
        expandable: boolean;
        name: string;
        level: number;
    }>;
    constructor();
    hasChild: (_: number, node: ExampleFlatNode) => boolean;
}
export {};
