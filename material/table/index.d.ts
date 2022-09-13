import { AfterContentInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DataSource } from '@angular/cdk/collections';
import { DecimalPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import * as i0 from '@angular/core';
import * as i32 from '@angular/common';
import * as i33 from '@angular/material/legacy-button';
import * as i34 from '@angular/material/button-toggle';
import * as i35 from '@angular/material/legacy-checkbox';
import * as i36 from '@angular/material/icon';
import * as i37 from '@angular/material/legacy-input';
import * as i38 from '@angular/material/legacy-paginator';
import * as i39 from '@angular/material/legacy-progress-spinner';
import * as i40 from '@angular/material/core';
import * as i41 from '@angular/material/sort';
import * as i42 from '@angular/material/table';
import * as i43 from '@angular/cdk/table';
import * as i44 from '@angular/cdk/drag-drop';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatColumnDef } from '@angular/material/table';
import { MatHeaderRowDef } from '@angular/material/table';
import { MatLegacyPaginator } from '@angular/material/legacy-paginator';
import { MatNoDataRow } from '@angular/material/table';
import { MatRowDef } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableDataSourcePaginator } from '@angular/material/table';
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
        TableFooterRowExample
    }
}

declare namespace i11 {
    export {
        PeriodicElement_10 as PeriodicElement,
        TableGeneratedColumnsExample
    }
}

declare namespace i12 {
    export {
        TableHarnessExample
    }
}

declare namespace i13 {
    export {
        TableHttpExample,
        GithubApi,
        GithubIssue,
        ExampleHttpDatabase
    }
}

declare namespace i14 {
    export {
        TableMultipleHeaderFooterExample
    }
}

declare namespace i15 {
    export {
        UserData,
        TableOverviewExample
    }
}

declare namespace i16 {
    export {
        TablePaginationExample,
        PeriodicElement_11 as PeriodicElement
    }
}

declare namespace i17 {
    export {
        PeriodicElement_12 as PeriodicElement,
        TableRecycleRowsExample
    }
}

declare namespace i18 {
    export {
        TableReorderableExample,
        PeriodicElement_13 as PeriodicElement
    }
}

declare namespace i19 {
    export {
        PeriodicElement_14 as PeriodicElement,
        TableRowBindingExample
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
        TableRowContextExample
    }
}

declare namespace i21 {
    export {
        PeriodicElement_15 as PeriodicElement,
        TableSelectionExample
    }
}

declare namespace i22 {
    export {
        PeriodicElement_16 as PeriodicElement,
        TableSortingExample
    }
}

declare namespace i23 {
    export {
        TableStickyColumnsExample,
        PeriodicElement_17 as PeriodicElement
    }
}

declare namespace i24 {
    export {
        TableStickyComplexExample,
        PeriodicElement_18 as PeriodicElement
    }
}

declare namespace i25 {
    export {
        TableStickyComplexFlexExample,
        PeriodicElement_19 as PeriodicElement
    }
}

declare namespace i26 {
    export {
        Transaction_3 as Transaction,
        TableStickyFooterExample
    }
}

declare namespace i27 {
    export {
        TableStickyHeaderExample,
        PeriodicElement_20 as PeriodicElement
    }
}

declare namespace i28 {
    export {
        PeriodicElement_21 as PeriodicElement,
        TableTextColumnAdvancedExample
    }
}

declare namespace i29 {
    export {
        PeriodicElement_22 as PeriodicElement,
        TableTextColumnExample
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
        TableWithRipplesExample
    }
}

