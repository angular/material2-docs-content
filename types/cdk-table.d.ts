import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import * as i0 from '@angular/core';

interface PeriodicElement$3 {
    name: string;
    position: number;
    symbol: string;
    weight: number;
}
/**
 * @title Basic use of `<cdk-table>` (uses display flex)
 */
declare class CdkTableFlexBasicExample {
    displayedColumns: string[];
    dataSource: ExampleDataSource$3;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTableFlexBasicExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTableFlexBasicExample, "cdk-table-flex-basic-example", never, {}, {}, never, never, true, never>;
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
declare class ExampleDataSource$3 extends DataSource<PeriodicElement$3> {
    /** Stream of data that is provided to the table. */
    data: BehaviorSubject<PeriodicElement$3[]>;
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<PeriodicElement$3[]>;
    disconnect(): void;
}

interface PeriodicElement$2 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Basic CDK data-table
 */
declare class CdkTableBasicExample {
    displayedColumns: string[];
    dataSource: ExampleDataSource$2;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTableBasicExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTableBasicExample, "cdk-table-basic-example", never, {}, {}, never, never, true, never>;
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
declare class ExampleDataSource$2 extends DataSource<PeriodicElement$2> {
    /** Stream of data that is provided to the table. */
    data: BehaviorSubject<PeriodicElement$2[]>;
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<PeriodicElement$2[]>;
    disconnect(): void;
}

interface PeriodicElement$1 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title CDK table with a fixed layout.
 */
declare class CdkTableFixedLayoutExample {
    displayedColumns: string[];
    dataSource: ExampleDataSource$1;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTableFixedLayoutExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTableFixedLayoutExample, "cdk-table-fixed-layout-example", never, {}, {}, never, never, true, never>;
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
declare class ExampleDataSource$1 extends DataSource<PeriodicElement$1> {
    /** Stream of data that is provided to the table. */
    data: BehaviorSubject<PeriodicElement$1[]>;
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<PeriodicElement$1[]>;
    disconnect(): void;
}

interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Table that uses the recycle view repeater strategy.
 */
declare class CdkTableRecycleRowsExample {
    displayedColumns: string[];
    dataSource: ExampleDataSource;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTableRecycleRowsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTableRecycleRowsExample, "cdk-table-recycle-rows-example", never, {}, {}, never, never, true, never>;
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
declare class ExampleDataSource extends DataSource<PeriodicElement> {
    /** Stream of data that is provided to the table. */
    data: BehaviorSubject<PeriodicElement[]>;
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<PeriodicElement[]>;
    disconnect(): void;
}

export { CdkTableBasicExample, CdkTableFixedLayoutExample, CdkTableFlexBasicExample, CdkTableRecycleRowsExample };
