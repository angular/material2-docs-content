import * as i0 from '@angular/core';
import { AfterViewInit, AfterContentInit, QueryList } from '@angular/core';
import * as _angular_material_paginator from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatHeaderRowDef, MatRowDef, MatColumnDef, MatNoDataRow, MatTable } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { MatSort, SortDirection, Sort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { DecimalPipe } from '@angular/common';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

interface PeriodicElement$n {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Basic use of `<mat-table>` (uses display flex)
 */
declare class TableFlexBasicExample {
    displayedColumns: string[];
    dataSource: PeriodicElement$n[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableFlexBasicExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableFlexBasicExample, "table-flex-basic-example", never, {}, {}, never, never, true, never>;
}

interface PeriodicElement$m {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Basic use of `<table mat-table>`
 */
declare class TableBasicExample {
    displayedColumns: string[];
    dataSource: PeriodicElement$m[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableBasicExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableBasicExample, "table-basic-example", never, {}, {}, never, never, true, never>;
}

interface PeriodicElement$l {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Table dynamically changing the columns displayed
 */
declare class TableDynamicColumnsExample {
    displayedColumns: string[];
    columnsToDisplay: string[];
    data: PeriodicElement$l[];
    addColumn(): void;
    removeColumn(): void;
    shuffle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableDynamicColumnsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableDynamicColumnsExample, "table-dynamic-columns-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Table with expandable rows
 */
declare class TableExpandableRowsExample {
    dataSource: PeriodicElement$k[];
    columnsToDisplay: string[];
    columnsToDisplayWithExpand: string[];
    expandedElement: PeriodicElement$k | null;
    /** Checks whether an element is expanded. */
    isExpanded(element: PeriodicElement$k): boolean;
    /** Toggles the expanded state of an element. */
    toggle(element: PeriodicElement$k): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableExpandableRowsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableExpandableRowsExample, "table-expandable-rows-example", never, {}, {}, never, never, true, never>;
}
interface PeriodicElement$k {
    name: string;
    position: number;
    weight: number;
    symbol: string;
    description: string;
}

interface PeriodicElement$j {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Table with filtering
 */
declare class TableFilteringExample {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement$j, _angular_material_paginator.MatPaginator>;
    applyFilter(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableFilteringExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableFilteringExample, "table-filtering-example", never, {}, {}, never, never, true, never>;
}

interface Transaction$2 {
    item: string;
    cost: number;
}
/**
 * @title Footer row table
 */
declare class TableFooterRowExample {
    displayedColumns: string[];
    transactions: Transaction$2[];
    /** Gets the total cost of all transactions. */
    getTotalCost(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableFooterRowExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableFooterRowExample, "table-footer-row-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Table retrieving data through HTTP
 */
declare class TableHttpExample implements AfterViewInit {
    private _httpClient;
    displayedColumns: string[];
    exampleDatabase: ExampleHttpDatabase | null;
    data: GithubIssue[];
    resultsLength: number;
    isLoadingResults: boolean;
    isRateLimitReached: boolean;
    paginator: MatPaginator;
    sort: MatSort;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableHttpExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableHttpExample, "table-http-example", never, {}, {}, never, never, true, never>;
}
interface GithubApi {
    items: GithubIssue[];
    total_count: number;
}
interface GithubIssue {
    created_at: string;
    number: string;
    state: string;
    title: string;
}
/** An example database that the data source uses to retrieve data for the table. */
declare class ExampleHttpDatabase {
    private _httpClient;
    constructor(_httpClient: HttpClient);
    getRepoIssues(sort: string, order: SortDirection, page: number): Observable<GithubApi>;
}

interface Transaction$1 {
    item: string;
    cost: number;
}
/**
 * @title Table with multiple header and footer rows
 */
declare class TableMultipleHeaderFooterExample {
    displayedColumns: string[];
    transactions: Transaction$1[];
    /** Gets the total cost of all transactions. */
    getTotalCost(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableMultipleHeaderFooterExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableMultipleHeaderFooterExample, "table-multiple-header-footer-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Table with multiple row template
 */
declare class TableMultipleRowTemplateExample {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement$i, _angular_material_paginator.MatPaginator>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableMultipleRowTemplateExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableMultipleRowTemplateExample, "table-multiple-row-template-example", never, {}, {}, never, never, true, never>;
}
interface PeriodicElement$i {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

interface UserData {
    id: string;
    name: string;
    progress: string;
    fruit: string;
}
/**
 * @title Data table with sorting, pagination, and filtering.
 */
declare class TableOverviewExample implements AfterViewInit {
    displayedColumns: string[];
    dataSource: MatTableDataSource<UserData>;
    paginator: MatPaginator;
    sort: MatSort;
    constructor();
    ngAfterViewInit(): void;
    applyFilter(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableOverviewExample, "table-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Table with pagination
 */
declare class TablePaginationExample implements AfterViewInit {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement$h, MatPaginator>;
    paginator: MatPaginator;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TablePaginationExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TablePaginationExample, "table-pagination-example", never, {}, {}, never, never, true, never>;
}
interface PeriodicElement$h {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

/**
 * @title Table showing each row context properties.
 */
declare class TableRowContextExample {
    displayedColumns: string[];
    data: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableRowContextExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableRowContextExample, "table-row-context-example", never, {}, {}, never, never, true, never>;
}

interface PeriodicElement$g {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Table with selection
 */
declare class TableSelectionExample {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement$g, _angular_material_paginator.MatPaginator>;
    selection: SelectionModel<PeriodicElement$g>;
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected(): boolean;
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    toggleAllRows(): void;
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: PeriodicElement$g): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableSelectionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableSelectionExample, "table-selection-example", never, {}, {}, never, never, true, never>;
}

interface PeriodicElement$f {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Table with sorting
 */
declare class TableSortingExample implements AfterViewInit {
    private _liveAnnouncer;
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement$f, _angular_material_paginator.MatPaginator>;
    sort: MatSort;
    ngAfterViewInit(): void;
    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableSortingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableSortingExample, "table-sorting-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Table with sticky columns
 */
declare class TableStickyColumnsExample {
    displayedColumns: string[];
    dataSource: PeriodicElement$e[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableStickyColumnsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableStickyColumnsExample, "table-sticky-columns-example", never, {}, {}, never, never, true, never>;
}
interface PeriodicElement$e {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

/**
 * @title Flex-layout tables with toggle-able sticky headers, footers, and columns
 */
declare class TableStickyComplexFlexExample {
    displayedColumns: string[];
    dataSource: PeriodicElement$d[];
    tables: number[];
    constructor();
    /** Whether the button toggle group contains the id as an active value. */
    isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableStickyComplexFlexExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableStickyComplexFlexExample, "table-sticky-complex-flex-example", never, {}, {}, never, never, true, never>;
}
interface PeriodicElement$d {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

/**
 * @title Tables with toggle-able sticky headers, footers, and columns
 */
declare class TableStickyComplexExample {
    displayedColumns: string[];
    dataSource: PeriodicElement$c[];
    tables: number[];
    constructor();
    /** Whether the button toggle group contains the id as an active value. */
    isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableStickyComplexExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableStickyComplexExample, "table-sticky-complex-example", never, {}, {}, never, never, true, never>;
}
interface PeriodicElement$c {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

interface Transaction {
    item: string;
    cost: number;
}
/**
 * @title Table with a sticky footer
 */
declare class TableStickyFooterExample {
    displayedColumns: string[];
    transactions: Transaction[];
    /** Gets the total cost of all transactions. */
    getTotalCost(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableStickyFooterExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableStickyFooterExample, "table-sticky-footer-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Table with sticky header
 */
declare class TableStickyHeaderExample {
    displayedColumns: string[];
    dataSource: PeriodicElement$b[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableStickyHeaderExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableStickyHeaderExample, "table-sticky-header-example", never, {}, {}, never, never, true, never>;
}
interface PeriodicElement$b {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

interface PeriodicElement$a {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Use of 'mat-text-column' with various configurations of the interface.
 */
declare class TableTextColumnAdvancedExample {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement$a, _angular_material_paginator.MatPaginator>;
    headerText: string;
    decimalPipe: DecimalPipe;
    /** Data accessor function that transforms the weight value to have at most 2 decimal digits. */
    getWeight: (data: PeriodicElement$a) => string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableTextColumnAdvancedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableTextColumnAdvancedExample, "table-text-column-advanced-example", never, {}, {}, never, never, true, never>;
}

interface PeriodicElement$9 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Use of `mat-text-column` which can be used for simple columns that only need to display
 * a text value for the header and cells.
 */
declare class TableTextColumnExample {
    displayedColumns: string[];
    dataSource: PeriodicElement$9[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableTextColumnExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableTextColumnExample, "table-text-column-example", never, {}, {}, never, never, true, never>;
}

interface PeriodicElement$8 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Table example that shows how to wrap a table component for definition and behavior reuse.
 */
declare class TableWrappedExample implements AfterViewInit {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement$8, _angular_material_paginator.MatPaginator>;
    sort: MatSort;
    ngAfterViewInit(): void;
    clearTable(): void;
    addData(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableWrappedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableWrappedExample, "table-wrapped-example", never, {}, {}, never, never, true, never>;
}
/**
 * Table component that accepts column and row definitions in its content to be registered to the
 * table.
 */
declare class WrapperTable<T> implements AfterContentInit {
    headerRowDefs: QueryList<MatHeaderRowDef>;
    rowDefs: QueryList<MatRowDef<T>>;
    columnDefs: QueryList<MatColumnDef>;
    noDataRow: MatNoDataRow;
    table: MatTable<T>;
    readonly columns: i0.InputSignal<string[]>;
    readonly dataSource: i0.InputSignal<DataSource<T>>;
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WrapperTable<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WrapperTable<any>, "wrapper-table", never, { "columns": { "alias": "columns"; "required": true; "isSignal": true; }; "dataSource": { "alias": "dataSource"; "required": true; "isSignal": true; }; }, {}, ["noDataRow", "headerRowDefs", "rowDefs", "columnDefs"], ["*"], true, never>;
}

/**
 * @title Table with re-orderable columns
 */
declare class TableReorderableExample {
    columns: string[];
    dataSource: PeriodicElement$7[];
    drop(event: CdkDragDrop<string[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableReorderableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableReorderableExample, "table-reorderable-example", never, {}, {}, never, never, true, never>;
}
interface PeriodicElement$7 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

interface PeriodicElement$6 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Table that uses the recycle view repeater strategy.
 */
declare class TableRecycleRowsExample {
    displayedColumns: string[];
    dataSource: PeriodicElement$6[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableRecycleRowsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableRecycleRowsExample, "table-recycle-rows-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatTableHarness
 */
declare class TableHarnessExample {
    displayedColumns: string[];
    dataSource: {
        position: number;
        name: string;
        weight: number;
        symbol: string;
    }[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableHarnessExample, "table-harness-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Tables with Material Design ripples.
 */
declare class TableWithRipplesExample {
    displayedColumns: string[];
    dataSource: {
        name: string;
    }[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableWithRipplesExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableWithRipplesExample, "table-with-ripples-example", never, {}, {}, never, never, true, never>;
}

interface PeriodicElement$5 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Styling columns using their auto-generated column names
 */
declare class TableColumnStylingExample {
    displayedColumns: string[];
    dataSource: PeriodicElement$5[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableColumnStylingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableColumnStylingExample, "table-column-styling-example", never, {}, {}, never, never, true, never>;
}

interface PeriodicElement$4 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Binding event handlers and properties to the table rows.
 */
declare class TableRowBindingExample {
    displayedColumns: string[];
    dataSource: PeriodicElement$4[];
    clickedRows: Set<PeriodicElement$4>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableRowBindingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableRowBindingExample, "table-row-binding-example", never, {}, {}, never, never, true, never>;
}

interface PeriodicElement$3 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Adding and removing data when using an array-based datasource.
 */
declare class TableDynamicArrayDataExample {
    displayedColumns: string[];
    dataSource: PeriodicElement$3[];
    table: MatTable<PeriodicElement$3>;
    addData(): void;
    removeData(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableDynamicArrayDataExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableDynamicArrayDataExample, "table-dynamic-array-data-example", never, {}, {}, never, never, true, never>;
}

interface PeriodicElement$2 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Adding and removing data when using an observable-based datasource.
 */
declare class TableDynamicObservableDataExample {
    displayedColumns: string[];
    dataToDisplay: PeriodicElement$2[];
    dataSource: ExampleDataSource;
    addData(): void;
    removeData(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableDynamicObservableDataExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableDynamicObservableDataExample, "table-dynamic-observable-data-example", never, {}, {}, never, never, true, never>;
}
declare class ExampleDataSource extends DataSource<PeriodicElement$2> {
    private _dataStream;
    constructor(initialData: PeriodicElement$2[]);
    connect(): Observable<PeriodicElement$2[]>;
    disconnect(): void;
    setData(data: PeriodicElement$2[]): void;
}

interface PeriodicElement$1 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Table with columns defined using a for loop instead of statically written in the template.
 */
declare class TableGeneratedColumnsExample {
    columns: {
        columnDef: string;
        header: string;
        cell: (element: PeriodicElement$1) => string;
    }[];
    dataSource: PeriodicElement$1[];
    displayedColumns: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableGeneratedColumnsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableGeneratedColumnsExample, "table-generated-columns-example", never, {}, {}, never, never, true, never>;
}

interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Flex table where one column's cells has a greater height than others.
 */
declare class TableFlexLargeRowExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableFlexLargeRowExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableFlexLargeRowExample, "table-flex-large-row-example", never, {}, {}, never, never, true, never>;
}

export { TableBasicExample, TableColumnStylingExample, TableDynamicArrayDataExample, TableDynamicColumnsExample, TableDynamicObservableDataExample, TableExpandableRowsExample, TableFilteringExample, TableFlexBasicExample, TableFlexLargeRowExample, TableFooterRowExample, TableGeneratedColumnsExample, TableHarnessExample, TableHttpExample, TableMultipleHeaderFooterExample, TableMultipleRowTemplateExample, TableOverviewExample, TablePaginationExample, TableRecycleRowsExample, TableReorderableExample, TableRowBindingExample, TableRowContextExample, TableSelectionExample, TableSortingExample, TableStickyColumnsExample, TableStickyComplexExample, TableStickyComplexFlexExample, TableStickyFooterExample, TableStickyHeaderExample, TableTextColumnAdvancedExample, TableTextColumnExample, TableWithRipplesExample, TableWrappedExample, WrapperTable };
