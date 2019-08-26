import { DecimalPipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
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
    getWeight: (data: PeriodicElement) => string | null;
}
