import { DataSource } from '@angular/cdk/collections';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { BehaviorSubject, Observable } from 'rxjs';
export interface Person {
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
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer);
    onSubmit(person: Person, f: NgForm): void;
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export declare class ExampleDataSource extends DataSource<Person> {
    /** Stream of data that is provided to the table. */
    data: BehaviorSubject<Person[]>;
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Person[]>;
    disconnect(): void;
}
