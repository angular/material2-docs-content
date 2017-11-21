import { AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/Observable';
/**
 * @title Table retrieving data through HTTP
 */
export declare class TableHttpExample implements AfterViewInit {
    private http;
    displayedColumns: string[];
    exampleDatabase: ExampleHttpDao | null;
    dataSource: MatTableDataSource<{}>;
    resultsLength: number;
    isLoadingResults: boolean;
    isRateLimitReached: boolean;
    paginator: MatPaginator;
    sort: MatSort;
    constructor(http: HttpClient);
    ngAfterViewInit(): void;
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
export declare class ExampleHttpDao {
    private http;
    constructor(http: HttpClient);
    getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi>;
}
