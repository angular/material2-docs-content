import { ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵelement, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatList, MatListItem, MatListModule } from '@angular/material/list';

/**
 * @title Basic divider
 */
class DividerOverviewExample {
}
DividerOverviewExample.ɵfac = function DividerOverviewExample_Factory(t) { return new (t || DividerOverviewExample)(); };
DividerOverviewExample.ɵcmp = ɵɵdefineComponent({ type: DividerOverviewExample, selectors: [["divider-overview-example"]], decls: 9, vars: 0, template: function DividerOverviewExample_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [MatList, MatListItem, MatDivider], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DividerOverviewExample, [{
        type: Component,
        args: [{
                selector: 'divider-overview-example',
                templateUrl: 'divider-overview-example.html',
            }]
    }], null, null); })();

const EXAMPLES = [
    DividerOverviewExample,
];
class DividerExamplesModule {
}
DividerExamplesModule.ɵmod = ɵɵdefineNgModule({ type: DividerExamplesModule });
DividerExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function DividerExamplesModule_Factory(t) { return new (t || DividerExamplesModule)(); }, imports: [[
            MatDividerModule,
            MatListModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(DividerExamplesModule, { declarations: [DividerOverviewExample], imports: [MatDividerModule,
        MatListModule], exports: [DividerOverviewExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(DividerExamplesModule, [{
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

/**
 * Generated bundle index. Do not edit.
 */

export { DividerExamplesModule, DividerOverviewExample };
//# sourceMappingURL=divider.js.map
