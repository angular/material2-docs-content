(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/platform'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/cdk/platform', ['exports', '@angular/cdk/platform', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.cdk = global.ng.componentsExamples.cdk || {}, global.ng.componentsExamples.cdk.platform = {}), global.ng.cdk.platform, global.ng.core));
}(this, (function (exports, i1, i0) { 'use strict';

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

    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

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
    CdkPlatformOverviewExample.ɵfac = function CdkPlatformOverviewExample_Factory(t) { return new (t || CdkPlatformOverviewExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace.Platform)); };
    CdkPlatformOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkPlatformOverviewExample, selectors: [["cdk-platform-overview-example"]], decls: 24, vars: 11, template: function CdkPlatformOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "h2");
                i0__namespace.ɵɵtext(1, "Platform information:");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "p");
                i0__namespace.ɵɵtext(3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "p");
                i0__namespace.ɵɵtext(5);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "p");
                i0__namespace.ɵɵtext(7);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "p");
                i0__namespace.ɵɵtext(9);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "p");
                i0__namespace.ɵɵtext(11);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "p");
                i0__namespace.ɵɵtext(13);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "p");
                i0__namespace.ɵɵtext(15);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(16, "p");
                i0__namespace.ɵɵtext(17);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(18, "p");
                i0__namespace.ɵɵtext(19);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(20, "p");
                i0__namespace.ɵɵtext(21);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(22, "p");
                i0__namespace.ɵɵtext(23);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate1("Is Android: ", ctx.platform.ANDROID, "");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate1("Is iOS: ", ctx.platform.IOS, "");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate1("Is Firefox: ", ctx.platform.FIREFOX, "");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate1("Is Blink: ", ctx.platform.BLINK, "");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate1("Is Webkit: ", ctx.platform.WEBKIT, "");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate1("Is Trident: ", ctx.platform.TRIDENT, "");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate1("Is Edge: ", ctx.platform.EDGE, "");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate1("Is Safari: ", ctx.platform.SAFARI, "");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate1("Supported input types: ", ctx.supportedInputTypes, "");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate1("Supports passive event listeners: ", ctx.supportsPassiveEventListeners, "");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate1("Supports scroll behavior: ", ctx.supportsScrollBehavior, "");
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkPlatformOverviewExample, [{
                type: i0.Component,
                args: [{ selector: 'cdk-platform-overview-example', template: "<h2>Platform information:</h2>\n<p>Is Android: {{platform.ANDROID}}</p>\n<p>Is iOS: {{platform.IOS}}</p>\n<p>Is Firefox: {{platform.FIREFOX}}</p>\n<p>Is Blink: {{platform.BLINK}}</p>\n<p>Is Webkit: {{platform.WEBKIT}}</p>\n<p>Is Trident: {{platform.TRIDENT}}</p>\n<p>Is Edge: {{platform.EDGE}}</p>\n<p>Is Safari: {{platform.SAFARI}}</p>\n<p>Supported input types: {{supportedInputTypes}}</p>\n<p>Supports passive event listeners: {{supportsPassiveEventListeners}}</p>\n<p>Supports scroll behavior: {{supportsScrollBehavior}}</p>\n" }]
            }], function () { return [{ type: i1__namespace.Platform }]; }, null);
    })();

    var EXAMPLES = [CdkPlatformOverviewExample];
    var CdkPlatformExamplesModule = /** @class */ (function () {
        function CdkPlatformExamplesModule() {
        }
        return CdkPlatformExamplesModule;
    }());
    CdkPlatformExamplesModule.ɵfac = function CdkPlatformExamplesModule_Factory(t) { return new (t || CdkPlatformExamplesModule)(); };
    CdkPlatformExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: CdkPlatformExamplesModule });
    CdkPlatformExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.PlatformModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkPlatformExamplesModule, [{
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
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(CdkPlatformExamplesModule, { declarations: [CdkPlatformOverviewExample], imports: [i1.PlatformModule], exports: [CdkPlatformOverviewExample] }); })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CdkPlatformExamplesModule = CdkPlatformExamplesModule;
    exports.CdkPlatformOverviewExample = CdkPlatformOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-cdk-platform.umd.js.map
