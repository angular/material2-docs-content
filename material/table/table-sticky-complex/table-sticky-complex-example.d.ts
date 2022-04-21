import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import * as i0 from "@angular/core";
/**
 * @title Tables with toggle-able sticky headers, footers, and columns
 */
export declare class TableStickyComplexExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
    tables: number[];
    constructor();
    /** Whether the button toggle group contains the id as an active value. */
    isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableStickyComplexExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableStickyComplexExample, "table-sticky-complex-example", never, {}, {}, never, never, false>;
}
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
