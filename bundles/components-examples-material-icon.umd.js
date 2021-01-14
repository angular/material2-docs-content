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
        return IconOverviewExample;
    }());
    IconOverviewExample.ɵfac = function IconOverviewExample_Factory(t) { return new (t || IconOverviewExample)(); };
    IconOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: IconOverviewExample, selectors: [["icon-overview-example"]], decls: 2, vars: 0, consts: [["aria-hidden", "false", "aria-label", "Example home icon"]], template: function IconOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-icon", 0);
                i0.ɵɵtext(1, "home");
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.MatIcon], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'icon-overview-example',
                        templateUrl: 'icon-overview-example.html',
                    }]
            }], null, null);
    })();

    var THUMBUP_ICON = "\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24px\" height=\"24px\">\n    <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    <path d=\"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-." +
        "44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5" +
        "1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z\"/>\n  </svg>\n";
    /**
     * @title SVG icons
     */
    var IconSvgExample = /** @class */ (function () {
        function IconSvgExample(iconRegistry, sanitizer) {
            // Note that we provide the icon here as a string literal here due to a limitation in
            // Stackblitz. If you want to provide the icon from a URL, you can use:
            // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
            iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
        }
        return IconSvgExample;
    }());
    IconSvgExample.ɵfac = function IconSvgExample_Factory(t) { return new (t || IconSvgExample)(i0.ɵɵdirectiveInject(i1.MatIconRegistry), i0.ɵɵdirectiveInject(i2.DomSanitizer)); };
    IconSvgExample.ɵcmp = i0.ɵɵdefineComponent({ type: IconSvgExample, selectors: [["icon-svg-example"]], decls: 1, vars: 0, consts: [["svgIcon", "thumbs-up", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon"]], template: function IconSvgExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "mat-icon", 0);
            }
        }, directives: [i1.MatIcon], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconSvgExample, [{
                type: i0.Component,
                args: [{
                        selector: 'icon-svg-example',
                        templateUrl: 'icon-svg-example.html',
                    }]
            }], function () { return [{ type: i1.MatIconRegistry }, { type: i2.DomSanitizer }]; }, null);
    })();

    /**
     * @title Testing with MatIconHarness
     */
    var IconHarnessExample = /** @class */ (function () {
        function IconHarnessExample() {
        }
        return IconHarnessExample;
    }());
    IconHarnessExample.ɵfac = function IconHarnessExample_Factory(t) { return new (t || IconHarnessExample)(); };
    IconHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: IconHarnessExample, selectors: [["icon-harness-example"]], decls: 4, vars: 0, consts: [["fontSet", "fontIcons", "fontIcon", "fontIcon"], ["svgIcon", "svgIcons:svgIcon"], ["inline", ""]], template: function IconHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "mat-icon", 0);
                i0.ɵɵelement(1, "mat-icon", 1);
                i0.ɵɵelementStart(2, "mat-icon", 2);
                i0.ɵɵtext(3, "ligature_icon");
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.MatIcon], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'icon-harness-example',
                        templateUrl: 'icon-harness-example.html',
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        IconHarnessExample,
        IconOverviewExample,
        IconSvgExample,
    ];
    var IconExamplesModule = /** @class */ (function () {
        function IconExamplesModule() {
        }
        return IconExamplesModule;
    }());
    IconExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: IconExamplesModule });
    IconExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function IconExamplesModule_Factory(t) { return new (t || IconExamplesModule)(); }, imports: [[
                i1.MatIconModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IconExamplesModule, { declarations: [IconHarnessExample,
                IconOverviewExample,
                IconSvgExample], imports: [i1.MatIconModule], exports: [IconHarnessExample,
                IconOverviewExample,
                IconSvgExample] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.MatIconModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.IconExamplesModule = IconExamplesModule;
    exports.IconHarnessExample = IconHarnessExample;
    exports.IconOverviewExample = IconOverviewExample;
    exports.IconSvgExample = IconSvgExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-icon.umd.js.map
