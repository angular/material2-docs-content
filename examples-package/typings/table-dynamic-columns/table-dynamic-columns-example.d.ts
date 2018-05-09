/**
 * @title Table dynamically changing the columns displayed
 */
export declare class TableDynamicColumnsExample {
    definedColumns: string[];
    columnsToDisplay: string[];
    data: PeriodicElement[];
    addColumn(): void;
    removeColumn(): void;
    shuffle(): void;
}
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
