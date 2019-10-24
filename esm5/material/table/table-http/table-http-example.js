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
    var ctx_r83 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r83.isLoadingResults);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r83.isRateLimitReached);
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
    var row_r96 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(row_r96.number);
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
    var row_r97 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(row_r97.title);
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
    var row_r98 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(row_r98.state);
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
    var row_r99 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, row_r99.created_at));
} }
function TableHttpExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 21);
} }
function TableHttpExample_tr_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 22);
} }
/**
 * @title Table retrieving data through HTTP
 */
var TableHttpExample = /** @class */ (function () {
    function TableHttpExample(_httpClient) {
        this._httpClient = _httpClient;
        this.displayedColumns = ['created', 'state', 'number', 'title'];
        this.data = [];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
    }
    TableHttpExample.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(startWith({}), switchMap(function () {
            _this.isLoadingResults = true;
            return _this.exampleDatabase.getRepoIssues(_this.sort.active, _this.sort.direction, _this.paginator.pageIndex);
        }), map(function (data) {
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.isRateLimitReached = false;
            _this.resultsLength = data.total_count;
            return data.items;
        }), catchError(function () {
            _this.isLoadingResults = false;
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            _this.isRateLimitReached = true;
            return observableOf([]);
        })).subscribe(function (data) { return _this.data = data; });
    };
    TableHttpExample.decorators = [
        { type: Component, args: [{
                    selector: 'table-http-example',
                    styleUrls: ['table-http-example.css'],
                    templateUrl: 'table-http-example.html',
                },] },
    ];
    /** @nocollapse */
    TableHttpExample.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    TableHttpExample.propDecorators = {
        paginator: [{ type: ViewChild, args: [MatPaginator,] }],
        sort: [{ type: ViewChild, args: [MatSort,] }]
    };
    TableHttpExample.ɵfac = function TableHttpExample_Factory(t) { return new (t || TableHttpExample)(i0.ɵɵdirectiveInject(i1.HttpClient)); };
    TableHttpExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableHttpExample, selectors: [["table-http-example"]], viewQuery: function TableHttpExample_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(MatPaginator, true);
            i0.ɵɵviewQuery(MatSort, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh((_t = i0.ɵɵloadQuery())) && (ctx.paginator = _t.first);
            i0.ɵɵqueryRefresh((_t = i0.ɵɵloadQuery())) && (ctx.sort = _t.first);
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
}());
export { TableHttpExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(TableHttpExample, [{
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
        }] });
