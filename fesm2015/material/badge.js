import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1 from '@angular/material/badge';
import { MatBadgeModule } from '@angular/material/badge';
import * as i2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';

/**
 * @title Badge overview
 */
class BadgeOverviewExample {
    constructor() {
        this.hidden = false;
    }
    toggleBadgeVisibility() {
        this.hidden = !this.hidden;
    }
}
BadgeOverviewExample.ɵfac = function BadgeOverviewExample_Factory(t) { return new (t || BadgeOverviewExample)(); };
BadgeOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BadgeOverviewExample, selectors: [["badge-overview-example"]], decls: 20, vars: 1, consts: [["matBadge", "4", "matBadgeOverlap", "false"], ["matBadge", "1", "matBadgeSize", "large"], ["mat-raised-button", "", "color", "primary", "matBadge", "8", "matBadgePosition", "before", "matBadgeColor", "accent"], ["mat-raised-button", "", "matBadge", "7", 3, "matBadgeHidden", "click"], ["matBadge", "15", "matBadgeColor", "warn"], [1, "cdk-visually-hidden"]], template: function BadgeOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵelementStart(1, "span", 0);
        i0.ɵɵtext(2, "Text with a badge");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "p");
        i0.ɵɵelementStart(4, "span", 1);
        i0.ɵɵtext(5, "Text with large badge");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "p");
        i0.ɵɵtext(7, " Button with a badge on the left\n");
        i0.ɵɵelementStart(8, "button", 2);
        i0.ɵɵtext(9, " Action ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "p");
        i0.ɵɵtext(11, " Button toggles badge visibility\n");
        i0.ɵɵelementStart(12, "button", 3);
        i0.ɵɵlistener("click", function BadgeOverviewExample_Template_button_click_12_listener() { return ctx.toggleBadgeVisibility(); });
        i0.ɵɵtext(13, " Hide ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "p");
        i0.ɵɵtext(15, " Icon with a badge\n");
        i0.ɵɵelementStart(16, "mat-icon", 4);
        i0.ɵɵtext(17, "home");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "span", 5);
        i0.ɵɵtext(19, " Example with a home icon with overlaid badge showing the number 15 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(12);
        i0.ɵɵproperty("matBadgeHidden", ctx.hidden);
    } }, directives: [i1.MatBadge, i2.MatButton, i3.MatIcon], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BadgeOverviewExample, [{
        type: Component,
        args: [{
                selector: 'badge-overview-example',
                templateUrl: 'badge-overview-example.html',
            }]
    }], null, null); })();

/**
 * @title Testing with MatBadgeHarness
 */
class BadgeHarnessExample {
    constructor() {
        this.simpleContent = 'S';
        this.overlap = true;
        this.disabled = true;
    }
}
BadgeHarnessExample.ɵfac = function BadgeHarnessExample_Factory(t) { return new (t || BadgeHarnessExample)(); };
BadgeHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BadgeHarnessExample, selectors: [["badge-harness-example"]], decls: 6, vars: 3, consts: [["mat-button", "", "id", "simple", 3, "matBadge"], ["mat-button", "", "id", "overlapping", "matBadge", "O", 3, "matBadgeOverlap"], ["mat-button", "", "id", "disabled", "matBadge", "D", 3, "matBadgeDisabled"]], template: function BadgeHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵtext(1, "Simple");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "button", 1);
        i0.ɵɵtext(3, "Overlapping");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "button", 2);
        i0.ɵɵtext(5, "Disabled");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("matBadge", ctx.simpleContent);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matBadgeOverlap", ctx.overlap);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matBadgeDisabled", ctx.disabled);
    } }, directives: [i2.MatButton, i1.MatBadge], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BadgeHarnessExample, [{
        type: Component,
        args: [{
                selector: 'badge-harness-example',
                templateUrl: 'badge-harness-example.html',
            }]
    }], null, null); })();

const EXAMPLES = [
    BadgeOverviewExample,
    BadgeHarnessExample
];
class BadgeExamplesModule {
}
BadgeExamplesModule.ɵfac = function BadgeExamplesModule_Factory(t) { return new (t || BadgeExamplesModule)(); };
BadgeExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: BadgeExamplesModule });
BadgeExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            MatBadgeModule,
            MatButtonModule,
            MatIconModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BadgeExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatBadgeModule,
                    MatButtonModule,
                    MatIconModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BadgeExamplesModule, { declarations: [BadgeOverviewExample,
        BadgeHarnessExample], imports: [MatBadgeModule,
        MatButtonModule,
        MatIconModule], exports: [BadgeOverviewExample,
        BadgeHarnessExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { BadgeExamplesModule, BadgeHarnessExample, BadgeOverviewExample };
//# sourceMappingURL=badge.js.map
