/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
/**
 * @record
 */
export function UserData() { }
if (false) {
    /** @type {?} */
    UserData.prototype.id;
    /** @type {?} */
    UserData.prototype.name;
    /** @type {?} */
    UserData.prototype.progress;
    /** @type {?} */
    UserData.prototype.color;
}
/**
 * Constants used to fill up our data base.
 * @type {?}
 */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
/** @type {?} */
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/**
 * \@title Data table with sorting, pagination, and filtering.
 */
export class TableOverviewExample {
    constructor() {
        this.displayedColumns = ['id', 'name', 'progress', 'color'];
        // Create 100 users
        /** @type {?} */
        const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    /**
     * @param {?} filterValue
     * @return {?}
     */
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
TableOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'table-overview-example',
                template: "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"progress\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.progress}}% </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n    </ng-container>\n\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"color\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Color </th>\n      <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>\n",
                styles: ["table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n"]
            }] }
];
/** @nocollapse */
TableOverviewExample.ctorParameters = () => [];
TableOverviewExample.propDecorators = {
    paginator: [{ type: ViewChild, args: [MatPaginator,] }],
    sort: [{ type: ViewChild, args: [MatSort,] }]
};
if (false) {
    /** @type {?} */
    TableOverviewExample.prototype.displayedColumns;
    /** @type {?} */
    TableOverviewExample.prototype.dataSource;
    /** @type {?} */
    TableOverviewExample.prototype.paginator;
    /** @type {?} */
    TableOverviewExample.prototype.sort;
}
/**
 * Builds and returns a new User.
 * @param {?} id
 * @return {?}
 */
function createNewUser(id) {
    /** @type {?} */
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy90YWJsZS1vdmVydmlldy90YWJsZS1vdmVydmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRTVFLDhCQUtDOzs7SUFKQyxzQkFBVzs7SUFDWCx3QkFBYTs7SUFDYiw0QkFBaUI7O0lBQ2pCLHlCQUFjOzs7Ozs7TUFJVixNQUFNLEdBQWEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRO0lBQ3ZGLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7O01BQy9ELEtBQUssR0FBYSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTTtJQUM3RSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVE7SUFDL0QsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDOzs7O0FBVW5FLE1BQU0sT0FBTyxvQkFBb0I7SUFPL0I7UUFOQSxxQkFBZ0IsR0FBYSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDOzs7Y0FRekQsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXZFLDZEQUE2RDtRQUM3RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsV0FBbUI7UUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTFELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7WUEvQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBRWxDLHE1Q0FBMEM7O2FBQzNDOzs7Ozt3QkFLRSxTQUFTLFNBQUMsWUFBWTttQkFDdEIsU0FBUyxTQUFDLE9BQU87Ozs7SUFKbEIsZ0RBQWlFOztJQUNqRSwwQ0FBeUM7O0lBRXpDLHlDQUFpRDs7SUFDakQsb0NBQWtDOzs7Ozs7O0FBeUJwQyxTQUFTLGFBQWEsQ0FBQyxFQUFVOztVQUN6QixJQUFJLEdBQ04sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRztRQUMzRCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRztJQUV6RSxPQUFPO1FBQ0wsRUFBRSxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDakIsSUFBSSxFQUFFLElBQUk7UUFDVixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFO1FBQ3BELEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDL0QsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRQYWdpbmF0b3IsIE1hdFNvcnQsIE1hdFRhYmxlRGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJEYXRhIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwcm9ncmVzczogc3RyaW5nO1xuICBjb2xvcjogc3RyaW5nO1xufVxuXG4vKiogQ29uc3RhbnRzIHVzZWQgdG8gZmlsbCB1cCBvdXIgZGF0YSBiYXNlLiAqL1xuY29uc3QgQ09MT1JTOiBzdHJpbmdbXSA9IFsnbWFyb29uJywgJ3JlZCcsICdvcmFuZ2UnLCAneWVsbG93JywgJ29saXZlJywgJ2dyZWVuJywgJ3B1cnBsZScsXG4gICdmdWNoc2lhJywgJ2xpbWUnLCAndGVhbCcsICdhcXVhJywgJ2JsdWUnLCAnbmF2eScsICdibGFjaycsICdncmF5J107XG5jb25zdCBOQU1FUzogc3RyaW5nW10gPSBbJ01haWEnLCAnQXNoZXInLCAnT2xpdmlhJywgJ0F0dGljdXMnLCAnQW1lbGlhJywgJ0phY2snLFxuICAnQ2hhcmxvdHRlJywgJ1RoZW9kb3JlJywgJ0lzbGEnLCAnT2xpdmVyJywgJ0lzYWJlbGxhJywgJ0phc3BlcicsXG4gICdDb3JhJywgJ0xldmknLCAnVmlvbGV0JywgJ0FydGh1cicsICdNaWEnLCAnVGhvbWFzJywgJ0VsaXphYmV0aCddO1xuXG4vKipcbiAqIEB0aXRsZSBEYXRhIHRhYmxlIHdpdGggc29ydGluZywgcGFnaW5hdGlvbiwgYW5kIGZpbHRlcmluZy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWyd0YWJsZS1vdmVydmlldy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlT3ZlcnZpZXdFeGFtcGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ2lkJywgJ25hbWUnLCAncHJvZ3Jlc3MnLCAnY29sb3InXTtcbiAgZGF0YVNvdXJjZTogTWF0VGFibGVEYXRhU291cmNlPFVzZXJEYXRhPjtcblxuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvcikgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgc29ydDogTWF0U29ydDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBDcmVhdGUgMTAwIHVzZXJzXG4gICAgY29uc3QgdXNlcnMgPSBBcnJheS5mcm9tKHtsZW5ndGg6IDEwMH0sIChfLCBrKSA9PiBjcmVhdGVOZXdVc2VyKGsgKyAxKSk7XG5cbiAgICAvLyBBc3NpZ24gdGhlIGRhdGEgdG8gdGhlIGRhdGEgc291cmNlIGZvciB0aGUgdGFibGUgdG8gcmVuZGVyXG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh1c2Vycyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gIH1cblxuICBhcHBseUZpbHRlcihmaWx0ZXJWYWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLmZpbHRlciA9IGZpbHRlclZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IuZmlyc3RQYWdlKCk7XG4gICAgfVxuICB9XG59XG5cbi8qKiBCdWlsZHMgYW5kIHJldHVybnMgYSBuZXcgVXNlci4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU5ld1VzZXIoaWQ6IG51bWJlcik6IFVzZXJEYXRhIHtcbiAgY29uc3QgbmFtZSA9XG4gICAgICBOQU1FU1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoTkFNRVMubGVuZ3RoIC0gMSkpXSArICcgJyArXG4gICAgICBOQU1FU1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoTkFNRVMubGVuZ3RoIC0gMSkpXS5jaGFyQXQoMCkgKyAnLic7XG5cbiAgcmV0dXJuIHtcbiAgICBpZDogaWQudG9TdHJpbmcoKSxcbiAgICBuYW1lOiBuYW1lLFxuICAgIHByb2dyZXNzOiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDApLnRvU3RyaW5nKCksXG4gICAgY29sb3I6IENPTE9SU1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoQ09MT1JTLmxlbmd0aCAtIDEpKV1cbiAgfTtcbn1cbiJdfQ==