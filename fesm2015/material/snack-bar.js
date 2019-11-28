import { Component, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵlistener, ɵɵadvance, ɵɵproperty, ɵsetClassMetadata, ɵɵgetCurrentView, ɵɵelement, ɵɵrestoreView, ɵɵreference, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { NumberValueAccessor, DefaultValueAccessor, NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/snack-bar/snack-bar-component/snack-bar-component-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                templateUrl: 'snack-bar-component-example.html',
                styleUrls: ['snack-bar-component-example.css'],
            },] },
];
/** @nocollapse */
SnackBarComponentExample.ctorParameters = () => [
    { type: MatSnackBar }
];
/** @nocollapse */ SnackBarComponentExample.ɵfac = function SnackBarComponentExample_Factory(t) { return new (t || SnackBarComponentExample)(ɵɵdirectiveInject(MatSnackBar)); };
/** @nocollapse */ SnackBarComponentExample.ɵcmp = ɵɵdefineComponent({ type: SnackBarComponentExample, selectors: [["snack-bar-component-example"]], decls: 6, vars: 1, consts: [["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], ["mat-button", "", "aria-label", "Show an example snack-bar", 3, "click"]], template: function SnackBarComponentExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field");
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Snack bar duration (seconds)");
        ɵɵelementEnd();
        ɵɵelementStart(3, "input", 0);
        ɵɵlistener("ngModelChange", function SnackBarComponentExample_Template_input_ngModelChange_3_listener($event) { return ctx.durationInSeconds = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "button", 1);
        ɵɵlistener("click", function SnackBarComponentExample_Template_button_click_4_listener($event) { return ctx.openSnackBar(); });
        ɵɵtext(5, " Pizza party\n");
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("ngModel", ctx.durationInSeconds);
    } }, directives: [MatFormField, MatLabel, NumberValueAccessor, MatInput, DefaultValueAccessor, NgControlStatus, NgModel, MatButton], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SnackBarComponentExample, [{
        type: Component,
        args: [{
                selector: 'snack-bar-component-example',
                templateUrl: 'snack-bar-component-example.html',
                styleUrls: ['snack-bar-component-example.css'],
            }]
    }], function () { return [{ type: MatSnackBar }]; }, null); })();
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
                templateUrl: 'snack-bar-component-example-snack.html',
                styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
            },] },
];
/** @nocollapse */ PizzaPartyComponent.ɵfac = function PizzaPartyComponent_Factory(t) { return new (t || PizzaPartyComponent)(); };
/** @nocollapse */ PizzaPartyComponent.ɵcmp = ɵɵdefineComponent({ type: PizzaPartyComponent, selectors: [["snack-bar-component-example-snack"]], decls: 2, vars: 0, consts: [[1, "example-pizza-party"]], template: function PizzaPartyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "span", 0);
        ɵɵtext(1, " Pizza party!!! \uD83C\uDF55\n");
        ɵɵelementEnd();
    } }, styles: [".example-pizza-party[_ngcontent-%COMP%] {\n      color: hotpink;\n    }"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PizzaPartyComponent, [{
        type: Component,
        args: [{
                selector: 'snack-bar-component-example-snack',
                templateUrl: 'snack-bar-component-example-snack.html',
                styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/snack-bar/snack-bar-overview/snack-bar-overview-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                templateUrl: 'snack-bar-overview-example.html',
                styleUrls: ['snack-bar-overview-example.css'],
            },] },
];
/** @nocollapse */
SnackBarOverviewExample.ctorParameters = () => [
    { type: MatSnackBar }
];
/** @nocollapse */ SnackBarOverviewExample.ɵfac = function SnackBarOverviewExample_Factory(t) { return new (t || SnackBarOverviewExample)(ɵɵdirectiveInject(MatSnackBar)); };
/** @nocollapse */ SnackBarOverviewExample.ɵcmp = ɵɵdefineComponent({ type: SnackBarOverviewExample, selectors: [["snack-bar-overview-example"]], decls: 8, vars: 0, consts: [["matInput", "", "value", "Disco party!", "placeholder", "Message"], ["message", ""], ["matInput", "", "value", "Dance", "placeholder", "Action"], ["action", ""], ["mat-button", "", 3, "click"]], template: function SnackBarOverviewExample_Template(rf, ctx) { if (rf & 1) {
        const _r2 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "mat-form-field");
        ɵɵelement(1, "input", 0, 1);
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-form-field");
        ɵɵelement(4, "input", 2, 3);
        ɵɵelementEnd();
        ɵɵelementStart(6, "button", 4);
        ɵɵlistener("click", function SnackBarOverviewExample_Template_button_click_6_listener($event) { ɵɵrestoreView(_r2); const _r0 = ɵɵreference(2); const _r1 = ɵɵreference(5); return ctx.openSnackBar(_r0.value, _r1.value); });
        ɵɵtext(7, "Show snack-bar");
        ɵɵelementEnd();
    } }, directives: [MatFormField, MatInput, MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SnackBarOverviewExample, [{
        type: Component,
        args: [{
                selector: 'snack-bar-overview-example',
                templateUrl: 'snack-bar-overview-example.html',
                styleUrls: ['snack-bar-overview-example.css'],
            }]
    }], function () { return [{ type: MatSnackBar }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    SnackBarOverviewExample.prototype._snackBar;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/snack-bar/snack-bar-position/snack-bar-position-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                templateUrl: 'snack-bar-position-example.html',
                styleUrls: ['snack-bar-position-example.css'],
            },] },
];
/** @nocollapse */
SnackBarPositionExample.ctorParameters = () => [
    { type: MatSnackBar }
];
/** @nocollapse */ SnackBarPositionExample.ɵfac = function SnackBarPositionExample_Factory(t) { return new (t || SnackBarPositionExample)(ɵɵdirectiveInject(MatSnackBar)); };
/** @nocollapse */ SnackBarPositionExample.ɵcmp = ɵɵdefineComponent({ type: SnackBarPositionExample, selectors: [["snack-bar-position-example"]], decls: 20, vars: 2, consts: [["placeholder", "Horizontal position", 3, "value", "valueChange"], ["value", "start"], ["value", "center"], ["value", "end"], ["value", "left"], ["value", "right"], ["placeholder", "Vertical position", 3, "value", "valueChange"], ["value", "top"], ["value", "bottom"], ["mat-button", "", "aria-label", "Show an example snack-bar", 3, "click"]], template: function SnackBarPositionExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field");
        ɵɵelementStart(1, "mat-select", 0);
        ɵɵlistener("valueChange", function SnackBarPositionExample_Template_mat_select_valueChange_1_listener($event) { return ctx.horizontalPosition = $event; });
        ɵɵelementStart(2, "mat-option", 1);
        ɵɵtext(3, "Start");
        ɵɵelementEnd();
        ɵɵelementStart(4, "mat-option", 2);
        ɵɵtext(5, "Center");
        ɵɵelementEnd();
        ɵɵelementStart(6, "mat-option", 3);
        ɵɵtext(7, "End");
        ɵɵelementEnd();
        ɵɵelementStart(8, "mat-option", 4);
        ɵɵtext(9, "Left");
        ɵɵelementEnd();
        ɵɵelementStart(10, "mat-option", 5);
        ɵɵtext(11, "Right");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(12, "mat-form-field");
        ɵɵelementStart(13, "mat-select", 6);
        ɵɵlistener("valueChange", function SnackBarPositionExample_Template_mat_select_valueChange_13_listener($event) { return ctx.verticalPosition = $event; });
        ɵɵelementStart(14, "mat-option", 7);
        ɵɵtext(15, "Top");
        ɵɵelementEnd();
        ɵɵelementStart(16, "mat-option", 8);
        ɵɵtext(17, "Bottom");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(18, "button", 9);
        ɵɵlistener("click", function SnackBarPositionExample_Template_button_click_18_listener($event) { return ctx.openSnackBar(); });
        ɵɵtext(19, " Pool party!\n");
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("value", ctx.horizontalPosition);
        ɵɵadvance(12);
        ɵɵproperty("value", ctx.verticalPosition);
    } }, directives: [MatFormField, MatSelect, MatOption, MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SnackBarPositionExample, [{
        type: Component,
        args: [{
                selector: 'snack-bar-position-example',
                templateUrl: 'snack-bar-position-example.html',
                styleUrls: ['snack-bar-position-example.css'],
            }]
    }], function () { return [{ type: MatSnackBar }]; }, null); })();
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
 * Generated from: src/components-examples/material/snack-bar/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            },] },
];
/** @nocollapse */ SnackBarExamplesModule.ɵmod = ɵɵdefineNgModule({ type: SnackBarExamplesModule });
/** @nocollapse */ SnackBarExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function SnackBarExamplesModule_Factory(t) { return new (t || SnackBarExamplesModule)(); }, imports: [[
            FormsModule,
            MatButtonModule,
            MatInputModule,
            MatSelectModule,
            MatSnackBarModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SnackBarExamplesModule, { declarations: [SnackBarComponentExample,
        SnackBarOverviewExample,
        SnackBarPositionExample,
        PizzaPartyComponent], imports: [FormsModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatSnackBarModule], exports: [SnackBarComponentExample,
        SnackBarOverviewExample,
        SnackBarPositionExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SnackBarExamplesModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

export { PizzaPartyComponent, SnackBarComponentExample, SnackBarExamplesModule, SnackBarOverviewExample, SnackBarPositionExample };
//# sourceMappingURL=snack-bar.js.map
