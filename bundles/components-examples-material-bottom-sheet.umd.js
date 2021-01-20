(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/list'), require('@angular/material/core')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/bottom-sheet', ['exports', '@angular/core', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/list', '@angular/material/core'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.bottomSheet = {}), global.ng.core, global.ng.material.bottomSheet, global.ng.material.button, global.ng.material.list, global.ng.material.core));
}(this, (function (exports, i0, i1, i2, i3, i4) { 'use strict';

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
    BottomSheetOverviewExample.ɵfac = function BottomSheetOverviewExample_Factory(t) { return new (t || BottomSheetOverviewExample)(i0.ɵɵdirectiveInject(i1.MatBottomSheet)); };
    BottomSheetOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: BottomSheetOverviewExample, selectors: [["bottom-sheet-overview-example"]], decls: 4, vars: 0, consts: [["mat-raised-button", "", 3, "click"]], template: function BottomSheetOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, "You have received a file called \"cat-picture.jpeg\".");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "button", 0);
                i0.ɵɵlistener("click", function BottomSheetOverviewExample_Template_button_click_2_listener() { return ctx.openBottomSheet(); });
                i0.ɵɵtext(3, "Open file");
                i0.ɵɵelementEnd();
            }
        }, directives: [i2.MatButton], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BottomSheetOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'bottom-sheet-overview-example',
                        templateUrl: 'bottom-sheet-overview-example.html',
                    }]
            }], function () { return [{ type: i1.MatBottomSheet }]; }, null);
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
    BottomSheetOverviewExampleSheet.ɵfac = function BottomSheetOverviewExampleSheet_Factory(t) { return new (t || BottomSheetOverviewExampleSheet)(i0.ɵɵdirectiveInject(i1.MatBottomSheetRef)); };
    BottomSheetOverviewExampleSheet.ɵcmp = i0.ɵɵdefineComponent({ type: BottomSheetOverviewExampleSheet, selectors: [["bottom-sheet-overview-example-sheet"]], decls: 21, vars: 0, consts: [["href", "https://keep.google.com/", "mat-list-item", "", 3, "click"], ["mat-line", ""], ["href", "https://docs.google.com/", "mat-list-item", "", 3, "click"], ["href", "https://plus.google.com/", "mat-list-item", "", 3, "click"], ["href", "https://hangouts.google.com/", "mat-list-item", "", 3, "click"]], template: function BottomSheetOverviewExampleSheet_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-nav-list");
                i0.ɵɵelementStart(1, "a", 0);
                i0.ɵɵlistener("click", function BottomSheetOverviewExampleSheet_Template_a_click_1_listener($event) { return ctx.openLink($event); });
                i0.ɵɵelementStart(2, "span", 1);
                i0.ɵɵtext(3, "Google Keep");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "span", 1);
                i0.ɵɵtext(5, "Add to a note");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "a", 2);
                i0.ɵɵlistener("click", function BottomSheetOverviewExampleSheet_Template_a_click_6_listener($event) { return ctx.openLink($event); });
                i0.ɵɵelementStart(7, "span", 1);
                i0.ɵɵtext(8, "Google Docs");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "span", 1);
                i0.ɵɵtext(10, "Embed in a document");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "a", 3);
                i0.ɵɵlistener("click", function BottomSheetOverviewExampleSheet_Template_a_click_11_listener($event) { return ctx.openLink($event); });
                i0.ɵɵelementStart(12, "span", 1);
                i0.ɵɵtext(13, "Google Plus");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "span", 1);
                i0.ɵɵtext(15, "Share with your friends");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "a", 4);
                i0.ɵɵlistener("click", function BottomSheetOverviewExampleSheet_Template_a_click_16_listener($event) { return ctx.openLink($event); });
                i0.ɵɵelementStart(17, "span", 1);
                i0.ɵɵtext(18, "Google Hangouts");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(19, "span", 1);
                i0.ɵɵtext(20, "Show to your coworkers");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, directives: [i3.MatNavList, i3.MatListItem, i4.MatLine], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BottomSheetOverviewExampleSheet, [{
                type: i0.Component,
                args: [{
                        selector: 'bottom-sheet-overview-example-sheet',
                        templateUrl: 'bottom-sheet-overview-example-sheet.html',
                    }]
            }], function () { return [{ type: i1.MatBottomSheetRef }]; }, null);
    })();

    function BottomSheetHarnessExample_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, " Hello from the bottom sheet!\n");
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
    BottomSheetHarnessExample.ɵfac = function BottomSheetHarnessExample_Factory(t) { return new (t || BottomSheetHarnessExample)(i0.ɵɵdirectiveInject(i1.MatBottomSheet)); };
    BottomSheetHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: BottomSheetHarnessExample, selectors: [["bottom-sheet-harness-example"]], viewQuery: function BottomSheetHarnessExample_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(i0.TemplateRef, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.template = _t.first);
            }
        }, decls: 1, vars: 0, template: function BottomSheetHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, BottomSheetHarnessExample_ng_template_0_Template, 1, 0, "ng-template");
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BottomSheetHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'bottom-sheet-harness-example',
                        templateUrl: 'bottom-sheet-harness-example.html',
                    }]
            }], function () { return [{ type: i1.MatBottomSheet }]; }, { template: [{
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
    BottomSheetExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: BottomSheetExamplesModule });
    BottomSheetExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function BottomSheetExamplesModule_Factory(t) { return new (t || BottomSheetExamplesModule)(); }, imports: [[
                i1.MatBottomSheetModule,
                i2.MatButtonModule,
                i3.MatListModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BottomSheetExamplesModule, { declarations: [BottomSheetHarnessExample,
                BottomSheetOverviewExample,
                BottomSheetOverviewExampleSheet], imports: [i1.MatBottomSheetModule,
                i2.MatButtonModule,
                i3.MatListModule], exports: [BottomSheetHarnessExample,
                BottomSheetOverviewExample,
                BottomSheetOverviewExampleSheet] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BottomSheetExamplesModule, [{
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
