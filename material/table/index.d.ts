import { AfterContentInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DataSource } from '@angular/cdk/collections';
import { DecimalPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import * as i0 from '@angular/core';
import * as i31 from '@angular/common';
import * as i32 from '@angular/material/button';
import * as i33 from '@angular/material/button-toggle';
import * as i34 from '@angular/material/checkbox';
import * as i35 from '@angular/material/icon';
import * as i36 from '@angular/material/input';
import * as i37 from '@angular/material/paginator';
import * as i38 from '@angular/material/progress-spinner';
import * as i39 from '@angular/material/core';
import * as i40 from '@angular/material/sort';
import * as i41 from '@angular/material/table';
import * as i42 from '@angular/cdk/table';
import * as i43 from '@angular/cdk/drag-drop';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatColumnDef } from '@angular/material/table';
import { MatHeaderRowDef } from '@angular/material/table';
import { MatNoDataRow } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatRowDef } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { QueryList } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Sort } from '@angular/material/sort';
import { SortDirection } from '@angular/material/sort';

declare class ExampleDataSource extends DataSource<PeriodicElement_5> {
    private _dataStream;
    constructor(initialData: PeriodicElement_5[]);
    connect(): Observable<PeriodicElement_5[]>;
    disconnect(): void;
    setData(data: PeriodicElement_5[]): void;
}

/** An example database that the data source uses to retrieve data for the table. */
declare class ExampleHttpDatabase {
    private _httpClient;
    constructor(_httpClient: HttpClient);
    getRepoIssues(sort: string, order: SortDirection, page: number): Observable<GithubApi>;
}

declare interface GithubApi {
    items: GithubIssue[];
    total_count: number;
}

declare interface GithubIssue {
    created_at: string;
    number: string;
    state: string;
    title: string;
}

declare namespace i1 {
    export {
        PeriodicElement,
        TableBasicExample
    }
}

declare namespace i10 {
    export {
        PeriodicElement_9 as PeriodicElement,
        TableGeneratedColumnsExample
    }
}

declare namespace i11 {
    export {
        TableHarnessExample
    }
}

declare namespace i12 {
    export {
        TableHttpExample,
        GithubApi,
        GithubIssue,
        ExampleHttpDatabase
    }
}

declare namespace i13 {
    export {
        TableMultipleHeaderFooterExample
    }
}

declare namespace i14 {
    export {
        UserData,
        TableOverviewExample
    }
}

declare namespace i15 {
    export {
        TablePaginationExample,
        PeriodicElement_10 as PeriodicElement
    }
}

declare namespace i16 {
    export {
        PeriodicElement_11 as PeriodicElement,
        TableRecycleRowsExample
    }
}

declare namespace i17 {
    export {
        TableReorderableExample,
        PeriodicElement_12 as PeriodicElement
    }
}

declare namespace i18 {
    export {
        PeriodicElement_13 as PeriodicElement,
        TableRowBindingExample
    }
}

declare namespace i19 {
    export {
        TableRowContextExample
    }
}

declare namespace i2 {
    export {
        PeriodicElement_2 as PeriodicElement,
        TableColumnStylingExample
    }
}

declare namespace i20 {
    export {
        PeriodicElement_14 as PeriodicElement,
        TableSelectionExample
    }
}

declare namespace i21 {
    export {
        PeriodicElement_15 as PeriodicElement,
        TableSortingExample
    }
}

declare namespace i22 {
    export {
        TableStickyColumnsExample,
        PeriodicElement_16 as PeriodicElement
    }
}

declare namespace i23 {
    export {
        TableStickyComplexExample,
        PeriodicElement_17 as PeriodicElement
    }
}

declare namespace i24 {
    export {
        TableStickyComplexFlexExample,
        PeriodicElement_18 as PeriodicElement
    }
}

declare namespace i25 {
    export {
        Transaction_3 as Transaction,
        TableStickyFooterExample
    }
}

declare namespace i26 {
    export {
        TableStickyHeaderExample,
        PeriodicElement_19 as PeriodicElement
    }
}

declare namespace i27 {
    export {
        PeriodicElement_20 as PeriodicElement,
        TableTextColumnAdvancedExample
    }
}

