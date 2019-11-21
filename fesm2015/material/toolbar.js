import { Component, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵelement, ɵsetClassMetadata, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatToolbar, MatToolbarRow, MatToolbarModule } from '@angular/material/toolbar';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Multi-row toolbar
 */
class ToolbarMultirowExample {
}
ToolbarMultirowExample.decorators = [
    { type: Component, args: [{
                selector: 'toolbar-multirow-example',
                templateUrl: 'toolbar-multirow-example.html',
                styleUrls: ['toolbar-multirow-example.css'],
            },] },
];
/** @nocollapse */ ToolbarMultirowExample.ɵfac = function ToolbarMultirowExample_Factory(t) { return new (t || ToolbarMultirowExample)(); };
/** @nocollapse */ ToolbarMultirowExample.ɵcmp = ɵɵdefineComponent({ type: ToolbarMultirowExample, selectors: [["toolbar-multirow-example"]], decls: 18, vars: 0, consts: [["color", "primary"], [1, "example-spacer"], ["aria-hidden", "false", "aria-label", "Example user verified icon", 1, "example-icon"], ["aria-hidden", "false", "aria-label", "Example heart icon", 1, "example-icon"], ["aria-hidden", "false", "aria-label", "Example delete icon", 1, "example-icon"]], template: function ToolbarMultirowExample_Template(rf, ctx) { if (rf & 1) {
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(ToolbarMultirowExample, [{
        type: Component,
        args: [{
                selector: 'toolbar-multirow-example',
                templateUrl: 'toolbar-multirow-example.html',
                styleUrls: ['toolbar-multirow-example.css'],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic toolbar
 */
class ToolbarOverviewExample {
}
ToolbarOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'toolbar-overview-example',
                templateUrl: 'toolbar-overview-example.html',
                styleUrls: ['toolbar-overview-example.css'],
            },] },
];
/** @nocollapse */ ToolbarOverviewExample.ɵfac = function ToolbarOverviewExample_Factory(t) { return new (t || ToolbarOverviewExample)(); };
/** @nocollapse */ ToolbarOverviewExample.ɵcmp = ɵɵdefineComponent({ type: ToolbarOverviewExample, selectors: [["toolbar-overview-example"]], decls: 2, vars: 0, template: function ToolbarOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-toolbar");
        ɵɵtext(1, "My App");
        ɵɵelementEnd();
    } }, directives: [MatToolbar], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ToolbarOverviewExample, [{
        type: Component,
        args: [{
                selector: 'toolbar-overview-example',
                templateUrl: 'toolbar-overview-example.html',
                styleUrls: ['toolbar-overview-example.css'],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    ToolbarMultirowExample,
    ToolbarOverviewExample,
];
class ToolbarExamplesModule {
}
ToolbarExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MatIconModule,
                    MatToolbarModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ ToolbarExamplesModule.ɵmod = ɵɵdefineNgModule({ type: ToolbarExamplesModule });
/** @nocollapse */ ToolbarExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function ToolbarExamplesModule_Factory(t) { return new (t || ToolbarExamplesModule)(); }, imports: [[
            MatIconModule,
            MatToolbarModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ToolbarExamplesModule, { declarations: [ToolbarMultirowExample,
        ToolbarOverviewExample], imports: [MatIconModule,
        MatToolbarModule], exports: [ToolbarMultirowExample,
        ToolbarOverviewExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ToolbarExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatIconModule,
                    MatToolbarModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

export { ToolbarExamplesModule, ToolbarMultirowExample, ToolbarOverviewExample };
//# sourceMappingURL=toolbar.js.map
