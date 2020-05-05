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
var DateRangePickerFormsExample = /** @class */ (function () {
    function DateRangePickerFormsExample() {
        this.range = new FormGroup({
            start: new FormControl(),
            end: new FormControl()
        });
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
            var _r2 = i0.ɵɵreference(8);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("formGroup", ctx.range)("rangePicker", _r2);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("for", _r2);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.range.controls.start.hasError("matStartDateInvalid"));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.range.controls.end.hasError("matEndDateInvalid"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Selected range: ", i0.ɵɵpipeBind1(13, 6, ctx.range.value), "");
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatDateRangeInput, i3.NgControlStatusGroup, i3.FormGroupDirective, i2.MatStartDate, i4.MatInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlName, i2.MatEndDate, i2.MatDatepickerToggle, i1.MatSuffix, i2.MatDateRangePicker, i5.NgIf, i1.MatError], pipes: [i5.JsonPipe], styles: [""] });
    return DateRangePickerFormsExample;
}());
export { DateRangePickerFormsExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateRangePickerFormsExample, [{
        type: Component,
        args: [{
                selector: 'date-range-picker-forms-example',
                templateUrl: 'date-range-picker-forms-example.html',
                styleUrls: ['date-range-picker-forms-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7SUNRcEQsaUNBQXdFO0lBQUEsa0NBQWtCO0lBQUEsaUJBQVk7OztJQUN0RyxpQ0FBb0U7SUFBQSxnQ0FBZ0I7SUFBQSxpQkFBWTs7QURQbEcsaURBQWlEO0FBQ2pEO0lBQUE7UUFNRSxVQUFLLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDcEIsS0FBSyxFQUFFLElBQUksV0FBVyxFQUFFO1lBQ3hCLEdBQUcsRUFBRSxJQUFJLFdBQVcsRUFBRTtTQUN2QixDQUFDLENBQUM7S0FDSjswR0FMWSwyQkFBMkI7b0VBQTNCLDJCQUEyQjtZQ1R4QyxzQ0FDRTtZQUFBLGlDQUFXO1lBQUEsa0NBQWtCO1lBQUEsaUJBQVk7WUFDekMsK0NBQ0U7WUFBQSwyQkFDQTtZQUFBLDJCQUNGO1lBQUEsaUJBQXVCO1lBQ3ZCLDJDQUF3RTtZQUN4RSxpREFBdUQ7WUFFdkQsd0ZBQXdFO1lBQ3hFLDBGQUFvRTtZQUN0RSxpQkFBaUI7WUFFakIsMEJBQUc7WUFBQSxhQUFzQzs7WUFBQSxpQkFBSTs7O1lBWHJCLGVBQW1CO1lBQW5CLHFDQUFtQixvQkFBQTtZQUlSLGVBQWM7WUFBZCx5QkFBYztZQUdwQyxlQUE0RDtZQUE1RCwrRUFBNEQ7WUFDNUQsZUFBd0Q7WUFBeEQsMkVBQXdEO1lBR2xFLGVBQXNDO1lBQXRDLHFGQUFzQzs7c0NEYnpDO0NBY0MsQUFWRCxJQVVDO1NBTFksMkJBQTJCO2tEQUEzQiwyQkFBMkI7Y0FMdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQ0FBaUM7Z0JBQzNDLFdBQVcsRUFBRSxzQ0FBc0M7Z0JBQ25ELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO2FBQ25EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgRGF0ZSByYW5nZSBwaWNrZXIgZm9ybXMgaW50ZWdyYXRpb24gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGUtcmFuZ2UtcGlja2VyLWZvcm1zLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGUtcmFuZ2UtcGlja2VyLWZvcm1zLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlLXJhbmdlLXBpY2tlci1mb3Jtcy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2VQaWNrZXJGb3Jtc0V4YW1wbGUge1xuICByYW5nZSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgIHN0YXJ0OiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgICBlbmQ6IG5ldyBGb3JtQ29udHJvbCgpXG4gIH0pO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPkVudGVyIGEgZGF0ZSByYW5nZTwvbWF0LWxhYmVsPlxuICA8bWF0LWRhdGUtcmFuZ2UtaW5wdXQgW2Zvcm1Hcm91cF09XCJyYW5nZVwiIFtyYW5nZVBpY2tlcl09XCJwaWNrZXJcIj5cbiAgICA8aW5wdXQgbWF0U3RhcnREYXRlIG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cInN0YXJ0XCIgcGxhY2Vob2xkZXI9XCJTdGFydCBkYXRlXCI+XG4gICAgPGlucHV0IG1hdEVuZERhdGUgbWF0SW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiZW5kXCIgcGxhY2Vob2xkZXI9XCJFbmQgZGF0ZVwiPlxuICA8L21hdC1kYXRlLXJhbmdlLWlucHV0PlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGUtcmFuZ2UtcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZS1yYW5nZS1waWNrZXI+XG5cbiAgPG1hdC1lcnJvciAqbmdJZj1cInJhbmdlLmNvbnRyb2xzLnN0YXJ0Lmhhc0Vycm9yKCdtYXRTdGFydERhdGVJbnZhbGlkJylcIj5JbnZhbGlkIHN0YXJ0IGRhdGU8L21hdC1lcnJvcj5cbiAgPG1hdC1lcnJvciAqbmdJZj1cInJhbmdlLmNvbnRyb2xzLmVuZC5oYXNFcnJvcignbWF0RW5kRGF0ZUludmFsaWQnKVwiPkludmFsaWQgZW5kIGRhdGU8L21hdC1lcnJvcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxwPlNlbGVjdGVkIHJhbmdlOiB7e3JhbmdlLnZhbHVlIHwganNvbn19PC9wPlxuIl19