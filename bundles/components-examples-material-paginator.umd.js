(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/input'), require('@angular/material/paginator'), require('@angular/material/form-field')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/paginator', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/input', '@angular/material/paginator', '@angular/material/form-field'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.paginator = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.input, global.ng.material.paginator, global.ng.material.formField));
}(this, (function (exports, i5, i0, i3, i2, i1$1, i1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    function PaginatorConfigurableExample_div_13_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵelementStart(1, "h5");
            i0__namespace.ɵɵtext(2, "Page Change Event Properties");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "div");
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(5, "div");
            i0__namespace.ɵɵtext(6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(7, "div");
            i0__namespace.ɵɵtext(8);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵtextInterpolate1("List length: ", ctx_r0.pageEvent.length, "");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1("Page size: ", ctx_r0.pageEvent.pageSize, "");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1("Page index: ", ctx_r0.pageEvent.pageIndex, "");
        }
    }
    var _c0$1 = function () { return { updateOn: "blur" }; };
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
        return PaginatorConfigurableExample;
    }());
    PaginatorConfigurableExample.ɵfac = function PaginatorConfigurableExample_Factory(t) { return new (t || PaginatorConfigurableExample)(); };
    PaginatorConfigurableExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: PaginatorConfigurableExample, selectors: [["paginator-configurable-example"]], decls: 14, vars: 9, consts: [["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ex. 10,25,50", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "length", "pageSize", "pageSizeOptions", "page"], [4, "ngIf"]], template: function PaginatorConfigurableExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field");
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "List length");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "input", 0);
                i0__namespace.ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_3_listener($event) { return ctx.length = $event; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "mat-form-field");
                i0__namespace.ɵɵelementStart(5, "mat-label");
                i0__namespace.ɵɵtext(6, "Page size");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "input", 0);
                i0__namespace.ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_7_listener($event) { return ctx.pageSize = $event; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "mat-form-field");
                i0__namespace.ɵɵelementStart(9, "mat-label");
                i0__namespace.ɵɵtext(10, "Page size options");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "input", 1);
                i0__namespace.ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_11_listener($event) { return ctx.setPageSizeOptions($event); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "mat-paginator", 2);
                i0__namespace.ɵɵlistener("page", function PaginatorConfigurableExample_Template_mat_paginator_page_12_listener($event) { return ctx.pageEvent = $event; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(13, PaginatorConfigurableExample_div_13_Template, 9, 3, "div", 3);
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngModel", ctx.length);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("ngModel", ctx.pageSize);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("ngModel", ctx.pageSizeOptions)("ngModelOptions", i0__namespace.ɵɵpureFunction0(8, _c0$1));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.pageEvent);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace.MatInput, i3__namespace.NumberValueAccessor, i3__namespace.DefaultValueAccessor, i3__namespace.NgControlStatus, i3__namespace.NgModel, i1__namespace$1.MatPaginator, i5__namespace.NgIf], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PaginatorConfigurableExample, [{
                type: i0.Component,
                args: [{
                        selector: 'paginator-configurable-example',
                        templateUrl: 'paginator-configurable-example.html',
                        styleUrls: ['paginator-configurable-example.css'],
                    }]
            }], null, null);
    })();

    var _c0 = function () { return [5, 10, 25, 100]; };
    /**
     * @title Paginator
     */
    var PaginatorOverviewExample = /** @class */ (function () {
        function PaginatorOverviewExample() {
        }
        return PaginatorOverviewExample;
    }());
    PaginatorOverviewExample.ɵfac = function PaginatorOverviewExample_Factory(t) { return new (t || PaginatorOverviewExample)(); };
    PaginatorOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: PaginatorOverviewExample, selectors: [["paginator-overview-example"]], decls: 1, vars: 4, consts: [[3, "length", "pageSize", "pageSizeOptions"]], template: function PaginatorOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "mat-paginator", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("length", 100)("pageSize", 10)("pageSizeOptions", i0__namespace.ɵɵpureFunction0(3, _c0));
            }
        }, directives: [i1__namespace$1.MatPaginator], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PaginatorOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'paginator-overview-example',
                        templateUrl: 'paginator-overview-example.html',
                    }]
            }], null, null);
    })();

    /**
     * @title Testing with MatPaginatorHarness
     */
    var PaginatorHarnessExample = /** @class */ (function () {
        function PaginatorHarnessExample() {
            this.length = 500;
            this.pageSize = 10;
            this.pageIndex = 0;
            this.pageSizeOptions = [5, 10, 25];
            this.showFirstLastButtons = true;
        }
        PaginatorHarnessExample.prototype.handlePageEvent = function (event) {
            this.length = event.length;
            this.pageSize = event.pageSize;
            this.pageIndex = event.pageIndex;
        };
        return PaginatorHarnessExample;
    }());
    PaginatorHarnessExample.ɵfac = function PaginatorHarnessExample_Factory(t) { return new (t || PaginatorHarnessExample)(); };
    PaginatorHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: PaginatorHarnessExample, selectors: [["paginator-harness-example"]], decls: 1, vars: 5, consts: [[3, "length", "pageSize", "showFirstLastButtons", "pageSizeOptions", "pageIndex", "page"]], template: function PaginatorHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-paginator", 0);
                i0__namespace.ɵɵlistener("page", function PaginatorHarnessExample_Template_mat_paginator_page_0_listener($event) { return ctx.handlePageEvent($event); });
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("length", ctx.length)("pageSize", ctx.pageSize)("showFirstLastButtons", ctx.showFirstLastButtons)("pageSizeOptions", ctx.pageSizeOptions)("pageIndex", ctx.pageIndex);
            }
        }, directives: [i1__namespace$1.MatPaginator], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PaginatorHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'paginator-harness-example',
                        templateUrl: 'paginator-harness-example.html'
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        PaginatorConfigurableExample,
        PaginatorHarnessExample,
        PaginatorOverviewExample,
    ];
    var PaginatorExamplesModule = /** @class */ (function () {
        function PaginatorExamplesModule() {
        }
        return PaginatorExamplesModule;
    }());
    PaginatorExamplesModule.ɵfac = function PaginatorExamplesModule_Factory(t) { return new (t || PaginatorExamplesModule)(); };
    PaginatorExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: PaginatorExamplesModule });
    PaginatorExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i5.CommonModule,
                i2.MatInputModule,
                i1$1.MatPaginatorModule,
                i3.FormsModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PaginatorExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i5.CommonModule,
                            i2.MatInputModule,
                            i1$1.MatPaginatorModule,
                            i3.FormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(PaginatorExamplesModule, { declarations: [PaginatorConfigurableExample,
                PaginatorHarnessExample,
                PaginatorOverviewExample], imports: [i5.CommonModule,
                i2.MatInputModule,
                i1$1.MatPaginatorModule,
                i3.FormsModule], exports: [PaginatorConfigurableExample,
                PaginatorHarnessExample,
                PaginatorOverviewExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PaginatorConfigurableExample = PaginatorConfigurableExample;
    exports.PaginatorExamplesModule = PaginatorExamplesModule;
    exports.PaginatorHarnessExample = PaginatorHarnessExample;
    exports.PaginatorOverviewExample = PaginatorOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-paginator.umd.js.map
