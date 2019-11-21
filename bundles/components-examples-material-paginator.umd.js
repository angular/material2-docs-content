(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/input'), require('@angular/material/paginator'), require('@angular/material/form-field')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/paginator', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/input', '@angular/material/paginator', '@angular/material/form-field'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.paginator = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.input, global.ng.material.paginator, global.ng.material.formField));
}(this, (function (exports, i5, i0, i3, i2, i4, i1) { 'use strict';

    function PaginatorConfigurableExample_div_10_Template(rf, ctx) { if (rf & 1) {
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
        var ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("List length: ", ctx_r0.pageEvent.length, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Page size: ", ctx_r0.pageEvent.pageSize, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Page index: ", ctx_r0.pageEvent.pageIndex, "");
    } }
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
            this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
        };
        PaginatorConfigurableExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'paginator-configurable-example',
                        templateUrl: 'paginator-configurable-example.html',
                        styleUrls: ['paginator-configurable-example.css'],
                    },] },
        ];
        PaginatorConfigurableExample.ɵfac = function PaginatorConfigurableExample_Factory(t) { return new (t || PaginatorConfigurableExample)(); };
        PaginatorConfigurableExample.ɵcmp = i0.ɵɵdefineComponent({ type: PaginatorConfigurableExample, selectors: [["paginator-configurable-example"]], decls: 11, vars: 7, consts: [["matInput", "", 3, "ngModel", "ngModelChange"], [3, "length", "pageSize", "pageSizeOptions", "page"], [4, "ngIf"]], template: function PaginatorConfigurableExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field");
                i0.ɵɵtext(1, " List length: ");
                i0.ɵɵelementStart(2, "input", 0);
                i0.ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_2_listener($event) { return ctx.length = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-form-field");
                i0.ɵɵtext(4, " Page size: ");
                i0.ɵɵelementStart(5, "input", 0);
                i0.ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_5_listener($event) { return ctx.pageSize = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "mat-form-field");
                i0.ɵɵtext(7, " Page size options: ");
                i0.ɵɵelementStart(8, "input", 0);
                i0.ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_8_listener($event) { return ctx.setPageSizeOptions($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "mat-paginator", 1);
                i0.ɵɵlistener("page", function PaginatorConfigurableExample_Template_mat_paginator_page_9_listener($event) { return ctx.pageEvent = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(10, PaginatorConfigurableExample_div_10_Template, 9, 3, "div", 2);
            } if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngModel", ctx.length);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngModel", ctx.pageSize);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngModel", ctx.pageSizeOptions);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.pageEvent);
            } }, directives: [i1.MatFormField, i2.MatInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.MatPaginator, i5.NgIf], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
        return PaginatorConfigurableExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PaginatorConfigurableExample, [{
            type: i0.Component,
            args: [{
                    selector: 'paginator-configurable-example',
                    templateUrl: 'paginator-configurable-example.html',
                    styleUrls: ['paginator-configurable-example.css'],
                }]
        }], null, null); })();

    var _c0 = function () { return [5, 10, 25, 100]; };
    /**
     * @title Paginator
     */
    var PaginatorOverviewExample = /** @class */ (function () {
        function PaginatorOverviewExample() {
        }
        PaginatorOverviewExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'paginator-overview-example',
                        templateUrl: 'paginator-overview-example.html',
                        styleUrls: ['paginator-overview-example.css'],
                    },] },
        ];
        PaginatorOverviewExample.ɵfac = function PaginatorOverviewExample_Factory(t) { return new (t || PaginatorOverviewExample)(); };
        PaginatorOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: PaginatorOverviewExample, selectors: [["paginator-overview-example"]], decls: 1, vars: 4, consts: [[3, "length", "pageSize", "pageSizeOptions"]], template: function PaginatorOverviewExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelement(0, "mat-paginator", 0);
            } if (rf & 2) {
                i0.ɵɵproperty("length", 100)("pageSize", 10)("pageSizeOptions", i0.ɵɵpureFunction0(3, _c0));
            } }, directives: [i4.MatPaginator], styles: [""] });
        return PaginatorOverviewExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PaginatorOverviewExample, [{
            type: i0.Component,
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
        PaginatorExamplesModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i5.CommonModule,
                            i2.MatInputModule,
                            i4.MatPaginatorModule,
                            i3.FormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] },
        ];
        PaginatorExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: PaginatorExamplesModule });
        PaginatorExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PaginatorExamplesModule_Factory(t) { return new (t || PaginatorExamplesModule)(); }, imports: [[
                    i5.CommonModule,
                    i2.MatInputModule,
                    i4.MatPaginatorModule,
                    i3.FormsModule,
                ]] });
        return PaginatorExamplesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PaginatorExamplesModule, { declarations: [PaginatorConfigurableExample,
            PaginatorOverviewExample], imports: [i5.CommonModule,
            i2.MatInputModule,
            i4.MatPaginatorModule,
            i3.FormsModule], exports: [PaginatorConfigurableExample,
            PaginatorOverviewExample] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PaginatorExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i5.CommonModule,
                        i2.MatInputModule,
                        i4.MatPaginatorModule,
                        i3.FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }], null, null); })();

    exports.PaginatorConfigurableExample = PaginatorConfigurableExample;
    exports.PaginatorExamplesModule = PaginatorExamplesModule;
    exports.PaginatorOverviewExample = PaginatorOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-paginator.umd.js.map
