(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/divider'), require('@angular/material/list')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/divider', ['exports', '@angular/core', '@angular/material/divider', '@angular/material/list'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.divider = {}), global.ng.core, global.ng.material.divider, global.ng.material.list));
}(this, (function (exports, i0, i2, i1) { 'use strict';

    /**
     * @title Basic divider
     */
    var DividerOverviewExample = /** @class */ (function () {
        function DividerOverviewExample() {
        }
        return DividerOverviewExample;
    }());
    DividerOverviewExample.ɵfac = function DividerOverviewExample_Factory(t) { return new (t || DividerOverviewExample)(); };
    DividerOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: DividerOverviewExample, selectors: [["divider-overview-example"]], decls: 9, vars: 0, template: function DividerOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-list");
                i0.ɵɵelementStart(1, "mat-list-item");
                i0.ɵɵtext(2, "Item 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "mat-divider");
                i0.ɵɵelementStart(4, "mat-list-item");
                i0.ɵɵtext(5, "Item 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(6, "mat-divider");
                i0.ɵɵelementStart(7, "mat-list-item");
                i0.ɵɵtext(8, "Item 3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.MatList, i1.MatListItem, i2.MatDivider], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DividerOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'divider-overview-example',
                        templateUrl: 'divider-overview-example.html',
                    }]
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
    DividerHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: DividerHarnessExample, selectors: [["divider-harness-example"]], decls: 2, vars: 0, consts: [["inset", "", "vertical", ""]], template: function DividerHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "mat-divider");
                i0.ɵɵelement(1, "mat-divider", 0);
            }
        }, directives: [i2.MatDivider], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DividerHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'divider-harness-example',
                        templateUrl: 'divider-harness-example.html',
                    }]
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
    DividerExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: DividerExamplesModule });
    DividerExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DividerExamplesModule_Factory(t) { return new (t || DividerExamplesModule)(); }, imports: [[
                i2.MatDividerModule,
                i1.MatListModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DividerExamplesModule, { declarations: [DividerHarnessExample,
                DividerOverviewExample], imports: [i2.MatDividerModule,
                i1.MatListModule], exports: [DividerHarnessExample,
                DividerOverviewExample] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DividerExamplesModule, [{
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

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DividerExamplesModule = DividerExamplesModule;
    exports.DividerHarnessExample = DividerHarnessExample;
    exports.DividerOverviewExample = DividerOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-divider.umd.js.map
