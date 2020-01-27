import { NgIf, CommonModule } from '@angular/common';
import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate1, ɵɵdefineComponent, ɵɵlistener, ɵɵtemplate, ɵɵproperty, ɵɵpureFunction0, ɵsetClassMetadata, Component, ɵɵelement, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
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
    var ctx_r0 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate1("List length: ", ctx_r0.pageEvent.length, "");
    ɵɵadvance(2);
    ɵɵtextInterpolate1("Page size: ", ctx_r0.pageEvent.pageSize, "");
    ɵɵadvance(2);
    ɵɵtextInterpolate1("Page index: ", ctx_r0.pageEvent.pageIndex, "");
} }
var _c0 = function () { return { updateOn: "blur" }; };
/**
 * @title Configurable paginator
 */
var PaginatorConfigurableExample = /** @class */ (function () {
    function PaginatorConfigurableExample() {
        // MatPaginator Inputs
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    PaginatorConfigurableExample.prototype.setPageSizeOptions = function (setPageSizeOptionsInput) {
        if (setPageSizeOptionsInput) {
            this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
        }
    };
    PaginatorConfigurableExample.ɵfac = function PaginatorConfigurableExample_Factory(t) { return new (t || PaginatorConfigurableExample)(); };
    PaginatorConfigurableExample.ɵcmp = ɵɵdefineComponent({ type: PaginatorConfigurableExample, selectors: [["paginator-configurable-example"]], decls: 14, vars: 9, consts: [["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ex. 10,25,50", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "length", "pageSize", "pageSizeOptions", "page"], [4, "ngIf"]], template: function PaginatorConfigurableExample_Template(rf, ctx) { if (rf & 1) {
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
    return PaginatorConfigurableExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(PaginatorConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'paginator-configurable-example',
                templateUrl: 'paginator-configurable-example.html',
                styleUrls: ['paginator-configurable-example.css'],
            }]
    }], null, null); })();

var _c0$1 = function () { return [5, 10, 25, 100]; };
/**
 * @title Paginator
 */
var PaginatorOverviewExample = /** @class */ (function () {
    function PaginatorOverviewExample() {
    }
    PaginatorOverviewExample.ɵfac = function PaginatorOverviewExample_Factory(t) { return new (t || PaginatorOverviewExample)(); };
    PaginatorOverviewExample.ɵcmp = ɵɵdefineComponent({ type: PaginatorOverviewExample, selectors: [["paginator-overview-example"]], decls: 1, vars: 4, consts: [[3, "length", "pageSize", "pageSizeOptions"]], template: function PaginatorOverviewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelement(0, "mat-paginator", 0);
        } if (rf & 2) {
            ɵɵproperty("length", 100)("pageSize", 10)("pageSizeOptions", ɵɵpureFunction0(3, _c0$1));
        } }, directives: [MatPaginator], styles: [""] });
    return PaginatorOverviewExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(PaginatorOverviewExample, [{
        type: Component,
        args: [{
                selector: 'paginator-overview-example',
                templateUrl: 'paginator-overview-example.html',
                styleUrls: ['paginator-overview-example.css'],
            }]
    }], null, null); })();

var EXAMPLES = [
    PaginatorConfigurableExample,
    PaginatorOverviewExample,
];
var PaginatorExamplesModule = /** @class */ (function () {
    function PaginatorExamplesModule() {
    }
    PaginatorExamplesModule.ɵmod = ɵɵdefineNgModule({ type: PaginatorExamplesModule });
    PaginatorExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function PaginatorExamplesModule_Factory(t) { return new (t || PaginatorExamplesModule)(); }, imports: [[
                CommonModule,
                MatInputModule,
                MatPaginatorModule,
                FormsModule,
            ]] });
    return PaginatorExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PaginatorExamplesModule, { declarations: [PaginatorConfigurableExample,
        PaginatorOverviewExample], imports: [CommonModule,
        MatInputModule,
        MatPaginatorModule,
        FormsModule], exports: [PaginatorConfigurableExample,
        PaginatorOverviewExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PaginatorExamplesModule, [{
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
            }]
    }], null, null); })();

export { PaginatorConfigurableExample, PaginatorExamplesModule, PaginatorOverviewExample };
//# sourceMappingURL=paginator.js.map
