import { getSupportedInputTypes, supportsPassiveEventListeners, supportsScrollBehavior, Platform, PlatformModule } from '@angular/cdk/platform';
import { ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate1, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, ɵɵsetNgModuleScope } from '@angular/core';

/**
 * @title Platform overview
 */
class CdkPlatformOverviewExample {
    constructor(platform) {
        this.platform = platform;
        this.supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
        this.supportsPassiveEventListeners = supportsPassiveEventListeners();
        this.supportsScrollBehavior = supportsScrollBehavior();
    }
}
CdkPlatformOverviewExample.ɵfac = function CdkPlatformOverviewExample_Factory(t) { return new (t || CdkPlatformOverviewExample)(ɵɵdirectiveInject(Platform)); };
CdkPlatformOverviewExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: CdkPlatformOverviewExample, selectors: [["cdk-platform-overview-example"]], decls: 24, vars: 11, template: function CdkPlatformOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "h2");
        ɵɵtext(1, "Platform information:");
        ɵɵelementEnd();
        ɵɵelementStart(2, "p");
        ɵɵtext(3);
        ɵɵelementEnd();
        ɵɵelementStart(4, "p");
        ɵɵtext(5);
        ɵɵelementEnd();
        ɵɵelementStart(6, "p");
        ɵɵtext(7);
        ɵɵelementEnd();
        ɵɵelementStart(8, "p");
        ɵɵtext(9);
        ɵɵelementEnd();
        ɵɵelementStart(10, "p");
        ɵɵtext(11);
        ɵɵelementEnd();
        ɵɵelementStart(12, "p");
        ɵɵtext(13);
        ɵɵelementEnd();
        ɵɵelementStart(14, "p");
        ɵɵtext(15);
        ɵɵelementEnd();
        ɵɵelementStart(16, "p");
        ɵɵtext(17);
        ɵɵelementEnd();
        ɵɵelementStart(18, "p");
        ɵɵtext(19);
        ɵɵelementEnd();
        ɵɵelementStart(20, "p");
        ɵɵtext(21);
        ɵɵelementEnd();
        ɵɵelementStart(22, "p");
        ɵɵtext(23);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵtextInterpolate1("Is Android: ", ctx.platform.ANDROID, "");
        ɵɵadvance(2);
        ɵɵtextInterpolate1("Is iOS: ", ctx.platform.IOS, "");
        ɵɵadvance(2);
        ɵɵtextInterpolate1("Is Firefox: ", ctx.platform.FIREFOX, "");
        ɵɵadvance(2);
        ɵɵtextInterpolate1("Is Blink: ", ctx.platform.BLINK, "");
        ɵɵadvance(2);
        ɵɵtextInterpolate1("Is Webkit: ", ctx.platform.WEBKIT, "");
        ɵɵadvance(2);
        ɵɵtextInterpolate1("Is Trident: ", ctx.platform.TRIDENT, "");
        ɵɵadvance(2);
        ɵɵtextInterpolate1("Is Edge: ", ctx.platform.EDGE, "");
        ɵɵadvance(2);
        ɵɵtextInterpolate1("Is Safari: ", ctx.platform.SAFARI, "");
        ɵɵadvance(2);
        ɵɵtextInterpolate1("Supported input types: ", ctx.supportedInputTypes, "");
        ɵɵadvance(2);
        ɵɵtextInterpolate1("Supports passive event listeners: ", ctx.supportsPassiveEventListeners, "");
        ɵɵadvance(2);
        ɵɵtextInterpolate1("Supports scroll behavior: ", ctx.supportsScrollBehavior, "");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CdkPlatformOverviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-platform-overview-example',
                templateUrl: 'cdk-platform-overview-example.html',
            }]
    }], function () { return [{ type: Platform }]; }, null); })();

const EXAMPLES = [CdkPlatformOverviewExample];
class CdkPlatformExamplesModule {
}
CdkPlatformExamplesModule.ɵfac = function CdkPlatformExamplesModule_Factory(t) { return new (t || CdkPlatformExamplesModule)(); };
CdkPlatformExamplesModule.ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({ type: CdkPlatformExamplesModule });
CdkPlatformExamplesModule.ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [[
            PlatformModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CdkPlatformExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    PlatformModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CdkPlatformExamplesModule, { declarations: [CdkPlatformOverviewExample], imports: [PlatformModule], exports: [CdkPlatformOverviewExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CdkPlatformExamplesModule, CdkPlatformOverviewExample };
//# sourceMappingURL=platform.js.map
