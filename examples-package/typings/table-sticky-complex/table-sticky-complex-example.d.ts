import { MatButtonToggleGroup } from '@angular/material';
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
}
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
