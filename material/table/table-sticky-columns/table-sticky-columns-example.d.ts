import * as i0 from "@angular/core";
/**
 * @title Table with sticky columns
 */
export declare class TableStickyColumnsExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
    static ɵfac: i0.ɵɵFactoryDef<TableStickyColumnsExample>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TableStickyColumnsExample, "table-sticky-columns-example", never, {}, {}, never>;
}
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
