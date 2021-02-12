import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/datepicker";
import * as i3 from "@angular/forms";
/** @title Date range picker comparison ranges */
export class DateRangePickerComparisonExample {
    constructor() {
        const today = new Date();
        const month = today.getMonth();
        const year = today.getFullYear();
        this.campaignOne = new FormGroup({
            start: new FormControl(new Date(year, month, 13)),
            end: new FormControl(new Date(year, month, 16))
        });
        this.campaignTwo = new FormGroup({
            start: new FormControl(new Date(year, month, 15)),
            end: new FormControl(new Date(year, month, 19))
        });
    }
}
DateRangePickerComparisonExample.ɵfac = function DateRangePickerComparisonExample_Factory(t) { return new (t || DateRangePickerComparisonExample)(); };
DateRangePickerComparisonExample.ɵcmp = i0.ɵɵdefineComponent({ type: DateRangePickerComparisonExample, selectors: [["date-range-picker-comparison-example"]], decls: 18, vars: 10, consts: [["appearance", "fill", 1, "example-form-field"], [3, "formGroup", "rangePicker", "comparisonStart", "comparisonEnd"], ["matStartDate", "", "placeholder", "Start date", "formControlName", "start"], ["matEndDate", "", "placeholder", "End date", "formControlName", "end"], ["matSuffix", "", 3, "for"], ["campaignOnePicker", ""], ["campaignTwoPicker", ""]], template: function DateRangePickerComparisonExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "First campaign");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-date-range-input", 1);
        i0.ɵɵelement(4, "input", 2);
        i0.ɵɵelement(5, "input", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(6, "mat-datepicker-toggle", 4);
        i0.ɵɵelement(7, "mat-date-range-picker", null, 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-form-field", 0);
        i0.ɵɵelementStart(10, "mat-label");
        i0.ɵɵtext(11, "Second campaign");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-date-range-input", 1);
        i0.ɵɵelement(13, "input", 2);
        i0.ɵɵelement(14, "input", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(15, "mat-datepicker-toggle", 4);
        i0.ɵɵelement(16, "mat-date-range-picker", null, 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(8);
        const _r1 = i0.ɵɵreference(17);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formGroup", ctx.campaignOne)("rangePicker", _r0)("comparisonStart", ctx.campaignTwo.value.start)("comparisonEnd", ctx.campaignTwo.value.end);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("for", _r0);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("formGroup", ctx.campaignTwo)("rangePicker", _r1)("comparisonStart", ctx.campaignOne.value.start)("comparisonEnd", ctx.campaignOne.value.end);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("for", _r1);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatDateRangeInput, i3.NgControlStatusGroup, i3.FormGroupDirective, i2.MatStartDate, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlName, i2.MatEndDate, i2.MatDatepickerToggle, i1.MatSuffix, i2.MatDateRangePicker], styles: [".example-form-field[_ngcontent-%COMP%] {\n  margin: 0 8px 16px 0;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateRangePickerComparisonExample, [{
        type: Component,
        args: [{
                selector: 'date-range-picker-comparison-example',
                templateUrl: 'date-range-picker-comparison-example.html',
                styleUrls: ['date-range-picker-comparison-example.css'],
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXItY29tcGFyaXNvbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlLXJhbmdlLXBpY2tlci1jb21wYXJpc29uL2RhdGUtcmFuZ2UtcGlja2VyLWNvbXBhcmlzb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItY29tcGFyaXNvbi9kYXRlLXJhbmdlLXBpY2tlci1jb21wYXJpc29uLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRXRELGlEQUFpRDtBQU1qRCxNQUFNLE9BQU8sZ0NBQWdDO0lBSTNDO1FBQ0UsTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN6QixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDL0IsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRWpDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDL0IsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDakQsR0FBRyxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDaEQsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUMvQixLQUFLLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNqRCxHQUFHLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNoRCxDQUFDLENBQUM7SUFDTCxDQUFDOztnSEFsQlUsZ0NBQWdDO3FFQUFoQyxnQ0FBZ0M7UUNUN0MseUNBQTZEO1FBQzNELGlDQUFXO1FBQUEsOEJBQWM7UUFBQSxpQkFBWTtRQUNyQywrQ0FJMEM7UUFDeEMsMkJBQXFFO1FBQ3JFLDJCQUErRDtRQUNqRSxpQkFBdUI7UUFDdkIsMkNBQW1GO1FBQ25GLGlEQUFrRTtRQUNwRSxpQkFBaUI7UUFFakIseUNBQTZEO1FBQzNELGtDQUFXO1FBQUEsZ0NBQWU7UUFBQSxpQkFBWTtRQUN0QyxnREFJMEM7UUFDeEMsNEJBQXFFO1FBQ3JFLDRCQUErRDtRQUNqRSxpQkFBdUI7UUFDdkIsNENBQW1GO1FBQ25GLGtEQUFrRTtRQUNwRSxpQkFBaUI7Ozs7UUF2QmIsZUFBeUI7UUFBekIsMkNBQXlCLG9CQUFBLGdEQUFBLDRDQUFBO1FBT00sZUFBeUI7UUFBekIseUJBQXlCO1FBT3hELGVBQXlCO1FBQXpCLDJDQUF5QixvQkFBQSxnREFBQSw0Q0FBQTtRQU9NLGVBQXlCO1FBQXpCLHlCQUF5Qjs7dUZEZi9DLGdDQUFnQztjQUw1QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNDQUFzQztnQkFDaEQsV0FBVyxFQUFFLDJDQUEyQztnQkFDeEQsU0FBUyxFQUFFLENBQUMsMENBQTBDLENBQUM7YUFDeEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Hcm91cCwgRm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEB0aXRsZSBEYXRlIHJhbmdlIHBpY2tlciBjb21wYXJpc29uIHJhbmdlcyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZS1yYW5nZS1waWNrZXItY29tcGFyaXNvbi1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlLXJhbmdlLXBpY2tlci1jb21wYXJpc29uLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlLXJhbmdlLXBpY2tlci1jb21wYXJpc29uLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZVBpY2tlckNvbXBhcmlzb25FeGFtcGxlIHtcbiAgY2FtcGFpZ25PbmU6IEZvcm1Hcm91cDtcbiAgY2FtcGFpZ25Ud286IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgbW9udGggPSB0b2RheS5nZXRNb250aCgpO1xuICAgIGNvbnN0IHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG4gICAgdGhpcy5jYW1wYWlnbk9uZSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgc3RhcnQ6IG5ldyBGb3JtQ29udHJvbChuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMTMpKSxcbiAgICAgIGVuZDogbmV3IEZvcm1Db250cm9sKG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxNikpXG4gICAgfSk7XG5cbiAgICB0aGlzLmNhbXBhaWduVHdvID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICBzdGFydDogbmV3IEZvcm1Db250cm9sKG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxNSkpLFxuICAgICAgZW5kOiBuZXcgRm9ybUNvbnRyb2wobmV3IERhdGUoeWVhciwgbW9udGgsIDE5KSlcbiAgICB9KTtcbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mb3JtLWZpZWxkXCIgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5GaXJzdCBjYW1wYWlnbjwvbWF0LWxhYmVsPlxuICA8bWF0LWRhdGUtcmFuZ2UtaW5wdXRcbiAgICBbZm9ybUdyb3VwXT1cImNhbXBhaWduT25lXCJcbiAgICBbcmFuZ2VQaWNrZXJdPVwiY2FtcGFpZ25PbmVQaWNrZXJcIlxuICAgIFtjb21wYXJpc29uU3RhcnRdPVwiY2FtcGFpZ25Ud28udmFsdWUuc3RhcnRcIlxuICAgIFtjb21wYXJpc29uRW5kXT1cImNhbXBhaWduVHdvLnZhbHVlLmVuZFwiPlxuICAgIDxpbnB1dCBtYXRTdGFydERhdGUgcGxhY2Vob2xkZXI9XCJTdGFydCBkYXRlXCIgZm9ybUNvbnRyb2xOYW1lPVwic3RhcnRcIj5cbiAgICA8aW5wdXQgbWF0RW5kRGF0ZSBwbGFjZWhvbGRlcj1cIkVuZCBkYXRlXCIgZm9ybUNvbnRyb2xOYW1lPVwiZW5kXCI+XG4gIDwvbWF0LWRhdGUtcmFuZ2UtaW5wdXQ+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwiY2FtcGFpZ25PbmVQaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlLXJhbmdlLXBpY2tlciAjY2FtcGFpZ25PbmVQaWNrZXI+PC9tYXQtZGF0ZS1yYW5nZS1waWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZvcm0tZmllbGRcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPlNlY29uZCBjYW1wYWlnbjwvbWF0LWxhYmVsPlxuICA8bWF0LWRhdGUtcmFuZ2UtaW5wdXRcbiAgICBbZm9ybUdyb3VwXT1cImNhbXBhaWduVHdvXCJcbiAgICBbcmFuZ2VQaWNrZXJdPVwiY2FtcGFpZ25Ud29QaWNrZXJcIlxuICAgIFtjb21wYXJpc29uU3RhcnRdPVwiY2FtcGFpZ25PbmUudmFsdWUuc3RhcnRcIlxuICAgIFtjb21wYXJpc29uRW5kXT1cImNhbXBhaWduT25lLnZhbHVlLmVuZFwiPlxuICAgIDxpbnB1dCBtYXRTdGFydERhdGUgcGxhY2Vob2xkZXI9XCJTdGFydCBkYXRlXCIgZm9ybUNvbnRyb2xOYW1lPVwic3RhcnRcIj5cbiAgICA8aW5wdXQgbWF0RW5kRGF0ZSBwbGFjZWhvbGRlcj1cIkVuZCBkYXRlXCIgZm9ybUNvbnRyb2xOYW1lPVwiZW5kXCI+XG4gIDwvbWF0LWRhdGUtcmFuZ2UtaW5wdXQ+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwiY2FtcGFpZ25Ud29QaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlLXJhbmdlLXBpY2tlciAjY2FtcGFpZ25Ud29QaWNrZXI+PC9tYXQtZGF0ZS1yYW5nZS1waWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19