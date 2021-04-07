import * as i0 from "@angular/core";
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Use of `mat-text-column` which can be used for simple columns that only need to display
 * a text value for the header and cells.
 */
export declare class TableTextColumnExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableTextColumnExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableTextColumnExample, "table-text-column-example", never, {}, {}, never, never>;
}
