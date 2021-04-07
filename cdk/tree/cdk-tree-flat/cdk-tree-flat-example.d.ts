import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import * as i0 from "@angular/core";
/** Flat node with expandable and level information */
interface ExampleFlatNode {
    expandable: boolean;
    name: string;
    level: number;
    isExpanded?: boolean;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTreeFlatExample, "cdk-tree-flat-example", never, {}, {}, never, never>;
}
export {};
