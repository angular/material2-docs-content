import { Sort } from '@angular/material/sort';
import * as i0 from '@angular/core';

interface Dessert {
    calories: number;
    carbs: number;
    fat: number;
    name: string;
    protein: number;
}
/**
 * @title Sorting overview
 */
declare class SortOverviewExample {
    desserts: Dessert[];
    sortedData: Dessert[];
    constructor();
    sortData(sort: Sort): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SortOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SortOverviewExample, "sort-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatSortHarness
 */
declare class SortHarnessExample {
    disableThirdHeader: i0.WritableSignal<boolean>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<SortHarnessExample, "sort-harness-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Sort header with a custom icon
 */
declare class SortCustomIconExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<SortCustomIconExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SortCustomIconExample, "sort-custom-icon-example", never, {}, {}, never, never, true, never>;
}

export { SortCustomIconExample, SortHarnessExample, SortOverviewExample };
