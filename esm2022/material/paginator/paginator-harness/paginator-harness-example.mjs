import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-next.4", ngImport: i0, type: PaginatorHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-next.4", type: PaginatorHarnessExample, isStandalone: true, selector: "paginator-harness-example", ngImport: i0, template: "<mat-paginator\n    (page)=\"handlePageEvent($event)\"\n    [length]=\"length\"\n    [pageSize]=\"pageSize\"\n    [showFirstLastButtons]=\"showFirstLastButtons\"\n    [pageSizeOptions]=\"pageSizeOptions\"\n    [pageIndex]=\"pageIndex\"\n    aria-label=\"Select page\">\n</mat-paginator>\n", dependencies: [{ kind: "ngmodule", type: MatPaginatorModule }, { kind: "component", type: i1.MatPaginator, selector: "mat-paginator", inputs: ["disabled", "color", "pageIndex", "length", "pageSize", "pageSizeOptions", "hidePageSize", "showFirstLastButtons", "selectConfig"], outputs: ["page"], exportAs: ["matPaginator"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-next.4", ngImport: i0, type: PaginatorHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-harness-example', standalone: true, imports: [MatPaginatorModule], template: "<mat-paginator\n    (page)=\"handlePageEvent($event)\"\n    [length]=\"length\"\n    [pageSize]=\"pageSize\"\n    [showFirstLastButtons]=\"showFirstLastButtons\"\n    [pageSizeOptions]=\"pageSizeOptions\"\n    [pageIndex]=\"pageIndex\"\n    aria-label=\"Select page\">\n</mat-paginator>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3BhZ2luYXRvci9wYWdpbmF0b3ItaGFybmVzcy9wYWdpbmF0b3ItaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1oYXJuZXNzL3BhZ2luYXRvci1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBWSxrQkFBa0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDOzs7QUFFMUU7O0dBRUc7QUFPSCxNQUFNLE9BQU8sdUJBQXVCO0lBTnBDO1FBT0UsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUNiLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2Qsb0JBQWUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUIseUJBQW9CLEdBQUcsSUFBSSxDQUFDO0tBTzdCO0lBTEMsZUFBZSxDQUFDLEtBQWdCO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO0lBQ25DLENBQUM7cUhBWFUsdUJBQXVCO3lHQUF2Qix1QkFBdUIscUZDWnBDLGtTQVNBLDJDRENZLGtCQUFrQjs7a0dBRWpCLHVCQUF1QjtrQkFObkMsU0FBUzsrQkFDRSwyQkFBMkIsY0FFekIsSUFBSSxXQUNQLENBQUMsa0JBQWtCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BhZ2VFdmVudCwgTWF0UGFnaW5hdG9yTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0UGFnaW5hdG9ySGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdpbmF0b3ItaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdwYWdpbmF0b3ItaGFybmVzcy1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0UGFnaW5hdG9yTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9ySGFybmVzc0V4YW1wbGUge1xuICBsZW5ndGggPSA1MDA7XG4gIHBhZ2VTaXplID0gMTA7XG4gIHBhZ2VJbmRleCA9IDA7XG4gIHBhZ2VTaXplT3B0aW9ucyA9IFs1LCAxMCwgMjVdO1xuICBzaG93Rmlyc3RMYXN0QnV0dG9ucyA9IHRydWU7XG5cbiAgaGFuZGxlUGFnZUV2ZW50KGV2ZW50OiBQYWdlRXZlbnQpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGV2ZW50Lmxlbmd0aDtcbiAgICB0aGlzLnBhZ2VTaXplID0gZXZlbnQucGFnZVNpemU7XG4gICAgdGhpcy5wYWdlSW5kZXggPSBldmVudC5wYWdlSW5kZXg7XG4gIH1cbn1cbiIsIjxtYXQtcGFnaW5hdG9yXG4gICAgKHBhZ2UpPVwiaGFuZGxlUGFnZUV2ZW50KCRldmVudClcIlxuICAgIFtsZW5ndGhdPVwibGVuZ3RoXCJcbiAgICBbcGFnZVNpemVdPVwicGFnZVNpemVcIlxuICAgIFtzaG93Rmlyc3RMYXN0QnV0dG9uc109XCJzaG93Rmlyc3RMYXN0QnV0dG9uc1wiXG4gICAgW3BhZ2VTaXplT3B0aW9uc109XCJwYWdlU2l6ZU9wdGlvbnNcIlxuICAgIFtwYWdlSW5kZXhdPVwicGFnZUluZGV4XCJcbiAgICBhcmlhLWxhYmVsPVwiU2VsZWN0IHBhZ2VcIj5cbjwvbWF0LXBhZ2luYXRvcj5cbiJdfQ==