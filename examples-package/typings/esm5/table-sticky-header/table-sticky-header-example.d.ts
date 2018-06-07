/**
 * @title Table with sticky header
 */
export declare class TableStickyHeaderExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
}
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
