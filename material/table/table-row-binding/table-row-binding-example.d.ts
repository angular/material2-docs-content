import * as i0 from "@angular/core";
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Binding event handlers and properties to the table rows.
 */
export declare class TableRowBindingExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
    clickedRows: Set<PeriodicElement>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableRowBindingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableRowBindingExample, "table-row-binding-example", never, {}, {}, never, never, false>;
}
