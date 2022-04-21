import { AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
export interface UserData {
    id: string;
    name: string;
    progress: string;
    fruit: string;
}
/**
 * @title Data table with sorting, pagination, and filtering.
 */
export declare class TableOverviewExample implements AfterViewInit {
    displayedColumns: string[];
    dataSource: MatTableDataSource<UserData>;
    paginator: MatPaginator;
    sort: MatSort;
    constructor();
    ngAfterViewInit(): void;
    applyFilter(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableOverviewExample, "table-overview-example", never, {}, {}, never, never, false>;
}
