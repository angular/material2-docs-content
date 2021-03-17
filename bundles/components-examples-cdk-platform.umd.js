(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/platform'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/cdk/platform', ['exports', '@angular/cdk/platform', '@angular/core'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.cdk = global.ng.componentsExamples.cdk || {}, global.ng.componentsExamples.cdk.platform = {}), global.ng.cdk.platform, global.ng.core));
}(this, (function (exports, i1, i0) { 'use strict';

    /**
     * @title Platform overview
     */
    var CdkPlatformOverviewExample = /** @class */ (function () {
        function CdkPlatformOverviewExample(platform) {
            this.platform = platform;
            this.supportedInputTypes = Array.from(i1.getSupportedInputTypes()).join(', ');
            this.supportsPassiveEventListeners = i1.supportsPassiveEventListeners();
            this.supportsScrollBehavior = i1.supportsScrollBehavior();
        }
        return CdkPlatformOverviewExample;
    }());
    CdkPlatformOverviewExample.ɵfac = function CdkPlatformOverviewExample_Factory(t) { return new (t || CdkPlatformOverviewExample)(i0.ɵɵdirectiveInject(i1.Platform)); };
    CdkPlatformOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkPlatformOverviewExample, selectors: [["cdk-platform-overview-example"]], decls: 24, vars: 11, template: function CdkPlatformOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "h2");
                i0.ɵɵtext(1, "Platform information:");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "p");
                i0.ɵɵtext(3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "p");
                i0.ɵɵtext(5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "p");
                i0.ɵɵtext(7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "p");
                i0.ɵɵtext(9);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "p");
                i0.ɵɵtext(11);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "p");
                i0.ɵɵtext(13);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "p");
                i0.ɵɵtext(15);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "p");
                i0.ɵɵtext(17);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "p");
                i0.ɵɵtext(19);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "p");
                i0.ɵɵtext(21);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(22, "p");
                i0.ɵɵtext(23);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵtextInterpolate1("Is Android: ", ctx.platform.ANDROID, "");
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1("Is iOS: ", ctx.platform.IOS, "");
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1("Is Firefox: ", ctx.platform.FIREFOX, "");
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1("Is Blink: ", ctx.platform.BLINK, "");
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1("Is Webkit: ", ctx.platform.WEBKIT, "");
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1("Is Trident: ", ctx.platform.TRIDENT, "");
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1("Is Edge: ", ctx.platform.EDGE, "");
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1("Is Safari: ", ctx.platform.SAFARI, "");
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1("Supported input types: ", ctx.supportedInputTypes, "");
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1("Supports passive event listeners: ", ctx.supportsPassiveEventListeners, "");
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1("Supports scroll behavior: ", ctx.supportsScrollBehavior, "");
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkPlatformOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-platform-overview-example',
                        templateUrl: 'cdk-platform-overview-example.html',
                    }]
            }], function () { return [{ type: i1.Platform }]; }, null);
    })();

    var EXAMPLES = [CdkPlatformOverviewExample];
    var CdkPlatformExamplesModule = /** @class */ (function () {
        function CdkPlatformExamplesModule() {
        }
        return CdkPlatformExamplesModule;
    }());
    CdkPlatformExamplesModule.ɵfac = function CdkPlatformExamplesModule_Factory(t) { return new (t || CdkPlatformExamplesModule)(); };
    CdkPlatformExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CdkPlatformExamplesModule });
    CdkPlatformExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
                i1.PlatformModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkPlatformExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.PlatformModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkPlatformExamplesModule, { declarations: [CdkPlatformOverviewExample], imports: [i1.PlatformModule], exports: [CdkPlatformOverviewExample] }); })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CdkPlatformExamplesModule = CdkPlatformExamplesModule;
    exports.CdkPlatformOverviewExample = CdkPlatformOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-cdk-platform.umd.js.map
