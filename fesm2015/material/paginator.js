import { NgIf, CommonModule } from '@angular/common';
import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate1, ɵɵdefineComponent, ɵɵlistener, ɵɵtemplate, ɵɵproperty, ɵɵpureFunction0, ɵsetClassMetadata, Component, ɵɵelement, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, ɵɵsetNgModuleScope } from '@angular/core';
import { NumberValueAccessor, DefaultValueAccessor, NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormField, MatLabel } from '@angular/material/form-field';

function PaginatorConfigurableExample_div_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "h5");
    ɵɵtext(2, "Page Change Event Properties");
    ɵɵelementEnd();
    ɵɵelementStart(3, "div");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div");
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div");
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate1("List length: ", ctx_r0.pageEvent.length, "");
    ɵɵadvance(2);
    ɵɵtextInterpolate1("Page size: ", ctx_r0.pageEvent.pageSize, "");
    ɵɵadvance(2);
    ɵɵtextInterpolate1("Page index: ", ctx_r0.pageEvent.pageIndex, "");
} }
const _c0 = function () { return { updateOn: "blur" }; };
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
PaginatorConfigurableExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: PaginatorConfigurableExample, selectors: [["paginator-configurable-example"]], decls: 14, vars: 9, consts: [["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ex. 10,25,50", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "length", "pageSize", "pageSizeOptions", "page"], [4, "ngIf"]], template: function PaginatorConfigurableExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field");
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "List length");
        ɵɵelementEnd();
        ɵɵelementStart(3, "input", 0);
        ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_3_listener($event) { return ctx.length = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "mat-form-field");
        ɵɵelementStart(5, "mat-label");
        ɵɵtext(6, "Page size");
        ɵɵelementEnd();
        ɵɵelementStart(7, "input", 0);
        ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_7_listener($event) { return ctx.pageSize = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(8, "mat-form-field");
        ɵɵelementStart(9, "mat-label");
        ɵɵtext(10, "Page size options");
        ɵɵelementEnd();
        ɵɵelementStart(11, "input", 1);
        ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_11_listener($event) { return ctx.setPageSizeOptions($event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(12, "mat-paginator", 2);
        ɵɵlistener("page", function PaginatorConfigurableExample_Template_mat_paginator_page_12_listener($event) { return ctx.pageEvent = $event; });
        ɵɵelementEnd();
        ɵɵtemplate(13, PaginatorConfigurableExample_div_13_Template, 9, 3, "div", 3);
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("ngModel", ctx.length);
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.pageSize);
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.pageSizeOptions)("ngModelOptions", ɵɵpureFunction0(8, _c0));
        ɵɵadvance(1);
        ɵɵproperty("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.pageEvent);
    } }, directives: [MatFormField, MatLabel, MatInput, NumberValueAccessor, DefaultValueAccessor, NgControlStatus, NgModel, MatPaginator, NgIf], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PaginatorConfigurableExample, [{
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
PaginatorOverviewExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: PaginatorOverviewExample, selectors: [["paginator-overview-example"]], decls: 1, vars: 4, consts: [[3, "length", "pageSize", "pageSizeOptions"]], template: function PaginatorOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "mat-paginator", 0);
    } if (rf & 2) {
        ɵɵproperty("length", 100)("pageSize", 10)("pageSizeOptions", ɵɵpureFunction0(3, _c0$1));
    } }, directives: [MatPaginator], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PaginatorOverviewExample, [{
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
PaginatorHarnessExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: PaginatorHarnessExample, selectors: [["paginator-harness-example"]], decls: 1, vars: 5, consts: [[3, "length", "pageSize", "showFirstLastButtons", "pageSizeOptions", "pageIndex", "page"]], template: function PaginatorHarnessExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-paginator", 0);
        ɵɵlistener("page", function PaginatorHarnessExample_Template_mat_paginator_page_0_listener($event) { return ctx.handlePageEvent($event); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("length", ctx.length)("pageSize", ctx.pageSize)("showFirstLastButtons", ctx.showFirstLastButtons)("pageSizeOptions", ctx.pageSizeOptions)("pageIndex", ctx.pageIndex);
    } }, directives: [MatPaginator], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PaginatorHarnessExample, [{
        type: Component,
        args: [{
                selector: 'paginator-harness-example',
                templateUrl: 'paginator-harness-example.html'
            }]
    }], null, null); })();

const EXAMPLES = [
    PaginatorConfigurableExample,
    PaginatorHarnessExample,
    PaginatorOverviewExample,
];
class PaginatorExamplesModule {
}
PaginatorExamplesModule.ɵfac = function PaginatorExamplesModule_Factory(t) { return new (t || PaginatorExamplesModule)(); };
PaginatorExamplesModule.ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({ type: PaginatorExamplesModule });
PaginatorExamplesModule.ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatInputModule,
            MatPaginatorModule,
            FormsModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PaginatorExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatInputModule,
                    MatPaginatorModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PaginatorExamplesModule, { declarations: [PaginatorConfigurableExample,
        PaginatorHarnessExample,
        PaginatorOverviewExample], imports: [CommonModule,
        MatInputModule,
        MatPaginatorModule,
        FormsModule], exports: [PaginatorConfigurableExample,
        PaginatorHarnessExample,
        PaginatorOverviewExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { PaginatorConfigurableExample, PaginatorExamplesModule, PaginatorHarnessExample, PaginatorOverviewExample };
//# sourceMappingURL=paginator.js.map
