import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
/**
 * @title Table retrieving data through HTTP
 */
var TableHttpExample = /** @class */ (function () {
    function TableHttpExample(http) {
        this.http = http;
        this.displayedColumns = ['created', 'state', 'number', 'title'];
        this.data = [];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
    }
    TableHttpExample.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.exampleDatabase = new ExampleHttpDatabase(this.http);
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
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: false }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], TableHttpExample.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: false }),
        tslib_1.__metadata("design:type", MatSort)
    ], TableHttpExample.prototype, "sort", void 0);
    TableHttpExample = tslib_1.__decorate([
        Component({
            selector: 'table-http-example',
            template: "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n       *ngIf=\"isLoadingResults || isRateLimitReached\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n    <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\n      GitHub's API rate limit has been reached. It will be reset in one minute.\n    </div>\n  </div>\n\n  <div class=\"example-table-container\">\n\n    <table mat-table [dataSource]=\"data\" class=\"example-table\"\n           matSort matSortActive=\"created\" matSortDisableClear matSortDirection=\"desc\">\n      <!-- Number Column -->\n      <ng-container matColumnDef=\"number\">\n        <th mat-header-cell *matHeaderCellDef>#</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.number}}</td>\n      </ng-container>\n\n      <!-- Title Column -->\n      <ng-container matColumnDef=\"title\">\n        <th mat-header-cell *matHeaderCellDef>Title</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.title}}</td>\n      </ng-container>\n\n      <!-- State Column -->\n      <ng-container matColumnDef=\"state\">\n        <th mat-header-cell *matHeaderCellDef>State</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.state}}</td>\n      </ng-container>\n\n      <!-- Created Column -->\n      <ng-container matColumnDef=\"created\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n          Created\n        </th>\n        <td mat-cell *matCellDef=\"let row\">{{row.created_at | date}}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n\n  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator>\n</div>\n",
            styles: ["/* Structure */\n.example-container {\n  position: relative;\n  min-height: 200px;\n}\n\n.example-table-container {\n  position: relative;\n  max-height: 400px;\n  overflow: auto;\n}\n\ntable {\n  width: 100%;\n}\n\n.example-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-rate-limit-reached {\n  color: #980000;\n  max-width: 360px;\n  text-align: center;\n}\n\n/* Column Widths */\n.mat-column-number,\n.mat-column-state {\n  max-width: 64px;\n}\n\n.mat-column-created {\n  max-width: 124px;\n}\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], TableHttpExample);
    return TableHttpExample;
}());
export { TableHttpExample };
/** An example database that the data source uses to retrieve data for the table. */
var ExampleHttpDatabase = /** @class */ (function () {
    function ExampleHttpDatabase(http) {
        this.http = http;
    }
    ExampleHttpDatabase.prototype.getRepoIssues = function (sort, order, page) {
        var href = 'https://api.github.com/search/issues';
        var requestUrl = href + "?q=repo:angular/components&sort=" + sort + "&order=" + order + "&page=" + (page + 1);
        return this.http.get(requestUrl);
    };
    return ExampleHttpDatabase;
}());
export { ExampleHttpDatabase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaHR0cC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3RhYmxlLWh0dHAvdGFibGUtaHR0cC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDaEQsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxZQUFZLEVBQUUsT0FBTyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFDLEtBQUssRUFBYyxFQUFFLElBQUksWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzNELE9BQU8sRUFBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRTs7R0FFRztBQU1IO0lBWUUsMEJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFYcEMscUJBQWdCLEdBQWEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUVyRSxTQUFJLEdBQWtCLEVBQUUsQ0FBQztRQUV6QixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO0lBS1ksQ0FBQztJQUV4QywwQ0FBZSxHQUFmO1FBQUEsaUJBNkJDO1FBNUJDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUQsb0VBQW9FO1FBQ3BFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7UUFFbkUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2FBQzdDLElBQUksQ0FDSCxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQ2IsU0FBUyxDQUFDO1lBQ1IsS0FBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUM3QixPQUFPLEtBQUksQ0FBQyxlQUFnQixDQUFDLGFBQWEsQ0FDeEMsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRSxDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ04sK0NBQStDO1lBQy9DLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDOUIsS0FBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztZQUNoQyxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFFdEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDOUIseUVBQXlFO1lBQ3pFLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7WUFDL0IsT0FBTyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQ0gsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFsQ3lDO1FBQXpDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7MENBQVksWUFBWTt1REFBQztJQUM3QjtRQUFwQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDOzBDQUFPLE9BQU87a0RBQUM7SUFWeEMsZ0JBQWdCO1FBTDVCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFFOUIsa3lEQUFzQzs7U0FDdkMsQ0FBQztpREFhMEIsVUFBVTtPQVp6QixnQkFBZ0IsQ0E0QzVCO0lBQUQsdUJBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQTVDWSxnQkFBZ0I7QUEwRDdCLG9GQUFvRjtBQUNwRjtJQUNFLDZCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQztJQUV4QywyQ0FBYSxHQUFiLFVBQWMsSUFBWSxFQUFFLEtBQWEsRUFBRSxJQUFZO1FBQ3JELElBQU0sSUFBSSxHQUFHLHNDQUFzQyxDQUFDO1FBQ3BELElBQU0sVUFBVSxHQUNULElBQUksd0NBQW1DLElBQUksZUFBVSxLQUFLLGVBQVMsSUFBSSxHQUFHLENBQUMsQ0FBRSxDQUFDO1FBRXJGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVksVUFBVSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRQYWdpbmF0b3IsIE1hdFNvcnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7bWVyZ2UsIE9ic2VydmFibGUsIG9mIGFzIG9ic2VydmFibGVPZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2NhdGNoRXJyb3IsIG1hcCwgc3RhcnRXaXRoLCBzd2l0Y2hNYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBAdGl0bGUgVGFibGUgcmV0cmlldmluZyBkYXRhIHRocm91Z2ggSFRUUFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1odHRwLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtaHR0cC1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLWh0dHAtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVIdHRwRXhhbXBsZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnY3JlYXRlZCcsICdzdGF0ZScsICdudW1iZXInLCAndGl0bGUnXTtcbiAgZXhhbXBsZURhdGFiYXNlOiBFeGFtcGxlSHR0cERhdGFiYXNlIHwgbnVsbDtcbiAgZGF0YTogR2l0aHViSXNzdWVbXSA9IFtdO1xuXG4gIHJlc3VsdHNMZW5ndGggPSAwO1xuICBpc0xvYWRpbmdSZXN1bHRzID0gdHJ1ZTtcbiAgaXNSYXRlTGltaXRSZWFjaGVkID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IsIHtzdGF0aWM6IGZhbHNlfSkgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIEBWaWV3Q2hpbGQoTWF0U29ydCwge3N0YXRpYzogZmFsc2V9KSBzb3J0OiBNYXRTb3J0O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5leGFtcGxlRGF0YWJhc2UgPSBuZXcgRXhhbXBsZUh0dHBEYXRhYmFzZSh0aGlzLmh0dHApO1xuXG4gICAgLy8gSWYgdGhlIHVzZXIgY2hhbmdlcyB0aGUgc29ydCBvcmRlciwgcmVzZXQgYmFjayB0byB0aGUgZmlyc3QgcGFnZS5cbiAgICB0aGlzLnNvcnQuc29ydENoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5wYWdpbmF0b3IucGFnZUluZGV4ID0gMCk7XG5cbiAgICBtZXJnZSh0aGlzLnNvcnQuc29ydENoYW5nZSwgdGhpcy5wYWdpbmF0b3IucGFnZSlcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgoe30pLFxuICAgICAgICBzd2l0Y2hNYXAoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nUmVzdWx0cyA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZXhhbXBsZURhdGFiYXNlIS5nZXRSZXBvSXNzdWVzKFxuICAgICAgICAgICAgdGhpcy5zb3J0LmFjdGl2ZSwgdGhpcy5zb3J0LmRpcmVjdGlvbiwgdGhpcy5wYWdpbmF0b3IucGFnZUluZGV4KTtcbiAgICAgICAgfSksXG4gICAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgICAvLyBGbGlwIGZsYWcgdG8gc2hvdyB0aGF0IGxvYWRpbmcgaGFzIGZpbmlzaGVkLlxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nUmVzdWx0cyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuaXNSYXRlTGltaXRSZWFjaGVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5yZXN1bHRzTGVuZ3RoID0gZGF0YS50b3RhbF9jb3VudDtcblxuICAgICAgICAgIHJldHVybiBkYXRhLml0ZW1zO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmdSZXN1bHRzID0gZmFsc2U7XG4gICAgICAgICAgLy8gQ2F0Y2ggaWYgdGhlIEdpdEh1YiBBUEkgaGFzIHJlYWNoZWQgaXRzIHJhdGUgbGltaXQuIFJldHVybiBlbXB0eSBkYXRhLlxuICAgICAgICAgIHRoaXMuaXNSYXRlTGltaXRSZWFjaGVkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKFtdKTtcbiAgICAgICAgfSlcbiAgICAgICkuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5kYXRhID0gZGF0YSk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHaXRodWJBcGkge1xuICBpdGVtczogR2l0aHViSXNzdWVbXTtcbiAgdG90YWxfY291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHaXRodWJJc3N1ZSB7XG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcbiAgbnVtYmVyOiBzdHJpbmc7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbi8qKiBBbiBleGFtcGxlIGRhdGFiYXNlIHRoYXQgdGhlIGRhdGEgc291cmNlIHVzZXMgdG8gcmV0cmlldmUgZGF0YSBmb3IgdGhlIHRhYmxlLiAqL1xuZXhwb3J0IGNsYXNzIEV4YW1wbGVIdHRwRGF0YWJhc2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgZ2V0UmVwb0lzc3Vlcyhzb3J0OiBzdHJpbmcsIG9yZGVyOiBzdHJpbmcsIHBhZ2U6IG51bWJlcik6IE9ic2VydmFibGU8R2l0aHViQXBpPiB7XG4gICAgY29uc3QgaHJlZiA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC9pc3N1ZXMnO1xuICAgIGNvbnN0IHJlcXVlc3RVcmwgPVxuICAgICAgICBgJHtocmVmfT9xPXJlcG86YW5ndWxhci9jb21wb25lbnRzJnNvcnQ9JHtzb3J0fSZvcmRlcj0ke29yZGVyfSZwYWdlPSR7cGFnZSArIDF9YDtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEdpdGh1YkFwaT4ocmVxdWVzdFVybCk7XG4gIH1cbn1cbiJdfQ==