/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/table/table-http/table-http-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/table";
import * as i4 from "@angular/material/sort";
import * as i5 from "@angular/material/paginator";
import * as i6 from "@angular/material/progress-spinner";
function TableHttpExample_div_1_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner");
} }
function TableHttpExample_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1, " GitHub's API rate limit has been reached. It will be reset in one minute. ");
    i0.ɵɵelementEnd();
} }
function TableHttpExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtemplate(1, TableHttpExample_div_1_mat_spinner_1_Template, 1, 0, "mat-spinner", 15);
    i0.ɵɵtemplate(2, TableHttpExample_div_1_div_2_Template, 2, 0, "div", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r85 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r85.isLoadingResults);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r85.isRateLimitReached);
} }
function TableHttpExample_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, "#");
    i0.ɵɵelementEnd();
} }
function TableHttpExample_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r98 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(row_r98.number);
} }
function TableHttpExample_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, "Title");
    i0.ɵɵelementEnd();
} }
function TableHttpExample_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r99 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(row_r99.title);
} }
function TableHttpExample_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, "State");
    i0.ɵɵelementEnd();
} }
function TableHttpExample_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r100 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(row_r100.state);
} }
function TableHttpExample_th_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 20);
    i0.ɵɵtext(1, " Created ");
    i0.ɵɵelementEnd();
} }
function TableHttpExample_td_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r101 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, row_r101.created_at));
} }
function TableHttpExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 21);
} }
function TableHttpExample_tr_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 22);
} }
/**
 * \@title Table retrieving data through HTTP
 */