declare namespace i31 {
    export {
        PeriodicElement_23 as PeriodicElement,
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
        PeriodicElement_9 as PeriodicElement,
        TableFlexLargeRowExample
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

declare interface PeriodicElement_23 {
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
    static ɵcmp: i0.ɵɵComponentDeclaration<TableBasicExample, "table-basic-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Styling columns using their auto-generated column names
 */
export declare class TableColumnStylingExample {
    displayedColumns: string[];
    dataSource: PeriodicElement_2[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableColumnStylingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableColumnStylingExample, "table-column-styling-example", never, {}, {}, never, never, false, never>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<TableDynamicArrayDataExample, "table-dynamic-array-data-example", never, {}, {}, never, never, false, never>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<TableDynamicColumnsExample, "table-dynamic-columns-example", never, {}, {}, never, never, false, never>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<TableDynamicObservableDataExample, "table-dynamic-observable-data-example", never, {}, {}, never, never, false, never>;
}

export declare class TableExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<TableExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TableExamplesModule, [typeof i1.TableBasicExample, typeof i2.TableColumnStylingExample, typeof i3.TableDynamicArrayDataExample, typeof i4.TableDynamicColumnsExample, typeof i5.TableDynamicObservableDataExample, typeof i6.TableExpandableRowsExample, typeof i7.TableFilteringExample, typeof i8.TableFlexBasicExample, typeof i9.TableFlexLargeRowExample, typeof i10.TableFooterRowExample, typeof i11.TableGeneratedColumnsExample, typeof i12.TableHarnessExample, typeof i13.TableHttpExample, typeof i14.TableMultipleHeaderFooterExample, typeof i15.TableOverviewExample, typeof i16.TablePaginationExample, typeof i17.TableRecycleRowsExample, typeof i18.TableReorderableExample, typeof i19.TableRowBindingExample, typeof i20.TableRowContextExample, typeof i21.TableSelectionExample, typeof i22.TableSortingExample, typeof i23.TableStickyColumnsExample, typeof i24.TableStickyComplexExample, typeof i25.TableStickyComplexFlexExample, typeof i26.TableStickyFooterExample, typeof i27.TableStickyHeaderExample, typeof i28.TableTextColumnAdvancedExample, typeof i29.TableTextColumnExample, typeof i30.TableWithRipplesExample, typeof i31.TableWrappedExample, typeof i31.WrapperTable], [typeof i32.CommonModule, typeof i33.MatLegacyButtonModule, typeof i34.MatButtonToggleModule, typeof i35.MatLegacyCheckboxModule, typeof i36.MatIconModule, typeof i37.MatLegacyInputModule, typeof i38.MatLegacyPaginatorModule, typeof i39.MatLegacyProgressSpinnerModule, typeof i40.MatRippleModule, typeof i41.MatSortModule, typeof i42.MatTableModule, typeof i43.CdkTableModule, typeof i44.DragDropModule], [typeof i1.TableBasicExample, typeof i2.TableColumnStylingExample, typeof i3.TableDynamicArrayDataExample, typeof i4.TableDynamicColumnsExample, typeof i5.TableDynamicObservableDataExample, typeof i6.TableExpandableRowsExample, typeof i7.TableFilteringExample, typeof i8.TableFlexBasicExample, typeof i9.TableFlexLargeRowExample, typeof i10.TableFooterRowExample, typeof i11.TableGeneratedColumnsExample, typeof i12.TableHarnessExample, typeof i13.TableHttpExample, typeof i14.TableMultipleHeaderFooterExample, typeof i15.TableOverviewExample, typeof i16.TablePaginationExample, typeof i17.TableRecycleRowsExample, typeof i18.TableReorderableExample, typeof i19.TableRowBindingExample, typeof i20.TableRowContextExample, typeof i21.TableSelectionExample, typeof i22.TableSortingExample, typeof i23.TableStickyColumnsExample, typeof i24.TableStickyComplexExample, typeof i25.TableStickyComplexFlexExample, typeof i26.TableStickyFooterExample, typeof i27.TableStickyHeaderExample, typeof i28.TableTextColumnAdvancedExample, typeof i29.TableTextColumnExample, typeof i30.TableWithRipplesExample, typeof i31.TableWrappedExample, typeof i31.WrapperTable]>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<TableExpandableRowsExample, "table-expandable-rows-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Table with filtering
 */
export declare class TableFilteringExample {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement_7, MatTableDataSourcePaginator>;
    applyFilter(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableFilteringExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableFilteringExample, "table-filtering-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Basic use of `<mat-table>` (uses display flex)
 */
export declare class TableFlexBasicExample {
    displayedColumns: string[];
    dataSource: PeriodicElement_8[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableFlexBasicExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableFlexBasicExample, "table-flex-basic-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Flex table where one column's cells has a greater height than others.
 */
export declare class TableFlexLargeRowExample {
    displayedColumns: string[];
    dataSource: PeriodicElement_9[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableFlexLargeRowExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableFlexLargeRowExample, "table-flex-large-row-example", never, {}, {}, never, never, false, never>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<TableFooterRowExample, "table-footer-row-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Table with columns defined using ngFor instead of statically written in the template.
 */
export declare class TableGeneratedColumnsExample {
    columns: {
        columnDef: string;
        header: string;
        cell: (element: PeriodicElement_10) => string;
    }[];
    dataSource: PeriodicElement_10[];
    displayedColumns: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableGeneratedColumnsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableGeneratedColumnsExample, "table-generated-columns-example", never, {}, {}, never, never, false, never>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<TableHarnessExample, "table-harness-example", never, {}, {}, never, never, false, never>;
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
    paginator: MatLegacyPaginator;
    sort: MatSort;
    constructor(_httpClient: HttpClient);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableHttpExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableHttpExample, "table-http-example", never, {}, {}, never, never, false, never>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<TableMultipleHeaderFooterExample, "table-multiple-header-footer-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Data table with sorting, pagination, and filtering.
 */
export declare class TableOverviewExample implements AfterViewInit {
    displayedColumns: string[];
    dataSource: MatTableDataSource<UserData>;
    paginator: MatLegacyPaginator;
    sort: MatSort;
    constructor();
    ngAfterViewInit(): void;
    applyFilter(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableOverviewExample, "table-overview-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Table with pagination
 */
export declare class TablePaginationExample implements AfterViewInit {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement_11, MatTableDataSourcePaginator>;
    paginator: MatLegacyPaginator;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TablePaginationExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TablePaginationExample, "table-pagination-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Table that uses the recycle view repeater strategy.
 */
export declare class TableRecycleRowsExample {
    displayedColumns: string[];
    dataSource: PeriodicElement_12[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableRecycleRowsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableRecycleRowsExample, "table-recycle-rows-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Table with re-orderable columns
 */
export declare class TableReorderableExample {
    columns: string[];
    dataSource: PeriodicElement_13[];
    drop(event: CdkDragDrop<string[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableReorderableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableReorderableExample, "table-reorderable-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Binding event handlers and properties to the table rows.
 */
export declare class TableRowBindingExample {
    displayedColumns: string[];
    dataSource: PeriodicElement_14[];
    clickedRows: Set<PeriodicElement_14>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableRowBindingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableRowBindingExample, "table-row-binding-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Table showing each row context properties.
 */
export declare class TableRowContextExample {
    displayedColumns: string[];
    data: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableRowContextExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableRowContextExample, "table-row-context-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Table with selection
 */
export declare class TableSelectionExample {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement_15, MatTableDataSourcePaginator>;
    selection: SelectionModel<PeriodicElement_15>;
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected(): boolean;
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    toggleAllRows(): void;
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: PeriodicElement_15): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableSelectionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableSelectionExample, "table-selection-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Table with sorting
 */
export declare class TableSortingExample implements AfterViewInit {
    private _liveAnnouncer;
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement_16, MatTableDataSourcePaginator>;
    constructor(_liveAnnouncer: LiveAnnouncer);
    sort: MatSort;
    ngAfterViewInit(): void;
    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableSortingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableSortingExample, "table-sorting-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Table with sticky columns
 */
export declare class TableStickyColumnsExample {
    displayedColumns: string[];
    dataSource: PeriodicElement_17[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableStickyColumnsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableStickyColumnsExample, "table-sticky-columns-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Tables with toggle-able sticky headers, footers, and columns
 */
export declare class TableStickyComplexExample {
    displayedColumns: string[];
    dataSource: PeriodicElement_18[];
    tables: number[];
    constructor();
    /** Whether the button toggle group contains the id as an active value. */
    isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableStickyComplexExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableStickyComplexExample, "table-sticky-complex-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Flex-layout tables with toggle-able sticky headers, footers, and columns
 */
export declare class TableStickyComplexFlexExample {
    displayedColumns: string[];
    dataSource: PeriodicElement_19[];
    tables: number[];
    constructor();
    /** Whether the button toggle group contains the id as an active value. */
    isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableStickyComplexFlexExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableStickyComplexFlexExample, "table-sticky-complex-flex-example", never, {}, {}, never, never, false, never>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<TableStickyFooterExample, "table-sticky-footer-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Table with sticky header
 */
export declare class TableStickyHeaderExample {
    displayedColumns: string[];
    dataSource: PeriodicElement_20[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableStickyHeaderExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableStickyHeaderExample, "table-sticky-header-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Use of 'mat-text-column' with various configurations of the interface.
 */
export declare class TableTextColumnAdvancedExample {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement_21, MatTableDataSourcePaginator>;
    headerText: string;
    decimalPipe: DecimalPipe;
    /** Data accessor function that transforms the weight value to have at most 2 decimal digits. */
    getWeight: (data: PeriodicElement_21) => string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableTextColumnAdvancedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableTextColumnAdvancedExample, "table-text-column-advanced-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Use of `mat-text-column` which can be used for simple columns that only need to display
 * a text value for the header and cells.
 */
export declare class TableTextColumnExample {
    displayedColumns: string[];
    dataSource: PeriodicElement_22[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableTextColumnExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableTextColumnExample, "table-text-column-example", never, {}, {}, never, never, false, never>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<TableWithRipplesExample, "table-with-ripples-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Table example that shows how to wrap a table component for definition and behavior reuse.
 */
export declare class TableWrappedExample implements AfterViewInit {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement_23, MatTableDataSourcePaginator>;
    sort: MatSort;
    ngAfterViewInit(): void;
    clearTable(): void;
    addData(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableWrappedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableWrappedExample, "table-wrapped-example", never, {}, {}, never, never, false, never>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<WrapperTable<any>, "wrapper-table", never, { "columns": "columns"; "dataSource": "dataSource"; }, {}, ["noDataRow", "headerRowDefs", "rowDefs", "columnDefs"], ["*"], false, never>;
}

export { }
