import { __spread } from 'tslib';
import { Component, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵlistener, ɵɵadvance, ɵɵproperty, ɵsetClassMetadata, ɵɵgetCurrentView, ɵɵelement, ɵɵrestoreView, ɵɵreference, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { NumberValueAccessor, DefaultValueAccessor, NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';

/**
 * @title Snack-bar with a custom component
 */
var SnackBarComponentExample = /** @class */ (function () {
    function SnackBarComponentExample(_snackBar) {
        this._snackBar = _snackBar;
        this.durationInSeconds = 5;
    }
    SnackBarComponentExample.prototype.openSnackBar = function () {
        this._snackBar.openFromComponent(PizzaPartyComponent, {
            duration: this.durationInSeconds * 1000,
        });
    };
    SnackBarComponentExample.decorators = [
        { type: Component, args: [{
                    selector: 'snack-bar-component-example',
                    templateUrl: 'snack-bar-component-example.html',
                    styleUrls: ['snack-bar-component-example.css'],
                },] },
    ];
    /** @nocollapse */
    SnackBarComponentExample.ctorParameters = function () { return [
        { type: MatSnackBar }
    ]; };
    SnackBarComponentExample.ɵfac = function SnackBarComponentExample_Factory(t) { return new (t || SnackBarComponentExample)(ɵɵdirectiveInject(MatSnackBar)); };
    SnackBarComponentExample.ɵcmp = ɵɵdefineComponent({ type: SnackBarComponentExample, selectors: [["snack-bar-component-example"]], decls: 6, vars: 1, consts: [["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], ["mat-stroked-button", "", "aria-label", "Show an example snack-bar", 3, "click"]], template: function SnackBarComponentExample_Template(rf, ctx) { if (rf & 1) {
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
        } }, directives: [MatFormField, MatLabel, NumberValueAccessor, MatInput, DefaultValueAccessor, NgControlStatus, NgModel, MatButton], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
    return SnackBarComponentExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SnackBarComponentExample, [{
        type: Component,
        args: [{
                selector: 'snack-bar-component-example',
                templateUrl: 'snack-bar-component-example.html',
                styleUrls: ['snack-bar-component-example.css'],
            }]
    }], function () { return [{ type: MatSnackBar }]; }, null); })();
var PizzaPartyComponent = /** @class */ (function () {
    function PizzaPartyComponent() {
    }
    PizzaPartyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snack-bar-component-example-snack',
                    templateUrl: 'snack-bar-component-example-snack.html',
                    styles: ["\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "],
                },] },
    ];
    PizzaPartyComponent.ɵfac = function PizzaPartyComponent_Factory(t) { return new (t || PizzaPartyComponent)(); };
    PizzaPartyComponent.ɵcmp = ɵɵdefineComponent({ type: PizzaPartyComponent, selectors: [["snack-bar-component-example-snack"]], decls: 2, vars: 0, consts: [[1, "example-pizza-party"]], template: function PizzaPartyComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "span", 0);
            ɵɵtext(1, " Pizza party!!! \uD83C\uDF55\n");
            ɵɵelementEnd();
        } }, styles: [".example-pizza-party[_ngcontent-%COMP%] {\n      color: hotpink;\n    }"] });
    return PizzaPartyComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(PizzaPartyComponent, [{
        type: Component,
        args: [{
                selector: 'snack-bar-component-example-snack',
                templateUrl: 'snack-bar-component-example-snack.html',
                styles: ["\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "],
            }]
    }], null, null); })();

/**
 * @title Basic snack-bar
 */
var SnackBarOverviewExample = /** @class */ (function () {
    function SnackBarOverviewExample(_snackBar) {
        this._snackBar = _snackBar;
    }
    SnackBarOverviewExample.prototype.openSnackBar = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    };
    SnackBarOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'snack-bar-overview-example',
                    templateUrl: 'snack-bar-overview-example.html',
                    styleUrls: ['snack-bar-overview-example.css'],
                },] },
    ];
    /** @nocollapse */
    SnackBarOverviewExample.ctorParameters = function () { return [
        { type: MatSnackBar }
    ]; };
    SnackBarOverviewExample.ɵfac = function SnackBarOverviewExample_Factory(t) { return new (t || SnackBarOverviewExample)(ɵɵdirectiveInject(MatSnackBar)); };
    SnackBarOverviewExample.ɵcmp = ɵɵdefineComponent({ type: SnackBarOverviewExample, selectors: [["snack-bar-overview-example"]], decls: 12, vars: 0, consts: [["matInput", "", "value", "Disco party!"], ["message", ""], ["matInput", "", "value", "Dance"], ["action", ""], ["mat-stroked-button", "", 3, "click"]], template: function SnackBarOverviewExample_Template(rf, ctx) { if (rf & 1) {
            var _r2 = ɵɵgetCurrentView();
            ɵɵelementStart(0, "mat-form-field");
            ɵɵelementStart(1, "mat-label");
            ɵɵtext(2, "Message");
            ɵɵelementEnd();
            ɵɵelement(3, "input", 0, 1);
            ɵɵelementEnd();
            ɵɵelementStart(5, "mat-form-field");
            ɵɵelementStart(6, "mat-label");
            ɵɵtext(7, "Action");
            ɵɵelementEnd();
            ɵɵelement(8, "input", 2, 3);
            ɵɵelementEnd();
            ɵɵelementStart(10, "button", 4);
            ɵɵlistener("click", function SnackBarOverviewExample_Template_button_click_10_listener($event) { ɵɵrestoreView(_r2); var _r0 = ɵɵreference(4); var _r1 = ɵɵreference(9); return ctx.openSnackBar(_r0.value, _r1.value); });
            ɵɵtext(11, "Show snack-bar");
            ɵɵelementEnd();
        } }, directives: [MatFormField, MatLabel, MatInput, MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    return SnackBarOverviewExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SnackBarOverviewExample, [{
        type: Component,
        args: [{
                selector: 'snack-bar-overview-example',
                templateUrl: 'snack-bar-overview-example.html',
                styleUrls: ['snack-bar-overview-example.css'],
            }]
    }], function () { return [{ type: MatSnackBar }]; }, null); })();

