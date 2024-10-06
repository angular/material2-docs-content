import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import * as i3 from '@angular/material/timepicker';
import { MatTimepickerModule } from '@angular/material/timepicker';
import * as i2 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';

/** @title Basic timepicker */
class TimepickerOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-next.8", ngImport: i0, type: TimepickerOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0-next.8", type: TimepickerOverviewExample, isStandalone: true, selector: "timepicker-overview-example", providers: [provideNativeDateAdapter()], ngImport: i0, template: "<mat-form-field>\n  <mat-label>Pick a time</mat-label>\n  <input matInput [matTimepicker]=\"picker\">\n  <mat-timepicker-toggle matIconSuffix [for]=\"picker\"/>\n  <mat-timepicker #picker/>\n</mat-form-field>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatTimepickerModule }, { kind: "component", type: i3.MatTimepicker, selector: "mat-timepicker", inputs: ["interval", "options", "disableRipple", "aria-label", "aria-labelledby"], outputs: ["selected", "opened", "closed"], exportAs: ["matTimepicker"] }, { kind: "directive", type: i3.MatTimepickerInput, selector: "input[matTimepicker]", inputs: ["value", "matTimepicker", "matTimepickerMin", "matTimepickerMax", "disabled"], outputs: ["valueChange"], exportAs: ["matTimepickerInput"] }, { kind: "component", type: i3.MatTimepickerToggle, selector: "mat-timepicker-toggle", inputs: ["for", "aria-label", "disabled", "tabIndex", "disableRipple"], exportAs: ["matTimepickerToggle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-next.8", ngImport: i0, type: TimepickerOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'timepicker-overview-example', standalone: true, providers: [provideNativeDateAdapter()], imports: [MatFormFieldModule, MatInputModule, MatTimepickerModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-form-field>\n  <mat-label>Pick a time</mat-label>\n  <input matInput [matTimepicker]=\"picker\">\n  <mat-timepicker-toggle matIconSuffix [for]=\"picker\"/>\n  <mat-timepicker #picker/>\n</mat-form-field>\n" }]
        }] });

/**
 * @title Testing with MatTimepickerInputHarness
 */
class TimepickerHarnessExample {
    constructor() {
        const today = new Date();
        this.date = signal(new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 45));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-next.8", ngImport: i0, type: TimepickerHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0-next.8", type: TimepickerHarnessExample, isStandalone: true, selector: "timepicker-harness-example", providers: [provideNativeDateAdapter()], ngImport: i0, template: "<input [matTimepicker]=\"picker\" [(value)]=\"date\"/>\n<mat-timepicker #picker/>\n", dependencies: [{ kind: "ngmodule", type: MatTimepickerModule }, { kind: "component", type: i3.MatTimepicker, selector: "mat-timepicker", inputs: ["interval", "options", "disableRipple", "aria-label", "aria-labelledby"], outputs: ["selected", "opened", "closed"], exportAs: ["matTimepicker"] }, { kind: "directive", type: i3.MatTimepickerInput, selector: "input[matTimepicker]", inputs: ["value", "matTimepicker", "matTimepickerMin", "matTimepickerMax", "disabled"], outputs: ["valueChange"], exportAs: ["matTimepickerInput"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-next.8", ngImport: i0, type: TimepickerHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'timepicker-harness-example', standalone: true, providers: [provideNativeDateAdapter()], imports: [MatTimepickerModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<input [matTimepicker]=\"picker\" [(value)]=\"date\"/>\n<mat-timepicker #picker/>\n" }]
        }], ctorParameters: () => [] });

/**
 * Generated bundle index. Do not edit.
 */

export { TimepickerHarnessExample, TimepickerOverviewExample };
//# sourceMappingURL=timepicker.mjs.map
