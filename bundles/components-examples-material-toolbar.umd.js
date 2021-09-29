(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/toolbar')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/toolbar', ['exports', '@angular/core', '@angular/material/button', '@angular/material/icon', '@angular/material/toolbar'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.toolbar = {}), global.ng.core, global.ng.material.button, global.ng.material.icon, global.ng.material.toolbar));
}(this, (function (exports, i0, i2, i3, i1) { 'use strict';

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
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    /**
     * @title Basic toolbar
     */
    var ToolbarBasicExample = /** @class */ (function () {
        function ToolbarBasicExample() {
        }
        return ToolbarBasicExample;
    }());
    ToolbarBasicExample.ɵfac = function ToolbarBasicExample_Factory(t) { return new (t || ToolbarBasicExample)(); };
    ToolbarBasicExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ToolbarBasicExample, selectors: [["toolbar-basic-example"]], decls: 13, vars: 0, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon"]], template: function ToolbarBasicExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-toolbar");
                i0__namespace.ɵɵelementStart(1, "button", 0);
                i0__namespace.ɵɵelementStart(2, "mat-icon");
                i0__namespace.ɵɵtext(3, "menu");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "span");
                i0__namespace.ɵɵtext(5, "My App");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(6, "span", 1);
                i0__namespace.ɵɵelementStart(7, "button", 2);
                i0__namespace.ɵɵelementStart(8, "mat-icon");
                i0__namespace.ɵɵtext(9, "favorite");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "button", 3);
                i0__namespace.ɵɵelementStart(11, "mat-icon");
                i0__namespace.ɵɵtext(12, "share");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatToolbar, i2__namespace.MatButton, i3__namespace.MatIcon], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ToolbarBasicExample, [{
                type: i0.Component,
                args: [{ selector: 'toolbar-basic-example', template: "<mat-toolbar>\n  <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <span>My App</span>\n  <span class=\"example-spacer\"></span>\n  <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n    <mat-icon>share</mat-icon>\n  </button>\n</mat-toolbar>\n", styles: [".example-spacer {\n  flex: 1 1 auto;\n}\n"] }]
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
    ToolbarMultirowExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ToolbarMultirowExample, selectors: [["toolbar-multirow-example"]], decls: 18, vars: 0, consts: [["color", "primary"], [1, "example-spacer"], ["aria-hidden", "false", "aria-label", "Example user verified icon", 1, "example-icon"], ["aria-hidden", "false", "aria-label", "Example heart icon", 1, "example-icon"], ["aria-hidden", "false", "aria-label", "Example delete icon", 1, "example-icon"]], template: function ToolbarMultirowExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-toolbar", 0);
                i0__namespace.ɵɵelementStart(1, "mat-toolbar-row");
                i0__namespace.ɵɵelementStart(2, "span");
                i0__namespace.ɵɵtext(3, "Custom Toolbar");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "mat-toolbar-row");
                i0__namespace.ɵɵelementStart(5, "span");
                i0__namespace.ɵɵtext(6, "Second Line");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(7, "span", 1);
                i0__namespace.ɵɵelementStart(8, "mat-icon", 2);
                i0__namespace.ɵɵtext(9, "verified_user");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "mat-toolbar-row");
                i0__namespace.ɵɵelementStart(11, "span");
                i0__namespace.ɵɵtext(12, "Third Line");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(13, "span", 1);
                i0__namespace.ɵɵelementStart(14, "mat-icon", 3);
                i0__namespace.ɵɵtext(15, "favorite");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(16, "mat-icon", 4);
                i0__namespace.ɵɵtext(17, "delete");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatToolbar, i1__namespace.MatToolbarRow, i3__namespace.MatIcon], styles: [".example-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ToolbarMultirowExample, [{
                type: i0.Component,
                args: [{ selector: 'toolbar-multirow-example', template: "<mat-toolbar color=\"primary\">\n<!-- #docregion toolbar-row -->\n  <mat-toolbar-row>\n    <span>Custom Toolbar</span>\n  </mat-toolbar-row>\n<!-- #enddocregion toolbar-row -->\n\n<!-- #docregion toolbar-position-content -->\n  <mat-toolbar-row>\n    <span>Second Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example user verified icon\">verified_user</mat-icon>\n  </mat-toolbar-row>\n<!-- #enddocregion toolbar-position-content -->\n\n  <mat-toolbar-row>\n    <span>Third Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">favorite</mat-icon>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\">delete</mat-icon>\n  </mat-toolbar-row>\n</mat-toolbar>\n", styles: [".example-icon {\n  padding: 0 14px;\n}\n/* #docregion toolbar-position-content-style */\n.example-spacer {\n  flex: 1 1 auto;\n}\n/* #enddocregion toolbar-position-content-style */\n"] }]
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
    ToolbarOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ToolbarOverviewExample, selectors: [["toolbar-overview-example"]], decls: 51, vars: 0, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon"], ["color", "primary"]], template: function ToolbarOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "p");
                i0__namespace.ɵɵelementStart(1, "mat-toolbar");
                i0__namespace.ɵɵelementStart(2, "span");
                i0__namespace.ɵɵtext(3, "My Application");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "p");
                i0__namespace.ɵɵelementStart(5, "mat-toolbar");
                i0__namespace.ɵɵelementStart(6, "button", 0);
                i0__namespace.ɵɵelementStart(7, "mat-icon");
                i0__namespace.ɵɵtext(8, "menu");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "span");
                i0__namespace.ɵɵtext(10, "My App");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(11, "span", 1);
                i0__namespace.ɵɵelementStart(12, "button", 2);
                i0__namespace.ɵɵelementStart(13, "mat-icon");
                i0__namespace.ɵɵtext(14, "favorite");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(15, "button", 3);
                i0__namespace.ɵɵelementStart(16, "mat-icon");
                i0__namespace.ɵɵtext(17, "share");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(18, "p");
                i0__namespace.ɵɵelementStart(19, "mat-toolbar", 4);
                i0__namespace.ɵɵelementStart(20, "button", 0);
                i0__namespace.ɵɵelementStart(21, "mat-icon");
                i0__namespace.ɵɵtext(22, "menu");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(23, "span");
                i0__namespace.ɵɵtext(24, "My App");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(25, "span", 1);
                i0__namespace.ɵɵelementStart(26, "button", 2);
                i0__namespace.ɵɵelementStart(27, "mat-icon");
                i0__namespace.ɵɵtext(28, "favorite");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(29, "button", 3);
                i0__namespace.ɵɵelementStart(30, "mat-icon");
                i0__namespace.ɵɵtext(31, "share");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(32, "p");
                i0__namespace.ɵɵelementStart(33, "mat-toolbar", 4);
                i0__namespace.ɵɵelementStart(34, "mat-toolbar-row");
                i0__namespace.ɵɵelementStart(35, "span");
                i0__namespace.ɵɵtext(36, "My App");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(37, "span", 1);
                i0__namespace.ɵɵelementStart(38, "button", 0);
                i0__namespace.ɵɵelementStart(39, "mat-icon");
                i0__namespace.ɵɵtext(40, "menu");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(41, "mat-toolbar-row");
                i0__namespace.ɵɵelementStart(42, "span");
                i0__namespace.ɵɵtext(43, "Second Line");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(44, "span", 1);
                i0__namespace.ɵɵelementStart(45, "button", 2);
                i0__namespace.ɵɵelementStart(46, "mat-icon");
                i0__namespace.ɵɵtext(47, "favorite");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(48, "button", 3);
                i0__namespace.ɵɵelementStart(49, "mat-icon");
                i0__namespace.ɵɵtext(50, "share");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatToolbar, i2__namespace.MatButton, i3__namespace.MatIcon, i1__namespace.MatToolbarRow], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ToolbarOverviewExample, [{
                type: i0.Component,
                args: [{ selector: 'toolbar-overview-example', template: "<p>\n<!-- #docregion toolbar-simple -->\n  <mat-toolbar>\n    <span>My Application</span>\n  </mat-toolbar>\n<!-- #enddocregion toolbar-simple -->\n</p>\n\n<p>\n  <mat-toolbar>\n   <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <span>My App</span>\n  <span class=\"example-spacer\"></span>\n  <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n   <mat-icon>share</mat-icon>\n </button>\n</mat-toolbar>\n</p>\n\n<p>\n  <mat-toolbar color=\"primary\">\n    <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span>My App</span>\n    <span class=\"example-spacer\"></span>\n    <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n    <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n      <mat-icon>share</mat-icon>\n    </button>\n  </mat-toolbar>\n</p>\n\n<p>\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span>My App</span>\n      <span class=\"example-spacer\"></span>\n      <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n        <mat-icon>menu</mat-icon>\n      </button>\n    </mat-toolbar-row>\n\n    <mat-toolbar-row>\n      <span>Second Line</span>\n      <span class=\"example-spacer\"></span>\n      <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n        <mat-icon>favorite</mat-icon>\n      </button>\n      <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n        <mat-icon>share</mat-icon>\n      </button>\n    </mat-toolbar-row>\n  </mat-toolbar>\n</p>\n", styles: [".example-spacer {\n  flex: 1 1 auto;\n}\n"] }]
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
    ToolbarHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ToolbarHarnessExample, selectors: [["toolbar-harness-example"]], decls: 14, vars: 0, consts: [["mat-button", ""]], template: function ToolbarHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-toolbar");
                i0__namespace.ɵɵelementStart(1, "span");
                i0__namespace.ɵɵtext(2, "My App");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-toolbar");
                i0__namespace.ɵɵelementStart(4, "mat-toolbar-row");
                i0__namespace.ɵɵelementStart(5, "span");
                i0__namespace.ɵɵtext(6, "Row 1");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "mat-toolbar-row");
                i0__namespace.ɵɵelementStart(8, "span");
                i0__namespace.ɵɵtext(9, "Row 2");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "button", 0);
                i0__namespace.ɵɵtext(11, " Button 1 ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "button", 0);
                i0__namespace.ɵɵtext(13, " Button 2 ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatToolbar, i1__namespace.MatToolbarRow, i2__namespace.MatButton], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ToolbarHarnessExample, [{
                type: i0.Component,
                args: [{ selector: 'toolbar-harness-example', template: "<mat-toolbar><span>My App</span></mat-toolbar>\n<mat-toolbar>\n  <mat-toolbar-row><span>Row 1</span></mat-toolbar-row>\n  <mat-toolbar-row><span>Row 2</span>\n    <button mat-button>\n      Button 1\n    </button>\n    <button mat-button>\n      Button 2\n    </button>\n  </mat-toolbar-row>\n</mat-toolbar>\n" }]
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
    ToolbarExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: ToolbarExamplesModule });
    ToolbarExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i2.MatButtonModule,
                i3.MatIconModule,
                i1.MatToolbarModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ToolbarExamplesModule, [{
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
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(ToolbarExamplesModule, { declarations: [ToolbarBasicExample,
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
