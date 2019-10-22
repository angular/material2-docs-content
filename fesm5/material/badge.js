import { Component, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { MatBadge, MatBadgeModule } from '@angular/material/badge';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';

/**
 * @title Badge overview
 */
var BadgeOverviewExample = /** @class */ (function () {
    function BadgeOverviewExample() {
    }
    BadgeOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'badge-overview-example',
                    templateUrl: 'badge-overview-example.html',
                    styleUrls: ['badge-overview-example.css'],
                },] },
    ];
    BadgeOverviewExample.ngFactoryDef = function BadgeOverviewExample_Factory(t) { return new (t || BadgeOverviewExample)(); };
    BadgeOverviewExample.ngComponentDef = ɵɵdefineComponent({ type: BadgeOverviewExample, selectors: [["badge-overview-example"]], decls: 13, vars: 0, consts: [["matBadge", "4", "matBadgeOverlap", "false"], ["mat-raised-button", "", "color", "primary", "matBadge", "8", "matBadgePosition", "before", "matBadgeColor", "accent"], ["matBadge", "15", "matBadgeColor", "warn"], [1, "cdk-visually-hidden"]], template: function BadgeOverviewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵelementStart(1, "span", 0);
            ɵɵtext(2, "Text with a badge");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(3, "p");
            ɵɵtext(4, " Button with a badge on the left ");
            ɵɵelementStart(5, "button", 1);
            ɵɵtext(6, " Action ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(7, "p");
            ɵɵtext(8, " Icon with a badge ");
            ɵɵelementStart(9, "mat-icon", 2);
            ɵɵtext(10, "home");
            ɵɵelementEnd();
            ɵɵelementStart(11, "span", 3);
            ɵɵtext(12, " Example with a home icon with overlaid badge showing the number 15 ");
            ɵɵelementEnd();
            ɵɵelementEnd();
        } }, directives: [MatBadge, MatButton, MatIcon], styles: [""] });
    return BadgeOverviewExample;
}());
/*@__PURE__*/ ɵsetClassMetadata(BadgeOverviewExample, [{
        type: Component,
        args: [{
                selector: 'badge-overview-example',
                templateUrl: 'badge-overview-example.html',
                styleUrls: ['badge-overview-example.css'],
            }]
    }], null, null);

var EXAMPLES = [
    BadgeOverviewExample,
];
var BadgeExamplesModule = /** @class */ (function () {
    function BadgeExamplesModule() {
    }
    BadgeExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatBadgeModule,
                        MatButtonModule,
                        MatIconModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    BadgeExamplesModule.ngModuleDef = ɵɵdefineNgModule({ type: BadgeExamplesModule });
    BadgeExamplesModule.ngInjectorDef = ɵɵdefineInjector({ factory: function BadgeExamplesModule_Factory(t) { return new (t || BadgeExamplesModule)(); }, imports: [[
                MatBadgeModule,
                MatButtonModule,
                MatIconModule,
            ]] });
    return BadgeExamplesModule;
}());
/*@__PURE__*/ ɵɵsetNgModuleScope(BadgeExamplesModule, { declarations: [BadgeOverviewExample], imports: [MatBadgeModule,
        MatButtonModule,
        MatIconModule], exports: [BadgeOverviewExample] });
/*@__PURE__*/ ɵsetClassMetadata(BadgeExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatBadgeModule,
                    MatButtonModule,
                    MatIconModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null);

/**
 * Generated bundle index. Do not edit.
 */

export { BadgeOverviewExample, BadgeExamplesModule };
//# sourceMappingURL=badge.js.map
