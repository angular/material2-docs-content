import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
/**
 * @title Table retrieving data through HTTP
 */
export declare class TableHttpExample implements OnInit {
    private _httpClient;
    displayedColumns: string[];
    exampleDatabase: ExampleHttpDataSource | null;
    dataSource: ExampleDataSource | null;
    paginator: MatPaginator;
    sort: MatSort;
    constructor(_httpClient: HttpClient);
    ngOnInit(): void;
}
export interface GithubApi {
    items: GithubIssue[];
    total_count: number;
}
export interface GithubIssue {
    created_at: string;
    number: string;
    state: string;
    title: string;
}
/** An example database that the data source uses to retrieve data for the table. */
export declare class ExampleHttpDataSource {
    private _httpClient;
    constructor(_httpClient: HttpClient);
    getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi>;
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleHttpDao. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export declare class ExampleDataSource extends DataSource<GithubIssue> {
    private exampleDatabase;
    private paginator;
    private sort;
    resultsLength: number;
    isLoadingResults: boolean;
    isRateLimitReached: boolean;
    constructor(exampleDatabase: ExampleHttpDataSource, paginator: MatPaginator, sort: MatSort);
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<GithubIssue[]>;
    disconnect(): void;
}
