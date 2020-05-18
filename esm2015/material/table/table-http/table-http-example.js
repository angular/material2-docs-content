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
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isLoadingResults);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isRateLimitReached);
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
    const row_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(row_r13.number);
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
    const row_r14 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(row_r14.title);
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
    const row_r15 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(row_r15.state);
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
    const row_r16 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, row_r16.created_at));
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
let TableHttpExample = /** @class */ (() => {
    /**
     * \@title Table retrieving data through HTTP
     */
    class TableHttpExample {
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
    return TableHttpExample;
})();
export { TableHttpExample };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaHR0cC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtaHR0cC90YWJsZS1odHRwLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1odHRwL3RhYmxlLWh0dHAtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDekQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQy9DLE9BQU8sRUFBQyxLQUFLLEVBQWMsRUFBRSxJQUFJLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUMzRCxPQUFPLEVBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ0ZqRSw4QkFBb0Q7OztJQUNwRCwrQkFDRTtJQUFBLDJGQUNGO0lBQUEsaUJBQU07OztJQUxSLCtCQUVFO0lBQUEsd0ZBQXNDO0lBQ3RDLHdFQUNFO0lBRUosaUJBQU07OztJQUpTLGVBQXdCO0lBQXhCLDhDQUF3QjtJQUNHLGVBQTBCO0lBQTFCLGdEQUEwQjs7O0lBVzlELDhCQUFzQztJQUFBLGlCQUFDO0lBQUEsaUJBQUs7OztJQUM1Qyw4QkFBbUM7SUFBQSxZQUFjO0lBQUEsaUJBQUs7OztJQUFuQixlQUFjO0lBQWQsb0NBQWM7OztJQUtqRCw4QkFBc0M7SUFBQSxxQkFBSztJQUFBLGlCQUFL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QkFBbUI7Ozs7SUFDOUIsWUFBb0IsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7SUFBRyxDQUFDOzs7Ozs7O0lBRS9DLGFBQWEsQ0FBQyxJQUFZLEVBQUUsS0FBYSxFQUFFLElBQVk7O2NBQy9DLElBQUksR0FBRyxzQ0FBc0M7O2NBQzdDLFVBQVUsR0FDWixHQUFHLElBQUksbUNBQW1DLElBQUksVUFBVSxLQUFLLFNBQVMsSUFBSSxHQUFHLENBQUMsRUFBRTtRQUVwRixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFZLFVBQVUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FDRjs7Ozs7O0lBVGEsMENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0UGFnaW5hdG9yfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuaW1wb3J0IHtNYXRTb3J0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7bWVyZ2UsIE9ic2VydmFibGUsIG9mIGFzIG9ic2VydmFibGVPZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2NhdGNoRXJyb3IsIG1hcCwgc3RhcnRXaXRoLCBzd2l0Y2hNYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBAdGl0bGUgVGFibGUgcmV0cmlldmluZyBkYXRhIHRocm91Z2ggSFRUUFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1odHRwLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtaHR0cC1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLWh0dHAtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVIdHRwRXhhbXBsZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnY3JlYXRlZCcsICdzdGF0ZScsICdudW1iZXInLCAndGl0bGUnXTtcbiAgZXhhbXBsZURhdGFiYXNlOiBFeGFtcGxlSHR0cERhdGFiYXNlIHwgbnVsbDtcbiAgZGF0YTogR2l0aHViSXNzdWVbXSA9IFtdO1xuXG4gIHJlc3VsdHNMZW5ndGggPSAwO1xuICBpc0xvYWRpbmdSZXN1bHRzID0gdHJ1ZTtcbiAgaXNSYXRlTGltaXRSZWFjaGVkID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IpIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cENsaWVudDogSHR0cENsaWVudCkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5leGFtcGxlRGF0YWJhc2UgPSBuZXcgRXhhbXBsZUh0dHBEYXRhYmFzZSh0aGlzLl9odHRwQ2xpZW50KTtcblxuICAgIC8vIElmIHRoZSB1c2VyIGNoYW5nZXMgdGhlIHNvcnQgb3JkZXIsIHJlc2V0IGJhY2sgdG8gdGhlIGZpcnN0IHBhZ2UuXG4gICAgdGhpcy5zb3J0LnNvcnRDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMucGFnaW5hdG9yLnBhZ2VJbmRleCA9IDApO1xuXG4gICAgbWVyZ2UodGhpcy5zb3J0LnNvcnRDaGFuZ2UsIHRoaXMucGFnaW5hdG9yLnBhZ2UpXG4gICAgICAucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKHt9KSxcbiAgICAgICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZ1Jlc3VsdHMgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiB0aGlzLmV4YW1wbGVEYXRhYmFzZSEuZ2V0UmVwb0lzc3VlcyhcbiAgICAgICAgICAgIHRoaXMuc29ydC5hY3RpdmUsIHRoaXMuc29ydC5kaXJlY3Rpb24sIHRoaXMucGFnaW5hdG9yLnBhZ2VJbmRleCk7XG4gICAgICAgIH0pLFxuICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgLy8gRmxpcCBmbGFnIHRvIHNob3cgdGhhdCBsb2FkaW5nIGhhcyBmaW5pc2hlZC5cbiAgICAgICAgICB0aGlzLmlzTG9hZGluZ1Jlc3VsdHMgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmlzUmF0ZUxpbWl0UmVhY2hlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucmVzdWx0c0xlbmd0aCA9IGRhdGEudG90YWxfY291bnQ7XG5cbiAgICAgICAgICByZXR1cm4gZGF0YS5pdGVtcztcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nUmVzdWx0cyA9IGZhbHNlO1xuICAgICAgICAgIC8vIENhdGNoIGlmIHRoZSBHaXRIdWIgQVBJIGhhcyByZWFjaGVkIGl0cyByYXRlIGxpbWl0LiBSZXR1cm4gZW1wdHkgZGF0YS5cbiAgICAgICAgICB0aGlzLmlzUmF0ZUxpbWl0UmVhY2hlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIG9ic2VydmFibGVPZihbXSk7XG4gICAgICAgIH0pXG4gICAgICApLnN1YnNjcmliZShkYXRhID0+IHRoaXMuZGF0YSA9IGRhdGEpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2l0aHViQXBpIHtcbiAgaXRlbXM6IEdpdGh1Yklzc3VlW107XG4gIHRvdGFsX2NvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2l0aHViSXNzdWUge1xuICBjcmVhdGVkX2F0OiBzdHJpbmc7XG4gIG51bWJlcjogc3RyaW5nO1xuICBzdGF0ZTogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xufVxuXG4vKiogQW4gZXhhbXBsZSBkYXRhYmFzZSB0aGF0IHRoZSBkYXRhIHNvdXJjZSB1c2VzIHRvIHJldHJpZXZlIGRhdGEgZm9yIHRoZSB0YWJsZS4gKi9cbmV4cG9ydCBjbGFzcyBFeGFtcGxlSHR0cERhdGFiYXNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cENsaWVudDogSHR0cENsaWVudCkge31cblxuICBnZXRSZXBvSXNzdWVzKHNvcnQ6IHN0cmluZywgb3JkZXI6IHN0cmluZywgcGFnZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxHaXRodWJBcGk+IHtcbiAgICBjb25zdCBocmVmID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL2lzc3Vlcyc7XG4gICAgY29uc3QgcmVxdWVzdFVybCA9XG4gICAgICAgIGAke2hyZWZ9P3E9cmVwbzphbmd1bGFyL2NvbXBvbmVudHMmc29ydD0ke3NvcnR9Jm9yZGVyPSR7b3JkZXJ9JnBhZ2U9JHtwYWdlICsgMX1gO1xuXG4gICAgcmV0dXJuIHRoaXMuX2h0dHBDbGllbnQuZ2V0PEdpdGh1YkFwaT4ocmVxdWVzdFVybCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lciBtYXQtZWxldmF0aW9uLXo4XCI+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWxvYWRpbmctc2hhZGVcIlxuICAgICAgICpuZ0lmPVwiaXNMb2FkaW5nUmVzdWx0cyB8fCBpc1JhdGVMaW1pdFJlYWNoZWRcIj5cbiAgICA8bWF0LXNwaW5uZXIgKm5nSWY9XCJpc0xvYWRpbmdSZXN1bHRzXCI+PC9tYXQtc3Bpbm5lcj5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1yYXRlLWxpbWl0LXJlYWNoZWRcIiAqbmdJZj1cImlzUmF0ZUxpbWl0UmVhY2hlZFwiPlxuICAgICAgR2l0SHViJ3MgQVBJIHJhdGUgbGltaXQgaGFzIGJlZW4gcmVhY2hlZC4gSXQgd2lsbCBiZSByZXNldCBpbiBvbmUgbWludXRlLlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS10YWJsZS1jb250YWluZXJcIj5cblxuICAgIDx0YWJsZSBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVwiIGNsYXNzPVwiZXhhbXBsZS10YWJsZVwiXG4gICAgICAgICAgIG1hdFNvcnQgbWF0U29ydEFjdGl2ZT1cImNyZWF0ZWRcIiBtYXRTb3J0RGlzYWJsZUNsZWFyIG1hdFNvcnREaXJlY3Rpb249XCJkZXNjXCI+XG4gICAgICA8IS0tIE51bWJlciBDb2x1bW4gLS0+XG4gICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm51bWJlclwiPlxuICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiM8L3RoPlxuICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcm93XCI+e3tyb3cubnVtYmVyfX08L3RkPlxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDwhLS0gVGl0bGUgQ29sdW1uIC0tPlxuICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ0aXRsZVwiPlxuICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlRpdGxlPC90aD5cbiAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPnt7cm93LnRpdGxlfX08L3RkPlxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDwhLS0gU3RhdGUgQ29sdW1uIC0tPlxuICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzdGF0ZVwiPlxuICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlN0YXRlPC90aD5cbiAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPnt7cm93LnN0YXRlfX08L3RkPlxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDwhLS0gQ3JlYXRlZCBDb2x1bW4gLS0+XG4gICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImNyZWF0ZWRcIj5cbiAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXIgZGlzYWJsZUNsZWFyPlxuICAgICAgICAgIENyZWF0ZWRcbiAgICAgICAgPC90aD5cbiAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPnt7cm93LmNyZWF0ZWRfYXQgfCBkYXRlfX08L3RkPlxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gICAgICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuICAgIDwvdGFibGU+XG4gIDwvZGl2PlxuXG4gIDxtYXQtcGFnaW5hdG9yIFtsZW5ndGhdPVwicmVzdWx0c0xlbmd0aFwiIFtwYWdlU2l6ZV09XCIzMFwiPjwvbWF0LXBhZ2luYXRvcj5cbjwvZGl2PlxuIl19