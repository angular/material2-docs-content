import { ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵlistener, ɵɵadvance, ɵɵproperty, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { MatBadge, MatBadgeModule } from '@angular/material/badge';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';

/**
 * @title Badge overview
 */
let BadgeOverviewExample = /** @class */ (() => {
    class BadgeOverviewExample {
        constructor() {
            this.hidden = false;
        }
        toggleBadgeVisibility() {
            this.hidden = !this.hidden;
        }
    }
    BadgeOverviewExample.ɵfac = function BadgeOverviewExample_Factory(t) { return new (t || BadgeOverviewExample)(); };
    BadgeOverviewExample.ɵcmp = ɵɵdefineComponent({ type: BadgeOverviewExample, selectors: [["badge-overview-example"]], decls: 20, vars: 1, consts: [["matBadge", "4", "matBadgeOverlap", "false"], ["matBadge", "1", "matBadgeSize", "large"], ["mat-raised-button", "", "color", "primary", "matBadge", "8", "matBadgePosition", "before", "matBadgeColor", "accent"], ["mat-raised-button", "", "matBadge", "7", 3, "matBadgeHidden", "click"], ["matBadge", "15", "matBadgeColor", "warn"], [1, "cdk-visually-hidden"]], template: function BadgeOverviewExample_Template(rf, ctx) { if (rf & 1) {
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
        } }, directives: [MatBadge, MatButton, MatIcon], styles: [""] });
    return BadgeOverviewExample;
})();
/*@__PURE__*/ (function () { ɵsetClassMetadata(BadgeOverviewExample, [{
        type: Component,
        args: [{
                selector: 'badge-overview-example',
                templateUrl: 'badge-overview-example.html',
                styleUrls: ['badge-overview-example.css'],
            }]
    }], null, null); })();

const EXAMPLES = [
    BadgeOverviewExample,
];
let BadgeExamplesModule = /** @class */ (() => {
    class BadgeExamplesModule {
    }
    BadgeExamplesModule.ɵmod = ɵɵdefineNgModule({ type: BadgeExamplesModule });
    BadgeExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function BadgeExamplesModule_Factory(t) { return new (t || BadgeExamplesModule)(); }, imports: [[
                MatBadgeModule,
                MatButtonModule,
                MatIconModule,
            ]] });
    return BadgeExamplesModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(BadgeExamplesModule, { declarations: [BadgeOverviewExample], imports: [MatBadgeModule,
        MatButtonModule,
        MatIconModule], exports: [BadgeOverviewExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(BadgeExamplesModule, [{
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

/**
 * Generated bundle index. Do not edit.
 */

export { BadgeExamplesModule, BadgeOverviewExample };
//# sourceMappingURL=badge.js.map
