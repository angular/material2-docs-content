import * as i0 from "@angular/core";
/**
 * @title Table with sticky columns
 */
export declare class TableStickyColumnsExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableStickyColumnsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableStickyColumnsExample, "table-sticky-columns-example", never, {}, {}, never, never, false>;
}
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
