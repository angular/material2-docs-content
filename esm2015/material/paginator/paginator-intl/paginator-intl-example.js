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
PaginatorIntlExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaginatorIntlExample, selectors: [["paginator-intl-example"]], decls: 1, vars: 3, consts: [[3, "length", "pageSizeOptions"]], template: function PaginatorIntlExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-paginator", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("length", 0)("pageSizeOptions", i0.ɵɵpureFunction0(2, _c0));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWludGwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3BhZ2luYXRvci9wYWdpbmF0b3ItaW50bC9wYWdpbmF0b3ItaW50bC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1pbnRsL3BhZ2luYXRvci1pbnRsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFDLGdCQUFnQixFQUFFLGtCQUFrQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDakYsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQzs7OztBQUc3QixNQUFNLE9BQU8scUJBQXFCO0lBRGxDO1FBRUUsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFOUIsMERBQTBEO1FBQzFELCtDQUErQztRQUMvQyxtQkFBYyxHQUFHLFNBQVMsQ0FBQSxZQUFZLENBQUM7UUFDdkMsc0JBQWlCLEdBQUcsU0FBUyxDQUFBLGlCQUFpQixDQUFDO1FBQy9DLGtCQUFhLEdBQUcsU0FBUyxDQUFBLFdBQVcsQ0FBQztRQUVyQyx3RUFBd0U7UUFDeEUsK0RBQStEO1FBQy9ELGtCQUFhLEdBQUcsV0FBVyxDQUFDO1FBQzVCLHNCQUFpQixHQUFHLGVBQWUsQ0FBQztLQVNyQztJQVBDLGFBQWEsQ0FBQyxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxNQUFjO1FBQzFELElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNoQixPQUFPLFNBQVMsQ0FBQSxhQUFhLENBQUM7U0FDL0I7UUFDRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQztRQUNqRCxPQUFPLFNBQVMsQ0FBQSxRQUFRLElBQUksR0FBRyxDQUFDLE9BQU8sV0FBVyxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7MEZBcEJVLHFCQUFxQjsyRUFBckIscUJBQXFCLFdBQXJCLHFCQUFxQjt1RkFBckIscUJBQXFCO2NBRGpDLFVBQVU7O0FBd0JYOztHQUVHO0FBS0gsTUFBTSxPQUFPLG9CQUFvQjs7d0ZBQXBCLG9CQUFvQjt1RUFBcEIsb0JBQW9CO1FDbkNqQyxtQ0FDZ0I7O1FBREQsMEJBQVksK0NBQUE7O3VGRG1DZCxvQkFBb0I7Y0FKaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSw2QkFBNkI7YUFDM0M7O0FBVUQsTUFBTSxPQUFPLDBCQUEwQjs7b0dBQTFCLDBCQUEwQjs0RUFBMUIsMEJBQTBCO2lGQUoxQjtRQUNULEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBQztLQUM3RCxZQUpRLENBQUMsa0JBQWtCLENBQUM7dUZBTWxCLDBCQUEwQjtjQVB0QyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQzdCLFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUNwQyxTQUFTLEVBQUU7b0JBQ1QsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFDO2lCQUM3RDthQUNGOzt3RkFDWSwwQkFBMEIsbUJBVDFCLG9CQUFvQixhQUdyQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZSwgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRQYWdpbmF0b3JJbnRsLCBNYXRQYWdpbmF0b3JNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTXlDdXN0b21QYWdpbmF0b3JJbnRsIGltcGxlbWVudHMgTWF0UGFnaW5hdG9ySW50bCB7XG4gIGNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8vIEZvciBpbnRlcm5hdGlvbmFsaXphdGlvbiwgdGhlIGAkbG9jYWxpemVgIGZ1bmN0aW9uIGZyb21cbiAgLy8gdGhlIGBAYW5ndWxhci9sb2NhbGl6ZWAgcGFja2FnZSBjYW4gYmUgdXNlZC5cbiAgZmlyc3RQYWdlTGFiZWwgPSAkbG9jYWxpemVgRmlyc3QgcGFnZWA7XG4gIGl0ZW1zUGVyUGFnZUxhYmVsID0gJGxvY2FsaXplYEl0ZW1zIHBlciBwYWdlOmA7XG4gIGxhc3RQYWdlTGFiZWwgPSAkbG9jYWxpemVgTGFzdCBwYWdlYDtcblxuICAvLyBZb3UgY2FuIHNldCBsYWJlbHMgdG8gYW4gYXJiaXRyYXJ5IHN0cmluZyB0b28sIG9yIGR5bmFtaWNhbGx5IGNvbXB1dGVcbiAgLy8gaXQgdGhyb3VnaCBvdGhlciB0aGlyZC1wYXJ0eSBpbnRlcm5hdGlvbmFsaXphdGlvbiBsaWJyYXJpZXMuXG4gIG5leHRQYWdlTGFiZWwgPSAnTmV4dCBwYWdlJztcbiAgcHJldmlvdXNQYWdlTGFiZWwgPSAnUHJldmlvdXMgcGFnZSc7XG5cbiAgZ2V0UmFuZ2VMYWJlbChwYWdlOiBudW1iZXIsIHBhZ2VTaXplOiBudW1iZXIsIGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gJGxvY2FsaXplYFBhZ2UgMSBvZiAxYDtcbiAgICB9XG4gICAgY29uc3QgYW1vdW50UGFnZXMgPSBNYXRoLmNlaWwobGVuZ3RoIC8gcGFnZVNpemUpO1xuICAgIHJldHVybiAkbG9jYWxpemVgUGFnZSAke3BhZ2UgKyAxfSBvZiAke2Ftb3VudFBhZ2VzfWA7XG4gIH1cbn1cblxuLyoqXG4gKiBAdGl0bGUgUGFnaW5hdG9yIGludGVybmF0aW9uYWxpemF0aW9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2luYXRvci1pbnRsLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3BhZ2luYXRvci1pbnRsLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvckludGxFeGFtcGxlIHt9XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtNYXRQYWdpbmF0b3JNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtQYWdpbmF0b3JJbnRsRXhhbXBsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBNYXRQYWdpbmF0b3JJbnRsLCB1c2VDbGFzczogTXlDdXN0b21QYWdpbmF0b3JJbnRsfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvckludGxFeGFtcGxlTW9kdWxlIHt9XG4iLCI8bWF0LXBhZ2luYXRvciBbbGVuZ3RoXT1cIjBcIiBbcGFnZVNpemVPcHRpb25zXT1cIlsxMCwgNTAsIDEwMF1cIj5cbjwvbWF0LXBhZ2luYXRvcj5cbiJdfQ==