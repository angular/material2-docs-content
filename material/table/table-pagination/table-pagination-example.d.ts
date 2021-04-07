import { AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
/**
 * @title Table with pagination
 */
export declare class TablePaginationExample implements AfterViewInit {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement>;
    paginator: MatPaginator;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TablePaginationExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TablePaginationExample, "table-pagination-example", never, {}, {}, never, never>;
}
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
