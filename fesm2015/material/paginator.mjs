import * as i5 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, Injectable, NgModule } from '@angular/core';
import * as i4 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i3 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i1$1 from '@angular/material/paginator';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import * as i1 from '@angular/material/form-field';
import { Subject } from 'rxjs';

/**
 * @title Configurable paginator
 */
class PaginatorConfigurableExample {
    constructor() {
        // MatPaginator Inputs
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    setPageSizeOptions(setPageSizeOptionsInput) {
        if (setPageSizeOptionsInput) {
            this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
        }
    }
}
PaginatorConfigurableExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: PaginatorConfigurableExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
PaginatorConfigurableExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0-next.3", type: PaginatorConfigurableExample, selector: "paginator-configurable-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>List length</mat-label>\n  <input matInput [(ngModel)]=\"length\" type=\"number\">\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\">\n  <mat-label>Page size</mat-label>\n  <input matInput [(ngModel)]=\"pageSize\" type=\"number\">\n</mat-form-field>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Page size options</mat-label>\n  <input matInput [ngModel]=\"pageSizeOptions\" (ngModelChange)=\"setPageSizeOptions($event)\"\n         [ngModelOptions]=\"{updateOn: 'blur'}\" placeholder=\"Ex. 10,25,50\">\n</mat-form-field>\n\n<mat-paginator [length]=\"length\"\n               [pageSize]=\"pageSize\"\n               [pageSizeOptions]=\"pageSizeOptions\"\n               (page)=\"pageEvent = $event\"\n               aria-label=\"Select page\">\n</mat-paginator>\n\n<div *ngIf=\"pageEvent\">\n  <h5>Page Change Event Properties</h5>\n  <div>List length: {{pageEvent.length}}</div>\n  <div>Page size: {{pageEvent.pageSize}}</div>\n  <div>Page index: {{pageEvent.pageIndex}}</div>\n</div>\n", styles: [".mat-form-field {\n  margin-right: 12px;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i1$1.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i4.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: PaginatorConfigurableExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-configurable-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>List length</mat-label>\n  <input matInput [(ngModel)]=\"length\" type=\"number\">\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\">\n  <mat-label>Page size</mat-label>\n  <input matInput [(ngModel)]=\"pageSize\" type=\"number\">\n</mat-form-field>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Page size options</mat-label>\n  <input matInput [ngModel]=\"pageSizeOptions\" (ngModelChange)=\"setPageSizeOptions($event)\"\n         [ngModelOptions]=\"{updateOn: 'blur'}\" placeholder=\"Ex. 10,25,50\">\n</mat-form-field>\n\n<mat-paginator [length]=\"length\"\n               [pageSize]=\"pageSize\"\n               [pageSizeOptions]=\"pageSizeOptions\"\n               (page)=\"pageEvent = $event\"\n               aria-label=\"Select page\">\n</mat-paginator>\n\n<div *ngIf=\"pageEvent\">\n  <h5>Page Change Event Properties</h5>\n  <div>List length: {{pageEvent.length}}</div>\n  <div>Page size: {{pageEvent.pageSize}}</div>\n  <div>Page index: {{pageEvent.pageIndex}}</div>\n</div>\n", styles: [".mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }] });

/**
 * @title Paginator
 */
class PaginatorOverviewExample {
}
PaginatorOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: PaginatorOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
PaginatorOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0-next.3", type: PaginatorOverviewExample, selector: "paginator-overview-example", ngImport: i0, template: "<mat-paginator [length]=\"100\"\n              [pageSize]=\"10\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\"\n              aria-label=\"Select page\">\n</mat-paginator>\n", components: [{ type: i1$1.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: PaginatorOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-overview-example', template: "<mat-paginator [length]=\"100\"\n              [pageSize]=\"10\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\"\n              aria-label=\"Select page\">\n</mat-paginator>\n" }]
        }] });

/**
 * @title Testing with MatPaginatorHarness
 */
class PaginatorHarnessExample {
    constructor() {
        this.length = 500;
        this.pageSize = 10;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25];
        this.showFirstLastButtons = true;
    }
    handlePageEvent(event) {
        this.length = event.length;
        this.pageSize = event.pageSize;
        this.pageIndex = event.pageIndex;
    }
}
PaginatorHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: PaginatorHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
PaginatorHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0-next.3", type: PaginatorHarnessExample, selector: "paginator-harness-example", ngImport: i0, template: "<mat-paginator\n    (page)=\"handlePageEvent($event)\"\n    [length]=\"length\"\n    [pageSize]=\"pageSize\"\n    [showFirstLastButtons]=\"showFirstLastButtons\"\n    [pageSizeOptions]=\"pageSizeOptions\"\n    [pageIndex]=\"pageIndex\"\n    aria-label=\"Select page\">\n</mat-paginator>\n", components: [{ type: i1$1.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: PaginatorHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-harness-example', template: "<mat-paginator\n    (page)=\"handlePageEvent($event)\"\n    [length]=\"length\"\n    [pageSize]=\"pageSize\"\n    [showFirstLastButtons]=\"showFirstLastButtons\"\n    [pageSizeOptions]=\"pageSizeOptions\"\n    [pageIndex]=\"pageIndex\"\n    aria-label=\"Select page\">\n</mat-paginator>\n" }]
        }] });

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
}
MyCustomPaginatorIntl.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: MyCustomPaginatorIntl, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MyCustomPaginatorIntl.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: MyCustomPaginatorIntl });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: MyCustomPaginatorIntl, decorators: [{
            type: Injectable
        }] });
