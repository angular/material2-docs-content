import { Component, NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic divider
 */
class DividerOverviewExample {
}
DividerOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'divider-overview-example',
                template: "<mat-list>\n  <mat-list-item>Item 1</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 2</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 3</mat-list-item>\n</mat-list>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    DividerOverviewExample,
];
class DividerExamplesModule {
}
DividerExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MatDividerModule,
                    MatListModule,
                ],
                declarations: EXAMPLES,
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { DividerOverviewExample, DividerExamplesModule };
//# sourceMappingURL=divider.js.map
