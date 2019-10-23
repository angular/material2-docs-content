import { OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
/**
 * @title Table with pagination
 */
export declare class TablePaginationExample implements OnInit {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement>;
    paginator: MatPaginator;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<TablePaginationExample>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TablePaginationExample, "table-pagination-example", never, {}, {}, never>;
}
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
