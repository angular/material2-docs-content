import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/legacy-paginator";
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
PaginatorHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: PaginatorHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
PaginatorHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: PaginatorHarnessExample, selector: "paginator-harness-example", ngImport: i0, template: "<mat-paginator\n    (page)=\"handlePageEvent($event)\"\n    [length]=\"length\"\n    [pageSize]=\"pageSize\"\n    [showFirstLastButtons]=\"showFirstLastButtons\"\n    [pageSizeOptions]=\"pageSizeOptions\"\n    [pageIndex]=\"pageIndex\"\n    aria-label=\"Select page\">\n</mat-paginator>\n", dependencies: [{ kind: "component", type: i1.MatLegacyPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: PaginatorHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-harness-example', template: "<mat-paginator\n    (page)=\"handlePageEvent($event)\"\n    [length]=\"length\"\n    [pageSize]=\"pageSize\"\n    [showFirstLastButtons]=\"showFirstLastButtons\"\n    [pageSizeOptions]=\"pageSizeOptions\"\n    [pageIndex]=\"pageIndex\"\n    aria-label=\"Select page\">\n</mat-paginator>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3BhZ2luYXRvci9wYWdpbmF0b3ItaGFybmVzcy9wYWdpbmF0b3ItaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1oYXJuZXNzL3BhZ2luYXRvci1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFHeEM7O0dBRUc7QUFLSCxNQUFNLE9BQU8sdUJBQXVCO0lBSnBDO1FBS0UsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUNiLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2Qsb0JBQWUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUIseUJBQW9CLEdBQUcsSUFBSSxDQUFDO0tBTzdCO0lBTEMsZUFBZSxDQUFDLEtBQWdCO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO0lBQ25DLENBQUM7O29IQVhVLHVCQUF1Qjt3R0FBdkIsdUJBQXVCLGlFQ1ZwQyxrU0FTQTsyRkRDYSx1QkFBdUI7a0JBSm5DLFNBQVM7K0JBQ0UsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQYWdlRXZlbnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1wYWdpbmF0b3InO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0UGFnaW5hdG9ySGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdpbmF0b3ItaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdwYWdpbmF0b3ItaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0b3JIYXJuZXNzRXhhbXBsZSB7XG4gIGxlbmd0aCA9IDUwMDtcbiAgcGFnZVNpemUgPSAxMDtcbiAgcGFnZUluZGV4ID0gMDtcbiAgcGFnZVNpemVPcHRpb25zID0gWzUsIDEwLCAyNV07XG4gIHNob3dGaXJzdExhc3RCdXR0b25zID0gdHJ1ZTtcblxuICBoYW5kbGVQYWdlRXZlbnQoZXZlbnQ6IFBhZ2VFdmVudCkge1xuICAgIHRoaXMubGVuZ3RoID0gZXZlbnQubGVuZ3RoO1xuICAgIHRoaXMucGFnZVNpemUgPSBldmVudC5wYWdlU2l6ZTtcbiAgICB0aGlzLnBhZ2VJbmRleCA9IGV2ZW50LnBhZ2VJbmRleDtcbiAgfVxufVxuIiwiPG1hdC1wYWdpbmF0b3JcbiAgICAocGFnZSk9XCJoYW5kbGVQYWdlRXZlbnQoJGV2ZW50KVwiXG4gICAgW2xlbmd0aF09XCJsZW5ndGhcIlxuICAgIFtwYWdlU2l6ZV09XCJwYWdlU2l6ZVwiXG4gICAgW3Nob3dGaXJzdExhc3RCdXR0b25zXT1cInNob3dGaXJzdExhc3RCdXR0b25zXCJcbiAgICBbcGFnZVNpemVPcHRpb25zXT1cInBhZ2VTaXplT3B0aW9uc1wiXG4gICAgW3BhZ2VJbmRleF09XCJwYWdlSW5kZXhcIlxuICAgIGFyaWEtbGFiZWw9XCJTZWxlY3QgcGFnZVwiPlxuPC9tYXQtcGFnaW5hdG9yPlxuIl19