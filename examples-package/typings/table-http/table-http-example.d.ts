import { Http, Response } from '@angular/http';
import { DataSource } from '@angular/cdk/table';
import { MdPaginator, MdSort } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
export declare class TableHttpExample {
    displayedColumns: string[];
    exampleDatabase: ExampleHttpDao | null;
    dataSource: ExampleDataSource | null;
    paginator: MdPaginator;
    sort: MdSort;
    constructor(http: Http);
    ngOnInit(): void;
}
export interface GithubIssue {
    number: string;
    state: string;
    title: string;
    created: Date;
}
/** An example database that the data source uses to retrieve data for the table. */
export declare class ExampleHttpDao {
    private http;
    constructor(http: Http);
    getRepoIssues(sort: string, order: string, page: number): Observable<Response>;
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleHttpDao. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export declare class ExampleDataSource extends DataSource<GithubIssue> {
    private _exampleDatabase;
    private _sort;
    private _paginator;
    resultsLength: number;
    isLoadingResults: boolean;
    isRateLimitReached: boolean;
    constructor(_exampleDatabase: ExampleHttpDao, _sort: MdSort, _paginator: MdPaginator);
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<GithubIssue[]>;
    disconnect(): void;
    private readGithubResult(result);
}
