import * as i5 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, Injectable, NgModule } from '@angular/core';
import * as i3 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i2 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i1$1 from '@angular/material/paginator';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import * as i1 from '@angular/material/form-field';
import { Subject } from 'rxjs';

function PaginatorConfigurableExample_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "h5");
    i0.ɵɵtext(2, "Page Change Event Properties");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("List length: ", ctx_r0.pageEvent.length, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Page size: ", ctx_r0.pageEvent.pageSize, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Page index: ", ctx_r0.pageEvent.pageIndex, "");
} }
const _c0$2 = function () { return { updateOn: "blur" }; };
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
PaginatorConfigurableExample.ɵfac = function PaginatorConfigurableExample_Factory(t) { return new (t || PaginatorConfigurableExample)(); };
PaginatorConfigurableExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaginatorConfigurableExample, selectors: [["paginator-configurable-example"]], decls: 14, vars: 9, consts: [["appearance", "fill"], ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ex. 10,25,50", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "length", "pageSize", "pageSizeOptions", "page"], [4, "ngIf"]], template: function PaginatorConfigurableExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "List length");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "input", 1);
        i0.ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_3_listener($event) { return ctx.length = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-form-field", 0);
        i0.ɵɵelementStart(5, "mat-label");
        i0.ɵɵtext(6, "Page size");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "input", 1);
        i0.ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_7_listener($event) { return ctx.pageSize = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-form-field", 0);
        i0.ɵɵelementStart(9, "mat-label");
        i0.ɵɵtext(10, "Page size options");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "input", 2);
        i0.ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_11_listener($event) { return ctx.setPageSizeOptions($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-paginator", 3);
        i0.ɵɵlistener("page", function PaginatorConfigurableExample_Template_mat_paginator_page_12_listener($event) { return ctx.pageEvent = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(13, PaginatorConfigurableExample_div_13_Template, 9, 3, "div", 4);
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.length);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.pageSize);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.pageSizeOptions)("ngModelOptions", i0.ɵɵpureFunction0(8, _c0$2));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.pageEvent);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i1$1.MatPaginator, i5.NgIf], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginatorConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'paginator-configurable-example',
                templateUrl: 'paginator-configurable-example.html',
                styleUrls: ['paginator-configurable-example.css'],
            }]
    }], null, null); })();

const _c0$1 = function () { return [5, 10, 25, 100]; };
/**
 * @title Paginator
 */
class PaginatorOverviewExample {
}
PaginatorOverviewExample.ɵfac = function PaginatorOverviewExample_Factory(t) { return new (t || PaginatorOverviewExample)(); };
PaginatorOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaginatorOverviewExample, selectors: [["paginator-overview-example"]], decls: 1, vars: 4, consts: [[3, "length", "pageSize", "pageSizeOptions"]], template: function PaginatorOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-paginator", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("length", 100)("pageSize", 10)("pageSizeOptions", i0.ɵɵpureFunction0(3, _c0$1));
    } }, directives: [i1$1.MatPaginator], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginatorOverviewExample, [{
        type: Component,
        args: [{
                selector: 'paginator-overview-example',
                templateUrl: 'paginator-overview-example.html',
            }]
    }], null, null); })();

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
PaginatorHarnessExample.ɵfac = function PaginatorHarnessExample_Factory(t) { return new (t || PaginatorHarnessExample)(); };
PaginatorHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaginatorHarnessExample, selectors: [["paginator-harness-example"]], decls: 1, vars: 5, consts: [[3, "length", "pageSize", "showFirstLastButtons", "pageSizeOptions", "pageIndex", "page"]], template: function PaginatorHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-paginator", 0);
        i0.ɵɵlistener("page", function PaginatorHarnessExample_Template_mat_paginator_page_0_listener($event) { return ctx.handlePageEvent($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("length", ctx.length)("pageSize", ctx.pageSize)("showFirstLastButtons", ctx.showFirstLastButtons)("pageSizeOptions", ctx.pageSizeOptions)("pageIndex", ctx.pageIndex);
    } }, directives: [i1$1.MatPaginator], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginatorHarnessExample, [{
        type: Component,
        args: [{
                selector: 'paginator-harness-example',
                templateUrl: 'paginator-harness-example.html'
            }]
    }], null, null); })();

const _c0 = function () { return [10, 50, 100]; };
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
MyCustomPaginatorIntl.ɵfac = function MyCustomPaginatorIntl_Factory(t) { return new (t || MyCustomPaginatorIntl)(); };
MyCustomPaginatorIntl.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MyCustomPaginatorIntl, factory: MyCustomPaginatorIntl.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyCustomPaginatorIntl, [{
        type: Injectable
    }], null, null); })();
/**
 * @title Paginator internationalization
 */
class PaginatorIntlExample {
}
PaginatorIntlExample.ɵfac = function PaginatorIntlExample_Factory(t) { return new (t || PaginatorIntlExample)(); };
PaginatorIntlExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaginatorIntlExample, selectors: [["paginator-intl-example"]], decls: 1, vars: 3, consts: [[3, "length", "pageSizeOptions"]], template: function PaginatorIntlExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-paginator", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("length", 200)("pageSizeOptions", i0.ɵɵpureFunction0(2, _c0));
    } }, directives: [i1$1.MatPaginator], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginatorIntlExample, [{
        type: Component,
        args: [{
                selector: 'paginator-intl-example',
                templateUrl: 'paginator-intl-example.html',
            }]
    }], null, null); })();
class PaginatorIntlExampleModule {
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

const EXAMPLES = [
    PaginatorConfigurableExample,
    PaginatorHarnessExample,
    // PaginatorIntlExample is imported through it's own example module.
    PaginatorOverviewExample,
];
class PaginatorExamplesModule {
}
PaginatorExamplesModule.ɵfac = function PaginatorExamplesModule_Factory(t) { return new (t || PaginatorExamplesModule)(); };
PaginatorExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PaginatorExamplesModule });
PaginatorExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatInputModule,
            MatPaginatorModule,
            PaginatorIntlExampleModule,
            FormsModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginatorExamplesModule, [{
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
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PaginatorExamplesModule, { declarations: [PaginatorConfigurableExample,
        PaginatorHarnessExample,
        // PaginatorIntlExample is imported through it's own example module.
        PaginatorOverviewExample], imports: [CommonModule,
        MatInputModule,
        MatPaginatorModule,
        PaginatorIntlExampleModule,
        FormsModule], exports: [PaginatorConfigurableExample,
        PaginatorHarnessExample,
        // PaginatorIntlExample is imported through it's own example module.
        PaginatorOverviewExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { PaginatorConfigurableExample, PaginatorExamplesModule, PaginatorHarnessExample, PaginatorIntlExample, PaginatorOverviewExample };
//# sourceMappingURL=paginator.js.map
