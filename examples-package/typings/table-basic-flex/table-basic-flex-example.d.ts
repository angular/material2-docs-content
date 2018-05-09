/**
 * @title Basic use of `<mat-table>` (uses display flex)
 */
export declare class TableBasicFlexExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
}
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
