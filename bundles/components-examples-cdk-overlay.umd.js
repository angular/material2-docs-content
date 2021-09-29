(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/overlay')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/cdk/overlay', ['exports', '@angular/core', '@angular/cdk/overlay'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.cdk = global.ng.componentsExamples.cdk || {}, global.ng.componentsExamples.cdk.overlay = {}), global.ng.core, global.ng.cdk.overlay));
}(this, (function (exports, i0, i1) { 'use strict';

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

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    function CdkOverlayBasicExample_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "ul", 3);
            i0__namespace.ɵɵelementStart(1, "li");
            i0__namespace.ɵɵtext(2, "Item 1");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "li");
            i0__namespace.ɵɵtext(4, "Item 2");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(5, "li");
            i0__namespace.ɵɵtext(6, "Item 3");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
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
    CdkOverlayBasicExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkOverlayBasicExample, selectors: [["cdk-overlay-basic-example"]], decls: 4, vars: 3, consts: [["type", "button", "cdkOverlayOrigin", "", 3, "click"], ["trigger", "cdkOverlayOrigin"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen"], [1, "example-list"]], template: function CdkOverlayBasicExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0, 1);
                i0__namespace.ɵɵlistener("click", function CdkOverlayBasicExample_Template_button_click_0_listener() { return ctx.isOpen = !ctx.isOpen; });
                i0__namespace.ɵɵtext(2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(3, CdkOverlayBasicExample_ng_template_3_Template, 7, 0, "ng-template", 2);
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(1);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.isOpen ? "Close" : "Open", "\n");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.isOpen);
            }
        }, directives: [i1__namespace.CdkOverlayOrigin, i1__namespace.CdkConnectedOverlay], styles: [".example-list[_ngcontent-%COMP%] {\n  width: 100px;\n  border: solid 1px #ccc;\n  border-radius: 5px;\n  background: #fff;\n  text-align: center;\n  padding: 10px;\n  margin: 0;\n}\n\n.example-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  border-bottom: solid 1px #8b8b8b;\n  padding: 8px 0;\n}\n\n.example-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkOverlayBasicExample, [{
                type: i0.Component,
                args: [{ selector: 'cdk-overlay-basic-example', template: "<!-- This button triggers the overlay and is it's origin -->\n<button (click)=\"isOpen = !isOpen\" type=\"button\" cdkOverlayOrigin #trigger=\"cdkOverlayOrigin\">\n  {{isOpen ? \"Close\" : \"Open\"}}\n</button>\n\n<!-- This template displays the overlay content and is connected to the button -->\n<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"trigger\"\n  [cdkConnectedOverlayOpen]=\"isOpen\"\n>\n  <ul class=\"example-list\">\n    <li>Item 1</li>\n    <li>Item 2</li>\n    <li>Item 3</li>\n  </ul>\n</ng-template>\n", styles: [".example-list {\n  width: 100px;\n  border: solid 1px #ccc;\n  border-radius: 5px;\n  background: #fff;\n  text-align: center;\n  padding: 10px;\n  margin: 0;\n}\n\n.example-list > li {\n  list-style-type: none;\n  border-bottom: solid 1px #8b8b8b;\n  padding: 8px 0;\n}\n\n.example-list > li:last-child {\n  border-bottom: none;\n}\n"] }]
            }], null, null);
    })();

    var EXAMPLES = [CdkOverlayBasicExample];
    var CdkOverlayExamplesModule = /** @class */ (function () {
        function CdkOverlayExamplesModule() {
        }
        return CdkOverlayExamplesModule;
    }());
    CdkOverlayExamplesModule.ɵfac = function CdkOverlayExamplesModule_Factory(t) { return new (t || CdkOverlayExamplesModule)(); };
    CdkOverlayExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: CdkOverlayExamplesModule });
    CdkOverlayExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1.OverlayModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkOverlayExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.OverlayModule],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(CdkOverlayExamplesModule, { declarations: [CdkOverlayBasicExample], imports: [i1.OverlayModule], exports: [CdkOverlayBasicExample] }); })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CdkOverlayBasicExample = CdkOverlayBasicExample;
    exports.CdkOverlayExamplesModule = CdkOverlayExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-cdk-overlay.umd.js.map