declare namespace i28 {
    export {
        PeriodicElement_21 as PeriodicElement,
        TableTextColumnExample
    }
}

declare namespace i29 {
    export {
        TableWithRipplesExample
    }
}

declare namespace i3 {
    export {
        PeriodicElement_3 as PeriodicElement,
        TableDynamicArrayDataExample
    }
}

declare namespace i30 {
    export {
        PeriodicElement_22 as PeriodicElement,
        TableWrappedExample,
        WrapperTable
    }
}

declare namespace i4 {
    export {
        PeriodicElement_4 as PeriodicElement,
        TableDynamicColumnsExample
    }
}

declare namespace i5 {
    export {
        PeriodicElement_5 as PeriodicElement,
        TableDynamicObservableDataExample
    }
}

declare namespace i6 {
    export {
        TableExpandableRowsExample,
        PeriodicElement_6 as PeriodicElement
    }
}

declare namespace i7 {
    export {
        PeriodicElement_7 as PeriodicElement,
        TableFilteringExample
    }
}

declare namespace i8 {
    export {
        PeriodicElement_8 as PeriodicElement,
        TableFlexBasicExample
    }
}

declare namespace i9 {
    export {
        TableFooterRowExample
    }
}

declare interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

declare interface PeriodicElement_10 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

declare interface PeriodicElement_11 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

declare interface PeriodicElement_12 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

declare interface PeriodicElement_13 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

declare interface PeriodicElement_14 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

declare interface PeriodicElement_15 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

declare interface PeriodicElement_16 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

declare interface PeriodicElement_17 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

declare interface PeriodicElement_18 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

declare interface PeriodicElement_19 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

declare interface PeriodicElement_2 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

declare interface PeriodicElement_20 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

declare interface PeriodicElement_21 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

declare interface PeriodicElement_22 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

declare interface PeriodicElement_3 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

declare interface PeriodicElement_4 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

declare interface PeriodicElement_5 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

declare interface PeriodicElement_6 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
    description: string;
}

declare interface PeriodicElement_7 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

declare interface PeriodicElement_8 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

declare interface PeriodicElement_9 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

/**
 * @title Basic use of `<table mat-table>`
 */
export declare class TableBasicExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableBasicExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableBasicExample, "table-basic-example", never, {}, {}, never, never, false>;
}

/**
 * @title Styling columns using their auto-generated column names
 */
