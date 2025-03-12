import { DataSource } from '@angular/cdk/collections';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import * as i0 from '@angular/core';

interface PeriodicElement$3 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title CDK Popover Edit on a flex cdk-table.
 */
declare class CdkPopoverEditCdkTableFlexExample {
    displayedColumns: string[];
    dataSource: ExampleDataSource$1;
    readonly preservedNameValues: WeakMap<PeriodicElement$3, any>;
    readonly preservedWeightValues: WeakMap<PeriodicElement$3, any>;
    onSubmitName(element: PeriodicElement$3, f: NgForm): void;
    onSubmitWeight(element: PeriodicElement$3, f: NgForm): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkPopoverEditCdkTableFlexExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkPopoverEditCdkTableFlexExample, "cdk-popover-edit-cdk-table-flex-example", never, {}, {}, never, never, true, never>;
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
declare class ExampleDataSource$1 extends DataSource<PeriodicElement$3> {
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
 * @title CDK Popover Edit on a CDK data-table
 */
declare class CdkPopoverEditCdkTableExample {
    displayedColumns: string[];
    dataSource: ExampleDataSource;
    readonly preservedNameValues: WeakMap<PeriodicElement$2, any>;
    readonly preservedWeightValues: WeakMap<PeriodicElement$2, any>;
    onSubmitName(element: PeriodicElement$2, f: NgForm): void;
    onSubmitWeight(element: PeriodicElement$2, f: NgForm): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkPopoverEditCdkTableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkPopoverEditCdkTableExample, "cdk-popover-edit-cdk-table-example", never, {}, {}, never, never, true, never>;
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
declare class ExampleDataSource extends DataSource<PeriodicElement$2> {
    /** Stream of data that is provided to the table. */
    data: BehaviorSubject<PeriodicElement$2[]>;
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<PeriodicElement$2[]>;
    disconnect(): void;
}

interface Person {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
}
/**
 * @title CDK Popover Edit spanning multiple columns on an HTML data-table
 */
declare class CdkPopoverEditCellSpanVanillaTableExample {
    readonly preservedValues: WeakMap<Person, any>;
    readonly persons: Person[];
    onSubmit(person: Person, f: NgForm): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkPopoverEditCellSpanVanillaTableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkPopoverEditCellSpanVanillaTableExample, "cdk-popover-edit-cell-span-vanilla-table-example", never, {}, {}, never, never, true, never>;
}

interface PeriodicElement$1 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title CDK Popover Edit with spreadsheet-like configuration on an HTML data-table
 */
declare class CdkPopoverEditTabOutVanillaTableExample {
    readonly preservedNameValues: WeakMap<PeriodicElement$1, any>;
    readonly preservedWeightValues: WeakMap<PeriodicElement$1, any>;
    readonly elements: PeriodicElement$1[];
    onSubmitName(element: PeriodicElement$1, f: NgForm): void;
    onSubmitWeight(element: PeriodicElement$1, f: NgForm): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkPopoverEditTabOutVanillaTableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkPopoverEditTabOutVanillaTableExample, "cdk-popover-edit-tab-out-vanilla-table-example", never, {}, {}, never, never, true, never>;
}

interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title CDK Popover Edit on an HTML data-table
 */
declare class CdkPopoverEditVanillaTableExample {
    readonly preservedNameValues: WeakMap<PeriodicElement, any>;
    readonly preservedWeightValues: WeakMap<PeriodicElement, any>;
    readonly elements: PeriodicElement[];
    onSubmitName(element: PeriodicElement, f: NgForm): void;
    onSubmitWeight(element: PeriodicElement, f: NgForm): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkPopoverEditVanillaTableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkPopoverEditVanillaTableExample, "cdk-popover-edit-vanilla-table-example", never, {}, {}, never, never, true, never>;
}

export { CdkPopoverEditCdkTableExample, CdkPopoverEditCdkTableFlexExample, CdkPopoverEditCellSpanVanillaTableExample, CdkPopoverEditTabOutVanillaTableExample, CdkPopoverEditVanillaTableExample };
