import { MatTableDataSource, MatSort } from '@angular/material';
/**
 * @title Table with sorting
 */
export declare class TableSortingExample {
    displayedColumns: string[];
    dataSource: MatTableDataSource<Element>;
    sort: MatSort;
    /**
     * Set the sort after the view init since this component will
     * be able to query its view for the initialized sort.
     */
    ngAfterViewInit(): void;
}
export interface Element {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
