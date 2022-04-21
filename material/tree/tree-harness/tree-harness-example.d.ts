import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import * as i0 from "@angular/core";
interface Node {
    name: string;
    children?: Node[];
}
interface ExampleFlatNode {
    expandable: boolean;
    name: string;
    level: number;
}
/**
 * @title Testing with MatTreeHarness
 */
export declare class TreeHarnessExample {
    private _transformer;
    treeControl: FlatTreeControl<ExampleFlatNode, ExampleFlatNode>;
    treeFlattener: MatTreeFlattener<Node, {
        expandable: boolean;
        name: string;
        level: number;
    }, {
        expandable: boolean;
        name: string;
        level: number;
    }>;
    dataSource: MatTreeFlatDataSource<Node, {
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
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeHarnessExample, "tree-harness-example", never, {}, {}, never, never, false>;
}
export {};
