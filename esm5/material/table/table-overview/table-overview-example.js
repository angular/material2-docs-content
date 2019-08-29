import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
/** Constants used to fill up our data base. */
var COLORS = [
    'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
    'aqua', 'blue', 'navy', 'black', 'gray'
];
var NAMES = [
    'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
    'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
/**
 * @title Data table with sorting, pagination, and filtering.
 */
var TableOverviewExample = /** @class */ (function () {
    function TableOverviewExample() {
        this.displayedColumns = ['id', 'name', 'progress', 'color'];
        // Create 100 users
        var users = Array.from({ length: 100 }, function (_, k) { return createNewUser(k + 1); });
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }
    TableOverviewExample.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    TableOverviewExample.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    TableOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'table-overview-example',
                    template: "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"progress\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.progress}}% </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n    </ng-container>\n\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"color\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Color </th>\n      <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>\n",
                    styles: ["table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n"]
                }] }
    ];
    /** @nocollapse */
    TableOverviewExample.ctorParameters = function () { return []; };
    TableOverviewExample.propDecorators = {
        paginator: [{ type: ViewChild, args: [MatPaginator, { static: true },] }],
        sort: [{ type: ViewChild, args: [MatSort, { static: true },] }]
    };
    return TableOverviewExample;
}());
export { TableOverviewExample };
/** Builds and returns a new User. */
function createNewUser(id) {
    var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1vdmVydmlldy90YWJsZS1vdmVydmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFTM0QsK0NBQStDO0FBQy9DLElBQU0sTUFBTSxHQUFhO0lBQ3ZCLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU07SUFDMUYsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU07Q0FDeEMsQ0FBQztBQUNGLElBQU0sS0FBSyxHQUFhO0lBQ3RCLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVE7SUFDakcsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxXQUFXO0NBQ3ZGLENBQUM7QUFFRjs7R0FFRztBQUNIO0lBWUU7UUFOQSxxQkFBZ0IsR0FBYSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBTy9ELG1CQUFtQjtRQUNuQixJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQXBCLENBQW9CLENBQUMsQ0FBQztRQUV4RSw2REFBNkQ7UUFDN0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFRCwwQ0FBVyxHQUFYLFVBQVksV0FBbUI7UUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTFELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDdkM7SUFDSCxDQUFDOztnQkEvQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBRWxDLHE1Q0FBMEM7O2lCQUMzQzs7Ozs7NEJBS0UsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7dUJBQ3RDLFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOztJQXNCcEMsMkJBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQTNCWSxvQkFBb0I7QUE2QmpDLHFDQUFxQztBQUNyQyxTQUFTLGFBQWEsQ0FBQyxFQUFVO0lBQy9CLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUc7UUFDcEUsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUUxRSxPQUFPO1FBQ0wsRUFBRSxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDakIsSUFBSSxFQUFFLElBQUk7UUFDVixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFO1FBQ3BELEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDL0QsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRQYWdpbmF0b3J9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQge01hdFNvcnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xuaW1wb3J0IHtNYXRUYWJsZURhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyRGF0YSB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcHJvZ3Jlc3M6IHN0cmluZztcbiAgY29sb3I6IHN0cmluZztcbn1cblxuLyoqIENvbnN0YW50cyB1c2VkIHRvIGZpbGwgdXAgb3VyIGRhdGEgYmFzZS4gKi9cbmNvbnN0IENPTE9SUzogc3RyaW5nW10gPSBbXG4gICdtYXJvb24nLCAncmVkJywgJ29yYW5nZScsICd5ZWxsb3cnLCAnb2xpdmUnLCAnZ3JlZW4nLCAncHVycGxlJywgJ2Z1Y2hzaWEnLCAnbGltZScsICd0ZWFsJyxcbiAgJ2FxdWEnLCAnYmx1ZScsICduYXZ5JywgJ2JsYWNrJywgJ2dyYXknXG5dO1xuY29uc3QgTkFNRVM6IHN0cmluZ1tdID0gW1xuICAnTWFpYScsICdBc2hlcicsICdPbGl2aWEnLCAnQXR0aWN1cycsICdBbWVsaWEnLCAnSmFjaycsICdDaGFybG90dGUnLCAnVGhlb2RvcmUnLCAnSXNsYScsICdPbGl2ZXInLFxuICAnSXNhYmVsbGEnLCAnSmFzcGVyJywgJ0NvcmEnLCAnTGV2aScsICdWaW9sZXQnLCAnQXJ0aHVyJywgJ01pYScsICdUaG9tYXMnLCAnRWxpemFiZXRoJ1xuXTtcblxuLyoqXG4gKiBAdGl0bGUgRGF0YSB0YWJsZSB3aXRoIHNvcnRpbmcsIHBhZ2luYXRpb24sIGFuZCBmaWx0ZXJpbmcuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZU92ZXJ2aWV3RXhhbXBsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydpZCcsICduYW1lJywgJ3Byb2dyZXNzJywgJ2NvbG9yJ107XG4gIGRhdGFTb3VyY2U6IE1hdFRhYmxlRGF0YVNvdXJjZTxVc2VyRGF0YT47XG5cbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IsIHtzdGF0aWM6IHRydWV9KSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgQFZpZXdDaGlsZChNYXRTb3J0LCB7c3RhdGljOiB0cnVlfSkgc29ydDogTWF0U29ydDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBDcmVhdGUgMTAwIHVzZXJzXG4gICAgY29uc3QgdXNlcnMgPSBBcnJheS5mcm9tKHtsZW5ndGg6IDEwMH0sIChfLCBrKSA9PiBjcmVhdGVOZXdVc2VyKGsgKyAxKSk7XG5cbiAgICAvLyBBc3NpZ24gdGhlIGRhdGEgdG8gdGhlIGRhdGEgc291cmNlIGZvciB0aGUgdGFibGUgdG8gcmVuZGVyXG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh1c2Vycyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gIH1cblxuICBhcHBseUZpbHRlcihmaWx0ZXJWYWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLmZpbHRlciA9IGZpbHRlclZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IuZmlyc3RQYWdlKCk7XG4gICAgfVxuICB9XG59XG5cbi8qKiBCdWlsZHMgYW5kIHJldHVybnMgYSBuZXcgVXNlci4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU5ld1VzZXIoaWQ6IG51bWJlcik6IFVzZXJEYXRhIHtcbiAgY29uc3QgbmFtZSA9IE5BTUVTW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChOQU1FUy5sZW5ndGggLSAxKSldICsgJyAnICtcbiAgICAgIE5BTUVTW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChOQU1FUy5sZW5ndGggLSAxKSldLmNoYXJBdCgwKSArICcuJztcblxuICByZXR1cm4ge1xuICAgIGlkOiBpZC50b1N0cmluZygpLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgcHJvZ3Jlc3M6IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMCkudG9TdHJpbmcoKSxcbiAgICBjb2xvcjogQ09MT1JTW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChDT0xPUlMubGVuZ3RoIC0gMSkpXVxuICB9O1xufVxuIl19