import { MatTableDataSource } from '@angular/material';
/**
 * @title Table with filtering
 */
export declare class TableFilteringExample {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement>;
    applyFilter(filterValue: string): void;
}
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
