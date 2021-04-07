import * as i0 from "@angular/core";
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Table that uses the recycle view repeater strategy.
 */
export declare class TableRecycleRowsExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableRecycleRowsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableRecycleRowsExample, "table-recycle-rows-example", never, {}, {}, never, never>;
}
