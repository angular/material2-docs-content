import { Component, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, ɵɵdirectiveInject, ɵɵelement, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { MatIcon, MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic icons
 */
class IconOverviewExample {
}
IconOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'icon-overview-example',
                templateUrl: 'icon-overview-example.html',
                styleUrls: ['icon-overview-example.css'],
            },] },
];
/** @nocollapse */ IconOverviewExample.ɵfac = function IconOverviewExample_Factory(t) { return new (t || IconOverviewExample)(); };
/** @nocollapse */ IconOverviewExample.ɵcmp = ɵɵdefineComponent({ type: IconOverviewExample, selectors: [["icon-overview-example"]], decls: 2, vars: 0, consts: [["aria-hidden", "false", "aria-label", "Example home icon"]], template: function IconOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-icon", 0);
        ɵɵtext(1, "home");
        ɵɵelementEnd();
    } }, directives: [MatIcon], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(IconOverviewExample, [{
        type: Component,
        args: [{
                selector: 'icon-overview-example',
                templateUrl: 'icon-overview-example.html',
                styleUrls: ['icon-overview-example.css'],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title SVG icons
 */
class IconSvgExample {
    /**
     * @param {?} iconRegistry
     * @param {?} sanitizer
     */
    constructor(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
    }
}
IconSvgExample.decorators = [
    { type: Component, args: [{
                selector: 'icon-svg-example',
                templateUrl: 'icon-svg-example.html',
                styleUrls: ['icon-svg-example.css'],
            },] },
];
/** @nocollapse */
IconSvgExample.ctorParameters = () => [
    { type: MatIconRegistry },
    { type: DomSanitizer }
];
/** @nocollapse */ IconSvgExample.ɵfac = function IconSvgExample_Factory(t) { return new (t || IconSvgExample)(ɵɵdirectiveInject(MatIconRegistry), ɵɵdirectiveInject(DomSanitizer)); };
/** @nocollapse */ IconSvgExample.ɵcmp = ɵɵdefineComponent({ type: IconSvgExample, selectors: [["icon-svg-example"]], decls: 1, vars: 0, consts: [["svgIcon", "thumbs-up", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon"]], template: function IconSvgExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "mat-icon", 0);
    } }, directives: [MatIcon], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(IconSvgExample, [{
        type: Component,
        args: [{
                selector: 'icon-svg-example',
                templateUrl: 'icon-svg-example.html',
                styleUrls: ['icon-svg-example.css'],
            }]
    }], function () { return [{ type: MatIconRegistry }, { type: DomSanitizer }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    IconOverviewExample,
    IconSvgExample,
];
class IconExamplesModule {
}
IconExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MatIconModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ IconExamplesModule.ɵmod = ɵɵdefineNgModule({ type: IconExamplesModule });
/** @nocollapse */ IconExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function IconExamplesModule_Factory(t) { return new (t || IconExamplesModule)(); }, imports: [[
            MatIconModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(IconExamplesModule, { declarations: [IconOverviewExample,
        IconSvgExample], imports: [MatIconModule], exports: [IconOverviewExample,
        IconSvgExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(IconExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatIconModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

export { IconExamplesModule, IconOverviewExample, IconSvgExample };
//# sourceMappingURL=icon.js.map
