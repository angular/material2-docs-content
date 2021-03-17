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
        args: [{
                selector: 'datepicker-actions-example',
                templateUrl: 'datepicker-actions-example.html',
                styleUrls: ['datepicker-actions-example.css']
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1hY3Rpb25zLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItYWN0aW9ucy9kYXRlcGlja2VyLWFjdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1hY3Rpb25zL2RhdGVwaWNrZXItYWN0aW9ucy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBRXhDLHVDQUF1QztBQU12QyxNQUFNLE9BQU8sd0JBQXdCOztnR0FBeEIsd0JBQXdCOzJFQUF4Qix3QkFBd0I7UUNSckMseUNBQTZEO1FBQzNELGlDQUFXO1FBQUEsNkJBQWE7UUFBQSxpQkFBWTtRQUNwQywyQkFBNkM7UUFDN0MsMkNBQTRFO1FBRTVFLCtDQUE0QjtRQUMxQiw4Q0FBd0I7UUFDdEIsaUNBQXVDO1FBQUEsc0JBQU07UUFBQSxpQkFBUztRQUN0RCxrQ0FBNkQ7UUFBQSxzQkFBSztRQUFBLGlCQUFTO1FBQzdFLGlCQUF5QjtRQUMzQixpQkFBaUI7UUFFbkIsaUJBQWlCO1FBRWpCLDBDQUE2RDtRQUMzRCxrQ0FBVztRQUFBLG1DQUFrQjtRQUFBLGlCQUFZO1FBQ3pDLGdEQUFrRDtRQUNoRCw0QkFBNkM7UUFDN0MsNEJBQXlDO1FBQzNDLGlCQUF1QjtRQUN2Qiw0Q0FBNkU7UUFFN0UsdURBQW9DO1FBQ2xDLHNEQUErQjtRQUM3QixtQ0FBNEM7UUFBQSx1QkFBTTtRQUFBLGlCQUFTO1FBQzNELG1DQUFrRTtRQUFBLHNCQUFLO1FBQUEsaUJBQVM7UUFDbEYsaUJBQWdDO1FBQ2xDLGlCQUF3QjtRQUUxQixpQkFBaUI7Ozs7UUEzQkMsZUFBNEI7UUFBNUIsbUNBQTRCO1FBQ1gsZUFBa0I7UUFBbEIseUJBQWtCO1FBYTdCLGdCQUEyQjtRQUEzQixpQ0FBMkI7UUFJaEIsZUFBbUI7UUFBbkIseUJBQW1COzt1RkRaekMsd0JBQXdCO2NBTHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUM5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIGFjdGlvbiBidXR0b25zICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWFjdGlvbnMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1hY3Rpb25zLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLWFjdGlvbnMtZXhhbXBsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyQWN0aW9uc0V4YW1wbGUge31cbiIsIjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiIGNsYXNzPVwiZXhhbXBsZS1mb3JtLWZpZWxkXCI+XG4gIDxtYXQtbGFiZWw+Q2hvb3NlIGEgZGF0ZTwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwiZGF0ZXBpY2tlclwiPlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cImRhdGVwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbjwhLS0gI2RvY3JlZ2lvbiBkYXRlcGlja2VyLWFjdGlvbnMgLS0+XG4gIDxtYXQtZGF0ZXBpY2tlciAjZGF0ZXBpY2tlcj5cbiAgICA8bWF0LWRhdGVwaWNrZXItYWN0aW9ucz5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXREYXRlcGlja2VyQ2FuY2VsPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBtYXREYXRlcGlja2VyQXBwbHk+QXBwbHk8L2J1dHRvbj5cbiAgICA8L21hdC1kYXRlcGlja2VyLWFjdGlvbnM+XG4gIDwvbWF0LWRhdGVwaWNrZXI+XG48IS0tICNlbmRkb2NyZWdpb24gZGF0ZXBpY2tlci1hY3Rpb25zIC0tPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCIgY2xhc3M9XCJleGFtcGxlLWZvcm0tZmllbGRcIj5cbiAgPG1hdC1sYWJlbD5FbnRlciBhIGRhdGUgcmFuZ2U8L21hdC1sYWJlbD5cbiAgPG1hdC1kYXRlLXJhbmdlLWlucHV0IFtyYW5nZVBpY2tlcl09XCJyYW5nZVBpY2tlclwiPlxuICAgIDxpbnB1dCBtYXRTdGFydERhdGUgcGxhY2Vob2xkZXI9XCJTdGFydCBkYXRlXCI+XG4gICAgPGlucHV0IG1hdEVuZERhdGUgcGxhY2Vob2xkZXI9XCJFbmQgZGF0ZVwiPlxuICA8L21hdC1kYXRlLXJhbmdlLWlucHV0PlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInJhbmdlUGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG48IS0tICNkb2NyZWdpb24gZGF0ZS1yYW5nZS1waWNrZXItYWN0aW9ucyAtLT5cbiAgPG1hdC1kYXRlLXJhbmdlLXBpY2tlciAjcmFuZ2VQaWNrZXI+XG4gICAgPG1hdC1kYXRlLXJhbmdlLXBpY2tlci1hY3Rpb25zPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdERhdGVSYW5nZVBpY2tlckNhbmNlbD5DYW5jZWw8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgbWF0RGF0ZVJhbmdlUGlja2VyQXBwbHk+QXBwbHk8L2J1dHRvbj5cbiAgICA8L21hdC1kYXRlLXJhbmdlLXBpY2tlci1hY3Rpb25zPlxuICA8L21hdC1kYXRlLXJhbmdlLXBpY2tlcj5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBkYXRlLXJhbmdlLXBpY2tlci1hY3Rpb25zIC0tPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==