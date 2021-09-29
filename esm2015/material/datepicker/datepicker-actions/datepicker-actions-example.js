import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/material/button";
/** @title Datepicker action buttons */
export class DatepickerActionsExample {
}
DatepickerActionsExample.ɵfac = function DatepickerActionsExample_Factory(t) { return new (t || DatepickerActionsExample)(); };
DatepickerActionsExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DatepickerActionsExample, selectors: [["datepicker-actions-example"]], decls: 26, vars: 4, consts: [["appearance", "fill", 1, "example-form-field"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["datepicker", ""], ["mat-button", "", "matDatepickerCancel", ""], ["mat-raised-button", "", "color", "primary", "matDatepickerApply", ""], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date"], ["matEndDate", "", "placeholder", "End date"], ["rangePicker", ""], ["mat-button", "", "matDateRangePickerCancel", ""], ["mat-raised-button", "", "color", "primary", "matDateRangePickerApply", ""]], template: function DatepickerActionsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Choose a date");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "input", 1);
        i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
        i0.ɵɵelementStart(5, "mat-datepicker", null, 3);
        i0.ɵɵelementStart(7, "mat-datepicker-actions");
        i0.ɵɵelementStart(8, "button", 4);
        i0.ɵɵtext(9, "Cancel");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 5);
        i0.ɵɵtext(11, "Apply");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-form-field", 0);
        i0.ɵɵelementStart(13, "mat-label");
        i0.ɵɵtext(14, "Enter a date range");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "mat-date-range-input", 6);
        i0.ɵɵelement(16, "input", 7);
        i0.ɵɵelement(17, "input", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(18, "mat-datepicker-toggle", 2);
        i0.ɵɵelementStart(19, "mat-date-range-picker", null, 9);
        i0.ɵɵelementStart(21, "mat-date-range-picker-actions");
        i0.ɵɵelementStart(22, "button", 10);
        i0.ɵɵtext(23, "Cancel");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "button", 11);
        i0.ɵɵtext(25, "Apply");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(6);
        const _r1 = i0.ɵɵreference(20);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("matDatepicker", _r0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", _r0);
        i0.ɵɵadvance(11);
        i0.ɵɵproperty("rangePicker", _r1);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("for", _r1);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker, i3.MatDatepickerActions, i4.MatButton, i3.MatDatepickerCancel, i3.MatDatepickerApply, i3.MatDateRangeInput, i3.MatStartDate, i3.MatEndDate, i3.MatDateRangePicker], styles: [".example-form-field[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatepickerActionsExample, [{
        type: Component,
        args: [{ selector: 'datepicker-actions-example', template: "<mat-form-field appearance=\"fill\" class=\"example-form-field\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"datepicker\">\n  <mat-datepicker-toggle matSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n<!-- #docregion datepicker-actions -->\n  <mat-datepicker #datepicker>\n    <mat-datepicker-actions>\n      <button mat-button matDatepickerCancel>Cancel</button>\n      <button mat-raised-button color=\"primary\" matDatepickerApply>Apply</button>\n    </mat-datepicker-actions>\n  </mat-datepicker>\n<!-- #enddocregion datepicker-actions -->\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\" class=\"example-form-field\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [rangePicker]=\"rangePicker\">\n    <input matStartDate placeholder=\"Start date\">\n    <input matEndDate placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-datepicker-toggle matSuffix [for]=\"rangePicker\"></mat-datepicker-toggle>\n<!-- #docregion date-range-picker-actions -->\n  <mat-date-range-picker #rangePicker>\n    <mat-date-range-picker-actions>\n      <button mat-button matDateRangePickerCancel>Cancel</button>\n      <button mat-raised-button color=\"primary\" matDateRangePickerApply>Apply</button>\n    </mat-date-range-picker-actions>\n  </mat-date-range-picker>\n<!-- #enddocregion date-range-picker-actions -->\n</mat-form-field>\n", styles: [".example-form-field {\n  margin-right: 20px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1hY3Rpb25zLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItYWN0aW9ucy9kYXRlcGlja2VyLWFjdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1hY3Rpb25zL2RhdGVwaWNrZXItYWN0aW9ucy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBRXhDLHVDQUF1QztBQU12QyxNQUFNLE9BQU8sd0JBQXdCOztnR0FBeEIsd0JBQXdCOzJFQUF4Qix3QkFBd0I7UUNSckMseUNBQTZEO1FBQzNELGlDQUFXO1FBQUEsNkJBQWE7UUFBQSxpQkFBWTtRQUNwQywyQkFBNkM7UUFDN0MsMkNBQTRFO1FBRTVFLCtDQUE0QjtRQUMxQiw4Q0FBd0I7UUFDdEIsaUNBQXVDO1FBQUEsc0JBQU07UUFBQSxpQkFBUztRQUN0RCxrQ0FBNkQ7UUFBQSxzQkFBSztRQUFBLGlCQUFTO1FBQzdFLGlCQUF5QjtRQUMzQixpQkFBaUI7UUFFbkIsaUJBQWlCO1FBRWpCLDBDQUE2RDtRQUMzRCxrQ0FBVztRQUFBLG1DQUFrQjtRQUFBLGlCQUFZO1FBQ3pDLGdEQUFrRDtRQUNoRCw0QkFBNkM7UUFDN0MsNEJBQXlDO1FBQzNDLGlCQUF1QjtRQUN2Qiw0Q0FBNkU7UUFFN0UsdURBQW9DO1FBQ2xDLHNEQUErQjtRQUM3QixtQ0FBNEM7UUFBQSx1QkFBTTtRQUFBLGlCQUFTO1FBQzNELG1DQUFrRTtRQUFBLHNCQUFLO1FBQUEsaUJBQVM7UUFDbEYsaUJBQWdDO1FBQ2xDLGlCQUF3QjtRQUUxQixpQkFBaUI7Ozs7UUEzQkMsZUFBNEI7UUFBNUIsbUNBQTRCO1FBQ1gsZUFBa0I7UUFBbEIseUJBQWtCO1FBYTdCLGdCQUEyQjtRQUEzQixpQ0FBMkI7UUFJaEIsZUFBbUI7UUFBbkIseUJBQW1COzt1RkRaekMsd0JBQXdCO2NBTHBDLFNBQVM7MkJBQ0UsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgYWN0aW9uIGJ1dHRvbnMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItYWN0aW9ucy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWFjdGlvbnMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItYWN0aW9ucy1leGFtcGxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJBY3Rpb25zRXhhbXBsZSB7fVxuIiwiPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCIgY2xhc3M9XCJleGFtcGxlLWZvcm0tZmllbGRcIj5cbiAgPG1hdC1sYWJlbD5DaG9vc2UgYSBkYXRlPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJkYXRlcGlja2VyXCI+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwiZGF0ZXBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuPCEtLSAjZG9jcmVnaW9uIGRhdGVwaWNrZXItYWN0aW9ucyAtLT5cbiAgPG1hdC1kYXRlcGlja2VyICNkYXRlcGlja2VyPlxuICAgIDxtYXQtZGF0ZXBpY2tlci1hY3Rpb25zPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdERhdGVwaWNrZXJDYW5jZWw+Q2FuY2VsPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG1hdERhdGVwaWNrZXJBcHBseT5BcHBseTwvYnV0dG9uPlxuICAgIDwvbWF0LWRhdGVwaWNrZXItYWN0aW9ucz5cbiAgPC9tYXQtZGF0ZXBpY2tlcj5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBkYXRlcGlja2VyLWFjdGlvbnMgLS0+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIiBjbGFzcz1cImV4YW1wbGUtZm9ybS1maWVsZFwiPlxuICA8bWF0LWxhYmVsPkVudGVyIGEgZGF0ZSByYW5nZTwvbWF0LWxhYmVsPlxuICA8bWF0LWRhdGUtcmFuZ2UtaW5wdXQgW3JhbmdlUGlja2VyXT1cInJhbmdlUGlja2VyXCI+XG4gICAgPGlucHV0IG1hdFN0YXJ0RGF0ZSBwbGFjZWhvbGRlcj1cIlN0YXJ0IGRhdGVcIj5cbiAgICA8aW5wdXQgbWF0RW5kRGF0ZSBwbGFjZWhvbGRlcj1cIkVuZCBkYXRlXCI+XG4gIDwvbWF0LWRhdGUtcmFuZ2UtaW5wdXQ+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicmFuZ2VQaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbjwhLS0gI2RvY3JlZ2lvbiBkYXRlLXJhbmdlLXBpY2tlci1hY3Rpb25zIC0tPlxuICA8bWF0LWRhdGUtcmFuZ2UtcGlja2VyICNyYW5nZVBpY2tlcj5cbiAgICA8bWF0LWRhdGUtcmFuZ2UtcGlja2VyLWFjdGlvbnM+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0RGF0ZVJhbmdlUGlja2VyQ2FuY2VsPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBtYXREYXRlUmFuZ2VQaWNrZXJBcHBseT5BcHBseTwvYnV0dG9uPlxuICAgIDwvbWF0LWRhdGUtcmFuZ2UtcGlja2VyLWFjdGlvbnM+XG4gIDwvbWF0LWRhdGUtcmFuZ2UtcGlja2VyPlxuPCEtLSAjZW5kZG9jcmVnaW9uIGRhdGUtcmFuZ2UtcGlja2VyLWFjdGlvbnMgLS0+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19