/** An example database that the data source uses to retrieve data for the table. */
var ExampleHttpDatabase = /** @class */ (function () {
    function ExampleHttpDatabase(_httpClient) {
        this._httpClient = _httpClient;
    }
    ExampleHttpDatabase.prototype.getRepoIssues = function (sort, order, page) {
        var href = 'https://api.github.com/search/issues';
        var requestUrl = href + "?q=repo:angular/components&sort=" + sort + "&order=" + order + "&page=" + (page + 1);
        return this._httpClient.get(requestUrl);
    };
    return ExampleHttpDatabase;
}());
export { ExampleHttpDatabase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaHR0cC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLWh0dHAvdGFibGUtaHR0cC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLWh0dHAvdGFibGUtaHR0cC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDekQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQy9DLE9BQU8sRUFBQyxLQUFLLEVBQWMsRUFBRSxJQUFJLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUMzRCxPQUFPLEVBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ0ZqRSw4QkFBb0Q7OztJQUNwRCwrQkFDRTtJQUFBLDJGQUNGO0lBQUEsaUJBQU07OztJQUxSLCtCQUVFO0lBQUEsd0ZBQXNDO0lBQ3RDLHdFQUNFO0lBRUosaUJBQU07OztJQUpTLGVBQXdCO0lBQXhCLCtDQUF3QjtJQUNHLGVBQTBCO0lBQTFCLGlEQUEwQjs7O0lBVzlELDhCQUFzQztJQUFBLGlCQUFDO0lBQUEsaUJBQUs7OztJQUM1Qyw4QkFBbUM7SUFBQSxZQUFjO0lBQUEsaUJBQUs7OztJQUFuQixlQUFjO0lBQWQsb0NBQWM7OztJQUtqRCw4QkFBc0M7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Q0FBWSxVQUFVLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtDb21wb25lbnQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFBhZ2luYXRvcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7TWF0U29ydH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5pbXBvcnQge21lcmdlLCBPYnNlcnZhYmxlLCBvZiBhcyBvYnNlcnZhYmxlT2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtjYXRjaEVycm9yLCBtYXAsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogQHRpdGxlIFRhYmxlIHJldHJpZXZpbmcgZGF0YSB0aHJvdWdoIEhUVFBcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtaHR0cC1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLWh0dHAtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS1odHRwLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlSHR0cEV4YW1wbGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ2NyZWF0ZWQnLCAnc3RhdGUnLCAnbnVtYmVyJywgJ3RpdGxlJ107XG4gIGV4YW1wbGVEYXRhYmFzZTogRXhhbXBsZUh0dHBEYXRhYmFzZSB8IG51bGw7XG4gIGRhdGE6IEdpdGh1Yklzc3VlW10gPSBbXTtcblxuICByZXN1bHRzTGVuZ3RoID0gMDtcbiAgaXNMb2FkaW5nUmVzdWx0cyA9IHRydWU7XG4gIGlzUmF0ZUxpbWl0UmVhY2hlZCA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yKSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBzb3J0OiBNYXRTb3J0O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZXhhbXBsZURhdGFiYXNlID0gbmV3IEV4YW1wbGVIdHRwRGF0YWJhc2UodGhpcy5faHR0cENsaWVudCk7XG5cbiAgICAvLyBJZiB0aGUgdXNlciBjaGFuZ2VzIHRoZSBzb3J0IG9yZGVyLCByZXNldCBiYWNrIHRvIHRoZSBmaXJzdCBwYWdlLlxuICAgIHRoaXMuc29ydC5zb3J0Q2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnBhZ2luYXRvci5wYWdlSW5kZXggPSAwKTtcblxuICAgIG1lcmdlKHRoaXMuc29ydC5zb3J0Q2hhbmdlLCB0aGlzLnBhZ2luYXRvci5wYWdlKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aCh7fSksXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmdSZXN1bHRzID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5leGFtcGxlRGF0YWJhc2UhLmdldFJlcG9Jc3N1ZXMoXG4gICAgICAgICAgICB0aGlzLnNvcnQuYWN0aXZlLCB0aGlzLnNvcnQuZGlyZWN0aW9uLCB0aGlzLnBhZ2luYXRvci5wYWdlSW5kZXgpO1xuICAgICAgICB9KSxcbiAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgIC8vIEZsaXAgZmxhZyB0byBzaG93IHRoYXQgbG9hZGluZyBoYXMgZmluaXNoZWQuXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmdSZXN1bHRzID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5pc1JhdGVMaW1pdFJlYWNoZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnJlc3VsdHNMZW5ndGggPSBkYXRhLnRvdGFsX2NvdW50O1xuXG4gICAgICAgICAgcmV0dXJuIGRhdGEuaXRlbXM7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZ1Jlc3VsdHMgPSBmYWxzZTtcbiAgICAgICAgICAvLyBDYXRjaCBpZiB0aGUgR2l0SHViIEFQSSBoYXMgcmVhY2hlZCBpdHMgcmF0ZSBsaW1pdC4gUmV0dXJuIGVtcHR5IGRhdGEuXG4gICAgICAgICAgdGhpcy5pc1JhdGVMaW1pdFJlYWNoZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlT2YoW10pO1xuICAgICAgICB9KVxuICAgICAgKS5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLmRhdGEgPSBkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdpdGh1YkFwaSB7XG4gIGl0ZW1zOiBHaXRodWJJc3N1ZVtdO1xuICB0b3RhbF9jb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdpdGh1Yklzc3VlIHtcbiAgY3JlYXRlZF9hdDogc3RyaW5nO1xuICBudW1iZXI6IHN0cmluZztcbiAgc3RhdGU6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbn1cblxuLyoqIEFuIGV4YW1wbGUgZGF0YWJhc2UgdGhhdCB0aGUgZGF0YSBzb3VyY2UgdXNlcyB0byByZXRyaWV2ZSBkYXRhIGZvciB0aGUgdGFibGUuICovXG5leHBvcnQgY2xhc3MgRXhhbXBsZUh0dHBEYXRhYmFzZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHt9XG5cbiAgZ2V0UmVwb0lzc3Vlcyhzb3J0OiBzdHJpbmcsIG9yZGVyOiBzdHJpbmcsIHBhZ2U6IG51bWJlcik6IE9ic2VydmFibGU8R2l0aHViQXBpPiB7XG4gICAgY29uc3QgaHJlZiA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC9pc3N1ZXMnO1xuICAgIGNvbnN0IHJlcXVlc3RVcmwgPVxuICAgICAgICBgJHtocmVmfT9xPXJlcG86YW5ndWxhci9jb21wb25lbnRzJnNvcnQ9JHtzb3J0fSZvcmRlcj0ke29yZGVyfSZwYWdlPSR7cGFnZSArIDF9YDtcblxuICAgIHJldHVybiB0aGlzLl9odHRwQ2xpZW50LmdldDxHaXRodWJBcGk+KHJlcXVlc3RVcmwpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXIgbWF0LWVsZXZhdGlvbi16OFwiPlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1sb2FkaW5nLXNoYWRlXCJcbiAgICAgICAqbmdJZj1cImlzTG9hZGluZ1Jlc3VsdHMgfHwgaXNSYXRlTGltaXRSZWFjaGVkXCI+XG4gICAgPG1hdC1zcGlubmVyICpuZ0lmPVwiaXNMb2FkaW5nUmVzdWx0c1wiPjwvbWF0LXNwaW5uZXI+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtcmF0ZS1saW1pdC1yZWFjaGVkXCIgKm5nSWY9XCJpc1JhdGVMaW1pdFJlYWNoZWRcIj5cbiAgICAgIEdpdEh1YidzIEFQSSByYXRlIGxpbWl0IGhhcyBiZWVuIHJlYWNoZWQuIEl0IHdpbGwgYmUgcmVzZXQgaW4gb25lIG1pbnV0ZS5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtdGFibGUtY29udGFpbmVyXCI+XG5cbiAgICA8dGFibGUgbWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFcIiBjbGFzcz1cImV4YW1wbGUtdGFibGVcIlxuICAgICAgICAgICBtYXRTb3J0IG1hdFNvcnRBY3RpdmU9XCJjcmVhdGVkXCIgbWF0U29ydERpc2FibGVDbGVhciBtYXRTb3J0RGlyZWN0aW9uPVwiZGVzY1wiPlxuICAgICAgPCEtLSBOdW1iZXIgQ29sdW1uIC0tPlxuICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJudW1iZXJcIj5cbiAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4jPC90aD5cbiAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPnt7cm93Lm51bWJlcn19PC90ZD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8IS0tIFRpdGxlIENvbHVtbiAtLT5cbiAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwidGl0bGVcIj5cbiAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5UaXRsZTwvdGg+XG4gICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj57e3Jvdy50aXRsZX19PC90ZD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8IS0tIFN0YXRlIENvbHVtbiAtLT5cbiAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic3RhdGVcIj5cbiAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5TdGF0ZTwvdGg+XG4gICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj57e3Jvdy5zdGF0ZX19PC90ZD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8IS0tIENyZWF0ZWQgQ29sdW1uIC0tPlxuICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJjcmVhdGVkXCI+XG4gICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyIGRpc2FibGVDbGVhcj5cbiAgICAgICAgICBDcmVhdGVkXG4gICAgICAgIDwvdGg+XG4gICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj57e3Jvdy5jcmVhdGVkX2F0IHwgZGF0ZX19PC90ZD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICAgICAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cbiAgICA8L3RhYmxlPlxuICA8L2Rpdj5cblxuICA8bWF0LXBhZ2luYXRvciBbbGVuZ3RoXT1cInJlc3VsdHNMZW5ndGhcIiBbcGFnZVNpemVdPVwiMzBcIj48L21hdC1wYWdpbmF0b3I+XG48L2Rpdj5cbiJdfQ==