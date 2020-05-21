import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/datepicker";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/common";
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
    DateRangePickerFormsExample.ɵcmp = i0.ɵɵdefineComponent({ type: DateRangePickerFormsExample, selectors: [["date-range-picker-forms-example"]], decls: 14, vars: 8, consts: [[3, "formGroup", "rangePicker"], ["matStartDate", "", "matInput", "", "formControlName", "start", "placeholder", "Start date"], ["matEndDate", "", "matInput", "", "formControlName", "end", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"]], template: function DateRangePickerFormsExample_Template(rf, ctx) { if (rf & 1) {
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
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatDateRangeInput, i3.NgControlStatusGroup, i3.FormGroupDirective, i2.MatStartDate, i4.MatInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlName, i2.MatEndDate, i2.MatDatepickerToggle, i1.MatSuffix, i2.MatDateRangePicker, i5.NgIf, i1.MatError], pipes: [i5.JsonPipe], styles: [""] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7SUNRcEQsaUNBQXdFO0lBQUEsa0NBQWtCO0lBQUEsaUJBQVk7OztJQUN0RyxpQ0FBb0U7SUFBQSxnQ0FBZ0I7SUFBQSxpQkFBWTs7QURQbEcsaURBQWlEO0FBQ2pEO0lBQUEsTUFLYSwyQkFBMkI7UUFMeEM7WUFNRSxVQUFLLEdBQUcsSUFBSSxTQUFTLENBQUM7Z0JBQ3BCLEtBQUssRUFBRSxJQUFJLFdBQVcsRUFBRTtnQkFDeEIsR0FBRyxFQUFFLElBQUksV0FBVyxFQUFFO2FBQ3ZCLENBQUMsQ0FBQztTQUNKOzswR0FMWSwyQkFBMkI7b0VBQTNCLDJCQUEyQjtZQ1R4QyxzQ0FDRTtZQUFBLGlDQUFXO1lBQUEsa0NBQWtCO1lBQUEsaUJBQVk7WUFDekMsK0NBQ0U7WUFBQSwyQkFDQTtZQUFBLDJCQUNGO1lBQUEsaUJBQXVCO1lBQ3ZCLDJDQUF3RTtZQUN4RSxpREFBdUQ7WUFFdkQsd0ZBQXdFO1lBQ3hFLDBGQUFvRTtZQUN0RSxpQkFBaUI7WUFFakIsMEJBQUc7WUFBQSxhQUFzQzs7WUFBQSxpQkFBSTs7O1lBWHJCLGVBQW1CO1lBQW5CLHFDQUFtQixvQkFBQTtZQUlSLGVBQWM7WUFBZCx5QkFBYztZQUdwQyxlQUE0RDtZQUE1RCwrRUFBNEQ7WUFDNUQsZUFBd0Q7WUFBeEQsMkVBQXdEO1lBR2xFLGVBQXNDO1lBQXRDLHFGQUFzQzs7c0NEYnpDO0tBY0M7U0FMWSwyQkFBMkI7a0RBQTNCLDJCQUEyQjtjQUx2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztnQkFDM0MsV0FBVyxFQUFFLHNDQUFzQztnQkFDbkQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7YUFDbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Hcm91cCwgRm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEB0aXRsZSBEYXRlIHJhbmdlIHBpY2tlciBmb3JtcyBpbnRlZ3JhdGlvbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGUtcmFuZ2UtcGlja2VyLWZvcm1zLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZVBpY2tlckZvcm1zRXhhbXBsZSB7XG4gIHJhbmdlID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgc3RhcnQ6IG5ldyBGb3JtQ29udHJvbCgpLFxuICAgIGVuZDogbmV3IEZvcm1Db250cm9sKClcbiAgfSk7XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+RW50ZXIgYSBkYXRlIHJhbmdlPC9tYXQtbGFiZWw+XG4gIDxtYXQtZGF0ZS1yYW5nZS1pbnB1dCBbZm9ybUdyb3VwXT1cInJhbmdlXCIgW3JhbmdlUGlja2VyXT1cInBpY2tlclwiPlxuICAgIDxpbnB1dCBtYXRTdGFydERhdGUgbWF0SW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwic3RhcnRcIiBwbGFjZWhvbGRlcj1cIlN0YXJ0IGRhdGVcIj5cbiAgICA8aW5wdXQgbWF0RW5kRGF0ZSBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJlbmRcIiBwbGFjZWhvbGRlcj1cIkVuZCBkYXRlXCI+XG4gIDwvbWF0LWRhdGUtcmFuZ2UtaW5wdXQ+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZS1yYW5nZS1waWNrZXIgI3BpY2tlcj48L21hdC1kYXRlLXJhbmdlLXBpY2tlcj5cblxuICA8bWF0LWVycm9yICpuZ0lmPVwicmFuZ2UuY29udHJvbHMuc3RhcnQuaGFzRXJyb3IoJ21hdFN0YXJ0RGF0ZUludmFsaWQnKVwiPkludmFsaWQgc3RhcnQgZGF0ZTwvbWF0LWVycm9yPlxuICA8bWF0LWVycm9yICpuZ0lmPVwicmFuZ2UuY29udHJvbHMuZW5kLmhhc0Vycm9yKCdtYXRFbmREYXRlSW52YWxpZCcpXCI+SW52YWxpZCBlbmQgZGF0ZTwvbWF0LWVycm9yPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPHA+U2VsZWN0ZWQgcmFuZ2U6IHt7cmFuZ2UudmFsdWUgfCBqc29ufX08L3A+XG4iXX0=