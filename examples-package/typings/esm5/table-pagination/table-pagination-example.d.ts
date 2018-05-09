import { MatPaginator, MatTableDataSource } from '@angular/material';
/**
 * @title Table with pagination
 */
export declare class TablePaginationExample {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement>;
    paginator: MatPaginator;
    ngOnInit(): void;
}
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
