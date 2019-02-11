/**
 * @title Table with sticky columns
 */
export declare class TableStickyColumnsExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
}
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
