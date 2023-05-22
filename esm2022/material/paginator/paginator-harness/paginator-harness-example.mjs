import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/paginator";
/**
 * @title Testing with MatPaginatorHarness
 */
class PaginatorHarnessExample {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: PaginatorHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: PaginatorHarnessExample, isStandalone: true, selector: "paginator-harness-example", ngImport: i0, template: "<mat-paginator\n    (page)=\"handlePageEvent($event)\"\n    [length]=\"length\"\n    [pageSize]=\"pageSize\"\n    [showFirstLastButtons]=\"showFirstLastButtons\"\n    [pageSizeOptions]=\"pageSizeOptions\"\n    [pageIndex]=\"pageIndex\"\n    aria-label=\"Select page\">\n</mat-paginator>\n", dependencies: [{ kind: "ngmodule", type: MatPaginatorModule }, { kind: "component", type: i1.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }] }); }
}
export { PaginatorHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: PaginatorHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-harness-example', standalone: true, imports: [MatPaginatorModule], template: "<mat-paginator\n    (page)=\"handlePageEvent($event)\"\n    [length]=\"length\"\n    [pageSize]=\"pageSize\"\n    [showFirstLastButtons]=\"showFirstLastButtons\"\n    [pageSizeOptions]=\"pageSizeOptions\"\n    [pageIndex]=\"pageIndex\"\n    aria-label=\"Select page\">\n</mat-paginator>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3BhZ2luYXRvci9wYWdpbmF0b3ItaGFybmVzcy9wYWdpbmF0b3ItaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1oYXJuZXNzL3BhZ2luYXRvci1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBWSxrQkFBa0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDOzs7QUFFMUU7O0dBRUc7QUFDSCxNQU1hLHVCQUF1QjtJQU5wQztRQU9FLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDYixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLG9CQUFlLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLHlCQUFvQixHQUFHLElBQUksQ0FBQztLQU83QjtJQUxDLGVBQWUsQ0FBQyxLQUFnQjtRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUNuQyxDQUFDOzhHQVhVLHVCQUF1QjtrR0FBdkIsdUJBQXVCLHFGQ1pwQyxrU0FTQSwyQ0RDWSxrQkFBa0I7O1NBRWpCLHVCQUF1QjsyRkFBdkIsdUJBQXVCO2tCQU5uQyxTQUFTOytCQUNFLDJCQUEyQixjQUV6QixJQUFJLFdBQ1AsQ0FBQyxrQkFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGFnZUV2ZW50LCBNYXRQYWdpbmF0b3JNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRQYWdpbmF0b3JIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2luYXRvci1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3BhZ2luYXRvci1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRQYWdpbmF0b3JNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0b3JIYXJuZXNzRXhhbXBsZSB7XG4gIGxlbmd0aCA9IDUwMDtcbiAgcGFnZVNpemUgPSAxMDtcbiAgcGFnZUluZGV4ID0gMDtcbiAgcGFnZVNpemVPcHRpb25zID0gWzUsIDEwLCAyNV07XG4gIHNob3dGaXJzdExhc3RCdXR0b25zID0gdHJ1ZTtcblxuICBoYW5kbGVQYWdlRXZlbnQoZXZlbnQ6IFBhZ2VFdmVudCkge1xuICAgIHRoaXMubGVuZ3RoID0gZXZlbnQubGVuZ3RoO1xuICAgIHRoaXMucGFnZVNpemUgPSBldmVudC5wYWdlU2l6ZTtcbiAgICB0aGlzLnBhZ2VJbmRleCA9IGV2ZW50LnBhZ2VJbmRleDtcbiAgfVxufVxuIiwiPG1hdC1wYWdpbmF0b3JcbiAgICAocGFnZSk9XCJoYW5kbGVQYWdlRXZlbnQoJGV2ZW50KVwiXG4gICAgW2xlbmd0aF09XCJsZW5ndGhcIlxuICAgIFtwYWdlU2l6ZV09XCJwYWdlU2l6ZVwiXG4gICAgW3Nob3dGaXJzdExhc3RCdXR0b25zXT1cInNob3dGaXJzdExhc3RCdXR0b25zXCJcbiAgICBbcGFnZVNpemVPcHRpb25zXT1cInBhZ2VTaXplT3B0aW9uc1wiXG4gICAgW3BhZ2VJbmRleF09XCJwYWdlSW5kZXhcIlxuICAgIGFyaWEtbGFiZWw9XCJTZWxlY3QgcGFnZVwiPlxuPC9tYXQtcGFnaW5hdG9yPlxuIl19