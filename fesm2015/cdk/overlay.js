import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1 from '@angular/cdk/overlay';
import { OverlayModule } from '@angular/cdk/overlay';

function CdkOverlayBasicExample_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 3);
    i0.ɵɵelementStart(1, "li");
    i0.ɵɵtext(2, "Item 1");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "li");
    i0.ɵɵtext(4, "Item 2");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "li");
    i0.ɵɵtext(6, "Item 3");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
/**
 * @title Overlay basic example
 */
class CdkOverlayBasicExample {
    constructor() {
        this.isOpen = false;
    }
}
CdkOverlayBasicExample.ɵfac = function CdkOverlayBasicExample_Factory(t) { return new (t || CdkOverlayBasicExample)(); };
CdkOverlayBasicExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkOverlayBasicExample, selectors: [["cdk-overlay-basic-example"]], decls: 4, vars: 3, consts: [["type", "button", "cdkOverlayOrigin", "", 3, "click"], ["trigger", "cdkOverlayOrigin"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen"], [1, "example-list"]], template: function CdkOverlayBasicExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0, 1);
        i0.ɵɵlistener("click", function CdkOverlayBasicExample_Template_button_click_0_listener() { return ctx.isOpen = !ctx.isOpen; });
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, CdkOverlayBasicExample_ng_template_3_Template, 7, 0, "ng-template", 2);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.isOpen ? "Close" : "Open", "\n");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.isOpen);
    } }, directives: [i1.CdkOverlayOrigin, i1.CdkConnectedOverlay], styles: [".example-list[_ngcontent-%COMP%] {\n  width: 100px;\n  border: solid 1px #ccc;\n  border-radius: 5px;\n  background: #fff;\n  text-align: center;\n  padding: 10px;\n  margin: 0;\n}\n\n.example-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  border-bottom: solid 1px #8b8b8b;\n  padding: 8px 0;\n}\n\n.example-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkOverlayBasicExample, [{
        type: Component,
        args: [{ selector: 'cdk-overlay-basic-example', template: "<!-- This button triggers the overlay and is it's origin -->\n<button (click)=\"isOpen = !isOpen\" type=\"button\" cdkOverlayOrigin #trigger=\"cdkOverlayOrigin\">\n  {{isOpen ? \"Close\" : \"Open\"}}\n</button>\n\n<!-- This template displays the overlay content and is connected to the button -->\n<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"trigger\"\n  [cdkConnectedOverlayOpen]=\"isOpen\"\n>\n  <ul class=\"example-list\">\n    <li>Item 1</li>\n    <li>Item 2</li>\n    <li>Item 3</li>\n  </ul>\n</ng-template>\n", styles: [".example-list {\n  width: 100px;\n  border: solid 1px #ccc;\n  border-radius: 5px;\n  background: #fff;\n  text-align: center;\n  padding: 10px;\n  margin: 0;\n}\n\n.example-list > li {\n  list-style-type: none;\n  border-bottom: solid 1px #8b8b8b;\n  padding: 8px 0;\n}\n\n.example-list > li:last-child {\n  border-bottom: none;\n}\n"] }]
    }], null, null); })();

const EXAMPLES = [CdkOverlayBasicExample];
class CdkOverlayExamplesModule {
}
CdkOverlayExamplesModule.ɵfac = function CdkOverlayExamplesModule_Factory(t) { return new (t || CdkOverlayExamplesModule)(); };
CdkOverlayExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CdkOverlayExamplesModule });
CdkOverlayExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[OverlayModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkOverlayExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [OverlayModule],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkOverlayExamplesModule, { declarations: [CdkOverlayBasicExample], imports: [OverlayModule], exports: [CdkOverlayBasicExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CdkOverlayBasicExample, CdkOverlayExamplesModule };
//# sourceMappingURL=overlay.js.map
