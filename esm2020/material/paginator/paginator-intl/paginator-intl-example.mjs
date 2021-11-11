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
MyCustomPaginatorIntl.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: MyCustomPaginatorIntl, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MyCustomPaginatorIntl.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: MyCustomPaginatorIntl });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: MyCustomPaginatorIntl, decorators: [{
            type: Injectable
        }] });
/**
 * @title Paginator internationalization
 */
export class PaginatorIntlExample {
}
PaginatorIntlExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: PaginatorIntlExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
PaginatorIntlExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.1", type: PaginatorIntlExample, selector: "paginator-intl-example", ngImport: i0, template: "<mat-paginator [length]=\"200\" [pageSizeOptions]=\"[10, 50, 100]\" aria-label=\"Select page\">\n</mat-paginator>\n", components: [{ type: i1.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: PaginatorIntlExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-intl-example', template: "<mat-paginator [length]=\"200\" [pageSizeOptions]=\"[10, 50, 100]\" aria-label=\"Select page\">\n</mat-paginator>\n" }]
        }] });
export class PaginatorIntlExampleModule {
}
PaginatorIntlExampleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: PaginatorIntlExampleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PaginatorIntlExampleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: PaginatorIntlExampleModule, declarations: [PaginatorIntlExample], imports: [MatPaginatorModule] });
PaginatorIntlExampleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: PaginatorIntlExampleModule, providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }], imports: [[MatPaginatorModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: PaginatorIntlExampleModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatPaginatorModule],
                    declarations: [PaginatorIntlExample],
                    providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWludGwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3BhZ2luYXRvci9wYWdpbmF0b3ItaW50bC9wYWdpbmF0b3ItaW50bC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1pbnRsL3BhZ2luYXRvci1pbnRsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFDLGdCQUFnQixFQUFFLGtCQUFrQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDakYsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQzs7O0FBRzdCLE1BQU0sT0FBTyxxQkFBcUI7SUFEbEM7UUFFRSxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUU5QiwwREFBMEQ7UUFDMUQsK0NBQStDO1FBQy9DLG1CQUFjLEdBQUcsU0FBUyxDQUFBLFlBQVksQ0FBQztRQUN2QyxzQkFBaUIsR0FBRyxTQUFTLENBQUEsaUJBQWlCLENBQUM7UUFDL0Msa0JBQWEsR0FBRyxTQUFTLENBQUEsV0FBVyxDQUFDO1FBRXJDLHdFQUF3RTtRQUN4RSwrREFBK0Q7UUFDL0Qsa0JBQWEsR0FBRyxXQUFXLENBQUM7UUFDNUIsc0JBQWlCLEdBQUcsZUFBZSxDQUFDO0tBU3JDO0lBUEMsYUFBYSxDQUFDLElBQVksRUFBRSxRQUFnQixFQUFFLE1BQWM7UUFDMUQsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sU0FBUyxDQUFBLGFBQWEsQ0FBQztTQUMvQjtRQUNELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sU0FBUyxDQUFBLFFBQVEsSUFBSSxHQUFHLENBQUMsT0FBTyxXQUFXLEVBQUUsQ0FBQztJQUN2RCxDQUFDOztrSEFwQlUscUJBQXFCO3NIQUFyQixxQkFBcUI7MkZBQXJCLHFCQUFxQjtrQkFEakMsVUFBVTs7QUF3Qlg7O0dBRUc7QUFLSCxNQUFNLE9BQU8sb0JBQW9COztpSEFBcEIsb0JBQW9CO3FHQUFwQixvQkFBb0IsOERDbkNqQyxxSEFFQTsyRkRpQ2Esb0JBQW9CO2tCQUpoQyxTQUFTOytCQUNFLHdCQUF3Qjs7QUFVcEMsTUFBTSxPQUFPLDBCQUEwQjs7dUhBQTFCLDBCQUEwQjt3SEFBMUIsMEJBQTBCLGlCQVAxQixvQkFBb0IsYUFHckIsa0JBQWtCO3dIQUlqQiwwQkFBMEIsYUFGMUIsQ0FBQyxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUMsQ0FBQyxZQUZoRSxDQUFDLGtCQUFrQixDQUFDOzJGQUlsQiwwQkFBMEI7a0JBTHRDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQzdCLFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUNwQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUMsQ0FBQztpQkFDMUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZSwgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRQYWdpbmF0b3JJbnRsLCBNYXRQYWdpbmF0b3JNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTXlDdXN0b21QYWdpbmF0b3JJbnRsIGltcGxlbWVudHMgTWF0UGFnaW5hdG9ySW50bCB7XG4gIGNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8vIEZvciBpbnRlcm5hdGlvbmFsaXphdGlvbiwgdGhlIGAkbG9jYWxpemVgIGZ1bmN0aW9uIGZyb21cbiAgLy8gdGhlIGBAYW5ndWxhci9sb2NhbGl6ZWAgcGFja2FnZSBjYW4gYmUgdXNlZC5cbiAgZmlyc3RQYWdlTGFiZWwgPSAkbG9jYWxpemVgRmlyc3QgcGFnZWA7XG4gIGl0ZW1zUGVyUGFnZUxhYmVsID0gJGxvY2FsaXplYEl0ZW1zIHBlciBwYWdlOmA7XG4gIGxhc3RQYWdlTGFiZWwgPSAkbG9jYWxpemVgTGFzdCBwYWdlYDtcblxuICAvLyBZb3UgY2FuIHNldCBsYWJlbHMgdG8gYW4gYXJiaXRyYXJ5IHN0cmluZyB0b28sIG9yIGR5bmFtaWNhbGx5IGNvbXB1dGVcbiAgLy8gaXQgdGhyb3VnaCBvdGhlciB0aGlyZC1wYXJ0eSBpbnRlcm5hdGlvbmFsaXphdGlvbiBsaWJyYXJpZXMuXG4gIG5leHRQYWdlTGFiZWwgPSAnTmV4dCBwYWdlJztcbiAgcHJldmlvdXNQYWdlTGFiZWwgPSAnUHJldmlvdXMgcGFnZSc7XG5cbiAgZ2V0UmFuZ2VMYWJlbChwYWdlOiBudW1iZXIsIHBhZ2VTaXplOiBudW1iZXIsIGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gJGxvY2FsaXplYFBhZ2UgMSBvZiAxYDtcbiAgICB9XG4gICAgY29uc3QgYW1vdW50UGFnZXMgPSBNYXRoLmNlaWwobGVuZ3RoIC8gcGFnZVNpemUpO1xuICAgIHJldHVybiAkbG9jYWxpemVgUGFnZSAke3BhZ2UgKyAxfSBvZiAke2Ftb3VudFBhZ2VzfWA7XG4gIH1cbn1cblxuLyoqXG4gKiBAdGl0bGUgUGFnaW5hdG9yIGludGVybmF0aW9uYWxpemF0aW9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2luYXRvci1pbnRsLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3BhZ2luYXRvci1pbnRsLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvckludGxFeGFtcGxlIHt9XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtNYXRQYWdpbmF0b3JNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtQYWdpbmF0b3JJbnRsRXhhbXBsZV0sXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBNYXRQYWdpbmF0b3JJbnRsLCB1c2VDbGFzczogTXlDdXN0b21QYWdpbmF0b3JJbnRsfV0sXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvckludGxFeGFtcGxlTW9kdWxlIHt9XG4iLCI8bWF0LXBhZ2luYXRvciBbbGVuZ3RoXT1cIjIwMFwiIFtwYWdlU2l6ZU9wdGlvbnNdPVwiWzEwLCA1MCwgMTAwXVwiIGFyaWEtbGFiZWw9XCJTZWxlY3QgcGFnZVwiPlxuPC9tYXQtcGFnaW5hdG9yPlxuIl19