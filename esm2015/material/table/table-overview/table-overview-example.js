/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
const COLORS = [
    'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
    'aqua', 'blue', 'navy', 'black', 'gray'
];
/** @type {?} */
const NAMES = [
    'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
    'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
/**
 * \@title Data table with sorting, pagination, and filtering.
 */
export class TableOverviewExample {
    constructor() {
        this.displayedColumns = ['id', 'name', 'progress', 'color'];
        // Create 100 users
        /** @type {?} */
        const users = Array.from({ length: 100 }, (/**
         * @param {?} _
         * @param {?} k
         * @return {?}
         */
        (_, k) => createNewUser(k + 1)));
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
    paginator: [{ type: ViewChild, args: [MatPaginator, { static: true },] }],
    sort: [{ type: ViewChild, args: [MatSort, { static: true },] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1vdmVydmlldy90YWJsZS1vdmVydmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDekQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQy9DLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDOzs7O0FBRTNELDhCQUtDOzs7SUFKQyxzQkFBVzs7SUFDWCx3QkFBYTs7SUFDYiw0QkFBaUI7O0lBQ2pCLHlCQUFjOzs7Ozs7TUFJVixNQUFNLEdBQWE7SUFDdkIsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTTtJQUMxRixNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTTtDQUN4Qzs7TUFDSyxLQUFLLEdBQWE7SUFDdEIsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUTtJQUNqRyxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFdBQVc7Q0FDdkY7Ozs7QUFVRCxNQUFNLE9BQU8sb0JBQW9CO0lBTy9CO1FBTkEscUJBQWdCLEdBQWEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQzs7O2NBUXpELEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQzs7Ozs7UUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUM7UUFFdkUsNkRBQTZEO1FBQzdELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxXQUFtQjtRQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFMUQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUN2QztJQUNILENBQUM7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFFbEMscTVDQUEwQzs7YUFDM0M7Ozs7O3dCQUtFLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDO21CQUN0QyxTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQzs7OztJQUpsQyxnREFBaUU7O0lBQ2pFLDBDQUF5Qzs7SUFFekMseUNBQWlFOztJQUNqRSxvQ0FBa0Q7Ozs7Ozs7QUF5QnBELFNBQVMsYUFBYSxDQUFDLEVBQVU7O1VBQ3pCLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHO1FBQ3BFLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHO0lBRXpFLE9BQU87UUFDTCxFQUFFLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRTtRQUNqQixJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUU7UUFDcEQsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMvRCxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFBhZ2luYXRvcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7TWF0U29ydH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5pbXBvcnQge01hdFRhYmxlRGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJEYXRhIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwcm9ncmVzczogc3RyaW5nO1xuICBjb2xvcjogc3RyaW5nO1xufVxuXG4vKiogQ29uc3RhbnRzIHVzZWQgdG8gZmlsbCB1cCBvdXIgZGF0YSBiYXNlLiAqL1xuY29uc3QgQ09MT1JTOiBzdHJpbmdbXSA9IFtcbiAgJ21hcm9vbicsICdyZWQnLCAnb3JhbmdlJywgJ3llbGxvdycsICdvbGl2ZScsICdncmVlbicsICdwdXJwbGUnLCAnZnVjaHNpYScsICdsaW1lJywgJ3RlYWwnLFxuICAnYXF1YScsICdibHVlJywgJ25hdnknLCAnYmxhY2snLCAnZ3JheSdcbl07XG5jb25zdCBOQU1FUzogc3RyaW5nW10gPSBbXG4gICdNYWlhJywgJ0FzaGVyJywgJ09saXZpYScsICdBdHRpY3VzJywgJ0FtZWxpYScsICdKYWNrJywgJ0NoYXJsb3R0ZScsICdUaGVvZG9yZScsICdJc2xhJywgJ09saXZlcicsXG4gICdJc2FiZWxsYScsICdKYXNwZXInLCAnQ29yYScsICdMZXZpJywgJ1Zpb2xldCcsICdBcnRodXInLCAnTWlhJywgJ1Rob21hcycsICdFbGl6YWJldGgnXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBEYXRhIHRhYmxlIHdpdGggc29ydGluZywgcGFnaW5hdGlvbiwgYW5kIGZpbHRlcmluZy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWyd0YWJsZS1vdmVydmlldy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlT3ZlcnZpZXdFeGFtcGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ2lkJywgJ25hbWUnLCAncHJvZ3Jlc3MnLCAnY29sb3InXTtcbiAgZGF0YVNvdXJjZTogTWF0VGFibGVEYXRhU291cmNlPFVzZXJEYXRhPjtcblxuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvciwge3N0YXRpYzogdHJ1ZX0pIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICBAVmlld0NoaWxkKE1hdFNvcnQsIHtzdGF0aWM6IHRydWV9KSBzb3J0OiBNYXRTb3J0O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIENyZWF0ZSAxMDAgdXNlcnNcbiAgICBjb25zdCB1c2VycyA9IEFycmF5LmZyb20oe2xlbmd0aDogMTAwfSwgKF8sIGspID0+IGNyZWF0ZU5ld1VzZXIoayArIDEpKTtcblxuICAgIC8vIEFzc2lnbiB0aGUgZGF0YSB0byB0aGUgZGF0YSBzb3VyY2UgZm9yIHRoZSB0YWJsZSB0byByZW5kZXJcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHVzZXJzKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgfVxuXG4gIGFwcGx5RmlsdGVyKGZpbHRlclZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyID0gZmlsdGVyVmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAodGhpcy5kYXRhU291cmNlLnBhZ2luYXRvcikge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvci5maXJzdFBhZ2UoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqIEJ1aWxkcyBhbmQgcmV0dXJucyBhIG5ldyBVc2VyLiAqL1xuZnVuY3Rpb24gY3JlYXRlTmV3VXNlcihpZDogbnVtYmVyKTogVXNlckRhdGEge1xuICBjb25zdCBuYW1lID0gTkFNRVNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKE5BTUVTLmxlbmd0aCAtIDEpKV0gKyAnICcgK1xuICAgICAgTkFNRVNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKE5BTUVTLmxlbmd0aCAtIDEpKV0uY2hhckF0KDApICsgJy4nO1xuXG4gIHJldHVybiB7XG4gICAgaWQ6IGlkLnRvU3RyaW5nKCksXG4gICAgbmFtZTogbmFtZSxcbiAgICBwcm9ncmVzczogTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwKS50b1N0cmluZygpLFxuICAgIGNvbG9yOiBDT0xPUlNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKENPTE9SUy5sZW5ndGggLSAxKSldXG4gIH07XG59XG4iXX0=