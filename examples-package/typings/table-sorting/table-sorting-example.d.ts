import { DataSource } from '@angular/cdk';
import { MdSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
export declare class TableSortingExample {
    displayedColumns: string[];
    exampleDatabase: ExampleDatabase;
    dataSource: ExampleDataSource | null;
    sort: MdSort;
    ngOnInit(): void;
}
export interface UserData {
    id: string;
    name: string;
    progress: string;
    color: string;
}
/** An example database that the data source uses to retrieve data for the table. */
export declare class ExampleDatabase {
    /** Stream that emits whenever the data has been modified. */
    dataChange: BehaviorSubject<UserData[]>;
    readonly data: UserData[];
    constructor();
    /** Adds a new user to the database. */
    addUser(): void;
    /** Builds and returns a new User. */
    private createNewUser();
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export declare class ExampleDataSource extends DataSource<any> {
    private _exampleDatabase;
    private _sort;
    constructor(_exampleDatabase: ExampleDatabase, _sort: MdSort);
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<UserData[]>;
    disconnect(): void;
    /** Returns a sorted copy of the database data. */
    getSortedData(): UserData[];
}
