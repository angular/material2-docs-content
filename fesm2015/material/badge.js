import { ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵlistener, ɵɵadvance, ɵɵproperty, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, ɵɵsetNgModuleScope } from '@angular/core';
import { MatBadge, MatBadgeModule } from '@angular/material/badge';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';

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
BadgeOverviewExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: BadgeOverviewExample, selectors: [["badge-overview-example"]], decls: 20, vars: 1, consts: [["matBadge", "4", "matBadgeOverlap", "false"], ["matBadge", "1", "matBadgeSize", "large"], ["mat-raised-button", "", "color", "primary", "matBadge", "8", "matBadgePosition", "before", "matBadgeColor", "accent"], ["mat-raised-button", "", "matBadge", "7", 3, "matBadgeHidden", "click"], ["matBadge", "15", "matBadgeColor", "warn"], [1, "cdk-visually-hidden"]], template: function BadgeOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵelementStart(1, "span", 0);
        ɵɵtext(2, "Text with a badge");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(3, "p");
        ɵɵelementStart(4, "span", 1);
        ɵɵtext(5, "Text with large badge");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "p");
        ɵɵtext(7, " Button with a badge on the left\n");
        ɵɵelementStart(8, "button", 2);
        ɵɵtext(9, " Action ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(10, "p");
        ɵɵtext(11, " Button toggles badge visibility\n");
        ɵɵelementStart(12, "button", 3);
        ɵɵlistener("click", function BadgeOverviewExample_Template_button_click_12_listener() { return ctx.toggleBadgeVisibility(); });
        ɵɵtext(13, " Hide ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(14, "p");
        ɵɵtext(15, " Icon with a badge\n");
        ɵɵelementStart(16, "mat-icon", 4);
        ɵɵtext(17, "home");
        ɵɵelementEnd();
        ɵɵelementStart(18, "span", 5);
        ɵɵtext(19, " Example with a home icon with overlaid badge showing the number 15 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(12);
        ɵɵproperty("matBadgeHidden", ctx.hidden);
    } }, directives: [MatBadge, MatButton, MatIcon], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BadgeOverviewExample, [{
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
BadgeHarnessExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: BadgeHarnessExample, selectors: [["badge-harness-example"]], decls: 6, vars: 3, consts: [["mat-button", "", "id", "simple", 3, "matBadge"], ["mat-button", "", "id", "overlapping", "matBadge", "O", 3, "matBadgeOverlap"], ["mat-button", "", "id", "disabled", "matBadge", "D", 3, "matBadgeDisabled"]], template: function BadgeHarnessExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "button", 0);
        ɵɵtext(1, "Simple");
        ɵɵelementEnd();
        ɵɵelementStart(2, "button", 1);
        ɵɵtext(3, "Overlapping");
        ɵɵelementEnd();
        ɵɵelementStart(4, "button", 2);
        ɵɵtext(5, "Disabled");
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("matBadge", ctx.simpleContent);
        ɵɵadvance(2);
        ɵɵproperty("matBadgeOverlap", ctx.overlap);
        ɵɵadvance(2);
        ɵɵproperty("matBadgeDisabled", ctx.disabled);
    } }, directives: [MatButton, MatBadge], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BadgeHarnessExample, [{
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
BadgeExamplesModule.ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({ type: BadgeExamplesModule });
BadgeExamplesModule.ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [[
            MatBadgeModule,
            MatButtonModule,
            MatIconModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BadgeExamplesModule, [{
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(BadgeExamplesModule, { declarations: [BadgeOverviewExample,
        BadgeHarnessExample], imports: [MatBadgeModule,
        MatButtonModule,
        MatIconModule], exports: [BadgeOverviewExample,
        BadgeHarnessExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { BadgeExamplesModule, BadgeHarnessExample, BadgeOverviewExample };
//# sourceMappingURL=badge.js.map
