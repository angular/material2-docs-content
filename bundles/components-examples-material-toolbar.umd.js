(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/toolbar')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/toolbar', ['exports', '@angular/core', '@angular/material/button', '@angular/material/icon', '@angular/material/toolbar'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.toolbar = {}), global.ng.core, global.ng.material.button, global.ng.material.icon, global.ng.material.toolbar));
}(this, (function (exports, i0, i2, i3, i1) { 'use strict';

    /**
     * @title Basic toolbar
     */
    var ToolbarBasicExample = /** @class */ (function () {
        function ToolbarBasicExample() {
        }
        return ToolbarBasicExample;
    }());
    ToolbarBasicExample.ɵfac = function ToolbarBasicExample_Factory(t) { return new (t || ToolbarBasicExample)(); };
    ToolbarBasicExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToolbarBasicExample, selectors: [["toolbar-basic-example"]], decls: 13, vars: 0, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon"]], template: function ToolbarBasicExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-toolbar");
                i0.ɵɵelementStart(1, "button", 0);
                i0.ɵɵelementStart(2, "mat-icon");
                i0.ɵɵtext(3, "menu");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "span");
                i0.ɵɵtext(5, "My App");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(6, "span", 1);
                i0.ɵɵelementStart(7, "button", 2);
                i0.ɵɵelementStart(8, "mat-icon");
                i0.ɵɵtext(9, "favorite");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "button", 3);
                i0.ɵɵelementStart(11, "mat-icon");
                i0.ɵɵtext(12, "share");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.MatToolbar, i2.MatButton, i3.MatIcon], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolbarBasicExample, [{
                type: i0.Component,
                args: [{
                        selector: 'toolbar-basic-example',
                        templateUrl: 'toolbar-basic-example.html',
                        styleUrls: ['toolbar-basic-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Multi-row toolbar
     */
    var ToolbarMultirowExample = /** @class */ (function () {
        function ToolbarMultirowExample() {
        }
        return ToolbarMultirowExample;
    }());
    ToolbarMultirowExample.ɵfac = function ToolbarMultirowExample_Factory(t) { return new (t || ToolbarMultirowExample)(); };
    ToolbarMultirowExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToolbarMultirowExample, selectors: [["toolbar-multirow-example"]], decls: 18, vars: 0, consts: [["color", "primary"], [1, "example-spacer"], ["aria-hidden", "false", "aria-label", "Example user verified icon", 1, "example-icon"], ["aria-hidden", "false", "aria-label", "Example heart icon", 1, "example-icon"], ["aria-hidden", "false", "aria-label", "Example delete icon", 1, "example-icon"]], template: function ToolbarMultirowExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-toolbar", 0);
                i0.ɵɵelementStart(1, "mat-toolbar-row");
                i0.ɵɵelementStart(2, "span");
                i0.ɵɵtext(3, "Custom Toolbar");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "mat-toolbar-row");
                i0.ɵɵelementStart(5, "span");
                i0.ɵɵtext(6, "Second Line");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(7, "span", 1);
                i0.ɵɵelementStart(8, "mat-icon", 2);
                i0.ɵɵtext(9, "verified_user");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "mat-toolbar-row");
                i0.ɵɵelementStart(11, "span");
                i0.ɵɵtext(12, "Third Line");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(13, "span", 1);
                i0.ɵɵelementStart(14, "mat-icon", 3);
                i0.ɵɵtext(15, "favorite");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "mat-icon", 4);
                i0.ɵɵtext(17, "delete");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.MatToolbar, i1.MatToolbarRow, i3.MatIcon], styles: [".example-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolbarMultirowExample, [{
                type: i0.Component,
                args: [{
                        selector: 'toolbar-multirow-example',
                        templateUrl: 'toolbar-multirow-example.html',
                        styleUrls: ['toolbar-multirow-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Toolbar overview
     */
    var ToolbarOverviewExample = /** @class */ (function () {
        function ToolbarOverviewExample() {
        }
        return ToolbarOverviewExample;
    }());
    ToolbarOverviewExample.ɵfac = function ToolbarOverviewExample_Factory(t) { return new (t || ToolbarOverviewExample)(); };
    ToolbarOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToolbarOverviewExample, selectors: [["toolbar-overview-example"]], decls: 51, vars: 0, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon"], ["color", "primary"]], template: function ToolbarOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵelementStart(1, "mat-toolbar");
                i0.ɵɵelementStart(2, "span");
                i0.ɵɵtext(3, "My Application");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "p");
                i0.ɵɵelementStart(5, "mat-toolbar");
                i0.ɵɵelementStart(6, "button", 0);
                i0.ɵɵelementStart(7, "mat-icon");
                i0.ɵɵtext(8, "menu");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "span");
                i0.ɵɵtext(10, "My App");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(11, "span", 1);
                i0.ɵɵelementStart(12, "button", 2);
                i0.ɵɵelementStart(13, "mat-icon");
                i0.ɵɵtext(14, "favorite");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "button", 3);
                i0.ɵɵelementStart(16, "mat-icon");
                i0.ɵɵtext(17, "share");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "p");
                i0.ɵɵelementStart(19, "mat-toolbar", 4);
                i0.ɵɵelementStart(20, "button", 0);
                i0.ɵɵelementStart(21, "mat-icon");
                i0.ɵɵtext(22, "menu");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(23, "span");
                i0.ɵɵtext(24, "My App");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(25, "span", 1);
                i0.ɵɵelementStart(26, "button", 2);
                i0.ɵɵelementStart(27, "mat-icon");
                i0.ɵɵtext(28, "favorite");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(29, "button", 3);
                i0.ɵɵelementStart(30, "mat-icon");
                i0.ɵɵtext(31, "share");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(32, "p");
                i0.ɵɵelementStart(33, "mat-toolbar", 4);
                i0.ɵɵelementStart(34, "mat-toolbar-row");
                i0.ɵɵelementStart(35, "span");
                i0.ɵɵtext(36, "My App");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(37, "span", 1);
                i0.ɵɵelementStart(38, "button", 0);
                i0.ɵɵelementStart(39, "mat-icon");
                i0.ɵɵtext(40, "menu");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(41, "mat-toolbar-row");
                i0.ɵɵelementStart(42, "span");
                i0.ɵɵtext(43, "Second Line");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(44, "span", 1);
                i0.ɵɵelementStart(45, "button", 2);
                i0.ɵɵelementStart(46, "mat-icon");
                i0.ɵɵtext(47, "favorite");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(48, "button", 3);
                i0.ɵɵelementStart(49, "mat-icon");
                i0.ɵɵtext(50, "share");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.MatToolbar, i2.MatButton, i3.MatIcon, i1.MatToolbarRow], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolbarOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'toolbar-overview-example',
                        templateUrl: 'toolbar-overview-example.html',
                        styleUrls: ['toolbar-overview-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Testing with MatToolbarHarness
     */
    var ToolbarHarnessExample = /** @class */ (function () {
        function ToolbarHarnessExample() {
        }
        return ToolbarHarnessExample;
    }());
    ToolbarHarnessExample.ɵfac = function ToolbarHarnessExample_Factory(t) { return new (t || ToolbarHarnessExample)(); };
    ToolbarHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToolbarHarnessExample, selectors: [["toolbar-harness-example"]], decls: 14, vars: 0, consts: [["mat-button", ""]], template: function ToolbarHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-toolbar");
                i0.ɵɵelementStart(1, "span");
                i0.ɵɵtext(2, "My App");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-toolbar");
                i0.ɵɵelementStart(4, "mat-toolbar-row");
                i0.ɵɵelementStart(5, "span");
                i0.ɵɵtext(6, "Row 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "mat-toolbar-row");
                i0.ɵɵelementStart(8, "span");
                i0.ɵɵtext(9, "Row 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "button", 0);
                i0.ɵɵtext(11, " Button 1 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "button", 0);
                i0.ɵɵtext(13, " Button 2 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.MatToolbar, i1.MatToolbarRow, i2.MatButton], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolbarHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'toolbar-harness-example',
                        templateUrl: 'toolbar-harness-example.html',
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        ToolbarBasicExample,
        ToolbarHarnessExample,
        ToolbarMultirowExample,
        ToolbarOverviewExample,
    ];
    var ToolbarExamplesModule = /** @class */ (function () {
        function ToolbarExamplesModule() {
        }
        return ToolbarExamplesModule;
    }());
    ToolbarExamplesModule.ɵfac = function ToolbarExamplesModule_Factory(t) { return new (t || ToolbarExamplesModule)(); };
    ToolbarExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ToolbarExamplesModule });
    ToolbarExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
                i2.MatButtonModule,
                i3.MatIconModule,
                i1.MatToolbarModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolbarExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2.MatButtonModule,
                            i3.MatIconModule,
                            i1.MatToolbarModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ToolbarExamplesModule, { declarations: [ToolbarBasicExample,
                ToolbarHarnessExample,
                ToolbarMultirowExample,
                ToolbarOverviewExample], imports: [i2.MatButtonModule,
                i3.MatIconModule,
                i1.MatToolbarModule], exports: [ToolbarBasicExample,
                ToolbarHarnessExample,
                ToolbarMultirowExample,
                ToolbarOverviewExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ToolbarBasicExample = ToolbarBasicExample;
    exports.ToolbarExamplesModule = ToolbarExamplesModule;
    exports.ToolbarHarnessExample = ToolbarHarnessExample;
    exports.ToolbarMultirowExample = ToolbarMultirowExample;
    exports.ToolbarOverviewExample = ToolbarOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-toolbar.umd.js.map
