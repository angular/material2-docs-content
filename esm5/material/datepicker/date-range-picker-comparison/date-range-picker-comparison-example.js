import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/datepicker";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/input";
/** @title Date range picker comparison ranges */
var DateRangePickerComparisonExample = /** @class */ (function () {
    function DateRangePickerComparisonExample() {
        var today = new Date();
        var month = today.getMonth();
        var year = today.getFullYear();
        this.campaignOne = new FormGroup({
            start: new FormControl(new Date(year, month, 13)),
            end: new FormControl(new Date(year, month, 16))
        });
        this.campaignTwo = new FormGroup({
            start: new FormControl(new Date(year, month, 15)),
            end: new FormControl(new Date(year, month, 19))
        });
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
            var _r0 = i0.ɵɵreference(8);
            var _r1 = i0.ɵɵreference(17);
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
}());
export { DateRangePickerComparisonExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateRangePickerComparisonExample, [{
        type: Component,
        args: [{
                selector: 'date-range-picker-comparison-example',
                templateUrl: 'date-range-picker-comparison-example.html',
                styleUrls: ['date-range-picker-comparison-example.css'],
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXItY29tcGFyaXNvbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlLXJhbmdlLXBpY2tlci1jb21wYXJpc29uL2RhdGUtcmFuZ2UtcGlja2VyLWNvbXBhcmlzb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItY29tcGFyaXNvbi9kYXRlLXJhbmdlLXBpY2tlci1jb21wYXJpc29uLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQUV0RCxpREFBaUQ7QUFDakQ7SUFTRTtRQUNFLElBQU0sS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQy9CLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVqQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksU0FBUyxDQUFDO1lBQy9CLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2pELEdBQUcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ2hELENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDL0IsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDakQsR0FBRyxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDaEQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztvSEFsQlUsZ0NBQWdDO3lFQUFoQyxnQ0FBZ0M7WUNUN0MseUNBQ0U7WUFBQSxpQ0FBVztZQUFBLDhCQUFjO1lBQUEsaUJBQVk7WUFDckMsK0NBS0U7WUFBQSwyQkFDQTtZQUFBLDJCQUNGO1lBQUEsaUJBQXVCO1lBQ3ZCLDJDQUFtRjtZQUNuRixpREFBa0U7WUFDcEUsaUJBQWlCO1lBRWpCLHlDQUNFO1lBQUEsa0NBQVc7WUFBQSxnQ0FBZTtZQUFBLGlCQUFZO1lBQ3RDLGdEQUtFO1lBQUEsNEJBQ0E7WUFBQSw0QkFDRjtZQUFBLGlCQUF1QjtZQUN2Qiw0Q0FBbUY7WUFDbkYsa0RBQWtFO1lBQ3BFLGlCQUFpQjs7OztZQXZCYixlQUF5QjtZQUF6QiwyQ0FBeUIsb0JBQUEsZ0RBQUEsNENBQUE7WUFPTSxlQUF5QjtZQUF6Qix5QkFBeUI7WUFPeEQsZUFBeUI7WUFBekIsMkNBQXlCLG9CQUFBLGdEQUFBLDRDQUFBO1lBT00sZUFBeUI7WUFBekIseUJBQXlCOzsyQ0R4QjVEO0NBNEJDLEFBeEJELElBd0JDO1NBbkJZLGdDQUFnQztrREFBaEMsZ0NBQWdDO2NBTDVDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCxXQUFXLEVBQUUsMkNBQTJDO2dCQUN4RCxTQUFTLEVBQUUsQ0FBQywwQ0FBMEMsQ0FBQzthQUN4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUdyb3VwLCBGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIERhdGUgcmFuZ2UgcGlja2VyIGNvbXBhcmlzb24gcmFuZ2VzICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlLXJhbmdlLXBpY2tlci1jb21wYXJpc29uLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGUtcmFuZ2UtcGlja2VyLWNvbXBhcmlzb24tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGUtcmFuZ2UtcGlja2VyLWNvbXBhcmlzb24tZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlUGlja2VyQ29tcGFyaXNvbkV4YW1wbGUge1xuICBjYW1wYWlnbk9uZTogRm9ybUdyb3VwO1xuICBjYW1wYWlnblR3bzogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBtb250aCA9IHRvZGF5LmdldE1vbnRoKCk7XG4gICAgY29uc3QgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgICB0aGlzLmNhbXBhaWduT25lID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICBzdGFydDogbmV3IEZvcm1Db250cm9sKG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxMykpLFxuICAgICAgZW5kOiBuZXcgRm9ybUNvbnRyb2wobmV3IERhdGUoeWVhciwgbW9udGgsIDE2KSlcbiAgICB9KTtcblxuICAgIHRoaXMuY2FtcGFpZ25Ud28gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgIHN0YXJ0OiBuZXcgRm9ybUNvbnRyb2wobmV3IERhdGUoeWVhciwgbW9udGgsIDE1KSksXG4gICAgICBlbmQ6IG5ldyBGb3JtQ29udHJvbChuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMTkpKVxuICAgIH0pO1xuICB9XG59XG4iLCI8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZvcm0tZmllbGRcIj5cbiAgPG1hdC1sYWJlbD5GaXJzdCBjYW1wYWlnbjwvbWF0LWxhYmVsPlxuICA8bWF0LWRhdGUtcmFuZ2UtaW5wdXRcbiAgICBbZm9ybUdyb3VwXT1cImNhbXBhaWduT25lXCJcbiAgICBbcmFuZ2VQaWNrZXJdPVwiY2FtcGFpZ25PbmVQaWNrZXJcIlxuICAgIFtjb21wYXJpc29uU3RhcnRdPVwiY2FtcGFpZ25Ud28udmFsdWUuc3RhcnRcIlxuICAgIFtjb21wYXJpc29uRW5kXT1cImNhbXBhaWduVHdvLnZhbHVlLmVuZFwiPlxuICAgIDxpbnB1dCBtYXRTdGFydERhdGUgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJTdGFydCBkYXRlXCIgZm9ybUNvbnRyb2xOYW1lPVwic3RhcnRcIj5cbiAgICA8aW5wdXQgbWF0RW5kRGF0ZSBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkVuZCBkYXRlXCIgZm9ybUNvbnRyb2xOYW1lPVwiZW5kXCI+XG4gIDwvbWF0LWRhdGUtcmFuZ2UtaW5wdXQ+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwiY2FtcGFpZ25PbmVQaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlLXJhbmdlLXBpY2tlciAjY2FtcGFpZ25PbmVQaWNrZXI+PC9tYXQtZGF0ZS1yYW5nZS1waWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZvcm0tZmllbGRcIj5cbiAgPG1hdC1sYWJlbD5TZWNvbmQgY2FtcGFpZ248L21hdC1sYWJlbD5cbiAgPG1hdC1kYXRlLXJhbmdlLWlucHV0XG4gICAgW2Zvcm1Hcm91cF09XCJjYW1wYWlnblR3b1wiXG4gICAgW3JhbmdlUGlja2VyXT1cImNhbXBhaWduVHdvUGlja2VyXCJcbiAgICBbY29tcGFyaXNvblN0YXJ0XT1cImNhbXBhaWduT25lLnZhbHVlLnN0YXJ0XCJcbiAgICBbY29tcGFyaXNvbkVuZF09XCJjYW1wYWlnbk9uZS52YWx1ZS5lbmRcIj5cbiAgICA8aW5wdXQgbWF0U3RhcnREYXRlIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiU3RhcnQgZGF0ZVwiIGZvcm1Db250cm9sTmFtZT1cInN0YXJ0XCI+XG4gICAgPGlucHV0IG1hdEVuZERhdGUgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJFbmQgZGF0ZVwiIGZvcm1Db250cm9sTmFtZT1cImVuZFwiPlxuICA8L21hdC1kYXRlLXJhbmdlLWlucHV0PlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cImNhbXBhaWduVHdvUGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZS1yYW5nZS1waWNrZXIgI2NhbXBhaWduVHdvUGlja2VyPjwvbWF0LWRhdGUtcmFuZ2UtcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==