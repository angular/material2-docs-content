(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/divider'), require('@angular/material/list')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/divider', ['exports', '@angular/core', '@angular/material/divider', '@angular/material/list'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.divider = {}), global.ng.core, global.ng.material.divider, global.ng.material.list));
}(this, (function (exports, i0, i2, i1) { 'use strict';

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

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    /**
     * @title Basic divider
     */
    var DividerOverviewExample = /** @class */ (function () {
        function DividerOverviewExample() {
        }
        return DividerOverviewExample;
    }());
    DividerOverviewExample.ɵfac = function DividerOverviewExample_Factory(t) { return new (t || DividerOverviewExample)(); };
    DividerOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DividerOverviewExample, selectors: [["divider-overview-example"]], decls: 9, vars: 0, template: function DividerOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-list");
                i0__namespace.ɵɵelementStart(1, "mat-list-item");
                i0__namespace.ɵɵtext(2, "Item 1");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "mat-divider");
                i0__namespace.ɵɵelementStart(4, "mat-list-item");
                i0__namespace.ɵɵtext(5, "Item 2");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(6, "mat-divider");
                i0__namespace.ɵɵelementStart(7, "mat-list-item");
                i0__namespace.ɵɵtext(8, "Item 3");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatList, i1__namespace.MatListItem, i2__namespace.MatDivider], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DividerOverviewExample, [{
                type: i0.Component,
                args: [{ selector: 'divider-overview-example', template: "<mat-list>\n  <mat-list-item>Item 1</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 2</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 3</mat-list-item>\n</mat-list>\n" }]
            }], null, null);
    })();

    /**
     * @title Testing with MatDividerHarness
     */
    var DividerHarnessExample = /** @class */ (function () {
        function DividerHarnessExample() {
        }
        return DividerHarnessExample;
    }());
    DividerHarnessExample.ɵfac = function DividerHarnessExample_Factory(t) { return new (t || DividerHarnessExample)(); };
    DividerHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DividerHarnessExample, selectors: [["divider-harness-example"]], decls: 2, vars: 0, consts: [["inset", "", "vertical", ""]], template: function DividerHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "mat-divider");
                i0__namespace.ɵɵelement(1, "mat-divider", 0);
            }
        }, directives: [i2__namespace.MatDivider], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DividerHarnessExample, [{
                type: i0.Component,
                args: [{ selector: 'divider-harness-example', template: "<mat-divider></mat-divider>\n<mat-divider inset vertical></mat-divider>\n" }]
            }], null, null);
    })();

    var EXAMPLES = [
        DividerHarnessExample,
        DividerOverviewExample,
    ];
    var DividerExamplesModule = /** @class */ (function () {
        function DividerExamplesModule() {
        }
        return DividerExamplesModule;
    }());
    DividerExamplesModule.ɵfac = function DividerExamplesModule_Factory(t) { return new (t || DividerExamplesModule)(); };
    DividerExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: DividerExamplesModule });
    DividerExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i2.MatDividerModule,
                i1.MatListModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DividerExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2.MatDividerModule,
                            i1.MatListModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(DividerExamplesModule, { declarations: [DividerHarnessExample,
                DividerOverviewExample], imports: [i2.MatDividerModule,
                i1.MatListModule], exports: [DividerHarnessExample,
                DividerOverviewExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DividerExamplesModule = DividerExamplesModule;
    exports.DividerHarnessExample = DividerHarnessExample;
    exports.DividerOverviewExample = DividerOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-divider.umd.js.map
