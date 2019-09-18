import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Snack-bar with a custom component
 */
class SnackBarComponentExample {
    /**
     * @param {?} _snackBar
     */
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.durationInSeconds = 5;
    }
    /**
     * @return {?}
     */
    openSnackBar() {
        this._snackBar.openFromComponent(PizzaPartyComponent, {
            duration: this.durationInSeconds * 1000,
        });
    }
}
SnackBarComponentExample.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-component-example',
                template: "<mat-form-field>\n  <mat-label>Snack bar duration (seconds)</mat-label>\n  <input type=\"number\" [(ngModel)]=\"durationInSeconds\" matInput>\n</mat-form-field>\n\n<button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pizza party\n</button>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
/** @nocollapse */
SnackBarComponentExample.ctorParameters = () => [
    { type: MatSnackBar }
];
if (false) {
    /** @type {?} */
    SnackBarComponentExample.prototype.durationInSeconds;
    /**
     * @type {?}
     * @private
     */
    SnackBarComponentExample.prototype._snackBar;
}
class PizzaPartyComponent {
}
PizzaPartyComponent.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-component-example-snack',
                template: "<span class=\"example-pizza-party\">\n  Pizza party!!! \uD83C\uDF55\n</span>\n",
                styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic snack-bar
 */
class SnackBarOverviewExample {
    /**
     * @param {?} _snackBar
     */
    constructor(_snackBar) {
        this._snackBar = _snackBar;
    }
    /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
SnackBarOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-overview-example',
                template: "<mat-form-field>\n  <input matInput value=\"Disco party!\" placeholder=\"Message\" #message>\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput value=\"Dance\" placeholder=\"Action\" #action>\n</mat-form-field>\n\n<button mat-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\n",
                styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
            }] }
];
/** @nocollapse */
SnackBarOverviewExample.ctorParameters = () => [
    { type: MatSnackBar }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SnackBarOverviewExample.prototype._snackBar;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Snack-bar with configurable position
 */
class SnackBarPositionExample {
    /**
     * @param {?} _snackBar
     */
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.horizontalPosition = 'start';
        this.verticalPosition = 'bottom';
    }
    /**
     * @return {?}
     */
    openSnackBar() {
        this._snackBar.open('Canonball!!', 'End now', {
            duration: 500,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }
}
SnackBarPositionExample.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-position-example',
                template: "<mat-form-field>\n  <mat-select placeholder=\"Horizontal position\" [(value)]=\"horizontalPosition\">\n    <mat-option value=\"start\">Start</mat-option>\n    <mat-option value=\"center\">Center</mat-option>\n    <mat-option value=\"end\">End</mat-option>\n    <mat-option value=\"left\">Left</mat-option>\n    <mat-option value=\"right\">Right</mat-option>\n  </mat-select>\n</mat-form-field>\n<mat-form-field>\n  <mat-select placeholder=\"Vertical position\" [(value)]=\"verticalPosition\">\n    <mat-option value=\"top\">Top</mat-option>\n    <mat-option value=\"bottom\">Bottom</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pool party!\n</button>\n",
                styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
            }] }
];
/** @nocollapse */
SnackBarPositionExample.ctorParameters = () => [
    { type: MatSnackBar }
];
if (false) {
    /** @type {?} */
    SnackBarPositionExample.prototype.horizontalPosition;
    /** @type {?} */
    SnackBarPositionExample.prototype.verticalPosition;
    /**
     * @type {?}
     * @private
     */
    SnackBarPositionExample.prototype._snackBar;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    SnackBarComponentExample,
    SnackBarOverviewExample,
    SnackBarPositionExample,
];
class SnackBarExamplesModule {
}
SnackBarExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule,
                    MatButtonModule,
                    MatInputModule,
                    MatSelectModule,
                    MatSnackBarModule,
                ],
                declarations: [...EXAMPLES, PizzaPartyComponent],
                exports: EXAMPLES,
                entryComponents: [PizzaPartyComponent],
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { SnackBarComponentExample, SnackBarOverviewExample, SnackBarPositionExample, PizzaPartyComponent, SnackBarExamplesModule };
//# sourceMappingURL=snack-bar.js.map
