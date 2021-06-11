import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i3 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i5 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i4 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i3$1 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i1 from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import * as i2 from '@angular/material/form-field';
import * as i4$1 from '@angular/material/core';

/**
 * @title Snack-bar with a custom component
 */
class SnackBarComponentExample {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.durationInSeconds = 5;
    }
    openSnackBar() {
        this._snackBar.openFromComponent(PizzaPartyComponent, {
            duration: this.durationInSeconds * 1000,
        });
    }
}
SnackBarComponentExample.ɵfac = function SnackBarComponentExample_Factory(t) { return new (t || SnackBarComponentExample)(i0.ɵɵdirectiveInject(i1.MatSnackBar)); };
SnackBarComponentExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SnackBarComponentExample, selectors: [["snack-bar-component-example"]], decls: 6, vars: 1, consts: [["appearance", "fill"], ["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], ["mat-stroked-button", "", "aria-label", "Show an example snack-bar", 3, "click"]], template: function SnackBarComponentExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Snack bar duration (seconds)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "input", 1);
        i0.ɵɵlistener("ngModelChange", function SnackBarComponentExample_Template_input_ngModelChange_3_listener($event) { return ctx.durationInSeconds = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "button", 2);
        i0.ɵɵlistener("click", function SnackBarComponentExample_Template_button_click_4_listener() { return ctx.openSnackBar(); });
        i0.ɵɵtext(5, " Pizza party\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.durationInSeconds);
    } }, directives: [i2.MatFormField, i2.MatLabel, i3.NumberValueAccessor, i4.MatInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i5.MatButton], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SnackBarComponentExample, [{
        type: Component,
        args: [{
                selector: 'snack-bar-component-example',
                templateUrl: 'snack-bar-component-example.html',
                styleUrls: ['snack-bar-component-example.css'],
            }]
    }], function () { return [{ type: i1.MatSnackBar }]; }, null); })();
class PizzaPartyComponent {
}
PizzaPartyComponent.ɵfac = function PizzaPartyComponent_Factory(t) { return new (t || PizzaPartyComponent)(); };
PizzaPartyComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PizzaPartyComponent, selectors: [["snack-bar-component-example-snack"]], decls: 2, vars: 0, consts: [[1, "example-pizza-party"]], template: function PizzaPartyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵtext(1, " Pizza party!!! \uD83C\uDF55\n");
        i0.ɵɵelementEnd();
    } }, styles: [".example-pizza-party[_ngcontent-%COMP%] {\n      color: hotpink;\n    }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PizzaPartyComponent, [{
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
 * @title Basic snack-bar
 */
class SnackBarOverviewExample {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action);
    }
}
SnackBarOverviewExample.ɵfac = function SnackBarOverviewExample_Factory(t) { return new (t || SnackBarOverviewExample)(i0.ɵɵdirectiveInject(i1.MatSnackBar)); };
SnackBarOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SnackBarOverviewExample, selectors: [["snack-bar-overview-example"]], decls: 12, vars: 0, consts: [["appearance", "fill"], ["matInput", "", "value", "Disco party!"], ["message", ""], ["matInput", "", "value", "Dance"], ["action", ""], ["mat-stroked-button", "", 3, "click"]], template: function SnackBarOverviewExample_Template(rf, ctx) { if (rf & 1) {
        const _r2 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Message");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "input", 1, 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-form-field", 0);
        i0.ɵɵelementStart(6, "mat-label");
        i0.ɵɵtext(7, "Action");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "input", 3, 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 5);
        i0.ɵɵlistener("click", function SnackBarOverviewExample_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r2); const _r0 = i0.ɵɵreference(4); const _r1 = i0.ɵɵreference(9); return ctx.openSnackBar(_r0.value, _r1.value); });
        i0.ɵɵtext(11, "Show snack-bar");
        i0.ɵɵelementEnd();
    } }, directives: [i2.MatFormField, i2.MatLabel, i4.MatInput, i5.MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SnackBarOverviewExample, [{
        type: Component,
        args: [{
                selector: 'snack-bar-overview-example',
                templateUrl: 'snack-bar-overview-example.html',
                styleUrls: ['snack-bar-overview-example.css'],
            }]
    }], function () { return [{ type: i1.MatSnackBar }]; }, null); })();

/**
 * @title Snack-bar with configurable position
 */
