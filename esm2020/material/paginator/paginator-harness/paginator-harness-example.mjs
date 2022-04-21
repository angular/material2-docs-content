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
PaginatorHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.14", ngImport: i0, type: PaginatorHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
PaginatorHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.14", type: PaginatorHarnessExample, selector: "paginator-harness-example", ngImport: i0, template: "<mat-paginator\n    (page)=\"handlePageEvent($event)\"\n    [length]=\"length\"\n    [pageSize]=\"pageSize\"\n    [showFirstLastButtons]=\"showFirstLastButtons\"\n    [pageSizeOptions]=\"pageSizeOptions\"\n    [pageIndex]=\"pageIndex\"\n    aria-label=\"Select page\">\n</mat-paginator>\n", dependencies: [{ kind: "component", type: i1.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.14", ngImport: i0, type: PaginatorHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-harness-example', template: "<mat-paginator\n    (page)=\"handlePageEvent($event)\"\n    [length]=\"length\"\n    [pageSize]=\"pageSize\"\n    [showFirstLastButtons]=\"showFirstLastButtons\"\n    [pageSizeOptions]=\"pageSizeOptions\"\n    [pageIndex]=\"pageIndex\"\n    aria-label=\"Select page\">\n</mat-paginator>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3BhZ2luYXRvci9wYWdpbmF0b3ItaGFybmVzcy9wYWdpbmF0b3ItaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1oYXJuZXNzL3BhZ2luYXRvci1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFHeEM7O0dBRUc7QUFLSCxNQUFNLE9BQU8sdUJBQXVCO0lBSnBDO1FBS0UsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUNiLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2Qsb0JBQWUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUIseUJBQW9CLEdBQUcsSUFBSSxDQUFDO0tBTzdCO0lBTEMsZUFBZSxDQUFDLEtBQWdCO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO0lBQ25DLENBQUM7OzRIQVhVLHVCQUF1QjtnSEFBdkIsdUJBQXVCLGlFQ1ZwQyxrU0FTQTttR0RDYSx1QkFBdUI7a0JBSm5DLFNBQVM7K0JBQ0UsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQYWdlRXZlbnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRQYWdpbmF0b3JIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2luYXRvci1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3BhZ2luYXRvci1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvckhhcm5lc3NFeGFtcGxlIHtcbiAgbGVuZ3RoID0gNTAwO1xuICBwYWdlU2l6ZSA9IDEwO1xuICBwYWdlSW5kZXggPSAwO1xuICBwYWdlU2l6ZU9wdGlvbnMgPSBbNSwgMTAsIDI1XTtcbiAgc2hvd0ZpcnN0TGFzdEJ1dHRvbnMgPSB0cnVlO1xuXG4gIGhhbmRsZVBhZ2VFdmVudChldmVudDogUGFnZUV2ZW50KSB7XG4gICAgdGhpcy5sZW5ndGggPSBldmVudC5sZW5ndGg7XG4gICAgdGhpcy5wYWdlU2l6ZSA9IGV2ZW50LnBhZ2VTaXplO1xuICAgIHRoaXMucGFnZUluZGV4ID0gZXZlbnQucGFnZUluZGV4O1xuICB9XG59XG4iLCI8bWF0LXBhZ2luYXRvclxuICAgIChwYWdlKT1cImhhbmRsZVBhZ2VFdmVudCgkZXZlbnQpXCJcbiAgICBbbGVuZ3RoXT1cImxlbmd0aFwiXG4gICAgW3BhZ2VTaXplXT1cInBhZ2VTaXplXCJcbiAgICBbc2hvd0ZpcnN0TGFzdEJ1dHRvbnNdPVwic2hvd0ZpcnN0TGFzdEJ1dHRvbnNcIlxuICAgIFtwYWdlU2l6ZU9wdGlvbnNdPVwicGFnZVNpemVPcHRpb25zXCJcbiAgICBbcGFnZUluZGV4XT1cInBhZ2VJbmRleFwiXG4gICAgYXJpYS1sYWJlbD1cIlNlbGVjdCBwYWdlXCI+XG48L21hdC1wYWdpbmF0b3I+XG4iXX0=