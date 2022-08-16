import { BehaviorSubject } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { FormValueContainer } from '@angular/cdk-experimental/popover-edit';
import * as i0 from '@angular/core';
import * as i10 from '@angular/material/legacy-list';
import * as i11 from '@angular/material-experimental/popover-edit';
import * as i12 from '@angular/material/legacy-snack-bar';
import * as i13 from '@angular/material/table';
import * as i14 from '@angular/forms';
import * as i5 from '@angular/common';
import * as i6 from '@angular/material/legacy-button';
import * as i7 from '@angular/material/legacy-checkbox';
import * as i8 from '@angular/material/icon';
import * as i9 from '@angular/material/legacy-input';
import { MatLegacySnackBar } from '@angular/material/legacy-snack-bar';
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

declare namespace i1 {
    export {
        Person,
        PopoverEditCellSpanMatTableExample,
        ExampleDataSource
    }
}

declare namespace i2 {
    export {
        ElementType,
        FantasyElement,
        PeriodicElement,
        PopoverEditMatTableExample,
        ExampleDataSource_2 as ExampleDataSource
    }
}

declare namespace i3 {
    export {
        PeriodicElement_2 as PeriodicElement,
        PopoverEditMatTableFlexExample,
        ExampleDataSource_3 as ExampleDataSource
    }
}

declare namespace i4 {
    export {
        PeriodicElement_3 as PeriodicElement,
        PopoverEditTabOutMatTableExample,
        ExampleDataSource_4 as ExampleDataSource
    }
}

declare interface PeriodicElement {
    name: string;
    type: ElementType;
    position: number;
    weight: number;
    symbol: string;
    fantasyCounterparts: FantasyElement[];
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
    static ɵcmp: i0.ɵɵComponentDeclaration<PopoverEditCellSpanMatTableExample, "popover-edit-cell-span-mat-table-example", never, {}, {}, never, never, false>;
}

export declare class PopoverEditExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PopoverEditExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PopoverEditExamplesModule, [typeof i1.PopoverEditCellSpanMatTableExample, typeof i2.PopoverEditMatTableExample, typeof i3.PopoverEditMatTableFlexExample, typeof i4.PopoverEditTabOutMatTableExample], [typeof i5.CommonModule, typeof i6.MatLegacyButtonModule, typeof i7.MatLegacyCheckboxModule, typeof i8.MatIconModule, typeof i9.MatLegacyInputModule, typeof i10.MatLegacyListModule, typeof i11.MatPopoverEditModule, typeof i12.MatLegacySnackBarModule, typeof i13.MatTableModule, typeof i14.FormsModule], [typeof i1.PopoverEditCellSpanMatTableExample, typeof i2.PopoverEditMatTableExample, typeof i3.PopoverEditMatTableFlexExample, typeof i4.PopoverEditTabOutMatTableExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PopoverEditExamplesModule>;
}

/**
 * @title Material Popover Edit on a Material data-table
 */
export declare class PopoverEditMatTableExample {
    private readonly _snackBar;
    displayedColumns: string[];
    dataSource: ExampleDataSource_2;
    nameEditEnabled: boolean;
    readonly TYPES: readonly ElementType[];
    readonly FANTASY_ELEMENTS: readonly FantasyElement[];
    readonly nameValues: FormValueContainer<PeriodicElement, any>;
    readonly weightValues: FormValueContainer<PeriodicElement, any>;
    readonly typeValues: FormValueContainer<PeriodicElement, any>;
    readonly fantasyValues: FormValueContainer<PeriodicElement, any>;
    constructor(_snackBar: MatLegacySnackBar);
    onSubmitName(element: PeriodicElement, f: NgForm): void;
    onSubmitWeight(element: PeriodicElement, f: NgForm): void;
    onSubmitType(element: PeriodicElement, f: NgForm): void;
    onSubmitFantasyCounterparts(element: PeriodicElement, f: NgForm): void;
    goodJob(element: PeriodicElement): void;
    badJob(element: PeriodicElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PopoverEditMatTableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PopoverEditMatTableExample, "popover-edit-mat-table-example", never, {}, {}, never, never, false>;
}

/**
 * @title Material Popover Edit on a flex Material data-table
 */
export declare class PopoverEditMatTableFlexExample {
    displayedColumns: string[];
    dataSource: ExampleDataSource_3;
    readonly preservedNameValues: WeakMap<PeriodicElement_2, any>;
    readonly preservedWeightValues: WeakMap<PeriodicElement_2, any>;
    onSubmitName(element: PeriodicElement_2, f: NgForm): void;
    onSubmitWeight(element: PeriodicElement_2, f: NgForm): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PopoverEditMatTableFlexExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PopoverEditMatTableFlexExample, "popover-edit-mat-table-flex-example", never, {}, {}, never, never, false>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<PopoverEditTabOutMatTableExample, "popover-edit-tab-out-mat-table-example", never, {}, {}, never, never, false>;
}

export { }
