/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
/**
 * \@title Table retrieving data through HTTP
 */
export class TableHttpExample {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
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
        this.exampleDatabase = new ExampleHttpDatabase(this.http);
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(startWith({}), switchMap(() => {
            this.isLoadingResults = true;
            return (/** @type {?} */ (this.exampleDatabase)).getRepoIssues(this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }), map(data => {
            // Flip flag to show that loading has finished.
            this.isLoadingResults = false;
            this.isRateLimitReached = false;
            this.resultsLength = data.total_count;
            return data.items;
        }), catchError(() => {
            this.isLoadingResults = false;
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            this.isRateLimitReached = true;
            return observableOf([]);
        })).subscribe(data => this.data = data);
    }
}
TableHttpExample.decorators = [
    { type: Component, args: [{
                selector: 'table-http-example',
                template: "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n       *ngIf=\"isLoadingResults || isRateLimitReached\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n    <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\n      GitHub's API rate limit has been reached. It will be reset in one minute.\n    </div>\n  </div>\n\n  <div class=\"example-table-container\">\n\n    <table mat-table [dataSource]=\"data\" class=\"example-table\"\n           matSort matSortActive=\"created\" matSortDisableClear matSortDirection=\"desc\">\n      <!-- Number Column -->\n      <ng-container matColumnDef=\"number\">\n        <th mat-header-cell *matHeaderCellDef>#</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.number}}</td>\n      </ng-container>\n\n      <!-- Title Column -->\n      <ng-container matColumnDef=\"title\">\n        <th mat-header-cell *matHeaderCellDef>Title</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.title}}</td>\n      </ng-container>\n\n      <!-- State Column -->\n      <ng-container matColumnDef=\"state\">\n        <th mat-header-cell *matHeaderCellDef>State</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.state}}</td>\n      </ng-container>\n\n      <!-- Created Column -->\n      <ng-container matColumnDef=\"created\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n          Created\n        </th>\n        <td mat-cell *matCellDef=\"let row\">{{row.created_at | date}}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n\n  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator>\n</div>\n",
                styles: ["/* Structure */\n.example-container {\n  position: relative;\n  min-height: 200px;\n}\n\n.example-table-container {\n  position: relative;\n  max-height: 400px;\n  overflow: auto;\n}\n\ntable {\n  width: 100%;\n}\n\n.example-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-rate-limit-reached {\n  color: #980000;\n  max-width: 360px;\n  text-align: center;\n}\n\n/* Column Widths */\n.mat-column-number,\n.mat-column-state {\n  max-width: 64px;\n}\n\n.mat-column-created {\n  max-width: 124px;\n}\n"]
            }] }
];
/** @nocollapse */
TableHttpExample.ctorParameters = () => [
    { type: HttpClient }
];
TableHttpExample.propDecorators = {
    paginator: [{ type: ViewChild, args: [MatPaginator,] }],
    sort: [{ type: ViewChild, args: [MatSort,] }]
};
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
    TableHttpExample.prototype.http;
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
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
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
        const requestUrl = `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;
        return this.http.get(requestUrl);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ExampleHttpDatabase.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaHR0cC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3RhYmxlLWh0dHAvdGFibGUtaHR0cC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDaEQsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxZQUFZLEVBQUUsT0FBTyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFDLEtBQUssRUFBYyxFQUFFLElBQUksWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzNELE9BQU8sRUFBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVVyRSxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBWTNCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFYcEMscUJBQWdCLEdBQWEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUVyRSxTQUFJLEdBQWtCLEVBQUUsQ0FBQztRQUV6QixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO0lBS1ksQ0FBQzs7OztJQUV4QyxlQUFlO1FBQ2IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUxRCxvRUFBb0U7UUFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRW5FLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzthQUM3QyxJQUFJLENBQ0gsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUNiLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDYixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQzdCLE9BQU8sbUJBQUEsSUFBSSxDQUFDLGVBQWUsRUFBQyxDQUFDLGFBQWEsQ0FDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRSxDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVCwrQ0FBK0M7WUFDL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUV0QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDOUIseUVBQXlFO1lBQ3pFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7WUFDL0IsT0FBTyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQ0gsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7OztZQWhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFFOUIsa3lEQUFzQzs7YUFDdkM7Ozs7WUFiTyxVQUFVOzs7d0JBdUJmLFNBQVMsU0FBQyxZQUFZO21CQUN0QixTQUFTLFNBQUMsT0FBTzs7OztJQVRsQiw0Q0FBcUU7O0lBQ3JFLDJDQUE0Qzs7SUFDNUMsZ0NBQXlCOztJQUV6Qix5Q0FBa0I7O0lBQ2xCLDRDQUF3Qjs7SUFDeEIsOENBQTJCOztJQUUzQixxQ0FBaUQ7O0lBQ2pELGdDQUFrQzs7Ozs7SUFFdEIsZ0NBQXdCOzs7OztBQWtDdEMsK0JBR0M7OztJQUZDLDBCQUFxQjs7SUFDckIsZ0NBQW9COzs7OztBQUd0QixpQ0FLQzs7O0lBSkMsaUNBQW1COztJQUNuQiw2QkFBZTs7SUFDZiw0QkFBYzs7SUFDZCw0QkFBYzs7Ozs7QUFJaEIsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUM5QixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQzs7Ozs7OztJQUV4QyxhQUFhLENBQUMsSUFBWSxFQUFFLEtBQWEsRUFBRSxJQUFZOztjQUMvQyxJQUFJLEdBQUcsc0NBQXNDOztjQUM3QyxVQUFVLEdBQ1osR0FBRyxJQUFJLGtDQUFrQyxJQUFJLFVBQVUsS0FBSyxTQUFTLElBQUksR0FBRyxDQUFDLEVBQUU7UUFFbkYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBWSxVQUFVLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0Y7Ozs7OztJQVRhLG1DQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtDb21wb25lbnQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFBhZ2luYXRvciwgTWF0U29ydH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHttZXJnZSwgT2JzZXJ2YWJsZSwgb2YgYXMgb2JzZXJ2YWJsZU9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y2F0Y2hFcnJvciwgbWFwLCBzdGFydFdpdGgsIHN3aXRjaE1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIEB0aXRsZSBUYWJsZSByZXRyaWV2aW5nIGRhdGEgdGhyb3VnaCBIVFRQXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLWh0dHAtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWyd0YWJsZS1odHRwLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtaHR0cC1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUh0dHBFeGFtcGxlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydjcmVhdGVkJywgJ3N0YXRlJywgJ251bWJlcicsICd0aXRsZSddO1xuICBleGFtcGxlRGF0YWJhc2U6IEV4YW1wbGVIdHRwRGF0YWJhc2UgfCBudWxsO1xuICBkYXRhOiBHaXRodWJJc3N1ZVtdID0gW107XG5cbiAgcmVzdWx0c0xlbmd0aCA9IDA7XG4gIGlzTG9hZGluZ1Jlc3VsdHMgPSB0cnVlO1xuICBpc1JhdGVMaW1pdFJlYWNoZWQgPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvcikgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgc29ydDogTWF0U29ydDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZXhhbXBsZURhdGFiYXNlID0gbmV3IEV4YW1wbGVIdHRwRGF0YWJhc2UodGhpcy5odHRwKTtcblxuICAgIC8vIElmIHRoZSB1c2VyIGNoYW5nZXMgdGhlIHNvcnQgb3JkZXIsIHJlc2V0IGJhY2sgdG8gdGhlIGZpcnN0IHBhZ2UuXG4gICAgdGhpcy5zb3J0LnNvcnRDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMucGFnaW5hdG9yLnBhZ2VJbmRleCA9IDApO1xuXG4gICAgbWVyZ2UodGhpcy5zb3J0LnNvcnRDaGFuZ2UsIHRoaXMucGFnaW5hdG9yLnBhZ2UpXG4gICAgICAucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKHt9KSxcbiAgICAgICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZ1Jlc3VsdHMgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiB0aGlzLmV4YW1wbGVEYXRhYmFzZSEuZ2V0UmVwb0lzc3VlcyhcbiAgICAgICAgICAgIHRoaXMuc29ydC5hY3RpdmUsIHRoaXMuc29ydC5kaXJlY3Rpb24sIHRoaXMucGFnaW5hdG9yLnBhZ2VJbmRleCk7XG4gICAgICAgIH0pLFxuICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgLy8gRmxpcCBmbGFnIHRvIHNob3cgdGhhdCBsb2FkaW5nIGhhcyBmaW5pc2hlZC5cbiAgICAgICAgICB0aGlzLmlzTG9hZGluZ1Jlc3VsdHMgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmlzUmF0ZUxpbWl0UmVhY2hlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucmVzdWx0c0xlbmd0aCA9IGRhdGEudG90YWxfY291bnQ7XG5cbiAgICAgICAgICByZXR1cm4gZGF0YS5pdGVtcztcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nUmVzdWx0cyA9IGZhbHNlO1xuICAgICAgICAgIC8vIENhdGNoIGlmIHRoZSBHaXRIdWIgQVBJIGhhcyByZWFjaGVkIGl0cyByYXRlIGxpbWl0LiBSZXR1cm4gZW1wdHkgZGF0YS5cbiAgICAgICAgICB0aGlzLmlzUmF0ZUxpbWl0UmVhY2hlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIG9ic2VydmFibGVPZihbXSk7XG4gICAgICAgIH0pXG4gICAgICApLnN1YnNjcmliZShkYXRhID0+IHRoaXMuZGF0YSA9IGRhdGEpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2l0aHViQXBpIHtcbiAgaXRlbXM6IEdpdGh1Yklzc3VlW107XG4gIHRvdGFsX2NvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2l0aHViSXNzdWUge1xuICBjcmVhdGVkX2F0OiBzdHJpbmc7XG4gIG51bWJlcjogc3RyaW5nO1xuICBzdGF0ZTogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xufVxuXG4vKiogQW4gZXhhbXBsZSBkYXRhYmFzZSB0aGF0IHRoZSBkYXRhIHNvdXJjZSB1c2VzIHRvIHJldHJpZXZlIGRhdGEgZm9yIHRoZSB0YWJsZS4gKi9cbmV4cG9ydCBjbGFzcyBFeGFtcGxlSHR0cERhdGFiYXNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGdldFJlcG9Jc3N1ZXMoc29ydDogc3RyaW5nLCBvcmRlcjogc3RyaW5nLCBwYWdlOiBudW1iZXIpOiBPYnNlcnZhYmxlPEdpdGh1YkFwaT4ge1xuICAgIGNvbnN0IGhyZWYgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvaXNzdWVzJztcbiAgICBjb25zdCByZXF1ZXN0VXJsID1cbiAgICAgICAgYCR7aHJlZn0/cT1yZXBvOmFuZ3VsYXIvbWF0ZXJpYWwyJnNvcnQ9JHtzb3J0fSZvcmRlcj0ke29yZGVyfSZwYWdlPSR7cGFnZSArIDF9YDtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEdpdGh1YkFwaT4ocmVxdWVzdFVybCk7XG4gIH1cbn1cbiJdfQ==