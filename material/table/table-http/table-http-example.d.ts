import { HttpClient } from '@angular/common/http';
import { AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * @title Table retrieving data through HTTP
 */
export declare class TableHttpExample implements AfterViewInit {
    private _httpClient;
    displayedColumns: string[];
    exampleDatabase: ExampleHttpDatabase | null;
    filteredAndPagedIssues: Observable<GithubIssue[]>;
    resultsLength: number;
    isLoadingResults: boolean;
    isRateLimitReached: boolean;
    paginator: MatPaginator;
    sort: MatSort;
    constructor(_httpClient: HttpClient);
    ngAfterViewInit(): void;
    resetPaging(): void;
    static ɵfac: i0.ɵɵFactoryDef<TableHttpExample, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TableHttpExample, "table-http-example", never, {}, {}, never, never>;
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
export declare class ExampleHttpDatabase {
    private _httpClient;
    constructor(_httpClient: HttpClient);
    getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi>;
}
