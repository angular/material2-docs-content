import * as i0 from '@angular/core';
import * as i3 from '@angular/common';
import * as i4 from '@angular/material/sort';
import { Sort } from '@angular/material/sort';

declare interface Dessert {
    calories: number;
    carbs: number;
    fat: number;
    name: string;
    protein: number;
}

declare namespace i1 {
    export {
        SortHarnessExample
    }
}

declare namespace i2 {
    export {
        Dessert,
        SortOverviewExample
    }
}

export declare class SortExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SortExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SortExamplesModule, [typeof i1.SortHarnessExample, typeof i2.SortOverviewExample], [typeof i3.CommonModule, typeof i4.MatSortModule], [typeof i1.SortHarnessExample, typeof i2.SortOverviewExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SortExamplesModule>;
}

/**
 * @title Testing with MatSortHarness
 */
export declare class SortHarnessExample {
    disableThirdHeader: boolean;
    desserts: {
        name: string;
        calories: number;
        fat: number;
        carbs: number;
        protein: number;
    }[];
    sortedData: {
        name: string;
        calories: number;
        fat: number;
        carbs: number;
        protein: number;
    }[];
    sortData(sort: Sort): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SortHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SortHarnessExample, "sort-harness-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Sorting overview
 */
export declare class SortOverviewExample {
    desserts: Dessert[];
    sortedData: Dessert[];
    constructor();
    sortData(sort: Sort): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SortOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SortOverviewExample, "sort-overview-example", never, {}, {}, never, never, false, never>;
}

export { }
