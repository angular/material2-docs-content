import { OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
export interface UserData {
    id: string;
    name: string;
    progress: string;
    color: string;
}
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
