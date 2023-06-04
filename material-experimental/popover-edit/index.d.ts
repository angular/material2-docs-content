import { BehaviorSubject } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { FormValueContainer } from '@angular/cdk-experimental/popover-edit';
import * as i0 from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

declare type ElementType = 'Metal' | 'Semimetal' | 'Nonmetal';

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
declare class ExampleDataSource extends DataSource<Person> {
    /** Stream of data that is provided to the table. */
    data: BehaviorSubject<Person[]>;
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Person[]>;
    disconnect(): void;
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
declare class ExampleDataSource_2 extends DataSource<PeriodicElement> {
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
declare class ExampleDataSource_3 extends DataSource<PeriodicElement_2> {
    /** Stream of data that is provided to the table. */
    data: BehaviorSubject<PeriodicElement_2[]>;
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<PeriodicElement_2[]>;
    disconnect(): void;
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
declare class ExampleDataSource_4 extends DataSource<PeriodicElement_3> {
    /** Stream of data that is provided to the table. */
    data: BehaviorSubject<PeriodicElement_3[]>;
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<PeriodicElement_3[]>;
    disconnect(): void;
}

declare type FantasyElement = 'Earth' | 'Water' | 'Wind' | 'Fire' | 'Light' | 'Dark';

declare interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

declare interface PeriodicElement_2 {
    name: string;
    type: ElementType;
    position: number;
    weight: number;
    symbol: string;
    fantasyCounterparts: FantasyElement[];
}

declare interface PeriodicElement_3 {
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

/**
 * @title Material Popover Edit spanning multiple columns on a Material data-table
 */
export declare class PopoverEditCellSpanMatTableExample {
    displayedColumns: string[];
    dataSource: ExampleDataSource;
    readonly preservedValues: WeakMap<Person, any>;
    onSubmit(person: Person, f: NgForm): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PopoverEditCellSpanMatTableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PopoverEditCellSpanMatTableExample, "popover-edit-cell-span-mat-table-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Material Popover Edit on a Material data-table
 */
export declare class PopoverEditMatTableExample {
    private readonly _snackBar;
    displayedColumns: string[];
    dataSource: ExampleDataSource_3;
    nameEditEnabled: boolean;
    readonly TYPES: readonly ElementType[];
    readonly FANTASY_ELEMENTS: readonly FantasyElement[];
    readonly nameValues: FormValueContainer<PeriodicElement_2, any>;
    readonly weightValues: FormValueContainer<PeriodicElement_2, any>;
    readonly typeValues: FormValueContainer<PeriodicElement_2, any>;
    readonly fantasyValues: FormValueContainer<PeriodicElement_2, any>;
    constructor(_snackBar: MatSnackBar);
    onSubmitName(element: PeriodicElement_2, f: NgForm): void;
    onSubmitWeight(element: PeriodicElement_2, f: NgForm): void;
    onSubmitType(element: PeriodicElement_2, f: NgForm): void;
    onSubmitFantasyCounterparts(element: PeriodicElement_2, f: NgForm): void;
    goodJob(element: PeriodicElement_2): void;
    badJob(element: PeriodicElement_2): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PopoverEditMatTableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PopoverEditMatTableExample, "popover-edit-mat-table-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Material Popover Edit on a flex Material data-table
 */
export declare class PopoverEditMatTableFlexExample {
    displayedColumns: string[];
    dataSource: ExampleDataSource_2;
    readonly preservedNameValues: WeakMap<PeriodicElement, any>;
    readonly preservedWeightValues: WeakMap<PeriodicElement, any>;
    onSubmitName(element: PeriodicElement, f: NgForm): void;
    onSubmitWeight(element: PeriodicElement, f: NgForm): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PopoverEditMatTableFlexExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PopoverEditMatTableFlexExample, "popover-edit-mat-table-flex-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Material Popover Edit with spreadsheet-like configuration on a Material data-table
 */
export declare class PopoverEditTabOutMatTableExample {
    displayedColumns: string[];
    dataSource: ExampleDataSource_4;
    readonly preservedNameValues: WeakMap<PeriodicElement_3, any>;
    readonly preservedWeightValues: WeakMap<PeriodicElement_3, any>;
    onSubmitName(element: PeriodicElement_3, f: NgForm): void;
    onSubmitWeight(element: PeriodicElement_3, f: NgForm): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PopoverEditTabOutMatTableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PopoverEditTabOutMatTableExample, "popover-edit-tab-out-mat-table-example", never, {}, {}, never, never, true, never, false>;
}

export { }
