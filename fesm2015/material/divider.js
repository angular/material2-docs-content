import { Component, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵelement, ɵsetClassMetadata, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatList, MatListItem, MatListModule } from '@angular/material/list';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic divider
 */
class DividerOverviewExample {
}
DividerOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'divider-overview-example',
                templateUrl: 'divider-overview-example.html',
                styleUrls: ['divider-overview-example.css'],
            },] },
];
/** @nocollapse */ DividerOverviewExample.ɵfac = function DividerOverviewExample_Factory(t) { return new (t || DividerOverviewExample)(); };
/** @nocollapse */ DividerOverviewExample.ɵcmp = ɵɵdefineComponent({ type: DividerOverviewExample, selectors: [["divider-overview-example"]], decls: 9, vars: 0, template: function DividerOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-list");
        ɵɵelementStart(1, "mat-list-item");
        ɵɵtext(2, "Item 1");
        ɵɵelementEnd();
        ɵɵelement(3, "mat-divider");
        ɵɵelementStart(4, "mat-list-item");
        ɵɵtext(5, "Item 2");
        ɵɵelementEnd();
        ɵɵelement(6, "mat-divider");
        ɵɵelementStart(7, "mat-list-item");
        ɵɵtext(8, "Item 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatList, MatListItem, MatDivider], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DividerOverviewExample, [{
        type: Component,
        args: [{
                selector: 'divider-overview-example',
                templateUrl: 'divider-overview-example.html',
                styleUrls: ['divider-overview-example.css'],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    DividerOverviewExample,
];
class DividerExamplesModule {
}
DividerExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MatDividerModule,
                    MatListModule,
                ],
                declarations: EXAMPLES,
            },] },
];
/** @nocollapse */ DividerExamplesModule.ɵmod = ɵɵdefineNgModule({ type: DividerExamplesModule });
/** @nocollapse */ DividerExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function DividerExamplesModule_Factory(t) { return new (t || DividerExamplesModule)(); }, imports: [[
            MatDividerModule,
            MatListModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(DividerExamplesModule, { declarations: [DividerOverviewExample], imports: [MatDividerModule,
        MatListModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(DividerExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatDividerModule,
                    MatListModule,
                ],
                declarations: EXAMPLES,
            }]
    }], null, null); })();

export { DividerExamplesModule, DividerOverviewExample };
//# sourceMappingURL=divider.js.map
