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
        args: [{ selector: 'paginator-intl-example', template: "<mat-paginator [length]=\"200\" [pageSizeOptions]=\"[10, 50, 100]\" aria-label=\"Select page\">\n</mat-paginator>\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWludGwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3BhZ2luYXRvci9wYWdpbmF0b3ItaW50bC9wYWdpbmF0b3ItaW50bC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1pbnRsL3BhZ2luYXRvci1pbnRsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFDLGdCQUFnQixFQUFFLGtCQUFrQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDakYsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQzs7OztBQUc3QixNQUFNLE9BQU8scUJBQXFCO0lBRGxDO1FBRUUsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFOUIsMERBQTBEO1FBQzFELCtDQUErQztRQUMvQyxtQkFBYyxHQUFHLFNBQVMsQ0FBQSxZQUFZLENBQUM7UUFDdkMsc0JBQWlCLEdBQUcsU0FBUyxDQUFBLGlCQUFpQixDQUFDO1FBQy9DLGtCQUFhLEdBQUcsU0FBUyxDQUFBLFdBQVcsQ0FBQztRQUVyQyx3RUFBd0U7UUFDeEUsK0RBQStEO1FBQy9ELGtCQUFhLEdBQUcsV0FBVyxDQUFDO1FBQzVCLHNCQUFpQixHQUFHLGVBQWUsQ0FBQztLQVNyQztJQVBDLGFBQWEsQ0FBQyxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxNQUFjO1FBQzFELElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNoQixPQUFPLFNBQVMsQ0FBQSxhQUFhLENBQUM7U0FDL0I7UUFDRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQztRQUNqRCxPQUFPLFNBQVMsQ0FBQSxRQUFRLElBQUksR0FBRyxDQUFDLE9BQU8sV0FBVyxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7MEZBcEJVLHFCQUFxQjsyRUFBckIscUJBQXFCLFdBQXJCLHFCQUFxQjt1RkFBckIscUJBQXFCO2NBRGpDLFVBQVU7O0FBd0JYOztHQUVHO0FBS0gsTUFBTSxPQUFPLG9CQUFvQjs7d0ZBQXBCLG9CQUFvQjt1RUFBcEIsb0JBQW9CO1FDbkNqQyxtQ0FDZ0I7O1FBREQsNEJBQWMsK0NBQUE7O3VGRG1DaEIsb0JBQW9CO2NBSmhDLFNBQVM7MkJBQ0Usd0JBQXdCOztBQVlwQyxNQUFNLE9BQU8sMEJBQTBCOztvR0FBMUIsMEJBQTBCOzRFQUExQiwwQkFBMEI7aUZBSjFCO1FBQ1QsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFDO0tBQzdELFlBSlEsQ0FBQyxrQkFBa0IsQ0FBQzt1RkFNbEIsMEJBQTBCO2NBUHRDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDN0IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQ3BDLFNBQVMsRUFBRTtvQkFDVCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUM7aUJBQzdEO2FBQ0Y7O3dGQUNZLDBCQUEwQixtQkFUMUIsb0JBQW9CLGFBR3JCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFBhZ2luYXRvckludGwsIE1hdFBhZ2luYXRvck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNeUN1c3RvbVBhZ2luYXRvckludGwgaW1wbGVtZW50cyBNYXRQYWdpbmF0b3JJbnRsIHtcbiAgY2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLy8gRm9yIGludGVybmF0aW9uYWxpemF0aW9uLCB0aGUgYCRsb2NhbGl6ZWAgZnVuY3Rpb24gZnJvbVxuICAvLyB0aGUgYEBhbmd1bGFyL2xvY2FsaXplYCBwYWNrYWdlIGNhbiBiZSB1c2VkLlxuICBmaXJzdFBhZ2VMYWJlbCA9ICRsb2NhbGl6ZWBGaXJzdCBwYWdlYDtcbiAgaXRlbXNQZXJQYWdlTGFiZWwgPSAkbG9jYWxpemVgSXRlbXMgcGVyIHBhZ2U6YDtcbiAgbGFzdFBhZ2VMYWJlbCA9ICRsb2NhbGl6ZWBMYXN0IHBhZ2VgO1xuXG4gIC8vIFlvdSBjYW4gc2V0IGxhYmVscyB0byBhbiBhcmJpdHJhcnkgc3RyaW5nIHRvbywgb3IgZHluYW1pY2FsbHkgY29tcHV0ZVxuICAvLyBpdCB0aHJvdWdoIG90aGVyIHRoaXJkLXBhcnR5IGludGVybmF0aW9uYWxpemF0aW9uIGxpYnJhcmllcy5cbiAgbmV4dFBhZ2VMYWJlbCA9ICdOZXh0IHBhZ2UnO1xuICBwcmV2aW91c1BhZ2VMYWJlbCA9ICdQcmV2aW91cyBwYWdlJztcblxuICBnZXRSYW5nZUxhYmVsKHBhZ2U6IG51bWJlciwgcGFnZVNpemU6IG51bWJlciwgbGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAkbG9jYWxpemVgUGFnZSAxIG9mIDFgO1xuICAgIH1cbiAgICBjb25zdCBhbW91bnRQYWdlcyA9IE1hdGguY2VpbChsZW5ndGggLyBwYWdlU2l6ZSk7XG4gICAgcmV0dXJuICRsb2NhbGl6ZWBQYWdlICR7cGFnZSArIDF9IG9mICR7YW1vdW50UGFnZXN9YDtcbiAgfVxufVxuXG4vKipcbiAqIEB0aXRsZSBQYWdpbmF0b3IgaW50ZXJuYXRpb25hbGl6YXRpb25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnaW5hdG9yLWludGwtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAncGFnaW5hdG9yLWludGwtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9ySW50bEV4YW1wbGUge31cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW01hdFBhZ2luYXRvck1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1BhZ2luYXRvckludGxFeGFtcGxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge3Byb3ZpZGU6IE1hdFBhZ2luYXRvckludGwsIHVzZUNsYXNzOiBNeUN1c3RvbVBhZ2luYXRvckludGx9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9ySW50bEV4YW1wbGVNb2R1bGUge31cbiIsIjxtYXQtcGFnaW5hdG9yIFtsZW5ndGhdPVwiMjAwXCIgW3BhZ2VTaXplT3B0aW9uc109XCJbMTAsIDUwLCAxMDBdXCIgYXJpYS1sYWJlbD1cIlNlbGVjdCBwYWdlXCI+XG48L21hdC1wYWdpbmF0b3I+XG4iXX0=