import { Component } from '@angular/core';
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: PaginatorHarnessExample, selector: "paginator-harness-example", ngImport: i0, template: "<mat-paginator\n    (page)=\"handlePageEvent($event)\"\n    [length]=\"length\"\n    [pageSize]=\"pageSize\"\n    [showFirstLastButtons]=\"showFirstLastButtons\"\n    [pageSizeOptions]=\"pageSizeOptions\"\n    [pageIndex]=\"pageIndex\"\n    aria-label=\"Select page\">\n</mat-paginator>\n", dependencies: [{ kind: "component", type: i1.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }] }); }
}
export { PaginatorHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: PaginatorHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-harness-example', template: "<mat-paginator\n    (page)=\"handlePageEvent($event)\"\n    [length]=\"length\"\n    [pageSize]=\"pageSize\"\n    [showFirstLastButtons]=\"showFirstLastButtons\"\n    [pageSizeOptions]=\"pageSizeOptions\"\n    [pageIndex]=\"pageIndex\"\n    aria-label=\"Select page\">\n</mat-paginator>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3BhZ2luYXRvci9wYWdpbmF0b3ItaGFybmVzcy9wYWdpbmF0b3ItaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1oYXJuZXNzL3BhZ2luYXRvci1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFHeEM7O0dBRUc7QUFDSCxNQUlhLHVCQUF1QjtJQUpwQztRQUtFLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDYixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLG9CQUFlLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLHlCQUFvQixHQUFHLElBQUksQ0FBQztLQU83QjtJQUxDLGVBQWUsQ0FBQyxLQUFnQjtRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUNuQyxDQUFDOzhHQVhVLHVCQUF1QjtrR0FBdkIsdUJBQXVCLGlFQ1ZwQyxrU0FTQTs7U0RDYSx1QkFBdUI7MkZBQXZCLHVCQUF1QjtrQkFKbkMsU0FBUzsrQkFDRSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BhZ2VFdmVudH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdFBhZ2luYXRvckhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnaW5hdG9yLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAncGFnaW5hdG9yLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9ySGFybmVzc0V4YW1wbGUge1xuICBsZW5ndGggPSA1MDA7XG4gIHBhZ2VTaXplID0gMTA7XG4gIHBhZ2VJbmRleCA9IDA7XG4gIHBhZ2VTaXplT3B0aW9ucyA9IFs1LCAxMCwgMjVdO1xuICBzaG93Rmlyc3RMYXN0QnV0dG9ucyA9IHRydWU7XG5cbiAgaGFuZGxlUGFnZUV2ZW50KGV2ZW50OiBQYWdlRXZlbnQpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGV2ZW50Lmxlbmd0aDtcbiAgICB0aGlzLnBhZ2VTaXplID0gZXZlbnQucGFnZVNpemU7XG4gICAgdGhpcy5wYWdlSW5kZXggPSBldmVudC5wYWdlSW5kZXg7XG4gIH1cbn1cbiIsIjxtYXQtcGFnaW5hdG9yXG4gICAgKHBhZ2UpPVwiaGFuZGxlUGFnZUV2ZW50KCRldmVudClcIlxuICAgIFtsZW5ndGhdPVwibGVuZ3RoXCJcbiAgICBbcGFnZVNpemVdPVwicGFnZVNpemVcIlxuICAgIFtzaG93Rmlyc3RMYXN0QnV0dG9uc109XCJzaG93Rmlyc3RMYXN0QnV0dG9uc1wiXG4gICAgW3BhZ2VTaXplT3B0aW9uc109XCJwYWdlU2l6ZU9wdGlvbnNcIlxuICAgIFtwYWdlSW5kZXhdPVwicGFnZUluZGV4XCJcbiAgICBhcmlhLWxhYmVsPVwiU2VsZWN0IHBhZ2VcIj5cbjwvbWF0LXBhZ2luYXRvcj5cbiJdfQ==