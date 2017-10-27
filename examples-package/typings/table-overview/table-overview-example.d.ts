import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
/**
 * @title Data table with sorting, pagination, and filtering.
 */
export declare class TableOverviewExample {
    displayedColumns: string[];
    dataSource: MatTableDataSource<UserData>;
    paginator: MatPaginator;
    sort: MatSort;
    constructor();
    /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     */
    ngAfterViewInit(): void;
    applyFilter(filterValue: string): void;
}
export interface UserData {
    id: string;
    name: string;
    progress: string;
    color: string;
}
