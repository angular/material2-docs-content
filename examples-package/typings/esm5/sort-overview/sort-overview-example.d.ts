import { Sort } from '@angular/material';
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
}
