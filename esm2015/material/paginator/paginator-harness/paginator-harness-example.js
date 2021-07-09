import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/paginator";
/**
 * @title Testing with MatPaginatorHarness
 */
export class PaginatorHarnessExample {
    constructor() {
        this.length = 500;
        this.pageSize = 10;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25];
        this.showFirstLastButtons = true;
    }
    handlePageEvent(event) {
        this.length = event.length;
        this.pageSize = event.pageSize;
        this.pageIndex = event.pageIndex;
    }
}
PaginatorHarnessExample.ɵfac = function PaginatorHarnessExample_Factory(t) { return new (t || PaginatorHarnessExample)(); };
PaginatorHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaginatorHarnessExample, selectors: [["paginator-harness-example"]], decls: 1, vars: 5, consts: [["aria-label", "Select page", 3, "length", "pageSize", "showFirstLastButtons", "pageSizeOptions", "pageIndex", "page"]], template: function PaginatorHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-paginator", 0);
        i0.ɵɵlistener("page", function PaginatorHarnessExample_Template_mat_paginator_page_0_listener($event) { return ctx.handlePageEvent($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("length", ctx.length)("pageSize", ctx.pageSize)("showFirstLastButtons", ctx.showFirstLastButtons)("pageSizeOptions", ctx.pageSizeOptions)("pageIndex", ctx.pageIndex);
    } }, directives: [i1.MatPaginator], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginatorHarnessExample, [{
        type: Component,
        args: [{
                selector: 'paginator-harness-example',
                templateUrl: 'paginator-harness-example.html'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3BhZ2luYXRvci9wYWdpbmF0b3ItaGFybmVzcy9wYWdpbmF0b3ItaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1oYXJuZXNzL3BhZ2luYXRvci1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFHeEM7O0dBRUc7QUFLSCxNQUFNLE9BQU8sdUJBQXVCO0lBSnBDO1FBS0UsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUNiLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2Qsb0JBQWUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUIseUJBQW9CLEdBQUcsSUFBSSxDQUFDO0tBTzdCO0lBTEMsZUFBZSxDQUFDLEtBQWdCO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO0lBQ25DLENBQUM7OzhGQVhVLHVCQUF1QjswRUFBdkIsdUJBQXVCO1FDVnBDLHdDQU82QjtRQU56QiwrR0FBUSwyQkFBdUIsSUFBQztRQU9wQyxpQkFBZ0I7O1FBTlosbUNBQWlCLDBCQUFBLGtEQUFBLHdDQUFBLDRCQUFBOzt1RkRRUix1QkFBdUI7Y0FKbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7YUFDOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BhZ2VFdmVudH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdFBhZ2luYXRvckhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnaW5hdG9yLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAncGFnaW5hdG9yLWhhcm5lc3MtZXhhbXBsZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0b3JIYXJuZXNzRXhhbXBsZSB7XG4gIGxlbmd0aCA9IDUwMDtcbiAgcGFnZVNpemUgPSAxMDtcbiAgcGFnZUluZGV4ID0gMDtcbiAgcGFnZVNpemVPcHRpb25zID0gWzUsIDEwLCAyNV07XG4gIHNob3dGaXJzdExhc3RCdXR0b25zID0gdHJ1ZTtcblxuICBoYW5kbGVQYWdlRXZlbnQoZXZlbnQ6IFBhZ2VFdmVudCkge1xuICAgIHRoaXMubGVuZ3RoID0gZXZlbnQubGVuZ3RoO1xuICAgIHRoaXMucGFnZVNpemUgPSBldmVudC5wYWdlU2l6ZTtcbiAgICB0aGlzLnBhZ2VJbmRleCA9IGV2ZW50LnBhZ2VJbmRleDtcbiAgfVxufVxuIiwiPG1hdC1wYWdpbmF0b3JcbiAgICAocGFnZSk9XCJoYW5kbGVQYWdlRXZlbnQoJGV2ZW50KVwiXG4gICAgW2xlbmd0aF09XCJsZW5ndGhcIlxuICAgIFtwYWdlU2l6ZV09XCJwYWdlU2l6ZVwiXG4gICAgW3Nob3dGaXJzdExhc3RCdXR0b25zXT1cInNob3dGaXJzdExhc3RCdXR0b25zXCJcbiAgICBbcGFnZVNpemVPcHRpb25zXT1cInBhZ2VTaXplT3B0aW9uc1wiXG4gICAgW3BhZ2VJbmRleF09XCJwYWdlSW5kZXhcIlxuICAgIGFyaWEtbGFiZWw9XCJTZWxlY3QgcGFnZVwiPlxuPC9tYXQtcGFnaW5hdG9yPlxuIl19