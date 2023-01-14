import { Component, Injectable, NgModule } from '@angular/core';
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
}
MyCustomPaginatorIntl.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0", ngImport: i0, type: MyCustomPaginatorIntl, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MyCustomPaginatorIntl.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.0", ngImport: i0, type: MyCustomPaginatorIntl });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0", ngImport: i0, type: MyCustomPaginatorIntl, decorators: [{
            type: Injectable
        }] });
/**
 * @title Paginator internationalization
 */
export class PaginatorIntlExample {
}
PaginatorIntlExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0", ngImport: i0, type: PaginatorIntlExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
PaginatorIntlExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0", type: PaginatorIntlExample, selector: "paginator-intl-example", ngImport: i0, template: "<mat-paginator [length]=\"200\" [pageSizeOptions]=\"[10, 50, 100]\" aria-label=\"Select page\">\n</mat-paginator>\n", dependencies: [{ kind: "component", type: i1.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0", ngImport: i0, type: PaginatorIntlExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-intl-example', template: "<mat-paginator [length]=\"200\" [pageSizeOptions]=\"[10, 50, 100]\" aria-label=\"Select page\">\n</mat-paginator>\n" }]
        }] });
export class PaginatorIntlExampleModule {
}
PaginatorIntlExampleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0", ngImport: i0, type: PaginatorIntlExampleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PaginatorIntlExampleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.0", ngImport: i0, type: PaginatorIntlExampleModule, declarations: [PaginatorIntlExample], imports: [MatPaginatorModule] });
PaginatorIntlExampleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.0", ngImport: i0, type: PaginatorIntlExampleModule, providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }], imports: [MatPaginatorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0", ngImport: i0, type: PaginatorIntlExampleModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatPaginatorModule],
                    declarations: [PaginatorIntlExample],
                    providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWludGwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3BhZ2luYXRvci9wYWdpbmF0b3ItaW50bC9wYWdpbmF0b3ItaW50bC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1pbnRsL3BhZ2luYXRvci1pbnRsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFDLGdCQUFnQixFQUFFLGtCQUFrQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDakYsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQzs7O0FBRzdCLE1BQU0sT0FBTyxxQkFBcUI7SUFEbEM7UUFFRSxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUU5QiwwREFBMEQ7UUFDMUQsK0NBQStDO1FBQy9DLG1CQUFjLEdBQUcsU0FBUyxDQUFBLFlBQVksQ0FBQztRQUN2QyxzQkFBaUIsR0FBRyxTQUFTLENBQUEsaUJBQWlCLENBQUM7UUFDL0Msa0JBQWEsR0FBRyxTQUFTLENBQUEsV0FBVyxDQUFDO1FBRXJDLHdFQUF3RTtRQUN4RSwrREFBK0Q7UUFDL0Qsa0JBQWEsR0FBRyxXQUFXLENBQUM7UUFDNUIsc0JBQWlCLEdBQUcsZUFBZSxDQUFDO0tBU3JDO0lBUEMsYUFBYSxDQUFDLElBQVksRUFBRSxRQUFnQixFQUFFLE1BQWM7UUFDMUQsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sU0FBUyxDQUFBLGFBQWEsQ0FBQztTQUMvQjtRQUNELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sU0FBUyxDQUFBLFFBQVEsSUFBSSxHQUFHLENBQUMsT0FBTyxXQUFXLEVBQUUsQ0FBQztJQUN2RCxDQUFDOztrSEFwQlUscUJBQXFCO3NIQUFyQixxQkFBcUI7MkZBQXJCLHFCQUFxQjtrQkFEakMsVUFBVTs7QUF3Qlg7O0dBRUc7QUFLSCxNQUFNLE9BQU8sb0JBQW9COztpSEFBcEIsb0JBQW9CO3FHQUFwQixvQkFBb0IsOERDbkNqQyxxSEFFQTsyRkRpQ2Esb0JBQW9CO2tCQUpoQyxTQUFTOytCQUNFLHdCQUF3Qjs7QUFVcEMsTUFBTSxPQUFPLDBCQUEwQjs7dUhBQTFCLDBCQUEwQjt3SEFBMUIsMEJBQTBCLGlCQVAxQixvQkFBb0IsYUFHckIsa0JBQWtCO3dIQUlqQiwwQkFBMEIsYUFGMUIsQ0FBQyxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUMsQ0FBQyxZQUYvRCxrQkFBa0I7MkZBSWpCLDBCQUEwQjtrQkFMdEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDN0IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3BDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBQyxDQUFDO2lCQUMxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFBhZ2luYXRvckludGwsIE1hdFBhZ2luYXRvck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNeUN1c3RvbVBhZ2luYXRvckludGwgaW1wbGVtZW50cyBNYXRQYWdpbmF0b3JJbnRsIHtcbiAgY2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLy8gRm9yIGludGVybmF0aW9uYWxpemF0aW9uLCB0aGUgYCRsb2NhbGl6ZWAgZnVuY3Rpb24gZnJvbVxuICAvLyB0aGUgYEBhbmd1bGFyL2xvY2FsaXplYCBwYWNrYWdlIGNhbiBiZSB1c2VkLlxuICBmaXJzdFBhZ2VMYWJlbCA9ICRsb2NhbGl6ZWBGaXJzdCBwYWdlYDtcbiAgaXRlbXNQZXJQYWdlTGFiZWwgPSAkbG9jYWxpemVgSXRlbXMgcGVyIHBhZ2U6YDtcbiAgbGFzdFBhZ2VMYWJlbCA9ICRsb2NhbGl6ZWBMYXN0IHBhZ2VgO1xuXG4gIC8vIFlvdSBjYW4gc2V0IGxhYmVscyB0byBhbiBhcmJpdHJhcnkgc3RyaW5nIHRvbywgb3IgZHluYW1pY2FsbHkgY29tcHV0ZVxuICAvLyBpdCB0aHJvdWdoIG90aGVyIHRoaXJkLXBhcnR5IGludGVybmF0aW9uYWxpemF0aW9uIGxpYnJhcmllcy5cbiAgbmV4dFBhZ2VMYWJlbCA9ICdOZXh0IHBhZ2UnO1xuICBwcmV2aW91c1BhZ2VMYWJlbCA9ICdQcmV2aW91cyBwYWdlJztcblxuICBnZXRSYW5nZUxhYmVsKHBhZ2U6IG51bWJlciwgcGFnZVNpemU6IG51bWJlciwgbGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAkbG9jYWxpemVgUGFnZSAxIG9mIDFgO1xuICAgIH1cbiAgICBjb25zdCBhbW91bnRQYWdlcyA9IE1hdGguY2VpbChsZW5ndGggLyBwYWdlU2l6ZSk7XG4gICAgcmV0dXJuICRsb2NhbGl6ZWBQYWdlICR7cGFnZSArIDF9IG9mICR7YW1vdW50UGFnZXN9YDtcbiAgfVxufVxuXG4vKipcbiAqIEB0aXRsZSBQYWdpbmF0b3IgaW50ZXJuYXRpb25hbGl6YXRpb25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnaW5hdG9yLWludGwtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAncGFnaW5hdG9yLWludGwtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9ySW50bEV4YW1wbGUge31cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW01hdFBhZ2luYXRvck1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1BhZ2luYXRvckludGxFeGFtcGxlXSxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE1hdFBhZ2luYXRvckludGwsIHVzZUNsYXNzOiBNeUN1c3RvbVBhZ2luYXRvckludGx9XSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9ySW50bEV4YW1wbGVNb2R1bGUge31cbiIsIjxtYXQtcGFnaW5hdG9yIFtsZW5ndGhdPVwiMjAwXCIgW3BhZ2VTaXplT3B0aW9uc109XCJbMTAsIDUwLCAxMDBdXCIgYXJpYS1sYWJlbD1cIlNlbGVjdCBwYWdlXCI+XG48L21hdC1wYWdpbmF0b3I+XG4iXX0=