/**
 * @title Paginator internationalization
 */
class PaginatorIntlExample {
}
PaginatorIntlExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: PaginatorIntlExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
PaginatorIntlExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0-next.3", type: PaginatorIntlExample, selector: "paginator-intl-example", ngImport: i0, template: "<mat-paginator [length]=\"200\" [pageSizeOptions]=\"[10, 50, 100]\" aria-label=\"Select page\">\n</mat-paginator>\n", components: [{ type: i1$1.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: PaginatorIntlExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-intl-example', template: "<mat-paginator [length]=\"200\" [pageSizeOptions]=\"[10, 50, 100]\" aria-label=\"Select page\">\n</mat-paginator>\n" }]
        }] });
class PaginatorIntlExampleModule {
}
PaginatorIntlExampleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: PaginatorIntlExampleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PaginatorIntlExampleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: PaginatorIntlExampleModule, declarations: [PaginatorIntlExample], imports: [MatPaginatorModule] });
PaginatorIntlExampleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: PaginatorIntlExampleModule, providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }], imports: [[MatPaginatorModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: PaginatorIntlExampleModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatPaginatorModule],
                    declarations: [PaginatorIntlExample],
                    providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }],
                }]
        }] });

const EXAMPLES = [
    PaginatorConfigurableExample,
    PaginatorHarnessExample,
    // PaginatorIntlExample is imported through it's own example module.
    PaginatorOverviewExample,
];
class PaginatorExamplesModule {
}
PaginatorExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: PaginatorExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PaginatorExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: PaginatorExamplesModule, declarations: [PaginatorConfigurableExample,
        PaginatorHarnessExample,
        // PaginatorIntlExample is imported through it's own example module.
        PaginatorOverviewExample], imports: [CommonModule,
        MatInputModule,
        MatPaginatorModule,
        PaginatorIntlExampleModule,
        FormsModule], exports: [PaginatorConfigurableExample,
        PaginatorHarnessExample,
        // PaginatorIntlExample is imported through it's own example module.
        PaginatorOverviewExample] });
PaginatorExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: PaginatorExamplesModule, imports: [[
            CommonModule,
            MatInputModule,
            MatPaginatorModule,
            PaginatorIntlExampleModule,
            FormsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: PaginatorExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatInputModule,
                        MatPaginatorModule,
                        PaginatorIntlExampleModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { PaginatorConfigurableExample, PaginatorExamplesModule, PaginatorHarnessExample, PaginatorIntlExample, PaginatorOverviewExample };
//# sourceMappingURL=paginator.mjs.map
