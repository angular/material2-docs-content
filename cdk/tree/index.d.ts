import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import * as i0 from '@angular/core';
import * as i3 from '@angular/cdk/tree';
import * as i4 from '@angular/material/button';
import * as i5 from '@angular/material/icon';
import { NestedTreeControl } from '@angular/cdk/tree';

export declare class CdkTreeExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTreeExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CdkTreeExamplesModule, [typeof i1.CdkTreeFlatExample, typeof i2.CdkTreeNestedExample], [typeof i3.CdkTreeModule, typeof i4.MatButtonModule, typeof i5.MatIconModule], [typeof i1.CdkTreeFlatExample, typeof i2.CdkTreeNestedExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CdkTreeExamplesModule>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTreeFlatExample, "cdk-tree-flat-example", never, {}, {}, never, never, false>;
}

/**
 * @title Tree with nested nodes
 */
export declare class CdkTreeNestedExample {
    treeControl: NestedTreeControl<FoodNode, FoodNode>;
    dataSource: ArrayDataSource<FoodNode>;
    hasChild: (_: number, node: FoodNode) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTreeNestedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTreeNestedExample, "cdk-tree-nested-example", never, {}, {}, never, never, false>;
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
 * Each node has a name and an optiona list of children.
 */
declare interface FoodNode {
    name: string;
    children?: FoodNode[];
}

declare namespace i1 {
    export {
        CdkTreeFlatExample
    }
}

declare namespace i2 {
    export {
        CdkTreeNestedExample
    }
}

export { }
