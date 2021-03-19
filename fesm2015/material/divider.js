import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i2 from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider';
import * as i1 from '@angular/material/list';
import { MatListModule } from '@angular/material/list';

/**
 * @title Basic divider
 */
class DividerOverviewExample {
}
DividerOverviewExample.ɵfac = function DividerOverviewExample_Factory(t) { return new (t || DividerOverviewExample)(); };
DividerOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DividerOverviewExample, selectors: [["divider-overview-example"]], decls: 9, vars: 0, template: function DividerOverviewExample_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i1.MatList, i1.MatListItem, i2.MatDivider], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DividerOverviewExample, [{
        type: Component,
        args: [{
                selector: 'divider-overview-example',
                templateUrl: 'divider-overview-example.html',
            }]
    }], null, null); })();

/**
 * @title Testing with MatDividerHarness
 */
class DividerHarnessExample {
}
DividerHarnessExample.ɵfac = function DividerHarnessExample_Factory(t) { return new (t || DividerHarnessExample)(); };
DividerHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DividerHarnessExample, selectors: [["divider-harness-example"]], decls: 2, vars: 0, consts: [["inset", "", "vertical", ""]], template: function DividerHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-divider");
        i0.ɵɵelement(1, "mat-divider", 0);
    } }, directives: [i2.MatDivider], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DividerHarnessExample, [{
        type: Component,
        args: [{
                selector: 'divider-harness-example',
                templateUrl: 'divider-harness-example.html',
            }]
    }], null, null); })();

const EXAMPLES = [
    DividerHarnessExample,
    DividerOverviewExample,
];
class DividerExamplesModule {
}
DividerExamplesModule.ɵfac = function DividerExamplesModule_Factory(t) { return new (t || DividerExamplesModule)(); };
DividerExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: DividerExamplesModule });
DividerExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            MatDividerModule,
            MatListModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DividerExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatDividerModule,
                    MatListModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DividerExamplesModule, { declarations: [DividerHarnessExample,
        DividerOverviewExample], imports: [MatDividerModule,
        MatListModule], exports: [DividerHarnessExample,
        DividerOverviewExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { DividerExamplesModule, DividerHarnessExample, DividerOverviewExample };
//# sourceMappingURL=divider.js.map