/**
 * @title Snack-bar with configurable position
 */
var SnackBarPositionExample = /** @class */ (function () {
    function SnackBarPositionExample(_snackBar) {
        this._snackBar = _snackBar;
        this.horizontalPosition = 'start';
        this.verticalPosition = 'bottom';
    }
    SnackBarPositionExample.prototype.openSnackBar = function () {
        this._snackBar.open('Cannonball!!', 'End now', {
            duration: 500,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    SnackBarPositionExample.decorators = [
        { type: Component, args: [{
                    selector: 'snack-bar-position-example',
                    templateUrl: 'snack-bar-position-example.html',
                    styleUrls: ['snack-bar-position-example.css'],
                },] },
    ];
    /** @nocollapse */
    SnackBarPositionExample.ctorParameters = function () { return [
        { type: MatSnackBar }
    ]; };
    SnackBarPositionExample.ɵfac = function SnackBarPositionExample_Factory(t) { return new (t || SnackBarPositionExample)(ɵɵdirectiveInject(MatSnackBar)); };
    SnackBarPositionExample.ɵcmp = ɵɵdefineComponent({ type: SnackBarPositionExample, selectors: [["snack-bar-position-example"]], decls: 24, vars: 2, consts: [[3, "value", "valueChange"], ["value", "start"], ["value", "center"], ["value", "end"], ["value", "left"], ["value", "right"], ["value", "top"], ["value", "bottom"], ["mat-stroked-button", "", "aria-label", "Show an example snack-bar", 3, "click"]], template: function SnackBarPositionExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-form-field");
            ɵɵelementStart(1, "mat-label");
            ɵɵtext(2, "Horizontal position");
            ɵɵelementEnd();
            ɵɵelementStart(3, "mat-select", 0);
            ɵɵlistener("valueChange", function SnackBarPositionExample_Template_mat_select_valueChange_3_listener($event) { return ctx.horizontalPosition = $event; });
            ɵɵelementStart(4, "mat-option", 1);
            ɵɵtext(5, "Start");
            ɵɵelementEnd();
            ɵɵelementStart(6, "mat-option", 2);
            ɵɵtext(7, "Center");
            ɵɵelementEnd();
            ɵɵelementStart(8, "mat-option", 3);
            ɵɵtext(9, "End");
            ɵɵelementEnd();
            ɵɵelementStart(10, "mat-option", 4);
            ɵɵtext(11, "Left");
            ɵɵelementEnd();
            ɵɵelementStart(12, "mat-option", 5);
            ɵɵtext(13, "Right");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(14, "mat-form-field");
            ɵɵelementStart(15, "mat-label");
            ɵɵtext(16, "Vertical position");
            ɵɵelementEnd();
            ɵɵelementStart(17, "mat-select", 0);
            ɵɵlistener("valueChange", function SnackBarPositionExample_Template_mat_select_valueChange_17_listener($event) { return ctx.verticalPosition = $event; });
            ɵɵelementStart(18, "mat-option", 6);
            ɵɵtext(19, "Top");
            ɵɵelementEnd();
            ɵɵelementStart(20, "mat-option", 7);
            ɵɵtext(21, "Bottom");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(22, "button", 8);
            ɵɵlistener("click", function SnackBarPositionExample_Template_button_click_22_listener($event) { return ctx.openSnackBar(); });
            ɵɵtext(23, " Pool party!\n");
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(3);
            ɵɵproperty("value", ctx.horizontalPosition);
            ɵɵadvance(14);
            ɵɵproperty("value", ctx.verticalPosition);
        } }, directives: [MatFormField, MatLabel, MatSelect, MatOption, MatButton], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
    return SnackBarPositionExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SnackBarPositionExample, [{
        type: Component,
        args: [{
                selector: 'snack-bar-position-example',
                templateUrl: 'snack-bar-position-example.html',
                styleUrls: ['snack-bar-position-example.css'],
            }]
    }], function () { return [{ type: MatSnackBar }]; }, null); })();

var EXAMPLES = [
    SnackBarComponentExample,
    SnackBarOverviewExample,
    SnackBarPositionExample,
];
var SnackBarExamplesModule = /** @class */ (function () {
    function SnackBarExamplesModule() {
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
                    declarations: __spread(EXAMPLES, [PizzaPartyComponent]),
                    exports: EXAMPLES,
                    entryComponents: __spread(EXAMPLES, [PizzaPartyComponent]),
                },] },
    ];
    SnackBarExamplesModule.ɵmod = ɵɵdefineNgModule({ type: SnackBarExamplesModule });
    SnackBarExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function SnackBarExamplesModule_Factory(t) { return new (t || SnackBarExamplesModule)(); }, imports: [[
                FormsModule,
                MatButtonModule,
                MatInputModule,
                MatSelectModule,
                MatSnackBarModule,
            ]] });
    return SnackBarExamplesModule;
}());
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
                declarations: __spread(EXAMPLES, [PizzaPartyComponent]),
                exports: EXAMPLES,
                entryComponents: __spread(EXAMPLES, [PizzaPartyComponent]),
            }]
    }], null, null); })();

export { PizzaPartyComponent, SnackBarComponentExample, SnackBarExamplesModule, SnackBarOverviewExample, SnackBarPositionExample };
//# sourceMappingURL=snack-bar.js.map
