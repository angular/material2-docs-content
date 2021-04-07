import * as i0 from "@angular/core";
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Basic use of `<table mat-table>`
 */
export declare class TableBasicExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableBasicExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableBasicExample, "table-basic-example", never, {}, {}, never, never>;
}
