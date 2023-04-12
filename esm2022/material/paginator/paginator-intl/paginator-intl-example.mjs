import { Component, Injectable, NgModule } from '@angular/core';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/paginator";
class MyCustomPaginatorIntl {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: MyCustomPaginatorIntl, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: MyCustomPaginatorIntl }); }
}
export { MyCustomPaginatorIntl };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: MyCustomPaginatorIntl, decorators: [{
            type: Injectable
        }] });
/**
 * @title Paginator internationalization
 */
class PaginatorIntlExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: PaginatorIntlExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: PaginatorIntlExample, selector: "paginator-intl-example", ngImport: i0, template: "<mat-paginator [length]=\"200\" [pageSizeOptions]=\"[10, 50, 100]\" aria-label=\"Select page\">\n</mat-paginator>\n", dependencies: [{ kind: "component", type: i1.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }] }); }
}
export { PaginatorIntlExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: PaginatorIntlExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-intl-example', template: "<mat-paginator [length]=\"200\" [pageSizeOptions]=\"[10, 50, 100]\" aria-label=\"Select page\">\n</mat-paginator>\n" }]
        }] });
class PaginatorIntlExampleModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: PaginatorIntlExampleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0-next.7", ngImport: i0, type: PaginatorIntlExampleModule, declarations: [PaginatorIntlExample], imports: [MatPaginatorModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: PaginatorIntlExampleModule, providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }], imports: [MatPaginatorModule] }); }
}
export { PaginatorIntlExampleModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: PaginatorIntlExampleModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatPaginatorModule],
                    declarations: [PaginatorIntlExample],
                    providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWludGwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3BhZ2luYXRvci9wYWdpbmF0b3ItaW50bC9wYWdpbmF0b3ItaW50bC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1pbnRsL3BhZ2luYXRvci1pbnRsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFDLGdCQUFnQixFQUFFLGtCQUFrQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDakYsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQzs7O0FBRTdCLE1BQ2EscUJBQXFCO0lBRGxDO1FBRUUsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFOUIsMERBQTBEO1FBQzFELCtDQUErQztRQUMvQyxtQkFBYyxHQUFHLFNBQVMsQ0FBQSxZQUFZLENBQUM7UUFDdkMsc0JBQWlCLEdBQUcsU0FBUyxDQUFBLGlCQUFpQixDQUFDO1FBQy9DLGtCQUFhLEdBQUcsU0FBUyxDQUFBLFdBQVcsQ0FBQztRQUVyQyx3RUFBd0U7UUFDeEUsK0RBQStEO1FBQy9ELGtCQUFhLEdBQUcsV0FBVyxDQUFDO1FBQzVCLHNCQUFpQixHQUFHLGVBQWUsQ0FBQztLQVNyQztJQVBDLGFBQWEsQ0FBQyxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxNQUFjO1FBQzFELElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNoQixPQUFPLFNBQVMsQ0FBQSxhQUFhLENBQUM7U0FDL0I7UUFDRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQztRQUNqRCxPQUFPLFNBQVMsQ0FBQSxRQUFRLElBQUksR0FBRyxDQUFDLE9BQU8sV0FBVyxFQUFFLENBQUM7SUFDdkQsQ0FBQztxSEFwQlUscUJBQXFCO3lIQUFyQixxQkFBcUI7O1NBQXJCLHFCQUFxQjtrR0FBckIscUJBQXFCO2tCQURqQyxVQUFVOztBQXdCWDs7R0FFRztBQUNILE1BSWEsb0JBQW9CO3FIQUFwQixvQkFBb0I7eUdBQXBCLG9CQUFvQiw4RENuQ2pDLHFIQUVBOztTRGlDYSxvQkFBb0I7a0dBQXBCLG9CQUFvQjtrQkFKaEMsU0FBUzsrQkFDRSx3QkFBd0I7O0FBS3BDLE1BS2EsMEJBQTBCO3FIQUExQiwwQkFBMEI7c0hBQTFCLDBCQUEwQixpQkFQMUIsb0JBQW9CLGFBR3JCLGtCQUFrQjtzSEFJakIsMEJBQTBCLGFBRjFCLENBQUMsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFDLENBQUMsWUFGL0Qsa0JBQWtCOztTQUlqQiwwQkFBMEI7a0dBQTFCLDBCQUEwQjtrQkFMdEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDN0IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3BDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBQyxDQUFDO2lCQUMxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFBhZ2luYXRvckludGwsIE1hdFBhZ2luYXRvck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNeUN1c3RvbVBhZ2luYXRvckludGwgaW1wbGVtZW50cyBNYXRQYWdpbmF0b3JJbnRsIHtcbiAgY2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLy8gRm9yIGludGVybmF0aW9uYWxpemF0aW9uLCB0aGUgYCRsb2NhbGl6ZWAgZnVuY3Rpb24gZnJvbVxuICAvLyB0aGUgYEBhbmd1bGFyL2xvY2FsaXplYCBwYWNrYWdlIGNhbiBiZSB1c2VkLlxuICBmaXJzdFBhZ2VMYWJlbCA9ICRsb2NhbGl6ZWBGaXJzdCBwYWdlYDtcbiAgaXRlbXNQZXJQYWdlTGFiZWwgPSAkbG9jYWxpemVgSXRlbXMgcGVyIHBhZ2U6YDtcbiAgbGFzdFBhZ2VMYWJlbCA9ICRsb2NhbGl6ZWBMYXN0IHBhZ2VgO1xuXG4gIC8vIFlvdSBjYW4gc2V0IGxhYmVscyB0byBhbiBhcmJpdHJhcnkgc3RyaW5nIHRvbywgb3IgZHluYW1pY2FsbHkgY29tcHV0ZVxuICAvLyBpdCB0aHJvdWdoIG90aGVyIHRoaXJkLXBhcnR5IGludGVybmF0aW9uYWxpemF0aW9uIGxpYnJhcmllcy5cbiAgbmV4dFBhZ2VMYWJlbCA9ICdOZXh0IHBhZ2UnO1xuICBwcmV2aW91c1BhZ2VMYWJlbCA9ICdQcmV2aW91cyBwYWdlJztcblxuICBnZXRSYW5nZUxhYmVsKHBhZ2U6IG51bWJlciwgcGFnZVNpemU6IG51bWJlciwgbGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAkbG9jYWxpemVgUGFnZSAxIG9mIDFgO1xuICAgIH1cbiAgICBjb25zdCBhbW91bnRQYWdlcyA9IE1hdGguY2VpbChsZW5ndGggLyBwYWdlU2l6ZSk7XG4gICAgcmV0dXJuICRsb2NhbGl6ZWBQYWdlICR7cGFnZSArIDF9IG9mICR7YW1vdW50UGFnZXN9YDtcbiAgfVxufVxuXG4vKipcbiAqIEB0aXRsZSBQYWdpbmF0b3IgaW50ZXJuYXRpb25hbGl6YXRpb25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnaW5hdG9yLWludGwtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAncGFnaW5hdG9yLWludGwtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9ySW50bEV4YW1wbGUge31cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW01hdFBhZ2luYXRvck1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1BhZ2luYXRvckludGxFeGFtcGxlXSxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE1hdFBhZ2luYXRvckludGwsIHVzZUNsYXNzOiBNeUN1c3RvbVBhZ2luYXRvckludGx9XSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9ySW50bEV4YW1wbGVNb2R1bGUge31cbiIsIjxtYXQtcGFnaW5hdG9yIFtsZW5ndGhdPVwiMjAwXCIgW3BhZ2VTaXplT3B0aW9uc109XCJbMTAsIDUwLCAxMDBdXCIgYXJpYS1sYWJlbD1cIlNlbGVjdCBwYWdlXCI+XG48L21hdC1wYWdpbmF0b3I+XG4iXX0=