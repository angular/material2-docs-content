import { ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵelement, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatToolbar, MatToolbarRow, MatToolbarModule } from '@angular/material/toolbar';

/**
 * @title Basic toolbar
 */
class ToolbarBasicExample {
}
ToolbarBasicExample.ɵfac = function ToolbarBasicExample_Factory(t) { return new (t || ToolbarBasicExample)(); };
ToolbarBasicExample.ɵcmp = ɵɵdefineComponent({ type: ToolbarBasicExample, selectors: [["toolbar-basic-example"]], decls: 13, vars: 0, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon"]], template: function ToolbarBasicExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-toolbar");
        ɵɵelementStart(1, "button", 0);
        ɵɵelementStart(2, "mat-icon");
        ɵɵtext(3, "menu");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "span");
        ɵɵtext(5, "My App");
        ɵɵelementEnd();
        ɵɵelement(6, "span", 1);
        ɵɵelementStart(7, "button", 2);
        ɵɵelementStart(8, "mat-icon");
        ɵɵtext(9, "favorite");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(10, "button", 3);
        ɵɵelementStart(11, "mat-icon");
        ɵɵtext(12, "share");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatToolbar, MatButton, MatIcon], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ToolbarBasicExample, [{
        type: Component,
        args: [{
                selector: 'toolbar-basic-example',
                templateUrl: 'toolbar-basic-example.html',
                styleUrls: ['toolbar-basic-example.css'],
            }]
    }], null, null); })();

/**
 * @title Multi-row toolbar
 */
class ToolbarMultirowExample {
}
ToolbarMultirowExample.ɵfac = function ToolbarMultirowExample_Factory(t) { return new (t || ToolbarMultirowExample)(); };
ToolbarMultirowExample.ɵcmp = ɵɵdefineComponent({ type: ToolbarMultirowExample, selectors: [["toolbar-multirow-example"]], decls: 18, vars: 0, consts: [["color", "primary"], [1, "example-spacer"], ["aria-hidden", "false", "aria-label", "Example user verified icon", 1, "example-icon"], ["aria-hidden", "false", "aria-label", "Example heart icon", 1, "example-icon"], ["aria-hidden", "false", "aria-label", "Example delete icon", 1, "example-icon"]], template: function ToolbarMultirowExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-toolbar", 0);
        ɵɵelementStart(1, "mat-toolbar-row");
        ɵɵelementStart(2, "span");
        ɵɵtext(3, "Custom Toolbar");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "mat-toolbar-row");
        ɵɵelementStart(5, "span");
        ɵɵtext(6, "Second Line");
        ɵɵelementEnd();
        ɵɵelement(7, "span", 1);
        ɵɵelementStart(8, "mat-icon", 2);
        ɵɵtext(9, "verified_user");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(10, "mat-toolbar-row");
        ɵɵelementStart(11, "span");
        ɵɵtext(12, "Third Line");
        ɵɵelementEnd();
        ɵɵelement(13, "span", 1);
        ɵɵelementStart(14, "mat-icon", 3);
        ɵɵtext(15, "favorite");
        ɵɵelementEnd();
        ɵɵelementStart(16, "mat-icon", 4);
        ɵɵtext(17, "delete");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatToolbar, MatToolbarRow, MatIcon], styles: [".example-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ToolbarMultirowExample, [{
        type: Component,
        args: [{
                selector: 'toolbar-multirow-example',
                templateUrl: 'toolbar-multirow-example.html',
                styleUrls: ['toolbar-multirow-example.css'],
            }]
    }], null, null); })();

/**
 * @title Toolbar overview
 */
