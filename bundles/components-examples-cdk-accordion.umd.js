(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/cdk/accordion'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/cdk/accordion', ['exports', '@angular/common', '@angular/cdk/accordion', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.cdk = global.ng.componentsExamples.cdk || {}, global.ng.componentsExamples.cdk.accordion = {}), global.ng.common, global.ng.cdk.accordion, global.ng.core));
}(this, (function (exports, i2, i1, i0) { 'use strict';

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

    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    function CdkAccordionOverviewExample_cdk_accordion_item_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "cdk-accordion-item", 2, 3);
            i0__namespace.ɵɵelementStart(2, "div", 4);
            i0__namespace.ɵɵlistener("click", function CdkAccordionOverviewExample_cdk_accordion_item_1_Template_div_click_2_listener() { i0__namespace.ɵɵrestoreView(_r5_1); var _r3 = i0__namespace.ɵɵreference(1); return _r3.toggle(); });
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementStart(4, "span", 5);
            i0__namespace.ɵɵtext(5);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(6, "div", 6);
            i0__namespace.ɵɵtext(7, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa? ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r1 = ctx.$implicit;
            var index_r2 = ctx.index;
            var _r3 = i0__namespace.ɵɵreference(1);
            i0__namespace.ɵɵattribute("id", "accordion-header-" + index_r2)("aria-expanded", _r3.expanded)("aria-controls", "accordion-body-" + index_r2);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate1(" ", item_r1, " ");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" Click to ", _r3.expanded ? "close" : "open", " ");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵstyleProp("display", _r3.expanded ? "" : "none");
            i0__namespace.ɵɵattribute("id", "accordion-body-" + index_r2)("aria-labelledby", "accordion-header-" + index_r2);
        }
    }
    /**
     * @title Accordion overview
     */
    var CdkAccordionOverviewExample = /** @class */ (function () {
        function CdkAccordionOverviewExample() {
            this.items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
            this.expandedIndex = 0;
        }
        return CdkAccordionOverviewExample;
    }());
    CdkAccordionOverviewExample.ɵfac = function CdkAccordionOverviewExample_Factory(t) { return new (t || CdkAccordionOverviewExample)(); };
    CdkAccordionOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkAccordionOverviewExample, selectors: [["cdk-accordion-overview-example"]], decls: 2, vars: 1, consts: [[1, "example-accordion"], ["class", "example-accordion-item", "role", "button", "tabindex", "0", 4, "ngFor", "ngForOf"], ["role", "button", "tabindex", "0", 1, "example-accordion-item"], ["accordionItem", "cdkAccordionItem"], [1, "example-accordion-item-header", 3, "click"], [1, "example-accordion-item-description"], ["role", "region", 1, "example-accordion-item-body"]], template: function CdkAccordionOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "cdk-accordion", 0);
                i0__namespace.ɵɵtemplate(1, CdkAccordionOverviewExample_cdk_accordion_item_1_Template, 8, 9, "cdk-accordion-item", 1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.items);
            }
        }, directives: [i1__namespace.CdkAccordion, i2__namespace.NgForOf, i1__namespace.CdkAccordionItem], styles: [".example-accordion[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 500px;\n}\n\n.example-accordion-item[_ngcontent-%COMP%] {\n  display: block;\n  border: solid 1px #ccc;\n}\n\n.example-accordion-item[_ngcontent-%COMP%]    + .example-accordion-item[_ngcontent-%COMP%] {\n  border-top: none;\n}\n\n.example-accordion-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n}\n\n.example-accordion-item-description[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n  color: #999;\n}\n\n.example-accordion-item-header[_ngcontent-%COMP%], .example-accordion-item-body[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.example-accordion-item-header[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #eee;\n}\n\n.example-accordion-item[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.example-accordion-item[_ngcontent-%COMP%]:last-child {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkAccordionOverviewExample, [{
                type: i0.Component,
                args: [{ selector: 'cdk-accordion-overview-example', template: "<cdk-accordion class=\"example-accordion\">\n  <cdk-accordion-item\n    *ngFor=\"let item of items; let index = index;\"\n    #accordionItem=\"cdkAccordionItem\"\n    class=\"example-accordion-item\"\n    role=\"button\"\n    tabindex=\"0\"\n    [attr.id]=\"'accordion-header-' + index\"\n    [attr.aria-expanded]=\"accordionItem.expanded\"\n    [attr.aria-controls]=\"'accordion-body-' + index\">\n    <div class=\"example-accordion-item-header\" (click)=\"accordionItem.toggle()\">\n      {{ item }}\n      <span class=\"example-accordion-item-description\">\n        Click to {{ accordionItem.expanded ? 'close' : 'open' }}\n      </span>\n    </div>\n    <div\n      class=\"example-accordion-item-body\"\n      role=\"region\"\n      [style.display]=\"accordionItem.expanded ? '' : 'none'\"\n      [attr.id]=\"'accordion-body-' + index\"\n      [attr.aria-labelledby]=\"'accordion-header-' + index\">\n      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis\n      excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis\n      veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?\n    </div>\n  </cdk-accordion-item>\n</cdk-accordion>\n\n", styles: [".example-accordion {\n  display: block;\n  max-width: 500px;\n}\n\n.example-accordion-item {\n  display: block;\n  border: solid 1px #ccc;\n}\n\n.example-accordion-item + .example-accordion-item {\n  border-top: none;\n}\n\n.example-accordion-item-header {\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n}\n\n.example-accordion-item-description {\n  font-size: 0.85em;\n  color: #999;\n}\n\n.example-accordion-item-header,\n.example-accordion-item-body {\n  padding: 16px;\n}\n\n.example-accordion-item-header:hover {\n  cursor: pointer;\n  background-color: #eee;\n}\n\n.example-accordion-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.example-accordion-item:last-child {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n"] }]
            }], null, null);
    })();

    var EXAMPLES = [
        CdkAccordionOverviewExample,
    ];
    var CdkAccordionExamplesModule = /** @class */ (function () {
        function CdkAccordionExamplesModule() {
        }
        return CdkAccordionExamplesModule;
    }());
    CdkAccordionExamplesModule.ɵfac = function CdkAccordionExamplesModule_Factory(t) { return new (t || CdkAccordionExamplesModule)(); };
    CdkAccordionExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: CdkAccordionExamplesModule });
    CdkAccordionExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i2.CommonModule,
                i1.CdkAccordionModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkAccordionExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2.CommonModule,
                            i1.CdkAccordionModule
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(CdkAccordionExamplesModule, { declarations: [CdkAccordionOverviewExample], imports: [i2.CommonModule,
                i1.CdkAccordionModule], exports: [CdkAccordionOverviewExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CdkAccordionExamplesModule = CdkAccordionExamplesModule;
    exports.CdkAccordionOverviewExample = CdkAccordionOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-cdk-accordion.umd.js.map
