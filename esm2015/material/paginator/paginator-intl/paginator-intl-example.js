import { Component, Injectable, NgModule } from '@angular/core';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/paginator";
const _c0 = function () { return [10, 50, 100]; };
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
}
MyCustomPaginatorIntl.ɵfac = function MyCustomPaginatorIntl_Factory(t) { return new (t || MyCustomPaginatorIntl)(); };
MyCustomPaginatorIntl.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MyCustomPaginatorIntl, factory: MyCustomPaginatorIntl.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyCustomPaginatorIntl, [{
        type: Injectable
    }], null, null); })();
/**
 * @title Paginator internationalization
 */
export class PaginatorIntlExample {
}
PaginatorIntlExample.ɵfac = function PaginatorIntlExample_Factory(t) { return new (t || PaginatorIntlExample)(); };
PaginatorIntlExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaginatorIntlExample, selectors: [["paginator-intl-example"]], decls: 1, vars: 3, consts: [["aria-label", "Select page", 3, "length", "pageSizeOptions"]], template: function PaginatorIntlExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-paginator", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("length", 200)("pageSizeOptions", i0.ɵɵpureFunction0(2, _c0));
    } }, directives: [i1.MatPaginator], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginatorIntlExample, [{
        type: Component,
        args: [{
                selector: 'paginator-intl-example',
                templateUrl: 'paginator-intl-example.html',
            }]
    }], null, null); })();
