import * as i0 from "@angular/core";
/**
 * @title Table with sticky header
 */
export declare class TableStickyHeaderExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableStickyHeaderExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableStickyHeaderExample, "table-sticky-header-example", never, {}, {}, never, never>;
}
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
