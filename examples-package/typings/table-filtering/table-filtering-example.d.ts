import { MatTableDataSource } from '@angular/material';
/**
 * @title Table with filtering
 */
export declare class TableFilteringExample {
    displayedColumns: string[];
    dataSource: MatTableDataSource<Element>;
    applyFilter(filterValue: string): void;
}
export interface Element {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
