import { BehaviorSubject } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import * as i0 from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

/**
 * @title CDK Popover Edit on a CDK data-table
 */
export declare class CdkPopoverEditCdkTableExample {
    displayedColumns: string[];
    dataSource: ExampleDataSource_2;
    readonly preservedNameValues: WeakMap<PeriodicElement_2, any>;
    readonly preservedWeightValues: WeakMap<PeriodicElement_2, any>;
    onSubmitName(element: PeriodicElement_2, f: NgForm): void;
    onSubmitWeight(element: PeriodicElement_2, f: NgForm): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkPopoverEditCdkTableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkPopoverEditCdkTableExample, "cdk-popover-edit-cdk-table-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title CDK Popover Edit on a flex cdk-table.
 */
export declare class CdkPopoverEditCdkTableFlexExample {
    displayedColumns: string[];
    dataSource: ExampleDataSource;
    readonly preservedNameValues: WeakMap<PeriodicElement, any>;
    readonly preservedWeightValues: WeakMap<PeriodicElement, any>;
    onSubmitName(element: PeriodicElement, f: NgForm): void;
    onSubmitWeight(element: PeriodicElement, f: NgForm): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkPopoverEditCdkTableFlexExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkPopoverEditCdkTableFlexExample, "cdk-popover-edit-cdk-table-flex-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title CDK Popover Edit spanning multiple columns on an HTML data-table
 */
export declare class CdkPopoverEditCellSpanVanillaTableExample {
    readonly preservedValues: WeakMap<Person, any>;
    readonly persons: Person[];
    onSubmit(person: Person, f: NgForm): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkPopoverEditCellSpanVanillaTableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkPopoverEditCellSpanVanillaTableExample, "cdk-popover-edit-cell-span-vanilla-table-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title CDK Popover Edit with spreadsheet-like configuration on an HTML data-table
 */
export declare class CdkPopoverEditTabOutVanillaTableExample {
    readonly preservedNameValues: WeakMap<PeriodicElement_3, any>;
    readonly preservedWeightValues: WeakMap<PeriodicElement_3, any>;
    readonly elements: PeriodicElement_3[];
    onSubmitName(element: PeriodicElement_3, f: NgForm): void;
    onSubmitWeight(element: PeriodicElement_3, f: NgForm): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkPopoverEditTabOutVanillaTableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkPopoverEditTabOutVanillaTableExample, "cdk-popover-edit-tab-out-vanilla-table-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title CDK Popover Edit on an HTML data-table
 */
export declare class CdkPopoverEditVanillaTableExample {
    readonly preservedNameValues: WeakMap<PeriodicElement_4, any>;
    readonly preservedWeightValues: WeakMap<PeriodicElement_4, any>;
    readonly elements: PeriodicElement_4[];
    onSubmitName(element: PeriodicElement_4, f: NgForm): void;
    onSubmitWeight(element: PeriodicElement_4, f: NgForm): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkPopoverEditVanillaTableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkPopoverEditVanillaTableExample, "cdk-popover-edit-vanilla-table-example", never, {}, {}, never, never, true, never>;
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

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
declare class ExampleDataSource_2 extends DataSource<PeriodicElement_2> {
    /** Stream of data that is provided to the table. */
    data: BehaviorSubject<PeriodicElement_2[]>;
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<PeriodicElement_2[]>;
    disconnect(): void;
}

declare interface PeriodicElement {
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

declare interface Person {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
}

export { }
