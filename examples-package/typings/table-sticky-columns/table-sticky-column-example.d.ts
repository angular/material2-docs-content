/**
 * @title Table with a sticky columns
 */
export declare class TableStickyColumnExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
}
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
