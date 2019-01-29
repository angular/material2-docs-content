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
        ViewChild(MatPaginator),
        tslib_1.__metadata("design:type", MatPaginator)
    ], TableHttpExample.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort),
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
        var requestUrl = href + "?q=repo:angular/material2&sort=" + sort + "&order=" + order + "&page=" + (page + 1);
        return this.http.get(requestUrl);
    };
    return ExampleHttpDatabase;
}());
export { ExampleHttpDatabase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaHR0cC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3RhYmxlLWh0dHAvdGFibGUtaHR0cC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDaEQsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxZQUFZLEVBQUUsT0FBTyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFDLEtBQUssRUFBYyxFQUFFLElBQUksWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzNELE9BQU8sRUFBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRTs7R0FFRztBQU1IO0lBWUUsMEJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFYcEMscUJBQWdCLEdBQWEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUVyRSxTQUFJLEdBQWtCLEVBQUUsQ0FBQztRQUV6QixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO0lBS1ksQ0FBQztJQUV4QywwQ0FBZSxHQUFmO1FBQUEsaUJBNkJDO1FBNUJDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUQsb0VBQW9FO1FBQ3BFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7UUFFbkUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2FBQzdDLElBQUksQ0FDSCxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQ2IsU0FBUyxDQUFDO1lBQ1IsS0FBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUM3QixPQUFPLEtBQUksQ0FBQyxlQUFnQixDQUFDLGFBQWEsQ0FDeEMsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRSxDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ04sK0NBQStDO1lBQy9DLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDOUIsS0FBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztZQUNoQyxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFFdEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDOUIseUVBQXlFO1lBQ3pFLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7WUFDL0IsT0FBTyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQ0gsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFsQ3dCO1FBQXhCLFNBQVMsQ0FBQyxZQUFZLENBQUM7MENBQVksWUFBWTt1REFBQztJQUM3QjtRQUFuQixTQUFTLENBQUMsT0FBTyxDQUFDOzBDQUFPLE9BQU87a0RBQUM7SUFWdkIsZ0JBQWdCO1FBTDVCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFFOUIsa3lEQUFzQzs7U0FDdkMsQ0FBQztpREFhMEIsVUFBVTtPQVp6QixnQkFBZ0IsQ0E0QzVCO0lBQUQsdUJBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQTVDWSxnQkFBZ0I7QUEwRDdCLG9GQUFvRjtBQUNwRjtJQUNFLDZCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQztJQUV4QywyQ0FBYSxHQUFiLFVBQWMsSUFBWSxFQUFFLEtBQWEsRUFBRSxJQUFZO1FBQ3JELElBQU0sSUFBSSxHQUFHLHNDQUFzQyxDQUFDO1FBQ3BELElBQU0sVUFBVSxHQUNULElBQUksdUNBQWtDLElBQUksZUFBVSxLQUFLLGVBQVMsSUFBSSxHQUFHLENBQUMsQ0FBRSxDQUFDO1FBRXBGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVksVUFBVSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRQYWdpbmF0b3IsIE1hdFNvcnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7bWVyZ2UsIE9ic2VydmFibGUsIG9mIGFzIG9ic2VydmFibGVPZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2NhdGNoRXJyb3IsIG1hcCwgc3RhcnRXaXRoLCBzd2l0Y2hNYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBAdGl0bGUgVGFibGUgcmV0cmlldmluZyBkYXRhIHRocm91Z2ggSFRUUFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1odHRwLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtaHR0cC1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLWh0dHAtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVIdHRwRXhhbXBsZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnY3JlYXRlZCcsICdzdGF0ZScsICdudW1iZXInLCAndGl0bGUnXTtcbiAgZXhhbXBsZURhdGFiYXNlOiBFeGFtcGxlSHR0cERhdGFiYXNlIHwgbnVsbDtcbiAgZGF0YTogR2l0aHViSXNzdWVbXSA9IFtdO1xuXG4gIHJlc3VsdHNMZW5ndGggPSAwO1xuICBpc0xvYWRpbmdSZXN1bHRzID0gdHJ1ZTtcbiAgaXNSYXRlTGltaXRSZWFjaGVkID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IpIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmV4YW1wbGVEYXRhYmFzZSA9IG5ldyBFeGFtcGxlSHR0cERhdGFiYXNlKHRoaXMuaHR0cCk7XG5cbiAgICAvLyBJZiB0aGUgdXNlciBjaGFuZ2VzIHRoZSBzb3J0IG9yZGVyLCByZXNldCBiYWNrIHRvIHRoZSBmaXJzdCBwYWdlLlxuICAgIHRoaXMuc29ydC5zb3J0Q2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnBhZ2luYXRvci5wYWdlSW5kZXggPSAwKTtcblxuICAgIG1lcmdlKHRoaXMuc29ydC5zb3J0Q2hhbmdlLCB0aGlzLnBhZ2luYXRvci5wYWdlKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aCh7fSksXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmdSZXN1bHRzID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5leGFtcGxlRGF0YWJhc2UhLmdldFJlcG9Jc3N1ZXMoXG4gICAgICAgICAgICB0aGlzLnNvcnQuYWN0aXZlLCB0aGlzLnNvcnQuZGlyZWN0aW9uLCB0aGlzLnBhZ2luYXRvci5wYWdlSW5kZXgpO1xuICAgICAgICB9KSxcbiAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgIC8vIEZsaXAgZmxhZyB0byBzaG93IHRoYXQgbG9hZGluZyBoYXMgZmluaXNoZWQuXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmdSZXN1bHRzID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5pc1JhdGVMaW1pdFJlYWNoZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnJlc3VsdHNMZW5ndGggPSBkYXRhLnRvdGFsX2NvdW50O1xuXG4gICAgICAgICAgcmV0dXJuIGRhdGEuaXRlbXM7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZ1Jlc3VsdHMgPSBmYWxzZTtcbiAgICAgICAgICAvLyBDYXRjaCBpZiB0aGUgR2l0SHViIEFQSSBoYXMgcmVhY2hlZCBpdHMgcmF0ZSBsaW1pdC4gUmV0dXJuIGVtcHR5IGRhdGEuXG4gICAgICAgICAgdGhpcy5pc1JhdGVMaW1pdFJlYWNoZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlT2YoW10pO1xuICAgICAgICB9KVxuICAgICAgKS5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLmRhdGEgPSBkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdpdGh1YkFwaSB7XG4gIGl0ZW1zOiBHaXRodWJJc3N1ZVtdO1xuICB0b3RhbF9jb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdpdGh1Yklzc3VlIHtcbiAgY3JlYXRlZF9hdDogc3RyaW5nO1xuICBudW1iZXI6IHN0cmluZztcbiAgc3RhdGU6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbn1cblxuLyoqIEFuIGV4YW1wbGUgZGF0YWJhc2UgdGhhdCB0aGUgZGF0YSBzb3VyY2UgdXNlcyB0byByZXRyaWV2ZSBkYXRhIGZvciB0aGUgdGFibGUuICovXG5leHBvcnQgY2xhc3MgRXhhbXBsZUh0dHBEYXRhYmFzZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBnZXRSZXBvSXNzdWVzKHNvcnQ6IHN0cmluZywgb3JkZXI6IHN0cmluZywgcGFnZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxHaXRodWJBcGk+IHtcbiAgICBjb25zdCBocmVmID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL2lzc3Vlcyc7XG4gICAgY29uc3QgcmVxdWVzdFVybCA9XG4gICAgICAgIGAke2hyZWZ9P3E9cmVwbzphbmd1bGFyL21hdGVyaWFsMiZzb3J0PSR7c29ydH0mb3JkZXI9JHtvcmRlcn0mcGFnZT0ke3BhZ2UgKyAxfWA7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxHaXRodWJBcGk+KHJlcXVlc3RVcmwpO1xuICB9XG59XG4iXX0=