class ToolbarOverviewExample {
}
ToolbarOverviewExample.ɵfac = function ToolbarOverviewExample_Factory(t) { return new (t || ToolbarOverviewExample)(); };
ToolbarOverviewExample.ɵcmp = ɵɵdefineComponent({ type: ToolbarOverviewExample, selectors: [["toolbar-overview-example"]], decls: 51, vars: 0, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon"], ["color", "primary"]], template: function ToolbarOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵelementStart(1, "mat-toolbar");
        ɵɵelementStart(2, "span");
        ɵɵtext(3, "My Application");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "p");
        ɵɵelementStart(5, "mat-toolbar");
        ɵɵelementStart(6, "button", 0);
        ɵɵelementStart(7, "mat-icon");
        ɵɵtext(8, "menu");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "span");
        ɵɵtext(10, "My App");
        ɵɵelementEnd();
        ɵɵelement(11, "span", 1);
        ɵɵelementStart(12, "button", 2);
        ɵɵelementStart(13, "mat-icon");
        ɵɵtext(14, "favorite");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(15, "button", 3);
        ɵɵelementStart(16, "mat-icon");
        ɵɵtext(17, "share");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(18, "p");
        ɵɵelementStart(19, "mat-toolbar", 4);
        ɵɵelementStart(20, "button", 0);
        ɵɵelementStart(21, "mat-icon");
        ɵɵtext(22, "menu");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(23, "span");
        ɵɵtext(24, "My App");
        ɵɵelementEnd();
        ɵɵelement(25, "span", 1);
        ɵɵelementStart(26, "button", 2);
        ɵɵelementStart(27, "mat-icon");
        ɵɵtext(28, "favorite");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(29, "button", 3);
        ɵɵelementStart(30, "mat-icon");
        ɵɵtext(31, "share");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(32, "p");
        ɵɵelementStart(33, "mat-toolbar", 4);
        ɵɵelementStart(34, "mat-toolbar-row");
        ɵɵelementStart(35, "span");
        ɵɵtext(36, "My App");
        ɵɵelementEnd();
        ɵɵelement(37, "span", 1);
        ɵɵelementStart(38, "button", 0);
        ɵɵelementStart(39, "mat-icon");
        ɵɵtext(40, "menu");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(41, "mat-toolbar-row");
        ɵɵelementStart(42, "span");
        ɵɵtext(43, "Second Line");
        ɵɵelementEnd();
        ɵɵelement(44, "span", 1);
        ɵɵelementStart(45, "button", 2);
        ɵɵelementStart(46, "mat-icon");
        ɵɵtext(47, "favorite");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(48, "button", 3);
        ɵɵelementStart(49, "mat-icon");
        ɵɵtext(50, "share");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatToolbar, MatButton, MatIcon, MatToolbarRow], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ToolbarOverviewExample, [{
        type: Component,
        args: [{
                selector: 'toolbar-overview-example',
                templateUrl: 'toolbar-overview-example.html',
                styleUrls: ['toolbar-overview-example.css'],
            }]
    }], null, null); })();

/**
 * @title Testing with MatToolbarHarness
 */
class ToolbarHarnessExample {
}
ToolbarHarnessExample.ɵfac = function ToolbarHarnessExample_Factory(t) { return new (t || ToolbarHarnessExample)(); };
ToolbarHarnessExample.ɵcmp = ɵɵdefineComponent({ type: ToolbarHarnessExample, selectors: [["toolbar-harness-example"]], decls: 14, vars: 0, consts: [["mat-button", ""]], template: function ToolbarHarnessExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-toolbar");
        ɵɵelementStart(1, "span");
        ɵɵtext(2, "My App");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-toolbar");
        ɵɵelementStart(4, "mat-toolbar-row");
        ɵɵelementStart(5, "span");
        ɵɵtext(6, "Row 1");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-toolbar-row");
        ɵɵelementStart(8, "span");
        ɵɵtext(9, "Row 2");
        ɵɵelementEnd();
        ɵɵelementStart(10, "button", 0);
        ɵɵtext(11, " Button 1 ");
        ɵɵelementEnd();
        ɵɵelementStart(12, "button", 0);
        ɵɵtext(13, " Button 2 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatToolbar, MatToolbarRow, MatButton], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ToolbarHarnessExample, [{
        type: Component,
        args: [{
                selector: 'toolbar-harness-example',
                templateUrl: 'toolbar-harness-example.html',
            }]
    }], null, null); })();

const EXAMPLES = [
    ToolbarBasicExample,
    ToolbarHarnessExample,
    ToolbarMultirowExample,
    ToolbarOverviewExample,
];
class ToolbarExamplesModule {
}
ToolbarExamplesModule.ɵmod = ɵɵdefineNgModule({ type: ToolbarExamplesModule });
ToolbarExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function ToolbarExamplesModule_Factory(t) { return new (t || ToolbarExamplesModule)(); }, imports: [[
            MatButtonModule,
            MatIconModule,
            MatToolbarModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ToolbarExamplesModule, { declarations: [ToolbarBasicExample,
        ToolbarHarnessExample,
        ToolbarMultirowExample,
        ToolbarOverviewExample], imports: [MatButtonModule,
        MatIconModule,
        MatToolbarModule], exports: [ToolbarBasicExample,
        ToolbarHarnessExample,
        ToolbarMultirowExample,
        ToolbarOverviewExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ToolbarExamplesModule, [{
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

/**
 * Generated bundle index. Do not edit.
 */

export { ToolbarBasicExample, ToolbarExamplesModule, ToolbarHarnessExample, ToolbarMultirowExample, ToolbarOverviewExample };
//# sourceMappingURL=toolbar.js.map
