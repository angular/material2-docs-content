import { MatPaginator, MatTableDataSource } from '@angular/material';
/**
 * @title Table with pagination
 */
export declare class TablePaginationExample {
    displayedColumns: string[];
    dataSource: MatTableDataSource<Element>;
    paginator: MatPaginator;
    /**
     * Set the paginator after the view init since this component will
     * be able to query its view for the initialized paginator.
     */
    ngAfterViewInit(): void;
}
export interface Element {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
