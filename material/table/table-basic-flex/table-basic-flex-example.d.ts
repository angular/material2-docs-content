import * as i0 from "@angular/core";
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Basic use of `<mat-table>` (uses display flex)
 */
export declare class TableBasicFlexExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
    static ɵfac: i0.ɵɵFactoryDef<TableBasicFlexExample>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TableBasicFlexExample, "table-basic-flex-example", never, {}, {}, never>;
}
