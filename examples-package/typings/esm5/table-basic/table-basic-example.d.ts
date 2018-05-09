/**
 * @title Basic use of `<table mat-table>`
 */
export declare class TableBasicExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
}
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
