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
DatepickerActionsExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerActionsExample, selectors: [["datepicker-actions-example"]], decls: 26, vars: 4, consts: [["appearance", "fill", 1, "example-form-field"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["datepicker", ""], ["mat-button", "", "matDatepickerCancel", ""], ["mat-raised-button", "", "color", "primary", "matDatepickerApply", ""], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date"], ["matEndDate", "", "placeholder", "End date"], ["rangePicker", ""], ["mat-button", "", "matDateRangePickerCancel", ""], ["mat-raised-button", "", "color", "primary", "matDateRangePickerApply", ""]], template: function DatepickerActionsExample_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1hY3Rpb25zLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItYWN0aW9ucy9kYXRlcGlja2VyLWFjdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1hY3Rpb25zL2RhdGVwaWNrZXItYWN0aW9ucy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBRXhDLHVDQUF1QztBQU12QyxNQUFNLE9BQU8sd0JBQXdCOztnR0FBeEIsd0JBQXdCOzZEQUF4Qix3QkFBd0I7UUNSckMseUNBQ0U7UUFBQSxpQ0FBVztRQUFBLDZCQUFhO1FBQUEsaUJBQVk7UUFDcEMsMkJBQ0E7UUFBQSwyQ0FBNEU7UUFFNUUsK0NBQ0U7UUFBQSw4Q0FDRTtRQUFBLGlDQUF1QztRQUFBLHNCQUFNO1FBQUEsaUJBQVM7UUFDdEQsa0NBQTZEO1FBQUEsc0JBQUs7UUFBQSxpQkFBUztRQUM3RSxpQkFBeUI7UUFDM0IsaUJBQWlCO1FBRW5CLGlCQUFpQjtRQUVqQiwwQ0FDRTtRQUFBLGtDQUFXO1FBQUEsbUNBQWtCO1FBQUEsaUJBQVk7UUFDekMsZ0RBQ0U7UUFBQSw0QkFDQTtRQUFBLDRCQUNGO1FBQUEsaUJBQXVCO1FBQ3ZCLDRDQUE2RTtRQUU3RSx1REFDRTtRQUFBLHNEQUNFO1FBQUEsbUNBQTRDO1FBQUEsdUJBQU07UUFBQSxpQkFBUztRQUMzRCxtQ0FBa0U7UUFBQSxzQkFBSztRQUFBLGlCQUFTO1FBQ2xGLGlCQUFnQztRQUNsQyxpQkFBd0I7UUFFMUIsaUJBQWlCOzs7O1FBM0JDLGVBQTRCO1FBQTVCLG1DQUE0QjtRQUNYLGVBQWtCO1FBQWxCLHlCQUFrQjtRQWE3QixnQkFBMkI7UUFBM0IsaUNBQTJCO1FBSWhCLGVBQW1CO1FBQW5CLHlCQUFtQjs7dUZEWnpDLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciBhY3Rpb24gYnV0dG9ucyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1hY3Rpb25zLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItYWN0aW9ucy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZXBpY2tlci1hY3Rpb25zLWV4YW1wbGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckFjdGlvbnNFeGFtcGxlIHt9XG4iLCI8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIiBjbGFzcz1cImV4YW1wbGUtZm9ybS1maWVsZFwiPlxuICA8bWF0LWxhYmVsPkNob29zZSBhIGRhdGU8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cImRhdGVwaWNrZXJcIj5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJkYXRlcGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG48IS0tICNkb2NyZWdpb24gZGF0ZXBpY2tlci1hY3Rpb25zIC0tPlxuICA8bWF0LWRhdGVwaWNrZXIgI2RhdGVwaWNrZXI+XG4gICAgPG1hdC1kYXRlcGlja2VyLWFjdGlvbnM+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0RGF0ZXBpY2tlckNhbmNlbD5DYW5jZWw8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgbWF0RGF0ZXBpY2tlckFwcGx5PkFwcGx5PC9idXR0b24+XG4gICAgPC9tYXQtZGF0ZXBpY2tlci1hY3Rpb25zPlxuICA8L21hdC1kYXRlcGlja2VyPlxuPCEtLSAjZW5kZG9jcmVnaW9uIGRhdGVwaWNrZXItYWN0aW9ucyAtLT5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiIGNsYXNzPVwiZXhhbXBsZS1mb3JtLWZpZWxkXCI+XG4gIDxtYXQtbGFiZWw+RW50ZXIgYSBkYXRlIHJhbmdlPC9tYXQtbGFiZWw+XG4gIDxtYXQtZGF0ZS1yYW5nZS1pbnB1dCBbcmFuZ2VQaWNrZXJdPVwicmFuZ2VQaWNrZXJcIj5cbiAgICA8aW5wdXQgbWF0U3RhcnREYXRlIHBsYWNlaG9sZGVyPVwiU3RhcnQgZGF0ZVwiPlxuICAgIDxpbnB1dCBtYXRFbmREYXRlIHBsYWNlaG9sZGVyPVwiRW5kIGRhdGVcIj5cbiAgPC9tYXQtZGF0ZS1yYW5nZS1pbnB1dD5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJyYW5nZVBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuPCEtLSAjZG9jcmVnaW9uIGRhdGUtcmFuZ2UtcGlja2VyLWFjdGlvbnMgLS0+XG4gIDxtYXQtZGF0ZS1yYW5nZS1waWNrZXIgI3JhbmdlUGlja2VyPlxuICAgIDxtYXQtZGF0ZS1yYW5nZS1waWNrZXItYWN0aW9ucz5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXREYXRlUmFuZ2VQaWNrZXJDYW5jZWw+Q2FuY2VsPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG1hdERhdGVSYW5nZVBpY2tlckFwcGx5PkFwcGx5PC9idXR0b24+XG4gICAgPC9tYXQtZGF0ZS1yYW5nZS1waWNrZXItYWN0aW9ucz5cbiAgPC9tYXQtZGF0ZS1yYW5nZS1waWNrZXI+XG48IS0tICNlbmRkb2NyZWdpb24gZGF0ZS1yYW5nZS1waWNrZXItYWN0aW9ucyAtLT5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=