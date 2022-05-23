import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i2$1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i5 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i4 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i1 from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import * as i3 from '@angular/material/form-field';
import * as i5$1 from '@angular/material/core';

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
SnackBarComponentExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: SnackBarComponentExample, deps: [{ token: i1.MatSnackBar }], target: i0.ɵɵFactoryTarget.Component });
SnackBarComponentExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.0-rc.1", type: SnackBarComponentExample, selector: "snack-bar-component-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Snack bar duration (seconds)</mat-label>\n  <input type=\"number\" [(ngModel)]=\"durationInSeconds\" matInput>\n</mat-form-field>\n\n<button mat-stroked-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pizza party\n</button>\n", styles: [".mat-form-field {\n  margin-right: 8px;\n}\n"], dependencies: [{ kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i2$1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: SnackBarComponentExample, decorators: [{
            type: Component,
            args: [{ selector: 'snack-bar-component-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Snack bar duration (seconds)</mat-label>\n  <input type=\"number\" [(ngModel)]=\"durationInSeconds\" matInput>\n</mat-form-field>\n\n<button mat-stroked-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pizza party\n</button>\n", styles: [".mat-form-field {\n  margin-right: 8px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.MatSnackBar }]; } });
class PizzaPartyComponent {
}
PizzaPartyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: PizzaPartyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PizzaPartyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.0-rc.1", type: PizzaPartyComponent, selector: "snack-bar-component-example-snack", ngImport: i0, template: "<span class=\"example-pizza-party\">\n  Pizza party!!! \uD83C\uDF55\n</span>\n", styles: ["\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: PizzaPartyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'snack-bar-component-example-snack', template: "<span class=\"example-pizza-party\">\n  Pizza party!!! \uD83C\uDF55\n</span>\n", styles: ["\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "] }]
        }] });

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
SnackBarOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: SnackBarOverviewExample, deps: [{ token: i1.MatSnackBar }], target: i0.ɵɵFactoryTarget.Component });
SnackBarOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.0-rc.1", type: SnackBarOverviewExample, selector: "snack-bar-overview-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Message</mat-label>\n  <input matInput value=\"Disco party!\" #message>\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\">\n  <mat-label>Action</mat-label>\n  <input matInput value=\"Dance\" #action>\n</mat-form-field>\n\n<button mat-stroked-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], dependencies: [{ kind: "component", type: i2$1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: SnackBarOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'snack-bar-overview-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Message</mat-label>\n  <input matInput value=\"Disco party!\" #message>\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\">\n  <mat-label>Action</mat-label>\n  <input matInput value=\"Dance\" #action>\n</mat-form-field>\n\n<button mat-stroked-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.MatSnackBar }]; } });

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
SnackBarPositionExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: SnackBarPositionExample, deps: [{ token: i1.MatSnackBar }], target: i0.ɵɵFactoryTarget.Component });
SnackBarPositionExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.0-rc.1", type: SnackBarPositionExample, selector: "snack-bar-position-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Horizontal position</mat-label>\n  <mat-select [(value)]=\"horizontalPosition\">\n    <mat-option value=\"start\">Start</mat-option>\n    <mat-option value=\"center\">Center</mat-option>\n    <mat-option value=\"end\">End</mat-option>\n    <mat-option value=\"left\">Left</mat-option>\n    <mat-option value=\"right\">Right</mat-option>\n  </mat-select>\n</mat-form-field>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Vertical position</mat-label>\n  <mat-select [(value)]=\"verticalPosition\">\n    <mat-option value=\"top\">Top</mat-option>\n    <mat-option value=\"bottom\">Bottom</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button mat-stroked-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pool party!\n</button>\n", styles: [".mat-form-field {\n  margin-right: 8px;\n}\n"], dependencies: [{ kind: "component", type: i2$1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "component", type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { kind: "component", type: i5$1.MatOption, selector: "mat-option", exportAs: ["matOption"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: SnackBarPositionExample, decorators: [{
            type: Component,
            args: [{ selector: 'snack-bar-position-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Horizontal position</mat-label>\n  <mat-select [(value)]=\"horizontalPosition\">\n    <mat-option value=\"start\">Start</mat-option>\n    <mat-option value=\"center\">Center</mat-option>\n    <mat-option value=\"end\">End</mat-option>\n    <mat-option value=\"left\">Left</mat-option>\n    <mat-option value=\"right\">Right</mat-option>\n  </mat-select>\n</mat-form-field>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Vertical position</mat-label>\n  <mat-select [(value)]=\"verticalPosition\">\n    <mat-option value=\"top\">Top</mat-option>\n    <mat-option value=\"bottom\">Bottom</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button mat-stroked-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pool party!\n</button>\n", styles: [".mat-form-field {\n  margin-right: 8px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.MatSnackBar }]; } });

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
SnackBarHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: SnackBarHarnessExample, deps: [{ token: i1.MatSnackBar }], target: i0.ɵɵFactoryTarget.Component });
SnackBarHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.0-rc.1", type: SnackBarHarnessExample, selector: "snack-bar-harness-example", ngImport: i0, template: "<ng-template>Hello from the snackbar</ng-template>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: SnackBarHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'snack-bar-harness-example', template: "<ng-template>Hello from the snackbar</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatSnackBar }]; } });

const EXAMPLES = [
    SnackBarComponentExample,
    SnackBarHarnessExample,
    SnackBarOverviewExample,
    SnackBarPositionExample,
];
class SnackBarExamplesModule {
}
SnackBarExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: SnackBarExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SnackBarExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.0-rc.1", ngImport: i0, type: SnackBarExamplesModule, declarations: [SnackBarComponentExample,
        SnackBarHarnessExample,
        SnackBarOverviewExample,
        SnackBarPositionExample, PizzaPartyComponent], imports: [FormsModule, MatButtonModule, MatInputModule, MatSelectModule, MatSnackBarModule], exports: [SnackBarComponentExample,
        SnackBarHarnessExample,
        SnackBarOverviewExample,
        SnackBarPositionExample] });
SnackBarExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: SnackBarExamplesModule, imports: [FormsModule, MatButtonModule, MatInputModule, MatSelectModule, MatSnackBarModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: SnackBarExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, MatButtonModule, MatInputModule, MatSelectModule, MatSnackBarModule],
                    declarations: [...EXAMPLES, PizzaPartyComponent],
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { PizzaPartyComponent, SnackBarComponentExample, SnackBarExamplesModule, SnackBarHarnessExample, SnackBarOverviewExample, SnackBarPositionExample };
//# sourceMappingURL=snack-bar.mjs.map
