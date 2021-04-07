import { DataSource } from '@angular/cdk/collections';
import { FormValueContainer } from '@angular/cdk-experimental/popover-edit';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare type ElementType = 'Metal' | 'Semimetal' | 'Nonmetal';
export declare type FantasyElement = 'Earth' | 'Water' | 'Wind' | 'Fire' | 'Light' | 'Dark';
export interface PeriodicElement {
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
export declare class PopoverEditMatTableExample {
    private readonly _snackBar;
    displayedColumns: string[];
    dataSource: ExampleDataSource;
    nameEditEnabled: boolean;
    readonly TYPES: readonly ElementType[];
    readonly FANTASY_ELEMENTS: readonly FantasyElement[];
    readonly nameValues: FormValueContainer<PeriodicElement, any>;
    readonly weightValues: FormValueContainer<PeriodicElement, any>;
    readonly typeValues: FormValueContainer<PeriodicElement, any>;
    readonly fantasyValues: FormValueContainer<PeriodicElement, any>;
    constructor(_snackBar: MatSnackBar);
    onSubmitName(element: PeriodicElement, f: NgForm): void;
    onSubmitWeight(element: PeriodicElement, f: NgForm): void;
    onSubmitType(element: PeriodicElement, f: NgForm): void;
    onSubmitFantasyCounterparts(element: PeriodicElement, f: NgForm): void;
    goodJob(element: PeriodicElement): void;
    badJob(element: PeriodicElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PopoverEditMatTableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PopoverEditMatTableExample, "popover-edit-mat-table-example", never, {}, {}, never, never>;
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export declare class ExampleDataSource extends DataSource<PeriodicElement> {
    /** Stream of data that is provided to the table. */
    data: BehaviorSubject<PeriodicElement[]>;
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<PeriodicElement[]>;
    disconnect(): void;
}
