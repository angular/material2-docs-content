import { ElementRef } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { MdPaginator, MdSort, SelectionModel } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
/**
 * @title Feature-rich data table
 */
export declare class TableOverviewExample {
    displayedColumns: string[];
    exampleDatabase: ExampleDatabase;
    selection: SelectionModel<string>;
    dataSource: ExampleDataSource | null;
    paginator: MdPaginator;
    sort: MdSort;
    filter: ElementRef;
    ngOnInit(): void;
    isAllSelected(): boolean;
    masterToggle(): void;
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
    private _paginator;
    private _sort;
    _filterChange: BehaviorSubject<string>;
    filter: string;
    filteredData: UserData[];
    renderedData: UserData[];
    constructor(_exampleDatabase: ExampleDatabase, _paginator: MdPaginator, _sort: MdSort);
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<UserData[]>;
    disconnect(): void;
    /** Returns a sorted copy of the database data. */
    sortData(data: UserData[]): UserData[];
}
