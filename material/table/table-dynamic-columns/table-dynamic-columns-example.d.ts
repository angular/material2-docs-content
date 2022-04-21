import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<TableDynamicColumnsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableDynamicColumnsExample, "table-dynamic-columns-example", never, {}, {}, never, never, false>;
}
