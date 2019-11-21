(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/icon'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/icon', ['exports', '@angular/core', '@angular/material/icon', '@angular/platform-browser'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.icon = {}), global.ng.core, global.ng.material.icon, global.ng.platformBrowser));
}(this, (function (exports, i0, i1, i2) { 'use strict';

    /**
     * @title Basic icons
     */
    var IconOverviewExample = /** @class */ (function () {
        function IconOverviewExample() {
        }
        IconOverviewExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'icon-overview-example',
                        templateUrl: 'icon-overview-example.html',
                        styleUrls: ['icon-overview-example.css'],
                    },] },
        ];
        IconOverviewExample.ɵfac = function IconOverviewExample_Factory(t) { return new (t || IconOverviewExample)(); };
        IconOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: IconOverviewExample, selectors: [["icon-overview-example"]], decls: 2, vars: 0, consts: [["aria-hidden", "false", "aria-label", "Example home icon"]], template: function IconOverviewExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-icon", 0);
                i0.ɵɵtext(1, "home");
                i0.ɵɵelementEnd();
            } }, directives: [i1.MatIcon], styles: [""] });
        return IconOverviewExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(IconOverviewExample, [{
            type: i0.Component,
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
            { type: i0.Component, args: [{
                        selector: 'icon-svg-example',
                        templateUrl: 'icon-svg-example.html',
                        styleUrls: ['icon-svg-example.css'],
                    },] },
        ];
        /** @nocollapse */
        IconSvgExample.ctorParameters = function () { return [
            { type: i1.MatIconRegistry },
            { type: i2.DomSanitizer }
        ]; };
        IconSvgExample.ɵfac = function IconSvgExample_Factory(t) { return new (t || IconSvgExample)(i0.ɵɵdirectiveInject(i1.MatIconRegistry), i0.ɵɵdirectiveInject(i2.DomSanitizer)); };
        IconSvgExample.ɵcmp = i0.ɵɵdefineComponent({ type: IconSvgExample, selectors: [["icon-svg-example"]], decls: 1, vars: 0, consts: [["svgIcon", "thumbs-up", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon"]], template: function IconSvgExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelement(0, "mat-icon", 0);
            } }, directives: [i1.MatIcon], styles: [""] });
        return IconSvgExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(IconSvgExample, [{
            type: i0.Component,
            args: [{
                    selector: 'icon-svg-example',
                    templateUrl: 'icon-svg-example.html',
                    styleUrls: ['icon-svg-example.css'],
                }]
        }], function () { return [{ type: i1.MatIconRegistry }, { type: i2.DomSanitizer }]; }, null); })();

    var EXAMPLES = [
        IconOverviewExample,
        IconSvgExample,
    ];
    var IconExamplesModule = /** @class */ (function () {
        function IconExamplesModule() {
        }
        IconExamplesModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.MatIconModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] },
        ];
        IconExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: IconExamplesModule });
        IconExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function IconExamplesModule_Factory(t) { return new (t || IconExamplesModule)(); }, imports: [[
                    i1.MatIconModule,
                ]] });
        return IconExamplesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IconExamplesModule, { declarations: [IconOverviewExample,
            IconSvgExample], imports: [i1.MatIconModule], exports: [IconOverviewExample,
            IconSvgExample] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(IconExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i1.MatIconModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }], null, null); })();

    exports.IconExamplesModule = IconExamplesModule;
    exports.IconOverviewExample = IconOverviewExample;
    exports.IconSvgExample = IconSvgExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-icon.umd.js.map
