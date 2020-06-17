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
let DateRangePickerFormsExample = /** @class */ (() => {
    class DateRangePickerFormsExample {
        constructor() {
            this.range = new FormGroup({
                start: new FormControl(),
                end: new FormControl()
            });
        }
    }
    DateRangePickerFormsExample.ɵfac = function DateRangePickerFormsExample_Factory(t) { return new (t || DateRangePickerFormsExample)(); };
    DateRangePickerFormsExample.ɵcmp = i0.ɵɵdefineComponent({ type: DateRangePickerFormsExample, selectors: [["date-range-picker-forms-example"]], decls: 14, vars: 8, consts: [[3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "Start date"], ["matEndDate", "", "formControlName", "end", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"]], template: function DateRangePickerFormsExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field");
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Enter a date range");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-date-range-input", 0);
            i0.ɵɵelement(4, "input", 1);
            i0.ɵɵelement(5, "input", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "mat-datepicker-toggle", 3);
            i0.ɵɵelement(7, "mat-date-range-picker", null, 4);
            i0.ɵɵtemplate(9, DateRangePickerFormsExample_mat_error_9_Template, 2, 0, "mat-error", 5);
            i0.ɵɵtemplate(10, DateRangePickerFormsExample_mat_error_10_Template, 2, 0, "mat-error", 5);
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
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatDateRangeInput, i3.NgControlStatusGroup, i3.FormGroupDirective, i2.MatStartDate, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlName, i2.MatEndDate, i2.MatDatepickerToggle, i1.MatSuffix, i2.MatDateRangePicker, i4.NgIf, i1.MatError], pipes: [i4.JsonPipe], styles: [""] });
    return DateRangePickerFormsExample;
})();
export { DateRangePickerFormsExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateRangePickerFormsExample, [{
        type: Component,
        args: [{
                selector: 'date-range-picker-forms-example',
                templateUrl: 'date-range-picker-forms-example.html',
                styleUrls: ['date-range-picker-forms-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztJQ1FwRCxpQ0FBd0U7SUFBQSxrQ0FBa0I7SUFBQSxpQkFBWTs7O0lBQ3RHLGlDQUFvRTtJQUFBLGdDQUFnQjtJQUFBLGlCQUFZOztBRFBsRyxpREFBaUQ7QUFDakQ7SUFBQSxNQUthLDJCQUEyQjtRQUx4QztZQU1FLFVBQUssR0FBRyxJQUFJLFNBQVMsQ0FBQztnQkFDcEIsS0FBSyxFQUFFLElBQUksV0FBVyxFQUFFO2dCQUN4QixHQUFHLEVBQUUsSUFBSSxXQUFXLEVBQUU7YUFDdkIsQ0FBQyxDQUFDO1NBQ0o7OzBHQUxZLDJCQUEyQjtvRUFBM0IsMkJBQTJCO1lDVHhDLHNDQUNFO1lBQUEsaUNBQVc7WUFBQSxrQ0FBa0I7WUFBQSxpQkFBWTtZQUN6QywrQ0FDRTtZQUFBLDJCQUNBO1lBQUEsMkJBQ0Y7WUFBQSxpQkFBdUI7WUFDdkIsMkNBQXdFO1lBQ3hFLGlEQUF1RDtZQUV2RCx3RkFBd0U7WUFDeEUsMEZBQW9FO1lBQ3RFLGlCQUFpQjtZQUVqQiwwQkFBRztZQUFBLGFBQXNDOztZQUFBLGlCQUFJOzs7WUFYckIsZUFBbUI7WUFBbkIscUNBQW1CLG9CQUFBO1lBSVIsZUFBYztZQUFkLHlCQUFjO1lBR3BDLGVBQTREO1lBQTVELCtFQUE0RDtZQUM1RCxlQUF3RDtZQUF4RCwyRUFBd0Q7WUFHbEUsZUFBc0M7WUFBdEMscUZBQXNDOztzQ0RiekM7S0FjQztTQUxZLDJCQUEyQjtrREFBM0IsMkJBQTJCO2NBTHZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyxXQUFXLEVBQUUsc0NBQXNDO2dCQUNuRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQzthQUNuRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUdyb3VwLCBGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIERhdGUgcmFuZ2UgcGlja2VyIGZvcm1zIGludGVncmF0aW9uICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlLXJhbmdlLXBpY2tlci1mb3Jtcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlLXJhbmdlLXBpY2tlci1mb3Jtcy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlUGlja2VyRm9ybXNFeGFtcGxlIHtcbiAgcmFuZ2UgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICBzdGFydDogbmV3IEZvcm1Db250cm9sKCksXG4gICAgZW5kOiBuZXcgRm9ybUNvbnRyb2woKVxuICB9KTtcbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5FbnRlciBhIGRhdGUgcmFuZ2U8L21hdC1sYWJlbD5cbiAgPG1hdC1kYXRlLXJhbmdlLWlucHV0IFtmb3JtR3JvdXBdPVwicmFuZ2VcIiBbcmFuZ2VQaWNrZXJdPVwicGlja2VyXCI+XG4gICAgPGlucHV0IG1hdFN0YXJ0RGF0ZSBmb3JtQ29udHJvbE5hbWU9XCJzdGFydFwiIHBsYWNlaG9sZGVyPVwiU3RhcnQgZGF0ZVwiPlxuICAgIDxpbnB1dCBtYXRFbmREYXRlIGZvcm1Db250cm9sTmFtZT1cImVuZFwiIHBsYWNlaG9sZGVyPVwiRW5kIGRhdGVcIj5cbiAgPC9tYXQtZGF0ZS1yYW5nZS1pbnB1dD5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlLXJhbmdlLXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGUtcmFuZ2UtcGlja2VyPlxuXG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJyYW5nZS5jb250cm9scy5zdGFydC5oYXNFcnJvcignbWF0U3RhcnREYXRlSW52YWxpZCcpXCI+SW52YWxpZCBzdGFydCBkYXRlPC9tYXQtZXJyb3I+XG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJyYW5nZS5jb250cm9scy5lbmQuaGFzRXJyb3IoJ21hdEVuZERhdGVJbnZhbGlkJylcIj5JbnZhbGlkIGVuZCBkYXRlPC9tYXQtZXJyb3I+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48cD5TZWxlY3RlZCByYW5nZToge3tyYW5nZS52YWx1ZSB8IGpzb259fTwvcD5cbiJdfQ==