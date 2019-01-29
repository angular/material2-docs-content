import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title Table showing each row context properties.
 */
var TableRowContextExample = /** @class */ (function () {
    function TableRowContextExample() {
        this.displayedColumns = ['$implicit', 'index', 'count', 'first', 'last', 'even', 'odd'];
        this.data = ['one', 'two', 'three', 'four', 'five'];
    }
    TableRowContextExample = tslib_1.__decorate([
        Component({
            selector: 'table-row-context-example',
            template: "<table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"$implicit\">\n    <th mat-header-cell *matHeaderCellDef> $implicit </th>\n    <td mat-cell *matCellDef=\"let data\"> {{data}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"index\">\n    <th mat-header-cell *matHeaderCellDef> index </th>\n    <td mat-cell *matCellDef=\"let index = index\"> {{index}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"count\">\n    <th mat-header-cell *matHeaderCellDef> count </th>\n    <td mat-cell *matCellDef=\"let count = count\"> {{count}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"first\">\n    <th mat-header-cell *matHeaderCellDef> first </th>\n    <td mat-cell *matCellDef=\"let first = first\"> {{first}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"last\">\n    <th mat-header-cell *matHeaderCellDef> last </th>\n    <td mat-cell *matCellDef=\"let last = last\"> {{last}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"even\">\n    <th mat-header-cell *matHeaderCellDef> even </th>\n    <td mat-cell *matCellDef=\"let even = even\"> {{even}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"odd\">\n    <th mat-header-cell *matHeaderCellDef> odd </th>\n    <td mat-cell *matCellDef=\"let odd = odd\"> {{odd}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
            styles: ["table {\n  width: 100%;\n}\n"]
        })
    ], TableRowContextExample);
    return TableRowContextExample;
}());
export { TableRowContextExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcm93LWNvbnRleHQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy90YWJsZS1yb3ctY29udGV4dC90YWJsZS1yb3ctY29udGV4dC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDOztHQUVHO0FBTUg7SUFMQTtRQU1FLHFCQUFnQixHQUFhLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0YsU0FBSSxHQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFIWSxzQkFBc0I7UUFMbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDJCQUEyQjtZQUVyQywwcERBQTZDOztTQUM5QyxDQUFDO09BQ1csc0JBQXNCLENBR2xDO0lBQUQsNkJBQUM7Q0FBQSxBQUhELElBR0M7U0FIWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRhYmxlIHNob3dpbmcgZWFjaCByb3cgY29udGV4dCBwcm9wZXJ0aWVzLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1yb3ctY29udGV4dC1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLXJvdy1jb250ZXh0LWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtcm93LWNvbnRleHQtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVSb3dDb250ZXh0RXhhbXBsZSB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWyckaW1wbGljaXQnLCAnaW5kZXgnLCAnY291bnQnLCAnZmlyc3QnLCAnbGFzdCcsICdldmVuJywgJ29kZCddO1xuICBkYXRhOiBzdHJpbmdbXSA9IFsnb25lJywgJ3R3bycsICd0aHJlZScsICdmb3VyJywgJ2ZpdmUnXTtcbn1cbiJdfQ==