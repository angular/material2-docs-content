import { OnDestroy, OnInit } from '@angular/core';
import { MatColumnDef, MatSort, MatSortHeader, MatTable, MatTableDataSource } from '@angular/material';
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Table with a custom column component for easy column definition reuse.
 */
export declare class TableSimpleColumnExample implements OnInit {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement>;
    getWeight: (data: PeriodicElement) => string;
    sort: MatSort;
    ngOnInit(): void;
}
/**
 * Column that shows simply shows text content for the header and row
 * cells. By default, the name of this column will be assumed to be both the header
 * text and data property used to access the data value to show in cells. To override
 * the header text, provide a label text. To override the data cell values,
 * provide a dataAccessor function that provides the string to display for each row's cell.
 *
 * Note that this component sets itself as visually hidden since it will show up in the `mat-table`
 * DOM because it is an empty element with an ng-container (nothing rendered). It should not
 * interfere with screen readers.
 */
export declare class SimpleColumn<T> implements OnDestroy, OnInit {
    table: MatTable<any>;
    /** Column name that should be used to reference this column. */
    name: string;
    _name: string;
    /**
     * Text label that should be used for the column header. If this property is not
     * set, the header text will default to the column name.
     */
    label: string;
    /**
     * Accessor function to retrieve the data should be provided to the cell. If this
     * property is not set, the data cells will assume that the column name is the same
     * as the data property the cells should display.
     */
    dataAccessor: ((data: T, name: string) => string);
    /** Alignment of the cell values. */
    align: 'before' | 'after';
    /** Whether the column is sortable */
    sortable: boolean;
    _sortable: boolean;
    columnDef: MatColumnDef;
    sortHeader: MatSortHeader;
    constructor(table: MatTable<any>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getData(data: T): any;
}
