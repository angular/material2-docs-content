(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/badge'), require('@angular/material/button'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/badge', ['exports', '@angular/core', '@angular/material/badge', '@angular/material/button', '@angular/material/icon'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.badge = {}), global.ng.core, global.ng.material.badge, global.ng.material.button, global.ng.material.icon));
}(this, (function (exports, i0, i1, i2, i3) { 'use strict';

    /**
     * @title Badge overview
     */
    var BadgeOverviewExample = /** @class */ (function () {
        function BadgeOverviewExample() {
        }
        BadgeOverviewExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'badge-overview-example',
                        templateUrl: 'badge-overview-example.html',
                        styleUrls: ['badge-overview-example.css'],
                    },] },
        ];
        BadgeOverviewExample.ɵfac = function BadgeOverviewExample_Factory(t) { return new (t || BadgeOverviewExample)(); };
        BadgeOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: BadgeOverviewExample, selectors: [["badge-overview-example"]], decls: 13, vars: 0, consts: [["matBadge", "4", "matBadgeOverlap", "false"], ["mat-raised-button", "", "color", "primary", "matBadge", "8", "matBadgePosition", "before", "matBadgeColor", "accent"], ["matBadge", "15", "matBadgeColor", "warn"], [1, "cdk-visually-hidden"]], template: function BadgeOverviewExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵelementStart(1, "span", 0);
                i0.ɵɵtext(2, "Text with a badge");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "p");
                i0.ɵɵtext(4, " Button with a badge on the left ");
                i0.ɵɵelementStart(5, "button", 1);
                i0.ɵɵtext(6, " Action ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "p");
                i0.ɵɵtext(8, " Icon with a badge ");
                i0.ɵɵelementStart(9, "mat-icon", 2);
                i0.ɵɵtext(10, "home");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "span", 3);
                i0.ɵɵtext(12, " Example with a home icon with overlaid badge showing the number 15 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } }, directives: [i1.MatBadge, i2.MatButton, i3.MatIcon], styles: [""] });
        return BadgeOverviewExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BadgeOverviewExample, [{
            type: i0.Component,
            args: [{
                    selector: 'badge-overview-example',
                    templateUrl: 'badge-overview-example.html',
                    styleUrls: ['badge-overview-example.css'],
                }]
        }], null, null); })();

    var EXAMPLES = [
        BadgeOverviewExample,
    ];
    var BadgeExamplesModule = /** @class */ (function () {
        function BadgeExamplesModule() {
        }
        BadgeExamplesModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.MatBadgeModule,
                            i2.MatButtonModule,
                            i3.MatIconModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] },
        ];
        BadgeExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: BadgeExamplesModule });
        BadgeExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function BadgeExamplesModule_Factory(t) { return new (t || BadgeExamplesModule)(); }, imports: [[
                    i1.MatBadgeModule,
                    i2.MatButtonModule,
                    i3.MatIconModule,
                ]] });
        return BadgeExamplesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BadgeExamplesModule, { declarations: [BadgeOverviewExample], imports: [i1.MatBadgeModule,
            i2.MatButtonModule,
            i3.MatIconModule], exports: [BadgeOverviewExample] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BadgeExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i1.MatBadgeModule,
                        i2.MatButtonModule,
                        i3.MatIconModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }], null, null); })();

    exports.BadgeExamplesModule = BadgeExamplesModule;
    exports.BadgeOverviewExample = BadgeOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-badge.umd.js.map
