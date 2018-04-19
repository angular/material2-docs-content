import { MatTableDataSource, MatSort } from '@angular/material';
/**
 * @title Table with sorting
 */
export declare class TableSortingExample {
    displayedColumns: string[];
    dataSource: MatTableDataSource<Element>;
    sort: MatSort;
    ngOnInit(): void;
}
export interface Element {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
