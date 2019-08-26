import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title Configurable paginator
 */
var PaginatorConfigurableExample = /** @class */ (function () {
    function PaginatorConfigurableExample() {
        // MatPaginator Inputs
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    PaginatorConfigurableExample.prototype.setPageSizeOptions = function (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
    };
    PaginatorConfigurableExample = tslib_1.__decorate([
        Component({
            selector: 'paginator-configurable-example',
            template: "<mat-form-field>\n  List length:\n  <input matInput [(ngModel)]=\"length\">\n</mat-form-field>\n\n<mat-form-field>\n  Page size:\n  <input matInput [(ngModel)]=\"pageSize\">\n</mat-form-field>\n<mat-form-field>\n  Page size options:\n  <input matInput\n         [ngModel]=\"pageSizeOptions\"\n         (ngModelChange)=\"setPageSizeOptions($event)\">\n</mat-form-field>\n\n<mat-paginator [length]=\"length\"\n              [pageSize]=\"pageSize\"\n              [pageSizeOptions]=\"pageSizeOptions\"\n              (page)=\"pageEvent = $event\">\n</mat-paginator>\n\n<div *ngIf=\"pageEvent\">\n  <h5>Page Change Event Properties</h5>\n  <div>List length: {{pageEvent.length}}</div>\n  <div>Page size: {{pageEvent.pageSize}}</div>\n  <div>Page index: {{pageEvent.pageIndex}}</div>\n</div>\n",
            styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
        })
    ], PaginatorConfigurableExample);
    return PaginatorConfigurableExample;
}());
export { PaginatorConfigurableExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3BhZ2luYXRvci9wYWdpbmF0b3ItY29uZmlndXJhYmxlL3BhZ2luYXRvci1jb25maWd1cmFibGUtZXhhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd4Qzs7R0FFRztBQU1IO0lBTEE7UUFNRSxzQkFBc0I7UUFDdEIsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUNiLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxvQkFBZSxHQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFRL0MsQ0FBQztJQUhDLHlEQUFrQixHQUFsQixVQUFtQix1QkFBK0I7UUFDaEQsSUFBSSxDQUFDLGVBQWUsR0FBRyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsQ0FBQyxHQUFHLEVBQUosQ0FBSSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQVhVLDRCQUE0QjtRQUx4QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0NBQWdDO1lBQzFDLGd5QkFBa0Q7O1NBRW5ELENBQUM7T0FDVyw0QkFBNEIsQ0FZeEM7SUFBRCxtQ0FBQztDQUFBLEFBWkQsSUFZQztTQVpZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGFnZUV2ZW50fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuXG4vKipcbiAqIEB0aXRsZSBDb25maWd1cmFibGUgcGFnaW5hdG9yXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2luYXRvci1jb25maWd1cmFibGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAncGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsncGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0b3JDb25maWd1cmFibGVFeGFtcGxlIHtcbiAgLy8gTWF0UGFnaW5hdG9yIElucHV0c1xuICBsZW5ndGggPSAxMDA7XG4gIHBhZ2VTaXplID0gMTA7XG4gIHBhZ2VTaXplT3B0aW9uczogbnVtYmVyW10gPSBbNSwgMTAsIDI1LCAxMDBdO1xuXG4gIC8vIE1hdFBhZ2luYXRvciBPdXRwdXRcbiAgcGFnZUV2ZW50OiBQYWdlRXZlbnQ7XG5cbiAgc2V0UGFnZVNpemVPcHRpb25zKHNldFBhZ2VTaXplT3B0aW9uc0lucHV0OiBzdHJpbmcpIHtcbiAgICB0aGlzLnBhZ2VTaXplT3B0aW9ucyA9IHNldFBhZ2VTaXplT3B0aW9uc0lucHV0LnNwbGl0KCcsJykubWFwKHN0ciA9PiArc3RyKTtcbiAgfVxufVxuIl19