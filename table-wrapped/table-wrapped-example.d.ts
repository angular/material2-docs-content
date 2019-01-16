import { AfterContentInit, OnInit, QueryList } from '@angular/core';
import { MatColumnDef, MatHeaderRowDef, MatRowDef, MatSort, MatTable, MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Table example that shows how to wrap a table component for definition and behavior reuse.
 */
export declare class TableWrappedExample implements OnInit {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement>;
    sort: MatSort;
    ngOnInit(): void;
}
/**
 * Table component that accepts column and row definitions in its content to be registered to the
 * table.
 */
export declare class WrapperTable<T> implements AfterContentInit {
    headerRowDefs: QueryList<MatHeaderRowDef>;
    rowDefs: QueryList<MatRowDef<T>>;
    columnDefs: QueryList<MatColumnDef>;
    table: MatTable<T>;
    columns: string[];
    dataSource: DataSource<T>;
    ngAfterContentInit(): void;
}
