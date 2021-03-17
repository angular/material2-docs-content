import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵdefineComponent, ɵɵlistener, ɵɵtemplate, ɵɵreference, ɵɵadvance, ɵɵtextInterpolate1, ɵɵproperty, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, ɵɵsetNgModuleScope } from '@angular/core';
import { CdkOverlayOrigin, CdkConnectedOverlay, OverlayModule } from '@angular/cdk/overlay';

function CdkOverlayBasicExample_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 3);
    ɵɵelementStart(1, "li");
    ɵɵtext(2, "Item 1");
    ɵɵelementEnd();
    ɵɵelementStart(3, "li");
    ɵɵtext(4, "Item 2");
    ɵɵelementEnd();
    ɵɵelementStart(5, "li");
    ɵɵtext(6, "Item 3");
    ɵɵelementEnd();
    ɵɵelementEnd();
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
CdkOverlayBasicExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: CdkOverlayBasicExample, selectors: [["cdk-overlay-basic-example"]], decls: 4, vars: 3, consts: [["type", "button", "cdkOverlayOrigin", "", 3, "click"], ["trigger", "cdkOverlayOrigin"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen"], [1, "example-list"]], template: function CdkOverlayBasicExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "button", 0, 1);
        ɵɵlistener("click", function CdkOverlayBasicExample_Template_button_click_0_listener() { return ctx.isOpen = !ctx.isOpen; });
        ɵɵtext(2);
        ɵɵelementEnd();
        ɵɵtemplate(3, CdkOverlayBasicExample_ng_template_3_Template, 7, 0, "ng-template", 2);
    } if (rf & 2) {
        const _r0 = ɵɵreference(1);
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ctx.isOpen ? "Close" : "Open", "\n");
        ɵɵadvance(1);
        ɵɵproperty("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.isOpen);
    } }, directives: [CdkOverlayOrigin, CdkConnectedOverlay], styles: [".example-list[_ngcontent-%COMP%] {\n  width: 100px;\n  border: solid 1px #ccc;\n  border-radius: 5px;\n  background: #fff;\n  text-align: center;\n  padding: 10px;\n  margin: 0;\n}\n\n.example-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  border-bottom: solid 1px #8b8b8b;\n  padding: 8px 0;\n}\n\n.example-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CdkOverlayBasicExample, [{
        type: Component,
        args: [{
                selector: 'cdk-overlay-basic-example',
                templateUrl: './cdk-overlay-basic-example.html',
                styleUrls: ['./cdk-overlay-basic-example.css'],
            }]
    }], null, null); })();

const EXAMPLES = [CdkOverlayBasicExample];
class CdkOverlayExamplesModule {
}
CdkOverlayExamplesModule.ɵfac = function CdkOverlayExamplesModule_Factory(t) { return new (t || CdkOverlayExamplesModule)(); };
CdkOverlayExamplesModule.ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({ type: CdkOverlayExamplesModule });
CdkOverlayExamplesModule.ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [[OverlayModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CdkOverlayExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [OverlayModule],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CdkOverlayExamplesModule, { declarations: [CdkOverlayBasicExample], imports: [OverlayModule], exports: [CdkOverlayBasicExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CdkOverlayBasicExample, CdkOverlayExamplesModule };
//# sourceMappingURL=overlay.js.map