class SnackBarPositionExample {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.horizontalPosition = 'start';
        this.verticalPosition = 'bottom';
    }
    openSnackBar() {
        this._snackBar.open('Cannonball!!', 'Splash', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }
}
SnackBarPositionExample.ɵfac = function SnackBarPositionExample_Factory(t) { return new (t || SnackBarPositionExample)(i0.ɵɵdirectiveInject(i1.MatSnackBar)); };
SnackBarPositionExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SnackBarPositionExample, selectors: [["snack-bar-position-example"]], decls: 24, vars: 2, consts: [["appearance", "fill"], [3, "value", "valueChange"], ["value", "start"], ["value", "center"], ["value", "end"], ["value", "left"], ["value", "right"], ["value", "top"], ["value", "bottom"], ["mat-stroked-button", "", "aria-label", "Show an example snack-bar", 3, "click"]], template: function SnackBarPositionExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Horizontal position");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-select", 1);
        i0.ɵɵlistener("valueChange", function SnackBarPositionExample_Template_mat_select_valueChange_3_listener($event) { return ctx.horizontalPosition = $event; });
        i0.ɵɵelementStart(4, "mat-option", 2);
        i0.ɵɵtext(5, "Start");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-option", 3);
        i0.ɵɵtext(7, "Center");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-option", 4);
        i0.ɵɵtext(9, "End");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-option", 5);
        i0.ɵɵtext(11, "Left");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-option", 6);
        i0.ɵɵtext(13, "Right");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-form-field", 0);
        i0.ɵɵelementStart(15, "mat-label");
        i0.ɵɵtext(16, "Vertical position");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "mat-select", 1);
        i0.ɵɵlistener("valueChange", function SnackBarPositionExample_Template_mat_select_valueChange_17_listener($event) { return ctx.verticalPosition = $event; });
        i0.ɵɵelementStart(18, "mat-option", 7);
        i0.ɵɵtext(19, "Top");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "mat-option", 8);
        i0.ɵɵtext(21, "Bottom");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "button", 9);
        i0.ɵɵlistener("click", function SnackBarPositionExample_Template_button_click_22_listener() { return ctx.openSnackBar(); });
        i0.ɵɵtext(23, " Pool party!\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("value", ctx.horizontalPosition);
        i0.ɵɵadvance(14);
        i0.ɵɵproperty("value", ctx.verticalPosition);
    } }, directives: [i2.MatFormField, i2.MatLabel, i3$1.MatSelect, i4$1.MatOption, i5.MatButton], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SnackBarPositionExample, [{
        type: Component,
        args: [{
                selector: 'snack-bar-position-example',
                templateUrl: 'snack-bar-position-example.html',
                styleUrls: ['snack-bar-position-example.css'],
            }]
    }], function () { return [{ type: i1.MatSnackBar }]; }, null); })();

function SnackBarHarnessExample_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Hello from the snackbar");
} }
/**
 * @title Testing with MatSnackBarHarness
 */
class SnackBarHarnessExample {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    open(message, action = '', config) {
        return this.snackBar.open(message, action, config);
    }
}
SnackBarHarnessExample.ɵfac = function SnackBarHarnessExample_Factory(t) { return new (t || SnackBarHarnessExample)(i0.ɵɵdirectiveInject(i1.MatSnackBar)); };
SnackBarHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SnackBarHarnessExample, selectors: [["snack-bar-harness-example"]], decls: 1, vars: 0, template: function SnackBarHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SnackBarHarnessExample_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SnackBarHarnessExample, [{
        type: Component,
        args: [{
                selector: 'snack-bar-harness-example',
                templateUrl: 'snack-bar-harness-example.html',
            }]
    }], function () { return [{ type: i1.MatSnackBar }]; }, null); })();

const EXAMPLES = [
    SnackBarComponentExample,
    SnackBarHarnessExample,
    SnackBarOverviewExample,
    SnackBarPositionExample,
];
class SnackBarExamplesModule {
}
SnackBarExamplesModule.ɵfac = function SnackBarExamplesModule_Factory(t) { return new (t || SnackBarExamplesModule)(); };
SnackBarExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SnackBarExamplesModule });
SnackBarExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            FormsModule,
            MatButtonModule,
            MatInputModule,
            MatSelectModule,
            MatSnackBarModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SnackBarExamplesModule, [{
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
                entryComponents: [...EXAMPLES, PizzaPartyComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SnackBarExamplesModule, { declarations: [SnackBarComponentExample,
        SnackBarHarnessExample,
        SnackBarOverviewExample,
        SnackBarPositionExample,
        PizzaPartyComponent], imports: [FormsModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatSnackBarModule], exports: [SnackBarComponentExample,
        SnackBarHarnessExample,
        SnackBarOverviewExample,
        SnackBarPositionExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { PizzaPartyComponent, SnackBarComponentExample, SnackBarExamplesModule, SnackBarHarnessExample, SnackBarOverviewExample, SnackBarPositionExample };
//# sourceMappingURL=snack-bar.js.map
