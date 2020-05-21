import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/datepicker";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/input";
/** @title Date range picker comparison ranges */
let DateRangePickerComparisonExample = /** @class */ (() => {
    class DateRangePickerComparisonExample {
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
    DateRangePickerComparisonExample.ɵcmp = i0.ɵɵdefineComponent({ type: DateRangePickerComparisonExample, selectors: [["date-range-picker-comparison-example"]], decls: 18, vars: 10, consts: [[1, "example-form-field"], [3, "formGroup", "rangePicker", "comparisonStart", "comparisonEnd"], ["matStartDate", "", "matInput", "", "placeholder", "Start date", "formControlName", "start"], ["matEndDate", "", "matInput", "", "placeholder", "End date", "formControlName", "end"], ["matSuffix", "", 3, "for"], ["campaignOnePicker", ""], ["campaignTwoPicker", ""]], template: function DateRangePickerComparisonExample_Template(rf, ctx) { if (rf & 1) {
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
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatDateRangeInput, i3.NgControlStatusGroup, i3.FormGroupDirective, i2.MatStartDate, i4.MatInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlName, i2.MatEndDate, i2.MatDatepickerToggle, i1.MatSuffix, i2.MatDateRangePicker], styles: [".example-form-field[_ngcontent-%COMP%] {\n  margin: 0 8px 16px 0;\n}"] });
    return DateRangePickerComparisonExample;
})();
export { DateRangePickerComparisonExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateRangePickerComparisonExample, [{
        type: Component,
        args: [{
                selector: 'date-range-picker-comparison-example',
                templateUrl: 'date-range-picker-comparison-example.html',
                styleUrls: ['date-range-picker-comparison-example.css'],
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXItY29tcGFyaXNvbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlLXJhbmdlLXBpY2tlci1jb21wYXJpc29uL2RhdGUtcmFuZ2UtcGlja2VyLWNvbXBhcmlzb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItY29tcGFyaXNvbi9kYXRlLXJhbmdlLXBpY2tlci1jb21wYXJpc29uLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQUV0RCxpREFBaUQ7QUFDakQ7SUFBQSxNQUthLGdDQUFnQztRQUkzQztZQUNFLE1BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDekIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQy9CLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUVqQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksU0FBUyxDQUFDO2dCQUMvQixLQUFLLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDakQsR0FBRyxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDaEQsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLFNBQVMsQ0FBQztnQkFDL0IsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ2pELEdBQUcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ2hELENBQUMsQ0FBQztRQUNMLENBQUM7O29IQWxCVSxnQ0FBZ0M7eUVBQWhDLGdDQUFnQztZQ1Q3Qyx5Q0FDRTtZQUFBLGlDQUFXO1lBQUEsOEJBQWM7WUFBQSxpQkFBWTtZQUNyQywrQ0FLRTtZQUFBLDJCQUNBO1lBQUEsMkJBQ0Y7WUFBQSxpQkFBdUI7WUFDdkIsMkNBQW1GO1lBQ25GLGlEQUFrRTtZQUNwRSxpQkFBaUI7WUFFakIseUNBQ0U7WUFBQSxrQ0FBVztZQUFBLGdDQUFlO1lBQUEsaUJBQVk7WUFDdEMsZ0RBS0U7WUFBQSw0QkFDQTtZQUFBLDRCQUNGO1lBQUEsaUJBQXVCO1lBQ3ZCLDRDQUFtRjtZQUNuRixrREFBa0U7WUFDcEUsaUJBQWlCOzs7O1lBdkJiLGVBQXlCO1lBQXpCLDJDQUF5QixvQkFBQSxnREFBQSw0Q0FBQTtZQU9NLGVBQXlCO1lBQXpCLHlCQUF5QjtZQU94RCxlQUF5QjtZQUF6QiwyQ0FBeUIsb0JBQUEsZ0RBQUEsNENBQUE7WUFPTSxlQUF5QjtZQUF6Qix5QkFBeUI7OzJDRHhCNUQ7S0E0QkM7U0FuQlksZ0NBQWdDO2tEQUFoQyxnQ0FBZ0M7Y0FMNUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQ0FBc0M7Z0JBQ2hELFdBQVcsRUFBRSwyQ0FBMkM7Z0JBQ3hELFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxDQUFDO2FBQ3hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgRGF0ZSByYW5nZSBwaWNrZXIgY29tcGFyaXNvbiByYW5nZXMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGUtcmFuZ2UtcGlja2VyLWNvbXBhcmlzb24tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZS1yYW5nZS1waWNrZXItY29tcGFyaXNvbi1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZS1yYW5nZS1waWNrZXItY29tcGFyaXNvbi1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2VQaWNrZXJDb21wYXJpc29uRXhhbXBsZSB7XG4gIGNhbXBhaWduT25lOiBGb3JtR3JvdXA7XG4gIGNhbXBhaWduVHdvOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IG1vbnRoID0gdG9kYXkuZ2V0TW9udGgoKTtcbiAgICBjb25zdCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcblxuICAgIHRoaXMuY2FtcGFpZ25PbmUgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgIHN0YXJ0OiBuZXcgRm9ybUNvbnRyb2wobmV3IERhdGUoeWVhciwgbW9udGgsIDEzKSksXG4gICAgICBlbmQ6IG5ldyBGb3JtQ29udHJvbChuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMTYpKVxuICAgIH0pO1xuXG4gICAgdGhpcy5jYW1wYWlnblR3byA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgc3RhcnQ6IG5ldyBGb3JtQ29udHJvbChuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMTUpKSxcbiAgICAgIGVuZDogbmV3IEZvcm1Db250cm9sKG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxOSkpXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZm9ybS1maWVsZFwiPlxuICA8bWF0LWxhYmVsPkZpcnN0IGNhbXBhaWduPC9tYXQtbGFiZWw+XG4gIDxtYXQtZGF0ZS1yYW5nZS1pbnB1dFxuICAgIFtmb3JtR3JvdXBdPVwiY2FtcGFpZ25PbmVcIlxuICAgIFtyYW5nZVBpY2tlcl09XCJjYW1wYWlnbk9uZVBpY2tlclwiXG4gICAgW2NvbXBhcmlzb25TdGFydF09XCJjYW1wYWlnblR3by52YWx1ZS5zdGFydFwiXG4gICAgW2NvbXBhcmlzb25FbmRdPVwiY2FtcGFpZ25Ud28udmFsdWUuZW5kXCI+XG4gICAgPGlucHV0IG1hdFN0YXJ0RGF0ZSBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlN0YXJ0IGRhdGVcIiBmb3JtQ29udHJvbE5hbWU9XCJzdGFydFwiPlxuICAgIDxpbnB1dCBtYXRFbmREYXRlIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiRW5kIGRhdGVcIiBmb3JtQ29udHJvbE5hbWU9XCJlbmRcIj5cbiAgPC9tYXQtZGF0ZS1yYW5nZS1pbnB1dD5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJjYW1wYWlnbk9uZVBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGUtcmFuZ2UtcGlja2VyICNjYW1wYWlnbk9uZVBpY2tlcj48L21hdC1kYXRlLXJhbmdlLXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZm9ybS1maWVsZFwiPlxuICA8bWF0LWxhYmVsPlNlY29uZCBjYW1wYWlnbjwvbWF0LWxhYmVsPlxuICA8bWF0LWRhdGUtcmFuZ2UtaW5wdXRcbiAgICBbZm9ybUdyb3VwXT1cImNhbXBhaWduVHdvXCJcbiAgICBbcmFuZ2VQaWNrZXJdPVwiY2FtcGFpZ25Ud29QaWNrZXJcIlxuICAgIFtjb21wYXJpc29uU3RhcnRdPVwiY2FtcGFpZ25PbmUudmFsdWUuc3RhcnRcIlxuICAgIFtjb21wYXJpc29uRW5kXT1cImNhbXBhaWduT25lLnZhbHVlLmVuZFwiPlxuICAgIDxpbnB1dCBtYXRTdGFydERhdGUgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJTdGFydCBkYXRlXCIgZm9ybUNvbnRyb2xOYW1lPVwic3RhcnRcIj5cbiAgICA8aW5wdXQgbWF0RW5kRGF0ZSBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkVuZCBkYXRlXCIgZm9ybUNvbnRyb2xOYW1lPVwiZW5kXCI+XG4gIDwvbWF0LWRhdGUtcmFuZ2UtaW5wdXQ+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwiY2FtcGFpZ25Ud29QaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlLXJhbmdlLXBpY2tlciAjY2FtcGFpZ25Ud29QaWNrZXI+PC9tYXQtZGF0ZS1yYW5nZS1waWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19