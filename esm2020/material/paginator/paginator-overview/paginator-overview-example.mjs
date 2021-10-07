import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/paginator";
/**
 * @title Paginator
 */
export class PaginatorOverviewExample {
}
PaginatorOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: PaginatorOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
PaginatorOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: PaginatorOverviewExample, selector: "paginator-overview-example", ngImport: i0, template: "<mat-paginator [length]=\"100\"\n              [pageSize]=\"10\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\"\n              aria-label=\"Select page\">\n</mat-paginator>\n", components: [{ type: i1.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: PaginatorOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-overview-example', template: "<mat-paginator [length]=\"100\"\n              [pageSize]=\"10\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\"\n              aria-label=\"Select page\">\n</mat-paginator>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9wYWdpbmF0b3IvcGFnaW5hdG9yLW92ZXJ2aWV3L3BhZ2luYXRvci1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1vdmVydmlldy9wYWdpbmF0b3Itb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQUtILE1BQU0sT0FBTyx3QkFBd0I7OzZIQUF4Qix3QkFBd0I7aUhBQXhCLHdCQUF3QixrRUNUckMsdUxBS0E7bUdESWEsd0JBQXdCO2tCQUpwQyxTQUFTOytCQUNFLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgUGFnaW5hdG9yXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2luYXRvci1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdwYWdpbmF0b3Itb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9yT3ZlcnZpZXdFeGFtcGxlIHt9XG4iLCI8bWF0LXBhZ2luYXRvciBbbGVuZ3RoXT1cIjEwMFwiXG4gICAgICAgICAgICAgIFtwYWdlU2l6ZV09XCIxMFwiXG4gICAgICAgICAgICAgIFtwYWdlU2l6ZU9wdGlvbnNdPVwiWzUsIDEwLCAyNSwgMTAwXVwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWxlY3QgcGFnZVwiPlxuPC9tYXQtcGFnaW5hdG9yPlxuIl19