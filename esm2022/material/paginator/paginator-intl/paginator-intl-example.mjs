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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: MyCustomPaginatorIntl, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: MyCustomPaginatorIntl }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: MyCustomPaginatorIntl, decorators: [{
            type: Injectable
        }] });
/**
 * @title Paginator internationalization
 */
export class PaginatorIntlExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: PaginatorIntlExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.1", type: PaginatorIntlExample, isStandalone: true, selector: "paginator-intl-example", providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }], ngImport: i0, template: "<mat-paginator [length]=\"200\" [pageSizeOptions]=\"[10, 50, 100]\" aria-label=\"Select page\">\n</mat-paginator>\n", dependencies: [{ kind: "ngmodule", type: MatPaginatorModule }, { kind: "component", type: i1.MatPaginator, selector: "mat-paginator", inputs: ["color", "pageIndex", "length", "pageSize", "pageSizeOptions", "hidePageSize", "showFirstLastButtons", "selectConfig", "disabled"], outputs: ["page"], exportAs: ["matPaginator"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: PaginatorIntlExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-intl-example', standalone: true, imports: [MatPaginatorModule], providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }], template: "<mat-paginator [length]=\"200\" [pageSizeOptions]=\"[10, 50, 100]\" aria-label=\"Select page\">\n</mat-paginator>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWludGwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3BhZ2luYXRvci9wYWdpbmF0b3ItaW50bC9wYWdpbmF0b3ItaW50bC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1pbnRsL3BhZ2luYXRvci1pbnRsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7QUFHN0IsTUFBTSxPQUFPLHFCQUFxQjtJQURsQztRQUVFLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBRTlCLDBEQUEwRDtRQUMxRCwrQ0FBK0M7UUFDL0MsbUJBQWMsR0FBRyxTQUFTLENBQUEsWUFBWSxDQUFDO1FBQ3ZDLHNCQUFpQixHQUFHLFNBQVMsQ0FBQSxpQkFBaUIsQ0FBQztRQUMvQyxrQkFBYSxHQUFHLFNBQVMsQ0FBQSxXQUFXLENBQUM7UUFFckMsd0VBQXdFO1FBQ3hFLCtEQUErRDtRQUMvRCxrQkFBYSxHQUFHLFdBQVcsQ0FBQztRQUM1QixzQkFBaUIsR0FBRyxlQUFlLENBQUM7S0FTckM7SUFQQyxhQUFhLENBQUMsSUFBWSxFQUFFLFFBQWdCLEVBQUUsTUFBYztRQUMxRCxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNqQixPQUFPLFNBQVMsQ0FBQSxhQUFhLENBQUM7UUFDaEMsQ0FBQztRQUNELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sU0FBUyxDQUFBLFFBQVEsSUFBSSxHQUFHLENBQUMsT0FBTyxXQUFXLEVBQUUsQ0FBQztJQUN2RCxDQUFDOzhHQXBCVSxxQkFBcUI7a0hBQXJCLHFCQUFxQjs7MkZBQXJCLHFCQUFxQjtrQkFEakMsVUFBVTs7QUF3Qlg7O0dBRUc7QUFRSCxNQUFNLE9BQU8sb0JBQW9COzhHQUFwQixvQkFBb0I7a0dBQXBCLG9CQUFvQixxRUFGcEIsQ0FBQyxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUMsQ0FBQywwQkNwQzNFLHFIQUVBLDJDRGlDWSxrQkFBa0I7OzJGQUdqQixvQkFBb0I7a0JBUGhDLFNBQVM7K0JBQ0Usd0JBQXdCLGNBRXRCLElBQUksV0FDUCxDQUFDLGtCQUFrQixDQUFDLGFBQ2xCLENBQUMsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFBhZ2luYXRvckludGwsIE1hdFBhZ2luYXRvck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNeUN1c3RvbVBhZ2luYXRvckludGwgaW1wbGVtZW50cyBNYXRQYWdpbmF0b3JJbnRsIHtcbiAgY2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLy8gRm9yIGludGVybmF0aW9uYWxpemF0aW9uLCB0aGUgYCRsb2NhbGl6ZWAgZnVuY3Rpb24gZnJvbVxuICAvLyB0aGUgYEBhbmd1bGFyL2xvY2FsaXplYCBwYWNrYWdlIGNhbiBiZSB1c2VkLlxuICBmaXJzdFBhZ2VMYWJlbCA9ICRsb2NhbGl6ZWBGaXJzdCBwYWdlYDtcbiAgaXRlbXNQZXJQYWdlTGFiZWwgPSAkbG9jYWxpemVgSXRlbXMgcGVyIHBhZ2U6YDtcbiAgbGFzdFBhZ2VMYWJlbCA9ICRsb2NhbGl6ZWBMYXN0IHBhZ2VgO1xuXG4gIC8vIFlvdSBjYW4gc2V0IGxhYmVscyB0byBhbiBhcmJpdHJhcnkgc3RyaW5nIHRvbywgb3IgZHluYW1pY2FsbHkgY29tcHV0ZVxuICAvLyBpdCB0aHJvdWdoIG90aGVyIHRoaXJkLXBhcnR5IGludGVybmF0aW9uYWxpemF0aW9uIGxpYnJhcmllcy5cbiAgbmV4dFBhZ2VMYWJlbCA9ICdOZXh0IHBhZ2UnO1xuICBwcmV2aW91c1BhZ2VMYWJlbCA9ICdQcmV2aW91cyBwYWdlJztcblxuICBnZXRSYW5nZUxhYmVsKHBhZ2U6IG51bWJlciwgcGFnZVNpemU6IG51bWJlciwgbGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAkbG9jYWxpemVgUGFnZSAxIG9mIDFgO1xuICAgIH1cbiAgICBjb25zdCBhbW91bnRQYWdlcyA9IE1hdGguY2VpbChsZW5ndGggLyBwYWdlU2l6ZSk7XG4gICAgcmV0dXJuICRsb2NhbGl6ZWBQYWdlICR7cGFnZSArIDF9IG9mICR7YW1vdW50UGFnZXN9YDtcbiAgfVxufVxuXG4vKipcbiAqIEB0aXRsZSBQYWdpbmF0b3IgaW50ZXJuYXRpb25hbGl6YXRpb25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnaW5hdG9yLWludGwtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAncGFnaW5hdG9yLWludGwtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdFBhZ2luYXRvck1vZHVsZV0sXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBNYXRQYWdpbmF0b3JJbnRsLCB1c2VDbGFzczogTXlDdXN0b21QYWdpbmF0b3JJbnRsfV0sXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvckludGxFeGFtcGxlIHt9XG4iLCI8bWF0LXBhZ2luYXRvciBbbGVuZ3RoXT1cIjIwMFwiIFtwYWdlU2l6ZU9wdGlvbnNdPVwiWzEwLCA1MCwgMTAwXVwiIGFyaWEtbGFiZWw9XCJTZWxlY3QgcGFnZVwiPlxuPC9tYXQtcGFnaW5hdG9yPlxuIl19