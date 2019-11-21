import { Component, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, ɵɵdirectiveInject, ɵɵelement, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { MatIcon, MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * @title Basic icons
 */
var IconOverviewExample = /** @class */ (function () {
    function IconOverviewExample() {
    }
    IconOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'icon-overview-example',
                    templateUrl: 'icon-overview-example.html',
                    styleUrls: ['icon-overview-example.css'],
                },] },
    ];
    IconOverviewExample.ɵfac = function IconOverviewExample_Factory(t) { return new (t || IconOverviewExample)(); };
    IconOverviewExample.ɵcmp = ɵɵdefineComponent({ type: IconOverviewExample, selectors: [["icon-overview-example"]], decls: 2, vars: 0, consts: [["aria-hidden", "false", "aria-label", "Example home icon"]], template: function IconOverviewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-icon", 0);
            ɵɵtext(1, "home");
            ɵɵelementEnd();
        } }, directives: [MatIcon], styles: [""] });
    return IconOverviewExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(IconOverviewExample, [{
        type: Component,
        args: [{
                selector: 'icon-overview-example',
                templateUrl: 'icon-overview-example.html',
                styleUrls: ['icon-overview-example.css'],
            }]
    }], null, null); })();

/**
 * @title SVG icons
 */
var IconSvgExample = /** @class */ (function () {
    function IconSvgExample(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
    }
    IconSvgExample.decorators = [
        { type: Component, args: [{
                    selector: 'icon-svg-example',
                    templateUrl: 'icon-svg-example.html',
                    styleUrls: ['icon-svg-example.css'],
                },] },
    ];
    /** @nocollapse */
    IconSvgExample.ctorParameters = function () { return [
        { type: MatIconRegistry },
        { type: DomSanitizer }
    ]; };
    IconSvgExample.ɵfac = function IconSvgExample_Factory(t) { return new (t || IconSvgExample)(ɵɵdirectiveInject(MatIconRegistry), ɵɵdirectiveInject(DomSanitizer)); };
    IconSvgExample.ɵcmp = ɵɵdefineComponent({ type: IconSvgExample, selectors: [["icon-svg-example"]], decls: 1, vars: 0, consts: [["svgIcon", "thumbs-up", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon"]], template: function IconSvgExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelement(0, "mat-icon", 0);
        } }, directives: [MatIcon], styles: [""] });
    return IconSvgExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(IconSvgExample, [{
        type: Component,
        args: [{
                selector: 'icon-svg-example',
                templateUrl: 'icon-svg-example.html',
                styleUrls: ['icon-svg-example.css'],
            }]
    }], function () { return [{ type: MatIconRegistry }, { type: DomSanitizer }]; }, null); })();

var EXAMPLES = [
    IconOverviewExample,
    IconSvgExample,
];
var IconExamplesModule = /** @class */ (function () {
    function IconExamplesModule() {
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
    IconExamplesModule.ɵmod = ɵɵdefineNgModule({ type: IconExamplesModule });
    IconExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function IconExamplesModule_Factory(t) { return new (t || IconExamplesModule)(); }, imports: [[
                MatIconModule,
            ]] });
    return IconExamplesModule;
}());
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
