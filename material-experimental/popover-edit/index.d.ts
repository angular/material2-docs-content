import { DataSource } from '@angular/cdk/collections';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import * as i0 from '@angular/core';
import { FormValueContainer } from '@angular/cdk-experimental/popover-edit';

interface Person {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
}
/**
 * @title Material Popover Edit spanning multiple columns on a Material data-table
 */
declare class PopoverEditCellSpanMatTableExample {
    displayedColumns: string[];
    dataSource: ExampleDataSource$3;
    readonly preservedValues: WeakMap<Person, any>;
    onSubmit(person: Person, f: NgForm): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PopoverEditCellSpanMatTableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PopoverEditCellSpanMatTableExample, "popover-edit-cell-span-mat-table-example", never, {}, {}, never, never, true, never>;
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
declare class ExampleDataSource$3 extends DataSource<Person> {
    /** Stream of data that is provided to the table. */
    data: BehaviorSubject<Person[]>;
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Person[]>;
    disconnect(): void;
}

interface PeriodicElement$2 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Material Popover Edit on a flex Material data-table
 */
declare class PopoverEditMatTableFlexExample {
    displayedColumns: string[];
    dataSource: ExampleDataSource$2;
    readonly preservedNameValues: WeakMap<PeriodicElement$2, any>;
    readonly preservedWeightValues: WeakMap<PeriodicElement$2, any>;
    onSubmitName(element: PeriodicElement$2, f: NgForm): void;
    onSubmitWeight(element: PeriodicElement$2, f: NgForm): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PopoverEditMatTableFlexExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PopoverEditMatTableFlexExample, "popover-edit-mat-table-flex-example", never, {}, {}, never, never, true, never>;
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

type ElementType = 'Metal' | 'Semimetal' | 'Nonmetal';
type FantasyElement = 'Earth' | 'Water' | 'Wind' | 'Fire' | 'Light' | 'Dark';
interface PeriodicElement$1 {
    name: string;
    type: ElementType;
    position: number;
    weight: number;
    symbol: string;
    fantasyCounterparts: FantasyElement[];
}
/**
 * @title Material Popover Edit on a Material data-table
 */
declare class PopoverEditMatTableExample {
    private readonly _snackBar;
    displayedColumns: string[];
    dataSource: ExampleDataSource$1;
    nameEditEnabled: boolean;
    readonly TYPES: readonly ElementType[];
    readonly FANTASY_ELEMENTS: readonly FantasyElement[];
    readonly nameValues: FormValueContainer<PeriodicElement$1, any>;
    readonly weightValues: FormValueContainer<PeriodicElement$1, any>;
    readonly typeValues: FormValueContainer<PeriodicElement$1, any>;
    readonly fantasyValues: FormValueContainer<PeriodicElement$1, any>;
    onSubmitName(element: PeriodicElement$1, f: NgForm): void;
    onSubmitWeight(element: PeriodicElement$1, f: NgForm): void;
    onSubmitType(element: PeriodicElement$1, f: NgForm): void;
    onSubmitFantasyCounterparts(element: PeriodicElement$1, f: NgForm): void;
    goodJob(element: PeriodicElement$1): void;
    badJob(element: PeriodicElement$1): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PopoverEditMatTableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PopoverEditMatTableExample, "popover-edit-mat-table-example", never, {}, {}, never, never, true, never>;
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
 * @title Material Popover Edit with spreadsheet-like configuration on a Material data-table
 */
declare class PopoverEditTabOutMatTableExample {
    displayedColumns: string[];
    dataSource: ExampleDataSource;
    readonly preservedNameValues: WeakMap<PeriodicElement, any>;
    readonly preservedWeightValues: WeakMap<PeriodicElement, any>;
    onSubmitName(element: PeriodicElement, f: NgForm): void;
    onSubmitWeight(element: PeriodicElement, f: NgForm): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PopoverEditTabOutMatTableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PopoverEditTabOutMatTableExample, "popover-edit-tab-out-mat-table-example", never, {}, {}, never, never, true, never>;
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

export { PopoverEditCellSpanMatTableExample, PopoverEditMatTableExample, PopoverEditMatTableFlexExample, PopoverEditTabOutMatTableExample };
