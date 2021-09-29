import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/datepicker";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
function DateRangePickerFormsExample_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Invalid start date");
    i0.ɵɵelementEnd();
} }
function DateRangePickerFormsExample_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Invalid end date");
    i0.ɵɵelementEnd();
} }
/** @title Date range picker forms integration */
export class DateRangePickerFormsExample {
    constructor() {
        this.range = new FormGroup({
            start: new FormControl(),
            end: new FormControl()
        });
    }
}
DateRangePickerFormsExample.ɵfac = function DateRangePickerFormsExample_Factory(t) { return new (t || DateRangePickerFormsExample)(); };
DateRangePickerFormsExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DateRangePickerFormsExample, selectors: [["date-range-picker-forms-example"]], decls: 14, vars: 8, consts: [["appearance", "fill"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "Start date"], ["matEndDate", "", "formControlName", "end", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"]], template: function DateRangePickerFormsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Enter a date range");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-date-range-input", 1);
        i0.ɵɵelement(4, "input", 2);
        i0.ɵɵelement(5, "input", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(6, "mat-datepicker-toggle", 4);
        i0.ɵɵelement(7, "mat-date-range-picker", null, 5);
        i0.ɵɵtemplate(9, DateRangePickerFormsExample_mat_error_9_Template, 2, 0, "mat-error", 6);
        i0.ɵɵtemplate(10, DateRangePickerFormsExample_mat_error_10_Template, 2, 0, "mat-error", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "p");
        i0.ɵɵtext(12);
        i0.ɵɵpipe(13, "json");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(8);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formGroup", ctx.range)("rangePicker", _r0);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("for", _r0);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.range.controls.start.hasError("matStartDateInvalid"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.range.controls.end.hasError("matEndDateInvalid"));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Selected range: ", i0.ɵɵpipeBind1(13, 6, ctx.range.value), "");
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatDateRangeInput, i3.NgControlStatusGroup, i3.FormGroupDirective, i2.MatStartDate, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlName, i2.MatEndDate, i2.MatDatepickerToggle, i1.MatSuffix, i2.MatDateRangePicker, i4.NgIf, i1.MatError], pipes: [i4.JsonPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateRangePickerFormsExample, [{
        type: Component,
        args: [{ selector: 'date-range-picker-forms-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [formGroup]=\"range\" [rangePicker]=\"picker\">\n    <input matStartDate formControlName=\"start\" placeholder=\"Start date\">\n    <input matEndDate formControlName=\"end\" placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #picker></mat-date-range-picker>\n\n  <mat-error *ngIf=\"range.controls.start.hasError('matStartDateInvalid')\">Invalid start date</mat-error>\n  <mat-error *ngIf=\"range.controls.end.hasError('matEndDateInvalid')\">Invalid end date</mat-error>\n</mat-form-field>\n\n<p>Selected range: {{range.value | json}}</p>\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztJQ1FwRCxpQ0FBd0U7SUFBQSxrQ0FBa0I7SUFBQSxpQkFBWTs7O0lBQ3RHLGlDQUFvRTtJQUFBLGdDQUFnQjtJQUFBLGlCQUFZOztBRFBsRyxpREFBaUQ7QUFLakQsTUFBTSxPQUFPLDJCQUEyQjtJQUp4QztRQUtFLFVBQUssR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUNwQixLQUFLLEVBQUUsSUFBSSxXQUFXLEVBQUU7WUFDeEIsR0FBRyxFQUFFLElBQUksV0FBVyxFQUFFO1NBQ3ZCLENBQUMsQ0FBQztLQUNKOztzR0FMWSwyQkFBMkI7OEVBQTNCLDJCQUEyQjtRQ1J4Qyx5Q0FBa0M7UUFDaEMsaUNBQVc7UUFBQSxrQ0FBa0I7UUFBQSxpQkFBWTtRQUN6QywrQ0FBaUU7UUFDL0QsMkJBQXFFO1FBQ3JFLDJCQUErRDtRQUNqRSxpQkFBdUI7UUFDdkIsMkNBQXdFO1FBQ3hFLGlEQUF1RDtRQUV2RCx3RkFBc0c7UUFDdEcsMEZBQWdHO1FBQ2xHLGlCQUFpQjtRQUVqQiwwQkFBRztRQUFBLGFBQXNDOztRQUFBLGlCQUFJOzs7UUFYckIsZUFBbUI7UUFBbkIscUNBQW1CLG9CQUFBO1FBSVIsZUFBYztRQUFkLHlCQUFjO1FBR25DLGVBQTBEO1FBQTFELCtFQUEwRDtRQUMxRCxlQUFzRDtRQUF0RCwyRUFBc0Q7UUFHakUsZUFBc0M7UUFBdEMscUZBQXNDOzt1RkRMNUIsMkJBQTJCO2NBSnZDLFNBQVM7MkJBQ0UsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgRGF0ZSByYW5nZSBwaWNrZXIgZm9ybXMgaW50ZWdyYXRpb24gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGUtcmFuZ2UtcGlja2VyLWZvcm1zLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGUtcmFuZ2UtcGlja2VyLWZvcm1zLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZVBpY2tlckZvcm1zRXhhbXBsZSB7XG4gIHJhbmdlID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgc3RhcnQ6IG5ldyBGb3JtQ29udHJvbCgpLFxuICAgIGVuZDogbmV3IEZvcm1Db250cm9sKClcbiAgfSk7XG59XG4iLCI8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5FbnRlciBhIGRhdGUgcmFuZ2U8L21hdC1sYWJlbD5cbiAgPG1hdC1kYXRlLXJhbmdlLWlucHV0IFtmb3JtR3JvdXBdPVwicmFuZ2VcIiBbcmFuZ2VQaWNrZXJdPVwicGlja2VyXCI+XG4gICAgPGlucHV0IG1hdFN0YXJ0RGF0ZSBmb3JtQ29udHJvbE5hbWU9XCJzdGFydFwiIHBsYWNlaG9sZGVyPVwiU3RhcnQgZGF0ZVwiPlxuICAgIDxpbnB1dCBtYXRFbmREYXRlIGZvcm1Db250cm9sTmFtZT1cImVuZFwiIHBsYWNlaG9sZGVyPVwiRW5kIGRhdGVcIj5cbiAgPC9tYXQtZGF0ZS1yYW5nZS1pbnB1dD5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlLXJhbmdlLXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGUtcmFuZ2UtcGlja2VyPlxuXG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJyYW5nZS5jb250cm9scy5zdGFydC5oYXNFcnJvcignbWF0U3RhcnREYXRlSW52YWxpZCcpXCI+SW52YWxpZCBzdGFydCBkYXRlPC9tYXQtZXJyb3I+XG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJyYW5nZS5jb250cm9scy5lbmQuaGFzRXJyb3IoJ21hdEVuZERhdGVJbnZhbGlkJylcIj5JbnZhbGlkIGVuZCBkYXRlPC9tYXQtZXJyb3I+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48cD5TZWxlY3RlZCByYW5nZToge3tyYW5nZS52YWx1ZSB8IGpzb259fTwvcD5cbiJdfQ==