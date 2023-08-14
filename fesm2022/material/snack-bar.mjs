import * as i0 from '@angular/core';
import { Component, inject } from '@angular/core';
import * as i1 from '@angular/material/snack-bar';
import { MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';
import * as i5 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i4 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i3 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i2 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i3$1 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SnackBarComponentExample, deps: [{ token: i1.MatSnackBar }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: SnackBarComponentExample, isStandalone: true, selector: "snack-bar-component-example", ngImport: i0, template: "<mat-form-field>\n  <mat-label>Snack bar duration (seconds)</mat-label>\n  <input type=\"number\" [(ngModel)]=\"durationInSeconds\" matInput>\n</mat-form-field>\n\n<button mat-stroked-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pizza party\n</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i5.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatSnackBarModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SnackBarComponentExample, decorators: [{
            type: Component,
            args: [{ selector: 'snack-bar-component-example', standalone: true, imports: [MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule, MatSnackBarModule], template: "<mat-form-field>\n  <mat-label>Snack bar duration (seconds)</mat-label>\n  <input type=\"number\" [(ngModel)]=\"durationInSeconds\" matInput>\n</mat-form-field>\n\n<button mat-stroked-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pizza party\n</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.MatSnackBar }]; } });
class PizzaPartyComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: PizzaPartyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: PizzaPartyComponent, isStandalone: true, selector: "snack-bar-component-example-snack", ngImport: i0, template: "<span class=\"example-pizza-party\">\n  Pizza party!!! \uD83C\uDF55\n</span>\n", styles: ["\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: PizzaPartyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'snack-bar-component-example-snack', standalone: true, template: "<span class=\"example-pizza-party\">\n  Pizza party!!! \uD83C\uDF55\n</span>\n", styles: ["\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "] }]
        }] });

/**
 * @title Snack-bar with an annotated custom component
 */
