import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
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
export declare class TableSortingExample implements AfterViewInit {
    private _liveAnnouncer;
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement>;
    constructor(_liveAnnouncer: LiveAnnouncer);
    sort: MatSort;
    ngAfterViewInit(): void;
    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableSortingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableSortingExample, "table-sorting-example", never, {}, {}, never, never>;
}