export declare class TableColumnStylingExample {
    displayedColumns: string[];
    dataSource: PeriodicElement_2[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableColumnStylingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableColumnStylingExample, "table-column-styling-example", never, {}, {}, never, never, false>;
}

/**
 * @title Adding and removing data when using an array-based datasource.
 */
export declare class TableDynamicArrayDataExample {
    displayedColumns: string[];
    dataSource: PeriodicElement_3[];
    table: MatTable<PeriodicElement_3>;
    addData(): void;
    removeData(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableDynamicArrayDataExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableDynamicArrayDataExample, "table-dynamic-array-data-example", never, {}, {}, never, never, false>;
}

/**
 * @title Table dynamically changing the columns displayed
 */
export declare class TableDynamicColumnsExample {
    displayedColumns: string[];
    columnsToDisplay: string[];
    data: PeriodicElement_4[];
    addColumn(): void;
    removeColumn(): void;
    shuffle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableDynamicColumnsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableDynamicColumnsExample, "table-dynamic-columns-example", never, {}, {}, never, never, false>;
}

/**
 * @title Adding and removing data when using an observable-based datasource.
 */
export declare class TableDynamicObservableDataExample {
    displayedColumns: string[];
    dataToDisplay: PeriodicElement_5[];
    dataSource: ExampleDataSource;
    addData(): void;
    removeData(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableDynamicObservableDataExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableDynamicObservableDataExample, "table-dynamic-observable-data-example", never, {}, {}, never, never, false>;
}

export declare class TableExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<TableExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TableExamplesModule, [typeof i1.TableBasicExample, typeof i2.TableColumnStylingExample, typeof i3.TableDynamicArrayDataExample, typeof i4.TableDynamicColumnsExample, typeof i5.TableDynamicObservableDataExample, typeof i6.TableExpandableRowsExample, typeof i7.TableFilteringExample, typeof i8.TableFlexBasicExample, typeof i9.TableFooterRowExample, typeof i10.TableGeneratedColumnsExample, typeof i11.TableHarnessExample, typeof i12.TableHttpExample, typeof i13.TableMultipleHeaderFooterExample, typeof i14.TableOverviewExample, typeof i15.TablePaginationExample, typeof i16.TableRecycleRowsExample, typeof i17.TableReorderableExample, typeof i18.TableRowBindingExample, typeof i19.TableRowContextExample, typeof i20.TableSelectionExample, typeof i21.TableSortingExample, typeof i22.TableStickyColumnsExample, typeof i23.TableStickyComplexExample, typeof i24.TableStickyComplexFlexExample, typeof i25.TableStickyFooterExample, typeof i26.TableStickyHeaderExample, typeof i27.TableTextColumnAdvancedExample, typeof i28.TableTextColumnExample, typeof i29.TableWithRipplesExample, typeof i30.TableWrappedExample, typeof i30.WrapperTable], [typeof i31.CommonModule, typeof i32.MatButtonModule, typeof i33.MatButtonToggleModule, typeof i34.MatCheckboxModule, typeof i35.MatIconModule, typeof i36.MatInputModule, typeof i37.MatPaginatorModule, typeof i38.MatProgressSpinnerModule, typeof i39.MatRippleModule, typeof i40.MatSortModule, typeof i41.MatTableModule, typeof i42.CdkTableModule, typeof i43.DragDropModule], [typeof i1.TableBasicExample, typeof i2.TableColumnStylingExample, typeof i3.TableDynamicArrayDataExample, typeof i4.TableDynamicColumnsExample, typeof i5.TableDynamicObservableDataExample, typeof i6.TableExpandableRowsExample, typeof i7.TableFilteringExample, typeof i8.TableFlexBasicExample, typeof i9.TableFooterRowExample, typeof i10.TableGeneratedColumnsExample, typeof i11.TableHarnessExample, typeof i12.TableHttpExample, typeof i13.TableMultipleHeaderFooterExample, typeof i14.TableOverviewExample, typeof i15.TablePaginationExample, typeof i16.TableRecycleRowsExample, typeof i17.TableReorderableExample, typeof i18.TableRowBindingExample, typeof i19.TableRowContextExample, typeof i20.TableSelectionExample, typeof i21.TableSortingExample, typeof i22.TableStickyColumnsExample, typeof i23.TableStickyComplexExample, typeof i24.TableStickyComplexFlexExample, typeof i25.TableStickyFooterExample, typeof i26.TableStickyHeaderExample, typeof i27.TableTextColumnAdvancedExample, typeof i28.TableTextColumnExample, typeof i29.TableWithRipplesExample, typeof i30.TableWrappedExample, typeof i30.WrapperTable]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TableExamplesModule>;
}

/**
 * @title Table with expandable rows
 */
export declare class TableExpandableRowsExample {
    dataSource: PeriodicElement_6[];
    columnsToDisplay: string[];
    columnsToDisplayWithExpand: string[];
    expandedElement: PeriodicElement_6 | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableExpandableRowsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableExpandableRowsExample, "table-expandable-rows-example", never, {}, {}, never, never, false>;
}

/**
 * @title Table with filtering
 */
export declare class TableFilteringExample {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement_7>;
    applyFilter(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableFilteringExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableFilteringExample, "table-filtering-example", never, {}, {}, never, never, false>;
}

/**
 * @title Basic use of `<mat-table>` (uses display flex)
 */
export declare class TableFlexBasicExample {
    displayedColumns: string[];
    dataSource: PeriodicElement_8[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableFlexBasicExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableFlexBasicExample, "table-flex-basic-example", never, {}, {}, never, never, false>;
}

/**
 * @title Footer row table
 */
export declare class TableFooterRowExample {
    displayedColumns: string[];
    transactions: Transaction[];
    /** Gets the total cost of all transactions. */
    getTotalCost(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableFooterRowExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableFooterRowExample, "table-footer-row-example", never, {}, {}, never, never, false>;
}

/**
 * @title Table with columns defined using ngFor instead of statically written in the template.
 */
export declare class TableGeneratedColumnsExample {
    columns: {
        columnDef: string;
        header: string;
        cell: (element: PeriodicElement_9) => string;
    }[];
    dataSource: PeriodicElement_9[];
    displayedColumns: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableGeneratedColumnsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableGeneratedColumnsExample, "table-generated-columns-example", never, {}, {}, never, never, false>;
}

/**
 * @title Testing with MatTableHarness
 */
export declare class TableHarnessExample {
    displayedColumns: string[];
    dataSource: {
        position: number;
        name: string;
        weight: number;
        symbol: string;
    }[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableHarnessExample, "table-harness-example", never, {}, {}, never, never, false>;
}

/**
 * @title Table retrieving data through HTTP
 */
export declare class TableHttpExample implements AfterViewInit {
    private _httpClient;
    displayedColumns: string[];
    exampleDatabase: ExampleHttpDatabase | null;
    data: GithubIssue[];
    resultsLength: number;
    isLoadingResults: boolean;
    isRateLimitReached: boolean;
    paginator: MatPaginator;
    sort: MatSort;
    constructor(_httpClient: HttpClient);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableHttpExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableHttpExample, "table-http-example", never, {}, {}, never, never, false>;
}

/**
 * @title Table with multiple header and footer rows
 */
export declare class TableMultipleHeaderFooterExample {
    displayedColumns: string[];
    transactions: Transaction_2[];
    /** Gets the total cost of all transactions. */
    getTotalCost(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableMultipleHeaderFooterExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableMultipleHeaderFooterExample, "table-multiple-header-footer-example", never, {}, {}, never, never, false>;
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

/**
 * @title Table with pagination
 */
export declare class TablePaginationExample implements AfterViewInit {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement_10>;
    paginator: MatPaginator;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TablePaginationExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TablePaginationExample, "table-pagination-example", never, {}, {}, never, never, false>;
}

/**
 * @title Table that uses the recycle view repeater strategy.
 */
export declare class TableRecycleRowsExample {
    displayedColumns: string[];
    dataSource: PeriodicElement_11[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableRecycleRowsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableRecycleRowsExample, "table-recycle-rows-example", never, {}, {}, never, never, false>;
}

/**
 * @title Table with re-orderable columns
 */
export declare class TableReorderableExample {
    columns: string[];
    dataSource: PeriodicElement_12[];
    drop(event: CdkDragDrop<string[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableReorderableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableReorderableExample, "table-reorderable-example", never, {}, {}, never, never, false>;
}

/**
 * @title Binding event handlers and properties to the table rows.
 */
export declare class TableRowBindingExample {
    displayedColumns: string[];
    dataSource: PeriodicElement_13[];
    clickedRows: Set<PeriodicElement_13>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableRowBindingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableRowBindingExample, "table-row-binding-example", never, {}, {}, never, never, false>;
}

/**
 * @title Table showing each row context properties.
 */
export declare class TableRowContextExample {
    displayedColumns: string[];
    data: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableRowContextExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableRowContextExample, "table-row-context-example", never, {}, {}, never, never, false>;
}

/**
 * @title Table with selection
 */
export declare class TableSelectionExample {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement_14>;
    selection: SelectionModel<PeriodicElement_14>;
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected(): boolean;
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    toggleAllRows(): void;
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: PeriodicElement_14): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableSelectionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableSelectionExample, "table-selection-example", never, {}, {}, never, never, false>;
}

/**
 * @title Table with sorting
 */
export declare class TableSortingExample implements AfterViewInit {
    private _liveAnnouncer;
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement_15>;
    constructor(_liveAnnouncer: LiveAnnouncer);
    sort: MatSort;
    ngAfterViewInit(): void;
    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableSortingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableSortingExample, "table-sorting-example", never, {}, {}, never, never, false>;
}

/**
 * @title Table with sticky columns
 */
export declare class TableStickyColumnsExample {
    displayedColumns: string[];
    dataSource: PeriodicElement_16[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableStickyColumnsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableStickyColumnsExample, "table-sticky-columns-example", never, {}, {}, never, never, false>;
}

/**
 * @title Tables with toggle-able sticky headers, footers, and columns
 */
export declare class TableStickyComplexExample {
    displayedColumns: string[];
    dataSource: PeriodicElement_17[];
    tables: number[];
    constructor();
    /** Whether the button toggle group contains the id as an active value. */
    isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableStickyComplexExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableStickyComplexExample, "table-sticky-complex-example", never, {}, {}, never, never, false>;
}

/**
 * @title Flex-layout tables with toggle-able sticky headers, footers, and columns
 */
export declare class TableStickyComplexFlexExample {
    displayedColumns: string[];
    dataSource: PeriodicElement_18[];
    tables: number[];
    constructor();
    /** Whether the button toggle group contains the id as an active value. */
    isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableStickyComplexFlexExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableStickyComplexFlexExample, "table-sticky-complex-flex-example", never, {}, {}, never, never, false>;
}

/**
 * @title Table with a sticky footer
 */
export declare class TableStickyFooterExample {
    displayedColumns: string[];
    transactions: Transaction_3[];
    /** Gets the total cost of all transactions. */
    getTotalCost(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableStickyFooterExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableStickyFooterExample, "table-sticky-footer-example", never, {}, {}, never, never, false>;
}

/**
 * @title Table with sticky header
 */
export declare class TableStickyHeaderExample {
    displayedColumns: string[];
    dataSource: PeriodicElement_19[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableStickyHeaderExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableStickyHeaderExample, "table-sticky-header-example", never, {}, {}, never, never, false>;
}

/**
 * @title Use of 'mat-text-column' with various configurations of the interface.
 */
export declare class TableTextColumnAdvancedExample {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement_20>;
    headerText: string;
    decimalPipe: DecimalPipe;
    /** Data accessor function that transforms the weight value to have at most 2 decimal digits. */
    getWeight: (data: PeriodicElement_20) => string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableTextColumnAdvancedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableTextColumnAdvancedExample, "table-text-column-advanced-example", never, {}, {}, never, never, false>;
}

/**
 * @title Use of `mat-text-column` which can be used for simple columns that only need to display
 * a text value for the header and cells.
 */
export declare class TableTextColumnExample {
    displayedColumns: string[];
    dataSource: PeriodicElement_21[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableTextColumnExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableTextColumnExample, "table-text-column-example", never, {}, {}, never, never, false>;
}

/**
 * @title Tables with Material Design ripples.
 */
export declare class TableWithRipplesExample {
    displayedColumns: string[];
    dataSource: {
        name: string;
    }[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableWithRipplesExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableWithRipplesExample, "table-with-ripples-example", never, {}, {}, never, never, false>;
}

/**
 * @title Table example that shows how to wrap a table component for definition and behavior reuse.
 */
export declare class TableWrappedExample implements AfterViewInit {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement_22>;
    sort: MatSort;
    ngAfterViewInit(): void;
    clearTable(): void;
    addData(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableWrappedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableWrappedExample, "table-wrapped-example", never, {}, {}, never, never, false>;
}

declare interface Transaction {
    item: string;
    cost: number;
}

declare interface Transaction_2 {
    item: string;
    cost: number;
}

declare interface Transaction_3 {
    item: string;
    cost: number;
}

declare interface UserData {
    id: string;
    name: string;
    progress: string;
    fruit: string;
}

/**
 * Table component that accepts column and row definitions in its content to be registered to the
 * table.
 */
export declare class WrapperTable<T> implements AfterContentInit {
    headerRowDefs: QueryList<MatHeaderRowDef>;
    rowDefs: QueryList<MatRowDef<T>>;
    columnDefs: QueryList<MatColumnDef>;
    noDataRow: MatNoDataRow;
    table: MatTable<T>;
    columns: string[];
    dataSource: DataSource<T>;
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WrapperTable<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WrapperTable<any>, "wrapper-table", never, { "columns": "columns"; "dataSource": "dataSource"; }, {}, ["noDataRow", "headerRowDefs", "rowDefs", "columnDefs"], ["*"], false>;
}

export { }
