import { MatTableDataSource } from '@angular/material';
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Table with filtering
 */
export declare class TableFilteringExample {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement>;
    applyFilter(filterValue: string): void;
}
