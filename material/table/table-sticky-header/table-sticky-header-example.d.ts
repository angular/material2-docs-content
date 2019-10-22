import * as i0 from "@angular/core";
/**
 * @title Table with sticky header
 */
export declare class TableStickyHeaderExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
    static ngFactoryDef: i0.ɵɵFactoryDef<TableStickyHeaderExample>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<TableStickyHeaderExample, "table-sticky-header-example", never, {}, {}, never>;
}
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
