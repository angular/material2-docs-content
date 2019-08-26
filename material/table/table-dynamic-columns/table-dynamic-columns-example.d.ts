export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Table dynamically changing the columns displayed
 */
export declare class TableDynamicColumnsExample {
    displayedColumns: string[];
    columnsToDisplay: string[];
    data: PeriodicElement[];
    addColumn(): void;
    removeColumn(): void;
    shuffle(): void;
}
