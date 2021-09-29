(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/badge'), require('@angular/material/button'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/badge', ['exports', '@angular/core', '@angular/material/badge', '@angular/material/button', '@angular/material/icon'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.badge = {}), global.ng.core, global.ng.material.badge, global.ng.material.button, global.ng.material.icon));
}(this, (function (exports, i0, i1, i2, i3) { 'use strict';

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
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);

    /**
     * @title Badge overview
     */
    var BadgeOverviewExample = /** @class */ (function () {
        function BadgeOverviewExample() {
            this.hidden = false;
        }
        BadgeOverviewExample.prototype.toggleBadgeVisibility = function () {
            this.hidden = !this.hidden;
        };
        return BadgeOverviewExample;
    }());
    BadgeOverviewExample.ɵfac = function BadgeOverviewExample_Factory(t) { return new (t || BadgeOverviewExample)(); };
    BadgeOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: BadgeOverviewExample, selectors: [["badge-overview-example"]], decls: 20, vars: 1, consts: [["matBadge", "4", "matBadgeOverlap", "false"], ["matBadge", "1", "matBadgeSize", "large"], ["mat-raised-button", "", "color", "primary", "matBadge", "8", "matBadgePosition", "before", "matBadgeColor", "accent"], ["mat-raised-button", "", "matBadge", "7", 3, "matBadgeHidden", "click"], ["matBadge", "15", "matBadgeColor", "warn"], [1, "cdk-visually-hidden"]], template: function BadgeOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "p");
                i0__namespace.ɵɵelementStart(1, "span", 0);
                i0__namespace.ɵɵtext(2, "Text with a badge");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "p");
                i0__namespace.ɵɵelementStart(4, "span", 1);
                i0__namespace.ɵɵtext(5, "Text with large badge");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "p");
                i0__namespace.ɵɵtext(7, " Button with a badge on the left\n");
                i0__namespace.ɵɵelementStart(8, "button", 2);
                i0__namespace.ɵɵtext(9, " Action ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "p");
                i0__namespace.ɵɵtext(11, " Button toggles badge visibility\n");
                i0__namespace.ɵɵelementStart(12, "button", 3);
                i0__namespace.ɵɵlistener("click", function BadgeOverviewExample_Template_button_click_12_listener() { return ctx.toggleBadgeVisibility(); });
                i0__namespace.ɵɵtext(13, " Hide ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "p");
                i0__namespace.ɵɵtext(15, " Icon with a badge\n");
                i0__namespace.ɵɵelementStart(16, "mat-icon", 4);
                i0__namespace.ɵɵtext(17, "home");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(18, "span", 5);
                i0__namespace.ɵɵtext(19, " Example with a home icon with overlaid badge showing the number 15 ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(12);
                i0__namespace.ɵɵproperty("matBadgeHidden", ctx.hidden);
            }
        }, directives: [i1__namespace.MatBadge, i2__namespace.MatButton, i3__namespace.MatIcon], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(BadgeOverviewExample, [{
                type: i0.Component,
                args: [{ selector: 'badge-overview-example', template: "<p>\n<!-- #docregion mat-badge-overlap -->\n  <span matBadge=\"4\" matBadgeOverlap=\"false\">Text with a badge</span>\n<!-- #enddocregion mat-badge-overlap -->\n</p>\n\n<p>\n<!-- #docregion mat-badge-size -->\n    <span matBadge=\"1\" matBadgeSize=\"large\">Text with large badge</span>\n<!-- #enddocregion mat-badge-size -->\n</p>\n\n<p>\n  Button with a badge on the left\n<!-- #docregion mat-badge-position -->\n  <button mat-raised-button color=\"primary\"\n      matBadge=\"8\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\n    Action\n  </button>\n<!-- #enddocregion mat-badge-position -->\n</p>\n\n<p>\n    Button toggles badge visibility\n<!-- #docregion mat-badge-hide -->\n    <button mat-raised-button matBadge=\"7\" [matBadgeHidden]=\"hidden\" (click)=\"toggleBadgeVisibility()\">\n        Hide\n    </button>\n<!-- #enddocregion mat-badge-hide -->\n</p>\n\n<p>\n  Icon with a badge\n<!-- #docregion mat-badge-color -->\n  <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">home</mat-icon>\n<!-- #enddocregion mat-badge-color -->\n    <!-- Include text description of the icon's meaning for screen-readers -->\n    <span class=\"cdk-visually-hidden\">\n      Example with a home icon with overlaid badge showing the number 15\n    </span>\n</p>\n\n\n" }]
            }], null, null);
    })();

    /**
     * @title Testing with MatBadgeHarness
     */
    var BadgeHarnessExample = /** @class */ (function () {
        function BadgeHarnessExample() {
            this.simpleContent = 'S';
            this.overlap = true;
            this.disabled = true;
        }
        return BadgeHarnessExample;
    }());
    BadgeHarnessExample.ɵfac = function BadgeHarnessExample_Factory(t) { return new (t || BadgeHarnessExample)(); };
    BadgeHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: BadgeHarnessExample, selectors: [["badge-harness-example"]], decls: 6, vars: 3, consts: [["mat-button", "", "id", "simple", 3, "matBadge"], ["mat-button", "", "id", "overlapping", "matBadge", "O", 3, "matBadgeOverlap"], ["mat-button", "", "id", "disabled", "matBadge", "D", 3, "matBadgeDisabled"]], template: function BadgeHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵtext(1, "Simple");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "button", 1);
                i0__namespace.ɵɵtext(3, "Overlapping");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "button", 2);
                i0__namespace.ɵɵtext(5, "Disabled");
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("matBadge", ctx.simpleContent);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("matBadgeOverlap", ctx.overlap);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("matBadgeDisabled", ctx.disabled);
            }
        }, directives: [i2__namespace.MatButton, i1__namespace.MatBadge], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(BadgeHarnessExample, [{
                type: i0.Component,
                args: [{ selector: 'badge-harness-example', template: "<button mat-button id=\"simple\" [matBadge]=\"simpleContent\">Simple</button>\n<button mat-button\n    id=\"overlapping\"\n    matBadge=\"O\"\n    [matBadgeOverlap]=\"overlap\">Overlapping</button>\n<button\n    mat-button\n    id=\"disabled\"\n    matBadge=\"D\"\n    [matBadgeDisabled]=\"disabled\">Disabled</button>\n" }]
            }], null, null);
    })();

    var EXAMPLES = [
        BadgeOverviewExample,
        BadgeHarnessExample
    ];
    var BadgeExamplesModule = /** @class */ (function () {
        function BadgeExamplesModule() {
        }
        return BadgeExamplesModule;
    }());
    BadgeExamplesModule.ɵfac = function BadgeExamplesModule_Factory(t) { return new (t || BadgeExamplesModule)(); };
    BadgeExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: BadgeExamplesModule });
    BadgeExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.MatBadgeModule,
                i2.MatButtonModule,
                i3.MatIconModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(BadgeExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.MatBadgeModule,
                            i2.MatButtonModule,
                            i3.MatIconModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(BadgeExamplesModule, { declarations: [BadgeOverviewExample,
                BadgeHarnessExample], imports: [i1.MatBadgeModule,
                i2.MatButtonModule,
                i3.MatIconModule], exports: [BadgeOverviewExample,
                BadgeHarnessExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BadgeExamplesModule = BadgeExamplesModule;
    exports.BadgeHarnessExample = BadgeHarnessExample;
    exports.BadgeOverviewExample = BadgeOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-badge.umd.js.map
