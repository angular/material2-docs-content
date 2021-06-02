import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1 from '@angular/cdk/accordion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';

function CdkAccordionOverviewExample_cdk_accordion_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cdk-accordion-item", 2, 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵlistener("click", function CdkAccordionOverviewExample_cdk_accordion_item_1_Template_div_click_2_listener() { i0.ɵɵrestoreView(_r5); const _r3 = i0.ɵɵreference(1); return _r3.toggle(); });
    i0.ɵɵtext(3);
    i0.ɵɵelementStart(4, "span", 5);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 6);
    i0.ɵɵtext(7, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa? ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    const _r3 = i0.ɵɵreference(1);
    i0.ɵɵattribute("id", "accordion-header-" + index_r2)("aria-expanded", _r3.expanded)("aria-controls", "accordion-body-" + index_r2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r1, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Click to ", _r3.expanded ? "close" : "open", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("display", _r3.expanded ? "" : "none");
    i0.ɵɵattribute("id", "accordion-body-" + index_r2)("aria-labelledby", "accordion-header-" + index_r2);
} }
/**
 * @title Accordion overview
 */
class CdkAccordionOverviewExample {
    constructor() {
        this.items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
        this.expandedIndex = 0;
    }
}
CdkAccordionOverviewExample.ɵfac = function CdkAccordionOverviewExample_Factory(t) { return new (t || CdkAccordionOverviewExample)(); };
CdkAccordionOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkAccordionOverviewExample, selectors: [["cdk-accordion-overview-example"]], decls: 2, vars: 1, consts: [[1, "example-accordion"], ["class", "example-accordion-item", "role", "button", "tabindex", "0", 4, "ngFor", "ngForOf"], ["role", "button", "tabindex", "0", 1, "example-accordion-item"], ["accordionItem", "cdkAccordionItem"], [1, "example-accordion-item-header", 3, "click"], [1, "example-accordion-item-description"], ["role", "region", 1, "example-accordion-item-body"]], template: function CdkAccordionOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-accordion", 0);
        i0.ɵɵtemplate(1, CdkAccordionOverviewExample_cdk_accordion_item_1_Template, 8, 9, "cdk-accordion-item", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.items);
    } }, directives: [i1.CdkAccordion, i2.NgForOf, i1.CdkAccordionItem], styles: [".example-accordion[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 500px;\n}\n\n.example-accordion-item[_ngcontent-%COMP%] {\n  display: block;\n  border: solid 1px #ccc;\n}\n\n.example-accordion-item[_ngcontent-%COMP%]    + .example-accordion-item[_ngcontent-%COMP%] {\n  border-top: none;\n}\n\n.example-accordion-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n}\n\n.example-accordion-item-description[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n  color: #999;\n}\n\n.example-accordion-item-header[_ngcontent-%COMP%], .example-accordion-item-body[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.example-accordion-item-header[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #eee;\n}\n\n.example-accordion-item[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.example-accordion-item[_ngcontent-%COMP%]:last-child {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkAccordionOverviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-accordion-overview-example',
                templateUrl: 'cdk-accordion-overview-example.html',
                styleUrls: ['cdk-accordion-overview-example.css'],
            }]
    }], null, null); })();

const EXAMPLES = [
    CdkAccordionOverviewExample,
];
class CdkAccordionExamplesModule {
}
CdkAccordionExamplesModule.ɵfac = function CdkAccordionExamplesModule_Factory(t) { return new (t || CdkAccordionExamplesModule)(); };
CdkAccordionExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CdkAccordionExamplesModule });
CdkAccordionExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            CdkAccordionModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkAccordionExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    CdkAccordionModule
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkAccordionExamplesModule, { declarations: [CdkAccordionOverviewExample], imports: [CommonModule,
        CdkAccordionModule], exports: [CdkAccordionOverviewExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CdkAccordionExamplesModule, CdkAccordionOverviewExample };
//# sourceMappingURL=accordion.js.map