export class PaginatorIntlExampleModule {
}
PaginatorIntlExampleModule.ɵfac = function PaginatorIntlExampleModule_Factory(t) { return new (t || PaginatorIntlExampleModule)(); };
PaginatorIntlExampleModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PaginatorIntlExampleModule });
PaginatorIntlExampleModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        { provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }
    ], imports: [[MatPaginatorModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginatorIntlExampleModule, [{
        type: NgModule,
        args: [{
                imports: [MatPaginatorModule],
                declarations: [PaginatorIntlExample],
                providers: [
                    { provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PaginatorIntlExampleModule, { declarations: [PaginatorIntlExample], imports: [MatPaginatorModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWludGwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3BhZ2luYXRvci9wYWdpbmF0b3ItaW50bC9wYWdpbmF0b3ItaW50bC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1pbnRsL3BhZ2luYXRvci1pbnRsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFDLGdCQUFnQixFQUFFLGtCQUFrQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDakYsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQzs7OztBQUc3QixNQUFNLE9BQU8scUJBQXFCO0lBRGxDO1FBRUUsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFOUIsMERBQTBEO1FBQzFELCtDQUErQztRQUMvQyxtQkFBYyxHQUFHLFNBQVMsQ0FBQSxZQUFZLENBQUM7UUFDdkMsc0JBQWlCLEdBQUcsU0FBUyxDQUFBLGlCQUFpQixDQUFDO1FBQy9DLGtCQUFhLEdBQUcsU0FBUyxDQUFBLFdBQVcsQ0FBQztRQUVyQyx3RUFBd0U7UUFDeEUsK0RBQStEO1FBQy9ELGtCQUFhLEdBQUcsV0FBVyxDQUFDO1FBQzVCLHNCQUFpQixHQUFHLGVBQWUsQ0FBQztLQVNyQztJQVBDLGFBQWEsQ0FBQyxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxNQUFjO1FBQzFELElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNoQixPQUFPLFNBQVMsQ0FBQSxhQUFhLENBQUM7U0FDL0I7UUFDRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQztRQUNqRCxPQUFPLFNBQVMsQ0FBQSxRQUFRLElBQUksR0FBRyxDQUFDLE9BQU8sV0FBVyxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7MEZBcEJVLHFCQUFxQjsyRUFBckIscUJBQXFCLFdBQXJCLHFCQUFxQjt1RkFBckIscUJBQXFCO2NBRGpDLFVBQVU7O0FBd0JYOztHQUVHO0FBS0gsTUFBTSxPQUFPLG9CQUFvQjs7d0ZBQXBCLG9CQUFvQjt1RUFBcEIsb0JBQW9CO1FDbkNqQyxtQ0FDZ0I7O1FBREQsNEJBQWMsK0NBQUE7O3VGRG1DaEIsb0JBQW9CO2NBSmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxXQUFXLEVBQUUsNkJBQTZCO2FBQzNDOztBQVVELE1BQU0sT0FBTywwQkFBMEI7O29HQUExQiwwQkFBMEI7NEVBQTFCLDBCQUEwQjtpRkFKMUI7UUFDVCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUM7S0FDN0QsWUFKUSxDQUFDLGtCQUFrQixDQUFDO3VGQU1sQiwwQkFBMEI7Y0FQdEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUM3QixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDcEMsU0FBUyxFQUFFO29CQUNULEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBQztpQkFDN0Q7YUFDRjs7d0ZBQ1ksMEJBQTBCLG1CQVQxQixvQkFBb0IsYUFHckIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGUsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0UGFnaW5hdG9ySW50bCwgTWF0UGFnaW5hdG9yTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE15Q3VzdG9tUGFnaW5hdG9ySW50bCBpbXBsZW1lbnRzIE1hdFBhZ2luYXRvckludGwge1xuICBjaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvLyBGb3IgaW50ZXJuYXRpb25hbGl6YXRpb24sIHRoZSBgJGxvY2FsaXplYCBmdW5jdGlvbiBmcm9tXG4gIC8vIHRoZSBgQGFuZ3VsYXIvbG9jYWxpemVgIHBhY2thZ2UgY2FuIGJlIHVzZWQuXG4gIGZpcnN0UGFnZUxhYmVsID0gJGxvY2FsaXplYEZpcnN0IHBhZ2VgO1xuICBpdGVtc1BlclBhZ2VMYWJlbCA9ICRsb2NhbGl6ZWBJdGVtcyBwZXIgcGFnZTpgO1xuICBsYXN0UGFnZUxhYmVsID0gJGxvY2FsaXplYExhc3QgcGFnZWA7XG5cbiAgLy8gWW91IGNhbiBzZXQgbGFiZWxzIHRvIGFuIGFyYml0cmFyeSBzdHJpbmcgdG9vLCBvciBkeW5hbWljYWxseSBjb21wdXRlXG4gIC8vIGl0IHRocm91Z2ggb3RoZXIgdGhpcmQtcGFydHkgaW50ZXJuYXRpb25hbGl6YXRpb24gbGlicmFyaWVzLlxuICBuZXh0UGFnZUxhYmVsID0gJ05leHQgcGFnZSc7XG4gIHByZXZpb3VzUGFnZUxhYmVsID0gJ1ByZXZpb3VzIHBhZ2UnO1xuXG4gIGdldFJhbmdlTGFiZWwocGFnZTogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyLCBsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuICRsb2NhbGl6ZWBQYWdlIDEgb2YgMWA7XG4gICAgfVxuICAgIGNvbnN0IGFtb3VudFBhZ2VzID0gTWF0aC5jZWlsKGxlbmd0aCAvIHBhZ2VTaXplKTtcbiAgICByZXR1cm4gJGxvY2FsaXplYFBhZ2UgJHtwYWdlICsgMX0gb2YgJHthbW91bnRQYWdlc31gO1xuICB9XG59XG5cbi8qKlxuICogQHRpdGxlIFBhZ2luYXRvciBpbnRlcm5hdGlvbmFsaXphdGlvblxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdpbmF0b3ItaW50bC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdwYWdpbmF0b3ItaW50bC1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0b3JJbnRsRXhhbXBsZSB7fVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTWF0UGFnaW5hdG9yTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbUGFnaW5hdG9ySW50bEV4YW1wbGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7cHJvdmlkZTogTWF0UGFnaW5hdG9ySW50bCwgdXNlQ2xhc3M6IE15Q3VzdG9tUGFnaW5hdG9ySW50bH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0b3JJbnRsRXhhbXBsZU1vZHVsZSB7fVxuIiwiPG1hdC1wYWdpbmF0b3IgW2xlbmd0aF09XCIyMDBcIiBbcGFnZVNpemVPcHRpb25zXT1cIlsxMCwgNTAsIDEwMF1cIiBhcmlhLWxhYmVsPVwiU2VsZWN0IHBhZ2VcIj5cbjwvbWF0LXBhZ2luYXRvcj5cbiJdfQ==