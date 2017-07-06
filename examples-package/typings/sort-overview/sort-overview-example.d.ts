import { Sort } from '@angular/material';
export declare class SortOverviewExample {
    desserts: {
        name: string;
        calories: string;
        fat: string;
        carbs: string;
        protein: string;
    }[];
    sortedData: any;
    constructor();
    sortData(sort: Sort): void;
}
