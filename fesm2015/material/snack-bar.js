import { ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵlistener, ɵɵadvance, ɵɵproperty, ɵsetClassMetadata, Component, ɵɵgetCurrentView, ɵɵelement, ɵɵrestoreView, ɵɵreference, ɵɵtemplate, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
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
        ɵɵlistener("click", function SnackBarComponentExample_Template_button_click_4_listener() { return ctx.openSnackBar(); });
        ɵɵtext(5, " Pizza party\n");
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("ngModel", ctx.durationInSeconds);
    } }, directives: [MatFormField, MatLabel, NumberValueAccessor, MatInput, DefaultValueAccessor, NgControlStatus, NgModel, MatButton], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SnackBarComponentExample, [{
        type: Component,
        args: [{
                selector: 'snack-bar-component-example',
                templateUrl: 'snack-bar-component-example.html',
                styleUrls: ['snack-bar-component-example.css'],
            }]
    }], function () { return [{ type: MatSnackBar }]; }, null); })();
class PizzaPartyComponent {
}
PizzaPartyComponent.ɵfac = function PizzaPartyComponent_Factory(t) { return new (t || PizzaPartyComponent)(); };
PizzaPartyComponent.ɵcmp = ɵɵdefineComponent({ type: PizzaPartyComponent, selectors: [["snack-bar-component-example-snack"]], decls: 2, vars: 0, consts: [[1, "example-pizza-party"]], template: function PizzaPartyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "span", 0);
        ɵɵtext(1, " Pizza party!!! \uD83C\uDF55\n");
        ɵɵelementEnd();
    } }, styles: [".example-pizza-party[_ngcontent-%COMP%] {\n      color: hotpink;\n    }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PizzaPartyComponent, [{
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
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
SnackBarOverviewExample.ɵfac = function SnackBarOverviewExample_Factory(t) { return new (t || SnackBarOverviewExample)(ɵɵdirectiveInject(MatSnackBar)); };
SnackBarOverviewExample.ɵcmp = ɵɵdefineComponent({ type: SnackBarOverviewExample, selectors: [["snack-bar-overview-example"]], decls: 12, vars: 0, consts: [["matInput", "", "value", "Disco party!"], ["message", ""], ["matInput", "", "value", "Dance"], ["action", ""], ["mat-stroked-button", "", 3, "click"]], template: function SnackBarOverviewExample_Template(rf, ctx) { if (rf & 1) {
        const _r2 = ɵɵgetCurrentView();
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
        ɵɵlistener("click", function SnackBarOverviewExample_Template_button_click_10_listener() { ɵɵrestoreView(_r2); const _r0 = ɵɵreference(4); const _r1 = ɵɵreference(9); return ctx.openSnackBar(_r0.value, _r1.value); });
        ɵɵtext(11, "Show snack-bar");
        ɵɵelementEnd();
    } }, directives: [MatFormField, MatLabel, MatInput, MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SnackBarOverviewExample, [{
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
class SnackBarPositionExample {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.horizontalPosition = 'start';
        this.verticalPosition = 'bottom';
    }
    openSnackBar() {
        this._snackBar.open('Cannonball!!', 'End now', {
            duration: 500,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }
}
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
        ɵɵlistener("click", function SnackBarPositionExample_Template_button_click_22_listener() { return ctx.openSnackBar(); });
        ɵɵtext(23, " Pool party!\n");
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("value", ctx.horizontalPosition);
        ɵɵadvance(14);
        ɵɵproperty("value", ctx.verticalPosition);
    } }, directives: [MatFormField, MatLabel, MatSelect, MatOption, MatButton], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SnackBarPositionExample, [{
        type: Component,
        args: [{
                selector: 'snack-bar-position-example',
                templateUrl: 'snack-bar-position-example.html',
                styleUrls: ['snack-bar-position-example.css'],
            }]
    }], function () { return [{ type: MatSnackBar }]; }, null); })();

function SnackBarHarnessExample_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Hello from the snackbar");
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
SnackBarHarnessExample.ɵfac = function SnackBarHarnessExample_Factory(t) { return new (t || SnackBarHarnessExample)(ɵɵdirectiveInject(MatSnackBar)); };
SnackBarHarnessExample.ɵcmp = ɵɵdefineComponent({ type: SnackBarHarnessExample, selectors: [["snack-bar-harness-example"]], decls: 1, vars: 0, template: function SnackBarHarnessExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, SnackBarHarnessExample_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SnackBarHarnessExample, [{
        type: Component,
        args: [{
                selector: 'snack-bar-harness-example',
                templateUrl: 'snack-bar-harness-example.html',
            }]
    }], function () { return [{ type: MatSnackBar }]; }, null); })();

const EXAMPLES = [
    SnackBarComponentExample,
    SnackBarHarnessExample,
    SnackBarOverviewExample,
    SnackBarPositionExample,
];
class SnackBarExamplesModule {
}
SnackBarExamplesModule.ɵmod = ɵɵdefineNgModule({ type: SnackBarExamplesModule });
SnackBarExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function SnackBarExamplesModule_Factory(t) { return new (t || SnackBarExamplesModule)(); }, imports: [[
            FormsModule,
            MatButtonModule,
            MatInputModule,
            MatSelectModule,
            MatSnackBarModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SnackBarExamplesModule, { declarations: [SnackBarComponentExample,
        SnackBarHarnessExample,
        SnackBarOverviewExample,
        SnackBarPositionExample, PizzaPartyComponent], imports: [FormsModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatSnackBarModule], exports: [SnackBarComponentExample,
        SnackBarHarnessExample,
        SnackBarOverviewExample,
        SnackBarPositionExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SnackBarExamplesModule, [{
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

/**
 * Generated bundle index. Do not edit.
 */

export { PizzaPartyComponent, SnackBarComponentExample, SnackBarExamplesModule, SnackBarHarnessExample, SnackBarOverviewExample, SnackBarPositionExample };
//# sourceMappingURL=snack-bar.js.map
