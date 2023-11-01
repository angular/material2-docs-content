import { Component, Injectable } from '@angular/core';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/paginator";
export class MyCustomPaginatorIntl {
    constructor() {
        this.changes = new Subject();
        // For internationalization, the `$localize` function from
        // the `@angular/localize` package can be used.
        this.firstPageLabel = $localize `First page`;
        this.itemsPerPageLabel = $localize `Items per page:`;
        this.lastPageLabel = $localize `Last page`;
        // You can set labels to an arbitrary string too, or dynamically compute
        // it through other third-party internationalization libraries.
        this.nextPageLabel = 'Next page';
        this.previousPageLabel = 'Previous page';
    }
    getRangeLabel(page, pageSize, length) {
        if (length === 0) {
            return $localize `Page 1 of 1`;
        }
        const amountPages = Math.ceil(length / pageSize);
        return $localize `Page ${page + 1} of ${amountPages}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.0", ngImport: i0, type: MyCustomPaginatorIntl, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.0-rc.0", ngImport: i0, type: MyCustomPaginatorIntl }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.0", ngImport: i0, type: MyCustomPaginatorIntl, decorators: [{
            type: Injectable
        }] });
/**
 * @title Paginator internationalization
 */
export class PaginatorIntlExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.0", ngImport: i0, type: PaginatorIntlExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.0", type: PaginatorIntlExample, isStandalone: true, selector: "paginator-intl-example", providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }], ngImport: i0, template: "<mat-paginator [length]=\"200\" [pageSizeOptions]=\"[10, 50, 100]\" aria-label=\"Select page\">\n</mat-paginator>\n", dependencies: [{ kind: "ngmodule", type: MatPaginatorModule }, { kind: "component", type: i1.MatPaginator, selector: "mat-paginator", inputs: ["disabled", "color", "pageIndex", "length", "pageSize", "pageSizeOptions", "hidePageSize", "showFirstLastButtons", "selectConfig"], outputs: ["page"], exportAs: ["matPaginator"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.0", ngImport: i0, type: PaginatorIntlExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-intl-example', standalone: true, imports: [MatPaginatorModule], providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }], template: "<mat-paginator [length]=\"200\" [pageSizeOptions]=\"[10, 50, 100]\" aria-label=\"Select page\">\n</mat-paginator>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWludGwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3BhZ2luYXRvci9wYWdpbmF0b3ItaW50bC9wYWdpbmF0b3ItaW50bC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1pbnRsL3BhZ2luYXRvci1pbnRsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7QUFHN0IsTUFBTSxPQUFPLHFCQUFxQjtJQURsQztRQUVFLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBRTlCLDBEQUEwRDtRQUMxRCwrQ0FBK0M7UUFDL0MsbUJBQWMsR0FBRyxTQUFTLENBQUEsWUFBWSxDQUFDO1FBQ3ZDLHNCQUFpQixHQUFHLFNBQVMsQ0FBQSxpQkFBaUIsQ0FBQztRQUMvQyxrQkFBYSxHQUFHLFNBQVMsQ0FBQSxXQUFXLENBQUM7UUFFckMsd0VBQXdFO1FBQ3hFLCtEQUErRDtRQUMvRCxrQkFBYSxHQUFHLFdBQVcsQ0FBQztRQUM1QixzQkFBaUIsR0FBRyxlQUFlLENBQUM7S0FTckM7SUFQQyxhQUFhLENBQUMsSUFBWSxFQUFFLFFBQWdCLEVBQUUsTUFBYztRQUMxRCxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDaEIsT0FBTyxTQUFTLENBQUEsYUFBYSxDQUFDO1NBQy9CO1FBQ0QsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFDakQsT0FBTyxTQUFTLENBQUEsUUFBUSxJQUFJLEdBQUcsQ0FBQyxPQUFPLFdBQVcsRUFBRSxDQUFDO0lBQ3ZELENBQUM7bUhBcEJVLHFCQUFxQjt1SEFBckIscUJBQXFCOztnR0FBckIscUJBQXFCO2tCQURqQyxVQUFVOztBQXdCWDs7R0FFRztBQVFILE1BQU0sT0FBTyxvQkFBb0I7bUhBQXBCLG9CQUFvQjt1R0FBcEIsb0JBQW9CLHFFQUZwQixDQUFDLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBQyxDQUFDLDBCQ3BDM0UscUhBRUEsMkNEaUNZLGtCQUFrQjs7Z0dBR2pCLG9CQUFvQjtrQkFQaEMsU0FBUzsrQkFDRSx3QkFBd0IsY0FFdEIsSUFBSSxXQUNQLENBQUMsa0JBQWtCLENBQUMsYUFDbEIsQ0FBQyxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0UGFnaW5hdG9ySW50bCwgTWF0UGFnaW5hdG9yTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE15Q3VzdG9tUGFnaW5hdG9ySW50bCBpbXBsZW1lbnRzIE1hdFBhZ2luYXRvckludGwge1xuICBjaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvLyBGb3IgaW50ZXJuYXRpb25hbGl6YXRpb24sIHRoZSBgJGxvY2FsaXplYCBmdW5jdGlvbiBmcm9tXG4gIC8vIHRoZSBgQGFuZ3VsYXIvbG9jYWxpemVgIHBhY2thZ2UgY2FuIGJlIHVzZWQuXG4gIGZpcnN0UGFnZUxhYmVsID0gJGxvY2FsaXplYEZpcnN0IHBhZ2VgO1xuICBpdGVtc1BlclBhZ2VMYWJlbCA9ICRsb2NhbGl6ZWBJdGVtcyBwZXIgcGFnZTpgO1xuICBsYXN0UGFnZUxhYmVsID0gJGxvY2FsaXplYExhc3QgcGFnZWA7XG5cbiAgLy8gWW91IGNhbiBzZXQgbGFiZWxzIHRvIGFuIGFyYml0cmFyeSBzdHJpbmcgdG9vLCBvciBkeW5hbWljYWxseSBjb21wdXRlXG4gIC8vIGl0IHRocm91Z2ggb3RoZXIgdGhpcmQtcGFydHkgaW50ZXJuYXRpb25hbGl6YXRpb24gbGlicmFyaWVzLlxuICBuZXh0UGFnZUxhYmVsID0gJ05leHQgcGFnZSc7XG4gIHByZXZpb3VzUGFnZUxhYmVsID0gJ1ByZXZpb3VzIHBhZ2UnO1xuXG4gIGdldFJhbmdlTGFiZWwocGFnZTogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyLCBsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuICRsb2NhbGl6ZWBQYWdlIDEgb2YgMWA7XG4gICAgfVxuICAgIGNvbnN0IGFtb3VudFBhZ2VzID0gTWF0aC5jZWlsKGxlbmd0aCAvIHBhZ2VTaXplKTtcbiAgICByZXR1cm4gJGxvY2FsaXplYFBhZ2UgJHtwYWdlICsgMX0gb2YgJHthbW91bnRQYWdlc31gO1xuICB9XG59XG5cbi8qKlxuICogQHRpdGxlIFBhZ2luYXRvciBpbnRlcm5hdGlvbmFsaXphdGlvblxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdpbmF0b3ItaW50bC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdwYWdpbmF0b3ItaW50bC1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0UGFnaW5hdG9yTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE1hdFBhZ2luYXRvckludGwsIHVzZUNsYXNzOiBNeUN1c3RvbVBhZ2luYXRvckludGx9XSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9ySW50bEV4YW1wbGUge31cbiIsIjxtYXQtcGFnaW5hdG9yIFtsZW5ndGhdPVwiMjAwXCIgW3BhZ2VTaXplT3B0aW9uc109XCJbMTAsIDUwLCAxMDBdXCIgYXJpYS1sYWJlbD1cIlNlbGVjdCBwYWdlXCI+XG48L21hdC1wYWdpbmF0b3I+XG4iXX0=