import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/paginator";
var _c0 = [5, 10, 25, 100];
/**
 * @title Paginator
 */
var PaginatorOverviewExample = /** @class */ (function () {
    function PaginatorOverviewExample() {
    }
    PaginatorOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'paginator-overview-example',
                    templateUrl: 'paginator-overview-example.html',
                    styleUrls: ['paginator-overview-example.css'],
                },] },
    ];
    PaginatorOverviewExample.ɵfac = function PaginatorOverviewExample_Factory(t) { return new (t || PaginatorOverviewExample)(); };
    PaginatorOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: PaginatorOverviewExample, selectors: [["paginator-overview-example"]], decls: 1, vars: 3, consts: [[3, "length", "pageSize", "pageSizeOptions"]], template: function PaginatorOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "mat-paginator", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("length", 100)("pageSize", 10)("pageSizeOptions", _c0);
        } }, directives: [i1.MatPaginator], styles: [""] });
    return PaginatorOverviewExample;
}());
export { PaginatorOverviewExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(PaginatorOverviewExample, [{
        type: Component,
        args: [{
                selector: 'paginator-overview-example',
                templateUrl: 'paginator-overview-example.html',
                styleUrls: ['paginator-overview-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1vdmVydmlldy9wYWdpbmF0b3Itb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9wYWdpbmF0b3IvcGFnaW5hdG9yLW92ZXJ2aWV3L3BhZ2luYXRvci1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7S0FLd0M7O2dCQUx2QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztvQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7aUJBQzlDOztvR0FDWSx3QkFBd0I7aUVBQXhCLHdCQUF3QjtZQ1ZyQyxtQ0FHZ0I7O1lBSEQsNEJBQWMsZ0JBQUEsd0JBQUE7O21DREE3QjtDQVV3QyxBQUx4QyxJQUt3QztTQUEzQix3QkFBd0I7bUNBQXhCLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFBhZ2luYXRvclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdpbmF0b3Itb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAncGFnaW5hdG9yLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydwYWdpbmF0b3Itb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9yT3ZlcnZpZXdFeGFtcGxlIHt9XG4iLCI8bWF0LXBhZ2luYXRvciBbbGVuZ3RoXT1cIjEwMFwiXG4gICAgICAgICAgICAgIFtwYWdlU2l6ZV09XCIxMFwiXG4gICAgICAgICAgICAgIFtwYWdlU2l6ZU9wdGlvbnNdPVwiWzUsIDEwLCAyNSwgMTAwXVwiPlxuPC9tYXQtcGFnaW5hdG9yPlxuIl19