import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import * as i0 from "@angular/core";
/**
 * @title Flex-layout tables with toggle-able sticky headers, footers, and columns
 */
export declare class TableStickyComplexFlexExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
    tables: number[];
    constructor();
    /** Whether the button toggle group contains the id as an active value. */
    isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableStickyComplexFlexExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableStickyComplexFlexExample, "table-sticky-complex-flex-example", never, {}, {}, never, never>;
}
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
