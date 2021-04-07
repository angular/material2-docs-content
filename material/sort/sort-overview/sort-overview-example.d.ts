import { Sort } from '@angular/material/sort';
import * as i0 from "@angular/core";
export interface Dessert {
    calories: number;
    carbs: number;
    fat: number;
    name: string;
    protein: number;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<SortOverviewExample, "sort-overview-example", never, {}, {}, never, never>;
}
