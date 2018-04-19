import { MatPaginator, MatTableDataSource } from '@angular/material';
/**
 * @title Table with pagination
 */
export declare class TablePaginationExample {
    displayedColumns: string[];
    dataSource: MatTableDataSource<Element>;
    paginator: MatPaginator;
    ngOnInit(): void;
}
export interface Element {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