export class TableHttpExample {
    /**
     * @param {?} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this.displayedColumns = ['created', 'state', 'number', 'title'];
        this.data = [];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe((/**
         * @return {?}
         */
        () => this.paginator.pageIndex = 0));
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(startWith({}), switchMap((/**
         * @return {?}
         */
        () => {
            this.isLoadingResults = true;
            return (/** @type {?} */ (this.exampleDatabase)).getRepoIssues(this.sort.active, this.sort.direction, this.paginator.pageIndex);
        })), map((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            // Flip flag to show that loading has finished.
            this.isLoadingResults = false;
            this.isRateLimitReached = false;
            this.resultsLength = data.total_count;
            return data.items;
        })), catchError((/**
         * @return {?}
         */
        () => {
            this.isLoadingResults = false;
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            this.isRateLimitReached = true;
            return observableOf([]);
        }))).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => this.data = data));
    }
}
TableHttpExample.decorators = [
    { type: Component, args: [{
                selector: 'table-http-example',
                styleUrls: ['table-http-example.css'],
                templateUrl: 'table-http-example.html',
            },] },
];
/** @nocollapse */
TableHttpExample.ctorParameters = () => [
    { type: HttpClient }
];
TableHttpExample.propDecorators = {
    paginator: [{ type: ViewChild, args: [MatPaginator,] }],
    sort: [{ type: ViewChild, args: [MatSort,] }]
};
/** @nocollapse */ TableHttpExample.ɵfac = function TableHttpExample_Factory(t) { return new (t || TableHttpExample)(i0.ɵɵdirectiveInject(i1.HttpClient)); };
/** @nocollapse */ TableHttpExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableHttpExample, selectors: [["table-http-example"]], viewQuery: function TableHttpExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MatPaginator, true);
        i0.ɵɵviewQuery(MatSort, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sort = _t.first);
    } }, decls: 19, vars: 6, consts: [[1, "example-container", "mat-elevation-z8"], ["class", "example-loading-shade", 4, "ngIf"], [1, "example-table-container"], ["mat-table", "", "matSort", "", "matSortActive", "created", "matSortDisableClear", "", "matSortDirection", "desc", 1, "example-table", 3, "dataSource"], ["matColumnDef", "number"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["matColumnDef", "state"], ["matColumnDef", "created"], ["mat-header-cell", "", "mat-sort-header", "", "disableClear", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageSize"], [1, "example-loading-shade"], [4, "ngIf"], ["class", "example-rate-limit-reached", 4, "ngIf"], [1, "example-rate-limit-reached"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", "disableClear", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableHttpExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, TableHttpExample_div_1_Template, 3, 2, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "table", 3);
        i0.ɵɵelementContainerStart(4, 4);
        i0.ɵɵtemplate(5, TableHttpExample_th_5_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(6, TableHttpExample_td_6_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(7, 7);
        i0.ɵɵtemplate(8, TableHttpExample_th_8_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(9, TableHttpExample_td_9_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(10, 8);
        i0.ɵɵtemplate(11, TableHttpExample_th_11_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(12, TableHttpExample_td_12_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(13, 9);
        i0.ɵɵtemplate(14, TableHttpExample_th_14_Template, 2, 0, "th", 10);
        i0.ɵɵtemplate(15, TableHttpExample_td_15_Template, 3, 3, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(16, TableHttpExample_tr_16_Template, 1, 0, "tr", 11);
        i0.ɵɵtemplate(17, TableHttpExample_tr_17_Template, 1, 0, "tr", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(18, "mat-paginator", 13);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isLoadingResults || ctx.isRateLimitReached);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("dataSource", ctx.data);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("length", ctx.resultsLength)("pageSize", 30);
    } }, directives: [i2.NgIf, i3.MatTable, i4.MatSort, i3.MatColumnDef, i3.MatHeaderCellDef, i3.MatCellDef, i3.MatHeaderRowDef, i3.MatRowDef, i5.MatPaginator, i6.MatSpinner, i3.MatHeaderCell, i3.MatCell, i4.MatSortHeader, i3.MatHeaderRow, i3.MatRow], pipes: [i2.DatePipe], styles: [".example-container[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 200px;\n}\n\n.example-table-container[_ngcontent-%COMP%] {\n  position: relative;\n  max-height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-loading-shade[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-rate-limit-reached[_ngcontent-%COMP%] {\n  color: #980000;\n  max-width: 360px;\n  text-align: center;\n}\n\n\n.mat-column-number[_ngcontent-%COMP%], .mat-column-state[_ngcontent-%COMP%] {\n  max-width: 64px;\n}\n\n.mat-column-created[_ngcontent-%COMP%] {\n  max-width: 124px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableHttpExample, [{
        type: Component,
        args: [{
                selector: 'table-http-example',
                styleUrls: ['table-http-example.css'],
                templateUrl: 'table-http-example.html',
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, { paginator: [{
            type: ViewChild,
            args: [MatPaginator]
        }], sort: [{
            type: ViewChild,
            args: [MatSort]
        }] }); })();
if (false) {
    /** @type {?} */
    TableHttpExample.prototype.displayedColumns;
    /** @type {?} */
    TableHttpExample.prototype.exampleDatabase;
    /** @type {?} */
    TableHttpExample.prototype.data;
    /** @type {?} */
    TableHttpExample.prototype.resultsLength;
    /** @type {?} */
    TableHttpExample.prototype.isLoadingResults;
    /** @type {?} */
    TableHttpExample.prototype.isRateLimitReached;
    /** @type {?} */
    TableHttpExample.prototype.paginator;
    /** @type {?} */
    TableHttpExample.prototype.sort;
    /**
     * @type {?}
     * @private
     */
    TableHttpExample.prototype._httpClient;
}
/**
 * @record
 */
export function GithubApi() { }
if (false) {
    /** @type {?} */
    GithubApi.prototype.items;
    /** @type {?} */
    GithubApi.prototype.total_count;
}
/**
 * @record
 */
export function GithubIssue() { }
if (false) {
    /** @type {?} */
    GithubIssue.prototype.created_at;
    /** @type {?} */
    GithubIssue.prototype.number;
    /** @type {?} */
    GithubIssue.prototype.state;
    /** @type {?} */
    GithubIssue.prototype.title;
}
/**
 * An example database that the data source uses to retrieve data for the table.
 */
export class ExampleHttpDatabase {
    /**
     * @param {?} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    /**
     * @param {?} sort
     * @param {?} order
     * @param {?} page
     * @return {?}
     */
    getRepoIssues(sort, order, page) {
        /** @type {?} */
        const href = 'https://api.github.com/search/issues';
        /** @type {?} */
        const requestUrl = `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;
        return this._httpClient.get(requestUrl);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ExampleHttpDatabase.prototype._httpClient;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaHR0cC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtaHR0cC90YWJsZS1odHRwLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1odHRwL3RhYmxlLWh0dHAtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDekQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQy9DLE9BQU8sRUFBQyxLQUFLLEVBQWMsRUFBRSxJQUFJLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUMzRCxPQUFPLEVBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ0ZqRSw4QkFBb0Q7OztJQUNwRCwrQkFDRTtJQUFBLDJGQUNGO0lBQUEsaUJBQU07OztJQUxSLCtCQUVFO0lBQUEsd0ZBQXNDO0lBQ3RDLHdFQUNFO0lBRUosaUJBQU07OztJQUpTLGVBQXdCO0lBQXhCLCtDQUF3QjtJQUNHLGVBQTBCO0lBQTFCLGlEQUEwQjs7O0lBVzlELDhCQUFzQztJQUFBLGlCQUFDO0lBQUEsaUJBQUs7OztJQUM1Qyw4QkFBbUM7SUFBQSxZQUFjO0lBQUEsaUJBQUs7OztJQUFuQixlQUFjO0lBQWQsb0NBQWM7OztJQUtqRCw4QkFBc0M7SUFBQSxxQkFBSztJQUFBLGlCQUFL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V0FBVyxDQUFZO0lBQUcsQ0FBQzs7Ozs7OztJQUUvQyxhQUFhLENBQUMsSUFBWSxFQUFFLEtBQWEsRUFBRSxJQUFZOztjQUMvQyxJQUFJLEdBQUcsc0NBQXNDOztjQUM3QyxVQUFVLEdBQ1osR0FBRyxJQUFJLG1DQUFtQyxJQUFJLFVBQVUsS0FBSyxTQUFTLElBQUksR0FBRyxDQUFDLEVBQUU7UUFFcEYsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBWSxVQUFVLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBQ0Y7Ozs7OztJQVRhLDBDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtDb21wb25lbnQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFBhZ2luYXRvcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7TWF0U29ydH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5pbXBvcnQge21lcmdlLCBPYnNlcnZhYmxlLCBvZiBhcyBvYnNlcnZhYmxlT2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtjYXRjaEVycm9yLCBtYXAsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogQHRpdGxlIFRhYmxlIHJldHJpZXZpbmcgZGF0YSB0aHJvdWdoIEhUVFBcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtaHR0cC1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLWh0dHAtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS1odHRwLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlSHR0cEV4YW1wbGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ2NyZWF0ZWQnLCAnc3RhdGUnLCAnbnVtYmVyJywgJ3RpdGxlJ107XG4gIGV4YW1wbGVEYXRhYmFzZTogRXhhbXBsZUh0dHBEYXRhYmFzZSB8IG51bGw7XG4gIGRhdGE6IEdpdGh1Yklzc3VlW10gPSBbXTtcblxuICByZXN1bHRzTGVuZ3RoID0gMDtcbiAgaXNMb2FkaW5nUmVzdWx0cyA9IHRydWU7XG4gIGlzUmF0ZUxpbWl0UmVhY2hlZCA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yKSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBzb3J0OiBNYXRTb3J0O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZXhhbXBsZURhdGFiYXNlID0gbmV3IEV4YW1wbGVIdHRwRGF0YWJhc2UodGhpcy5faHR0cENsaWVudCk7XG5cbiAgICAvLyBJZiB0aGUgdXNlciBjaGFuZ2VzIHRoZSBzb3J0IG9yZGVyLCByZXNldCBiYWNrIHRvIHRoZSBmaXJzdCBwYWdlLlxuICAgIHRoaXMuc29ydC5zb3J0Q2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnBhZ2luYXRvci5wYWdlSW5kZXggPSAwKTtcblxuICAgIG1lcmdlKHRoaXMuc29ydC5zb3J0Q2hhbmdlLCB0aGlzLnBhZ2luYXRvci5wYWdlKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aCh7fSksXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmdSZXN1bHRzID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5leGFtcGxlRGF0YWJhc2UhLmdldFJlcG9Jc3N1ZXMoXG4gICAgICAgICAgICB0aGlzLnNvcnQuYWN0aXZlLCB0aGlzLnNvcnQuZGlyZWN0aW9uLCB0aGlzLnBhZ2luYXRvci5wYWdlSW5kZXgpO1xuICAgICAgICB9KSxcbiAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgIC8vIEZsaXAgZmxhZyB0byBzaG93IHRoYXQgbG9hZGluZyBoYXMgZmluaXNoZWQuXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmdSZXN1bHRzID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5pc1JhdGVMaW1pdFJlYWNoZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnJlc3VsdHNMZW5ndGggPSBkYXRhLnRvdGFsX2NvdW50O1xuXG4gICAgICAgICAgcmV0dXJuIGRhdGEuaXRlbXM7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZ1Jlc3VsdHMgPSBmYWxzZTtcbiAgICAgICAgICAvLyBDYXRjaCBpZiB0aGUgR2l0SHViIEFQSSBoYXMgcmVhY2hlZCBpdHMgcmF0ZSBsaW1pdC4gUmV0dXJuIGVtcHR5IGRhdGEuXG4gICAgICAgICAgdGhpcy5pc1JhdGVMaW1pdFJlYWNoZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlT2YoW10pO1xuICAgICAgICB9KVxuICAgICAgKS5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLmRhdGEgPSBkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdpdGh1YkFwaSB7XG4gIGl0ZW1zOiBHaXRodWJJc3N1ZVtdO1xuICB0b3RhbF9jb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdpdGh1Yklzc3VlIHtcbiAgY3JlYXRlZF9hdDogc3RyaW5nO1xuICBudW1iZXI6IHN0cmluZztcbiAgc3RhdGU6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbn1cblxuLyoqIEFuIGV4YW1wbGUgZGF0YWJhc2UgdGhhdCB0aGUgZGF0YSBzb3VyY2UgdXNlcyB0byByZXRyaWV2ZSBkYXRhIGZvciB0aGUgdGFibGUuICovXG5leHBvcnQgY2xhc3MgRXhhbXBsZUh0dHBEYXRhYmFzZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHt9XG5cbiAgZ2V0UmVwb0lzc3Vlcyhzb3J0OiBzdHJpbmcsIG9yZGVyOiBzdHJpbmcsIHBhZ2U6IG51bWJlcik6IE9ic2VydmFibGU8R2l0aHViQXBpPiB7XG4gICAgY29uc3QgaHJlZiA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC9pc3N1ZXMnO1xuICAgIGNvbnN0IHJlcXVlc3RVcmwgPVxuICAgICAgICBgJHtocmVmfT9xPXJlcG86YW5ndWxhci9jb21wb25lbnRzJnNvcnQ9JHtzb3J0fSZvcmRlcj0ke29yZGVyfSZwYWdlPSR7cGFnZSArIDF9YDtcblxuICAgIHJldHVybiB0aGlzLl9odHRwQ2xpZW50LmdldDxHaXRodWJBcGk+KHJlcXVlc3RVcmwpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXIgbWF0LWVsZXZhdGlvbi16OFwiPlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1sb2FkaW5nLXNoYWRlXCJcbiAgICAgICAqbmdJZj1cImlzTG9hZGluZ1Jlc3VsdHMgfHwgaXNSYXRlTGltaXRSZWFjaGVkXCI+XG4gICAgPG1hdC1zcGlubmVyICpuZ0lmPVwiaXNMb2FkaW5nUmVzdWx0c1wiPjwvbWF0LXNwaW5uZXI+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtcmF0ZS1saW1pdC1yZWFjaGVkXCIgKm5nSWY9XCJpc1JhdGVMaW1pdFJlYWNoZWRcIj5cbiAgICAgIEdpdEh1YidzIEFQSSByYXRlIGxpbWl0IGhhcyBiZWVuIHJlYWNoZWQuIEl0IHdpbGwgYmUgcmVzZXQgaW4gb25lIG1pbnV0ZS5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtdGFibGUtY29udGFpbmVyXCI+XG5cbiAgICA8dGFibGUgbWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFcIiBjbGFzcz1cImV4YW1wbGUtdGFibGVcIlxuICAgICAgICAgICBtYXRTb3J0IG1hdFNvcnRBY3RpdmU9XCJjcmVhdGVkXCIgbWF0U29ydERpc2FibGVDbGVhciBtYXRTb3J0RGlyZWN0aW9uPVwiZGVzY1wiPlxuICAgICAgPCEtLSBOdW1iZXIgQ29sdW1uIC0tPlxuICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJudW1iZXJcIj5cbiAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4jPC90aD5cbiAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPnt7cm93Lm51bWJlcn19PC90ZD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8IS0tIFRpdGxlIENvbHVtbiAtLT5cbiAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwidGl0bGVcIj5cbiAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5UaXRsZTwvdGg+XG4gICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj57e3Jvdy50aXRsZX19PC90ZD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8IS0tIFN0YXRlIENvbHVtbiAtLT5cbiAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic3RhdGVcIj5cbiAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5TdGF0ZTwvdGg+XG4gICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj57e3Jvdy5zdGF0ZX19PC90ZD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8IS0tIENyZWF0ZWQgQ29sdW1uIC0tPlxuICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJjcmVhdGVkXCI+XG4gICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyIGRpc2FibGVDbGVhcj5cbiAgICAgICAgICBDcmVhdGVkXG4gICAgICAgIDwvdGg+XG4gICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj57e3Jvdy5jcmVhdGVkX2F0IHwgZGF0ZX19PC90ZD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICAgICAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cbiAgICA8L3RhYmxlPlxuICA8L2Rpdj5cblxuICA8bWF0LXBhZ2luYXRvciBbbGVuZ3RoXT1cInJlc3VsdHNMZW5ndGhcIiBbcGFnZVNpemVdPVwiMzBcIj48L21hdC1wYWdpbmF0b3I+XG48L2Rpdj5cbiJdfQ==