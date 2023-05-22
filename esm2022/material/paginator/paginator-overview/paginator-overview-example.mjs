import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/paginator";
/**
 * @title Paginator
 */
class PaginatorOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: PaginatorOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: PaginatorOverviewExample, isStandalone: true, selector: "paginator-overview-example", ngImport: i0, template: "<mat-paginator [length]=\"100\"\n              [pageSize]=\"10\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\"\n              aria-label=\"Select page\">\n</mat-paginator>\n", dependencies: [{ kind: "ngmodule", type: MatPaginatorModule }, { kind: "component", type: i1.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }] }); }
}
export { PaginatorOverviewExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: PaginatorOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-overview-example', standalone: true, imports: [MatPaginatorModule], template: "<mat-paginator [length]=\"100\"\n              [pageSize]=\"10\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\"\n              aria-label=\"Select page\">\n</mat-paginator>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9wYWdpbmF0b3IvcGFnaW5hdG9yLW92ZXJ2aWV3L3BhZ2luYXRvci1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1vdmVydmlldy9wYWdpbmF0b3Itb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7OztBQUUvRDs7R0FFRztBQUNILE1BTWEsd0JBQXdCOzhHQUF4Qix3QkFBd0I7a0dBQXhCLHdCQUF3QixzRkNackMsdUxBS0EsMkNES1ksa0JBQWtCOztTQUVqQix3QkFBd0I7MkZBQXhCLHdCQUF3QjtrQkFOcEMsU0FBUzsrQkFDRSw0QkFBNEIsY0FFMUIsSUFBSSxXQUNQLENBQUMsa0JBQWtCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFBhZ2luYXRvck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcblxuLyoqXG4gKiBAdGl0bGUgUGFnaW5hdG9yXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2luYXRvci1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdwYWdpbmF0b3Itb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdFBhZ2luYXRvck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvck92ZXJ2aWV3RXhhbXBsZSB7fVxuIiwiPG1hdC1wYWdpbmF0b3IgW2xlbmd0aF09XCIxMDBcIlxuICAgICAgICAgICAgICBbcGFnZVNpemVdPVwiMTBcIlxuICAgICAgICAgICAgICBbcGFnZVNpemVPcHRpb25zXT1cIls1LCAxMCwgMjUsIDEwMF1cIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VsZWN0IHBhZ2VcIj5cbjwvbWF0LXBhZ2luYXRvcj5cbiJdfQ==