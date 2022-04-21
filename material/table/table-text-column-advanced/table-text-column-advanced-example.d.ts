import { DecimalPipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Use of 'mat-text-column' with various configurations of the interface.
 */
export declare class TableTextColumnAdvancedExample {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement>;
    headerText: string;
    decimalPipe: DecimalPipe;
    /** Data accessor function that transforms the weight value to have at most 2 decimal digits. */
    getWeight: (data: PeriodicElement) => string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableTextColumnAdvancedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableTextColumnAdvancedExample, "table-text-column-advanced-example", never, {}, {}, never, never, false>;
}
