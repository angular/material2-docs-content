import { MatTableDataSource } from '@angular/material';
/**
 * @title Basic table
 */
export declare class TableBasicExample {
    displayedColumns: string[];
    dataSource: MatTableDataSource<Element>;
}
export interface Element {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
