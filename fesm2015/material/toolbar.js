import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i1 from '@angular/material/toolbar';
import { MatToolbarModule } from '@angular/material/toolbar';

/**
 * @title Basic toolbar
 */
class ToolbarBasicExample {
}
ToolbarBasicExample.ɵfac = function ToolbarBasicExample_Factory(t) { return new (t || ToolbarBasicExample)(); };
ToolbarBasicExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToolbarBasicExample, selectors: [["toolbar-basic-example"]], decls: 13, vars: 0, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon"]], template: function ToolbarBasicExample_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i1.MatToolbar, i2.MatButton, i3.MatIcon], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolbarBasicExample, [{
        type: Component,
        args: [{ selector: 'toolbar-basic-example', template: "<mat-toolbar>\n  <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <span>My App</span>\n  <span class=\"example-spacer\"></span>\n  <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n    <mat-icon>share</mat-icon>\n  </button>\n</mat-toolbar>\n", styles: [".example-spacer {\n  flex: 1 1 auto;\n}\n"] }]
    }], null, null); })();

/**
 * @title Multi-row toolbar
 */
class ToolbarMultirowExample {
}
ToolbarMultirowExample.ɵfac = function ToolbarMultirowExample_Factory(t) { return new (t || ToolbarMultirowExample)(); };
ToolbarMultirowExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToolbarMultirowExample, selectors: [["toolbar-multirow-example"]], decls: 18, vars: 0, consts: [["color", "primary"], [1, "example-spacer"], ["aria-hidden", "false", "aria-label", "Example user verified icon", 1, "example-icon"], ["aria-hidden", "false", "aria-label", "Example heart icon", 1, "example-icon"], ["aria-hidden", "false", "aria-label", "Example delete icon", 1, "example-icon"]], template: function ToolbarMultirowExample_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i1.MatToolbar, i1.MatToolbarRow, i3.MatIcon], styles: [".example-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolbarMultirowExample, [{
        type: Component,
        args: [{ selector: 'toolbar-multirow-example', template: "<mat-toolbar color=\"primary\">\n<!-- #docregion toolbar-row -->\n  <mat-toolbar-row>\n    <span>Custom Toolbar</span>\n  </mat-toolbar-row>\n<!-- #enddocregion toolbar-row -->\n\n<!-- #docregion toolbar-position-content -->\n  <mat-toolbar-row>\n    <span>Second Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example user verified icon\">verified_user</mat-icon>\n  </mat-toolbar-row>\n<!-- #enddocregion toolbar-position-content -->\n\n  <mat-toolbar-row>\n    <span>Third Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">favorite</mat-icon>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\">delete</mat-icon>\n  </mat-toolbar-row>\n</mat-toolbar>\n", styles: [".example-icon {\n  padding: 0 14px;\n}\n/* #docregion toolbar-position-content-style */\n.example-spacer {\n  flex: 1 1 auto;\n}\n/* #enddocregion toolbar-position-content-style */\n"] }]
    }], null, null); })();

/**
 * @title Toolbar overview
 */
class ToolbarOverviewExample {
}
ToolbarOverviewExample.ɵfac = function ToolbarOverviewExample_Factory(t) { return new (t || ToolbarOverviewExample)(); };
ToolbarOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToolbarOverviewExample, selectors: [["toolbar-overview-example"]], decls: 51, vars: 0, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon"], ["color", "primary"]], template: function ToolbarOverviewExample_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i1.MatToolbar, i2.MatButton, i3.MatIcon, i1.MatToolbarRow], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolbarOverviewExample, [{
        type: Component,
        args: [{ selector: 'toolbar-overview-example', template: "<p>\n<!-- #docregion toolbar-simple -->\n  <mat-toolbar>\n    <span>My Application</span>\n  </mat-toolbar>\n<!-- #enddocregion toolbar-simple -->\n</p>\n\n<p>\n  <mat-toolbar>\n   <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <span>My App</span>\n  <span class=\"example-spacer\"></span>\n  <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n   <mat-icon>share</mat-icon>\n </button>\n</mat-toolbar>\n</p>\n\n<p>\n  <mat-toolbar color=\"primary\">\n    <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span>My App</span>\n    <span class=\"example-spacer\"></span>\n    <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n    <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n      <mat-icon>share</mat-icon>\n    </button>\n  </mat-toolbar>\n</p>\n\n<p>\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span>My App</span>\n      <span class=\"example-spacer\"></span>\n      <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n        <mat-icon>menu</mat-icon>\n      </button>\n    </mat-toolbar-row>\n\n    <mat-toolbar-row>\n      <span>Second Line</span>\n      <span class=\"example-spacer\"></span>\n      <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n        <mat-icon>favorite</mat-icon>\n      </button>\n      <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n        <mat-icon>share</mat-icon>\n      </button>\n    </mat-toolbar-row>\n  </mat-toolbar>\n</p>\n", styles: [".example-spacer {\n  flex: 1 1 auto;\n}\n"] }]
    }], null, null); })();

/**
 * @title Testing with MatToolbarHarness
 */
class ToolbarHarnessExample {
}
ToolbarHarnessExample.ɵfac = function ToolbarHarnessExample_Factory(t) { return new (t || ToolbarHarnessExample)(); };
ToolbarHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToolbarHarnessExample, selectors: [["toolbar-harness-example"]], decls: 14, vars: 0, consts: [["mat-button", ""]], template: function ToolbarHarnessExample_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i1.MatToolbar, i1.MatToolbarRow, i2.MatButton], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolbarHarnessExample, [{
        type: Component,
        args: [{ selector: 'toolbar-harness-example', template: "<mat-toolbar><span>My App</span></mat-toolbar>\n<mat-toolbar>\n  <mat-toolbar-row><span>Row 1</span></mat-toolbar-row>\n  <mat-toolbar-row><span>Row 2</span>\n    <button mat-button>\n      Button 1\n    </button>\n    <button mat-button>\n      Button 2\n    </button>\n  </mat-toolbar-row>\n</mat-toolbar>\n" }]
    }], null, null); })();

const EXAMPLES = [
    ToolbarBasicExample,
    ToolbarHarnessExample,
    ToolbarMultirowExample,
    ToolbarOverviewExample,
];
class ToolbarExamplesModule {
}
ToolbarExamplesModule.ɵfac = function ToolbarExamplesModule_Factory(t) { return new (t || ToolbarExamplesModule)(); };
ToolbarExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ToolbarExamplesModule });
ToolbarExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            MatButtonModule,
            MatIconModule,
            MatToolbarModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolbarExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatIconModule,
                    MatToolbarModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ToolbarExamplesModule, { declarations: [ToolbarBasicExample,
        ToolbarHarnessExample,
        ToolbarMultirowExample,
        ToolbarOverviewExample], imports: [MatButtonModule,
        MatIconModule,
        MatToolbarModule], exports: [ToolbarBasicExample,
        ToolbarHarnessExample,
        ToolbarMultirowExample,
        ToolbarOverviewExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ToolbarBasicExample, ToolbarExamplesModule, ToolbarHarnessExample, ToolbarMultirowExample, ToolbarOverviewExample };
//# sourceMappingURL=toolbar.js.map
