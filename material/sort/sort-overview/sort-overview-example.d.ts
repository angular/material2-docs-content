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
    static ngFactoryDef: i0.ɵɵFactoryDef<SortOverviewExample>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<SortOverviewExample, "sort-overview-example", never, {}, {}, never>;
}
