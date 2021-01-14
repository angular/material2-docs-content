(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/overlay')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/cdk/overlay', ['exports', '@angular/core', '@angular/cdk/overlay'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.cdk = global.ng.componentsExamples.cdk || {}, global.ng.componentsExamples.cdk.overlay = {}), global.ng.core, global.ng.cdk.overlay));
}(this, (function (exports, i0, i1) { 'use strict';

    function CdkOverlayBasicExample_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
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
        }
    }
    /**
     * @title Overlay basic example
     */
    var CdkOverlayBasicExample = /** @class */ (function () {
        function CdkOverlayBasicExample() {
            this.isOpen = false;
        }
        return CdkOverlayBasicExample;
    }());
    CdkOverlayBasicExample.ɵfac = function CdkOverlayBasicExample_Factory(t) { return new (t || CdkOverlayBasicExample)(); };
    CdkOverlayBasicExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkOverlayBasicExample, selectors: [["cdk-overlay-basic-example"]], decls: 4, vars: 3, consts: [["type", "button", "cdkOverlayOrigin", "", 3, "click"], ["trigger", "cdkOverlayOrigin"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen"], [1, "example-list"]], template: function CdkOverlayBasicExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "button", 0, 1);
                i0.ɵɵlistener("click", function CdkOverlayBasicExample_Template_button_click_0_listener() { return ctx.isOpen = !ctx.isOpen; });
                i0.ɵɵtext(2);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(3, CdkOverlayBasicExample_ng_template_3_Template, 7, 0, "ng-template", 2);
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(1);
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1(" ", ctx.isOpen ? "Close" : "Open", "\n");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.isOpen);
            }
        }, directives: [i1.CdkOverlayOrigin, i1.CdkConnectedOverlay], styles: [".example-list[_ngcontent-%COMP%] {\n  width: 100px;\n  border: solid 1px #ccc;\n  border-radius: 5px;\n  background: #fff;\n  text-align: center;\n  padding: 10px;\n  margin: 0;\n}\n\n.example-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  border-bottom: solid 1px #8b8b8b;\n  padding: 8px 0;\n}\n\n.example-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkOverlayBasicExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-overlay-basic-example',
                        templateUrl: './cdk-overlay-basic-example.html',
                        styleUrls: ['./cdk-overlay-basic-example.css'],
                    }]
            }], null, null);
    })();

    var EXAMPLES = [CdkOverlayBasicExample];
    var CdkOverlayExamplesModule = /** @class */ (function () {
        function CdkOverlayExamplesModule() {
        }
        return CdkOverlayExamplesModule;
    }());
    CdkOverlayExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkOverlayExamplesModule });
    CdkOverlayExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkOverlayExamplesModule_Factory(t) { return new (t || CdkOverlayExamplesModule)(); }, imports: [[i1.OverlayModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkOverlayExamplesModule, { declarations: [CdkOverlayBasicExample], imports: [i1.OverlayModule], exports: [CdkOverlayBasicExample] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkOverlayExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.OverlayModule],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CdkOverlayBasicExample = CdkOverlayBasicExample;
    exports.CdkOverlayExamplesModule = CdkOverlayExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-cdk-overlay.umd.js.map
