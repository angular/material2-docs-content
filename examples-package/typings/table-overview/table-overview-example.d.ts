import { OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
/**
 * @title Data table with sorting, pagination, and filtering.
 */
export declare class TableOverviewExample implements OnInit {
    displayedColumns: string[];
    dataSource: MatTableDataSource<UserData>;
    paginator: MatPaginator;
    sort: MatSort;
    constructor();
    ngOnInit(): void;
    applyFilter(filterValue: string): void;
}
export interface UserData {
    id: string;
    name: string;
    progress: string;
    color: string;
}
