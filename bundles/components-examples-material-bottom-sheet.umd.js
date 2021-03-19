(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/list'), require('@angular/material/core')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/bottom-sheet', ['exports', '@angular/core', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/list', '@angular/material/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.bottomSheet = {}), global.ng.core, global.ng.material.bottomSheet, global.ng.material.button, global.ng.material.list, global.ng.material.core));
}(this, (function (exports, i0, i1, i2, i3, i4) { 'use strict';

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
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);

    /**
     * @title Bottom Sheet Overview
     */
    var BottomSheetOverviewExample = /** @class */ (function () {
        function BottomSheetOverviewExample(_bottomSheet) {
            this._bottomSheet = _bottomSheet;
        }
        BottomSheetOverviewExample.prototype.openBottomSheet = function () {
            this._bottomSheet.open(BottomSheetOverviewExampleSheet);
        };
        return BottomSheetOverviewExample;
    }());
    BottomSheetOverviewExample.ɵfac = function BottomSheetOverviewExample_Factory(t) { return new (t || BottomSheetOverviewExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace.MatBottomSheet)); };
    BottomSheetOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: BottomSheetOverviewExample, selectors: [["bottom-sheet-overview-example"]], decls: 4, vars: 0, consts: [["mat-raised-button", "", 3, "click"]], template: function BottomSheetOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "p");
                i0__namespace.ɵɵtext(1, "You have received a file called \"cat-picture.jpeg\".");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "button", 0);
                i0__namespace.ɵɵlistener("click", function BottomSheetOverviewExample_Template_button_click_2_listener() { return ctx.openBottomSheet(); });
                i0__namespace.ɵɵtext(3, "Open file");
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i2__namespace.MatButton], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(BottomSheetOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'bottom-sheet-overview-example',
                        templateUrl: 'bottom-sheet-overview-example.html',
                    }]
            }], function () { return [{ type: i1__namespace.MatBottomSheet }]; }, null);
    })();
    var BottomSheetOverviewExampleSheet = /** @class */ (function () {
        function BottomSheetOverviewExampleSheet(_bottomSheetRef) {
            this._bottomSheetRef = _bottomSheetRef;
        }
        BottomSheetOverviewExampleSheet.prototype.openLink = function (event) {
            this._bottomSheetRef.dismiss();
            event.preventDefault();
        };
        return BottomSheetOverviewExampleSheet;
    }());
    BottomSheetOverviewExampleSheet.ɵfac = function BottomSheetOverviewExampleSheet_Factory(t) { return new (t || BottomSheetOverviewExampleSheet)(i0__namespace.ɵɵdirectiveInject(i1__namespace.MatBottomSheetRef)); };
    BottomSheetOverviewExampleSheet.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: BottomSheetOverviewExampleSheet, selectors: [["bottom-sheet-overview-example-sheet"]], decls: 21, vars: 0, consts: [["href", "https://keep.google.com/", "mat-list-item", "", 3, "click"], ["mat-line", ""], ["href", "https://docs.google.com/", "mat-list-item", "", 3, "click"], ["href", "https://plus.google.com/", "mat-list-item", "", 3, "click"], ["href", "https://hangouts.google.com/", "mat-list-item", "", 3, "click"]], template: function BottomSheetOverviewExampleSheet_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-nav-list");
                i0__namespace.ɵɵelementStart(1, "a", 0);
                i0__namespace.ɵɵlistener("click", function BottomSheetOverviewExampleSheet_Template_a_click_1_listener($event) { return ctx.openLink($event); });
                i0__namespace.ɵɵelementStart(2, "span", 1);
                i0__namespace.ɵɵtext(3, "Google Keep");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "span", 1);
                i0__namespace.ɵɵtext(5, "Add to a note");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "a", 2);
                i0__namespace.ɵɵlistener("click", function BottomSheetOverviewExampleSheet_Template_a_click_6_listener($event) { return ctx.openLink($event); });
                i0__namespace.ɵɵelementStart(7, "span", 1);
                i0__namespace.ɵɵtext(8, "Google Docs");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "span", 1);
                i0__namespace.ɵɵtext(10, "Embed in a document");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "a", 3);
                i0__namespace.ɵɵlistener("click", function BottomSheetOverviewExampleSheet_Template_a_click_11_listener($event) { return ctx.openLink($event); });
                i0__namespace.ɵɵelementStart(12, "span", 1);
                i0__namespace.ɵɵtext(13, "Google Plus");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "span", 1);
                i0__namespace.ɵɵtext(15, "Share with your friends");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(16, "a", 4);
                i0__namespace.ɵɵlistener("click", function BottomSheetOverviewExampleSheet_Template_a_click_16_listener($event) { return ctx.openLink($event); });
                i0__namespace.ɵɵelementStart(17, "span", 1);
                i0__namespace.ɵɵtext(18, "Google Hangouts");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(19, "span", 1);
                i0__namespace.ɵɵtext(20, "Show to your coworkers");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i3__namespace.MatNavList, i3__namespace.MatListItem, i4__namespace.MatLine], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(BottomSheetOverviewExampleSheet, [{
                type: i0.Component,
                args: [{
                        selector: 'bottom-sheet-overview-example-sheet',
                        templateUrl: 'bottom-sheet-overview-example-sheet.html',
                    }]
            }], function () { return [{ type: i1__namespace.MatBottomSheetRef }]; }, null);
    })();

    function BottomSheetHarnessExample_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, " Hello from the bottom sheet!\n");
        }
    }
    /**
     * @title Testing with MatBottomSheetHarness
     */
    var BottomSheetHarnessExample = /** @class */ (function () {
        function BottomSheetHarnessExample(bottomSheet) {
            this.bottomSheet = bottomSheet;
        }
        BottomSheetHarnessExample.prototype.open = function (config) {
            return this.bottomSheet.open(this.template, config);
        };
        return BottomSheetHarnessExample;
    }());
    BottomSheetHarnessExample.ɵfac = function BottomSheetHarnessExample_Factory(t) { return new (t || BottomSheetHarnessExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace.MatBottomSheet)); };
    BottomSheetHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: BottomSheetHarnessExample, selectors: [["bottom-sheet-harness-example"]], viewQuery: function BottomSheetHarnessExample_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(i0.TemplateRef, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.template = _t.first);
            }
        }, decls: 1, vars: 0, template: function BottomSheetHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, BottomSheetHarnessExample_ng_template_0_Template, 1, 0, "ng-template");
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(BottomSheetHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'bottom-sheet-harness-example',
                        templateUrl: 'bottom-sheet-harness-example.html',
                    }]
            }], function () { return [{ type: i1__namespace.MatBottomSheet }]; }, { template: [{
                    type: i0.ViewChild,
                    args: [i0.TemplateRef]
                }] });
    })();

    var EXAMPLES = [
        BottomSheetHarnessExample,
        BottomSheetOverviewExample,
        BottomSheetOverviewExampleSheet,
    ];
    var BottomSheetExamplesModule = /** @class */ (function () {
        function BottomSheetExamplesModule() {
        }
        return BottomSheetExamplesModule;
    }());
    BottomSheetExamplesModule.ɵfac = function BottomSheetExamplesModule_Factory(t) { return new (t || BottomSheetExamplesModule)(); };
    BottomSheetExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: BottomSheetExamplesModule });
    BottomSheetExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.MatBottomSheetModule,
                i2.MatButtonModule,
                i3.MatListModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(BottomSheetExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.MatBottomSheetModule,
                            i2.MatButtonModule,
                            i3.MatListModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(BottomSheetExamplesModule, { declarations: [BottomSheetHarnessExample,
                BottomSheetOverviewExample,
                BottomSheetOverviewExampleSheet], imports: [i1.MatBottomSheetModule,
                i2.MatButtonModule,
                i3.MatListModule], exports: [BottomSheetHarnessExample,
                BottomSheetOverviewExample,
                BottomSheetOverviewExampleSheet] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BottomSheetExamplesModule = BottomSheetExamplesModule;
    exports.BottomSheetHarnessExample = BottomSheetHarnessExample;
    exports.BottomSheetOverviewExample = BottomSheetOverviewExample;
    exports.BottomSheetOverviewExampleSheet = BottomSheetOverviewExampleSheet;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-bottom-sheet.umd.js.map
