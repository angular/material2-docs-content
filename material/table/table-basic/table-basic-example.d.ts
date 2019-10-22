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
    static ngFactoryDef: i0.ɵɵFactoryDef<TableBasicExample>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<TableBasicExample, "table-basic-example", never, {}, {}, never>;
}