class SnackBarAnnotatedComponentExample {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.durationInSeconds = 5;
    }
    openSnackBar() {
        this._snackBar.openFromComponent(PizzaPartyAnnotatedComponent, {
            duration: this.durationInSeconds * 1000,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SnackBarAnnotatedComponentExample, deps: [{ token: i1.MatSnackBar }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: SnackBarAnnotatedComponentExample, isStandalone: true, selector: "snack-bar-annotated-component-example", ngImport: i0, template: "<mat-form-field>\n  <mat-label>Snack bar duration (seconds)</mat-label>\n  <input type=\"number\" [(ngModel)]=\"durationInSeconds\" matInput>\n</mat-form-field>\n\n<button mat-stroked-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pizza party\n</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i5.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatSnackBarModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SnackBarAnnotatedComponentExample, decorators: [{
            type: Component,
            args: [{ selector: 'snack-bar-annotated-component-example', standalone: true, imports: [MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule, MatSnackBarModule], template: "<mat-form-field>\n  <mat-label>Snack bar duration (seconds)</mat-label>\n  <input type=\"number\" [(ngModel)]=\"durationInSeconds\" matInput>\n</mat-form-field>\n\n<button mat-stroked-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pizza party\n</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.MatSnackBar }]; } });
class PizzaPartyAnnotatedComponent {
    constructor() {
        this.snackBarRef = inject(MatSnackBarRef);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: PizzaPartyAnnotatedComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: PizzaPartyAnnotatedComponent, isStandalone: true, selector: "snack-bar-annotated-component-example-snack", ngImport: i0, template: "<span class=\"example-pizza-party\" matSnackBarLabel>\n  Pizza party!!!\n</span>\n<span matSnackBarActions>\n  <button mat-button matSnackBarAction (click)=\"snackBarRef.dismissWithAction()\">\uD83C\uDF55</button>\n</span>\n\n", styles: ["\n    :host {\n      display: flex;\n    }\n\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i5.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatSnackBarModule }, { kind: "directive", type: i1.MatSnackBarLabel, selector: "[matSnackBarLabel]" }, { kind: "directive", type: i1.MatSnackBarActions, selector: "[matSnackBarActions]" }, { kind: "directive", type: i1.MatSnackBarAction, selector: "[matSnackBarAction]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: PizzaPartyAnnotatedComponent, decorators: [{
            type: Component,
            args: [{ selector: 'snack-bar-annotated-component-example-snack', standalone: true, imports: [MatButtonModule, MatSnackBarModule], template: "<span class=\"example-pizza-party\" matSnackBarLabel>\n  Pizza party!!!\n</span>\n<span matSnackBarActions>\n  <button mat-button matSnackBarAction (click)=\"snackBarRef.dismissWithAction()\">\uD83C\uDF55</button>\n</span>\n\n", styles: ["\n    :host {\n      display: flex;\n    }\n\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "] }]
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SnackBarOverviewExample, deps: [{ token: i1.MatSnackBar }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: SnackBarOverviewExample, isStandalone: true, selector: "snack-bar-overview-example", ngImport: i0, template: "<mat-form-field>\n  <mat-label>Message</mat-label>\n  <input matInput value=\"Disco party!\" #message>\n</mat-form-field>\n\n<mat-form-field>\n  <mat-label>Action</mat-label>\n  <input matInput value=\"Dance\" #action>\n</mat-form-field>\n\n<button mat-stroked-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i5.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatSnackBarModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SnackBarOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'snack-bar-overview-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule], template: "<mat-form-field>\n  <mat-label>Message</mat-label>\n  <input matInput value=\"Disco party!\" #message>\n</mat-form-field>\n\n<mat-form-field>\n  <mat-label>Action</mat-label>\n  <input matInput value=\"Dance\" #action>\n</mat-form-field>\n\n<button mat-stroked-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SnackBarPositionExample, deps: [{ token: i1.MatSnackBar }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: SnackBarPositionExample, isStandalone: true, selector: "snack-bar-position-example", ngImport: i0, template: "<mat-form-field>\n  <mat-label>Horizontal position</mat-label>\n  <mat-select [(value)]=\"horizontalPosition\">\n    <mat-option value=\"start\">Start</mat-option>\n    <mat-option value=\"center\">Center</mat-option>\n    <mat-option value=\"end\">End</mat-option>\n    <mat-option value=\"left\">Left</mat-option>\n    <mat-option value=\"right\">Right</mat-option>\n  </mat-select>\n</mat-form-field>\n<mat-form-field>\n  <mat-label>Vertical position</mat-label>\n  <mat-select [(value)]=\"verticalPosition\">\n    <mat-option value=\"top\">Top</mat-option>\n    <mat-option value=\"bottom\">Bottom</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button mat-stroked-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pool party!\n</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i3$1.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "aria-describedby", "panelClass", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i4$1.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i5.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatSnackBarModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SnackBarPositionExample, decorators: [{
            type: Component,
            args: [{ selector: 'snack-bar-position-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, MatButtonModule, MatSnackBarModule], template: "<mat-form-field>\n  <mat-label>Horizontal position</mat-label>\n  <mat-select [(value)]=\"horizontalPosition\">\n    <mat-option value=\"start\">Start</mat-option>\n    <mat-option value=\"center\">Center</mat-option>\n    <mat-option value=\"end\">End</mat-option>\n    <mat-option value=\"left\">Left</mat-option>\n    <mat-option value=\"right\">Right</mat-option>\n  </mat-select>\n</mat-form-field>\n<mat-form-field>\n  <mat-label>Vertical position</mat-label>\n  <mat-select [(value)]=\"verticalPosition\">\n    <mat-option value=\"top\">Top</mat-option>\n    <mat-option value=\"bottom\">Bottom</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button mat-stroked-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pool party!\n</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SnackBarHarnessExample, deps: [{ token: i1.MatSnackBar }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: SnackBarHarnessExample, isStandalone: true, selector: "snack-bar-harness-example", ngImport: i0, template: "<ng-template>Hello from the snackbar</ng-template>\n", dependencies: [{ kind: "ngmodule", type: MatSnackBarModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SnackBarHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'snack-bar-harness-example', standalone: true, imports: [MatSnackBarModule], template: "<ng-template>Hello from the snackbar</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatSnackBar }]; } });

/**
 * Generated bundle index. Do not edit.
 */

export { PizzaPartyAnnotatedComponent, PizzaPartyComponent, SnackBarAnnotatedComponentExample, SnackBarComponentExample, SnackBarHarnessExample, SnackBarOverviewExample, SnackBarPositionExample };
//# sourceMappingURL=snack-bar.mjs.map
