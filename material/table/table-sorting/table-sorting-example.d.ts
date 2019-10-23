import { OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Table with sorting
 */
export declare class TableSortingExample implements OnInit {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement>;
    sort: MatSort;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<TableSortingExample>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TableSortingExample, "table-sorting-example", never, {}, {}, never>;
}
