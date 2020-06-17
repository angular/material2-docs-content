import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/datepicker";
import * as i3 from "@angular/forms";
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
    DateRangePickerComparisonExample.ɵcmp = i0.ɵɵdefineComponent({ type: DateRangePickerComparisonExample, selectors: [["date-range-picker-comparison-example"]], decls: 18, vars: 10, consts: [[1, "example-form-field"], [3, "formGroup", "rangePicker", "comparisonStart", "comparisonEnd"], ["matStartDate", "", "placeholder", "Start date", "formControlName", "start"], ["matEndDate", "", "placeholder", "End date", "formControlName", "end"], ["matSuffix", "", 3, "for"], ["campaignOnePicker", ""], ["campaignTwoPicker", ""]], template: function DateRangePickerComparisonExample_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXItY29tcGFyaXNvbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlLXJhbmdlLXBpY2tlci1jb21wYXJpc29uL2RhdGUtcmFuZ2UtcGlja2VyLWNvbXBhcmlzb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItY29tcGFyaXNvbi9kYXRlLXJhbmdlLXBpY2tlci1jb21wYXJpc29uLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRXRELGlEQUFpRDtBQUNqRDtJQUFBLE1BS2EsZ0NBQWdDO1FBSTNDO1lBQ0UsTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUN6QixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDL0IsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRWpDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxTQUFTLENBQUM7Z0JBQy9CLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNqRCxHQUFHLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNoRCxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksU0FBUyxDQUFDO2dCQUMvQixLQUFLLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDakQsR0FBRyxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDaEQsQ0FBQyxDQUFDO1FBQ0wsQ0FBQzs7b0hBbEJVLGdDQUFnQzt5RUFBaEMsZ0NBQWdDO1lDVDdDLHlDQUNFO1lBQUEsaUNBQVc7WUFBQSw4QkFBYztZQUFBLGlCQUFZO1lBQ3JDLCtDQUtFO1lBQUEsMkJBQ0E7WUFBQSwyQkFDRjtZQUFBLGlCQUF1QjtZQUN2QiwyQ0FBbUY7WUFDbkYsaURBQWtFO1lBQ3BFLGlCQUFpQjtZQUVqQix5Q0FDRTtZQUFBLGtDQUFXO1lBQUEsZ0NBQWU7WUFBQSxpQkFBWTtZQUN0QyxnREFLRTtZQUFBLDRCQUNBO1lBQUEsNEJBQ0Y7WUFBQSxpQkFBdUI7WUFDdkIsNENBQW1GO1lBQ25GLGtEQUFrRTtZQUNwRSxpQkFBaUI7Ozs7WUF2QmIsZUFBeUI7WUFBekIsMkNBQXlCLG9CQUFBLGdEQUFBLDRDQUFBO1lBT00sZUFBeUI7WUFBekIseUJBQXlCO1lBT3hELGVBQXlCO1lBQXpCLDJDQUF5QixvQkFBQSxnREFBQSw0Q0FBQTtZQU9NLGVBQXlCO1lBQXpCLHlCQUF5Qjs7MkNEeEI1RDtLQTRCQztTQW5CWSxnQ0FBZ0M7a0RBQWhDLGdDQUFnQztjQUw1QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNDQUFzQztnQkFDaEQsV0FBVyxFQUFFLDJDQUEyQztnQkFDeEQsU0FBUyxFQUFFLENBQUMsMENBQTBDLENBQUM7YUFDeEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Hcm91cCwgRm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEB0aXRsZSBEYXRlIHJhbmdlIHBpY2tlciBjb21wYXJpc29uIHJhbmdlcyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZS1yYW5nZS1waWNrZXItY29tcGFyaXNvbi1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlLXJhbmdlLXBpY2tlci1jb21wYXJpc29uLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlLXJhbmdlLXBpY2tlci1jb21wYXJpc29uLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZVBpY2tlckNvbXBhcmlzb25FeGFtcGxlIHtcbiAgY2FtcGFpZ25PbmU6IEZvcm1Hcm91cDtcbiAgY2FtcGFpZ25Ud286IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgbW9udGggPSB0b2RheS5nZXRNb250aCgpO1xuICAgIGNvbnN0IHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG4gICAgdGhpcy5jYW1wYWlnbk9uZSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgc3RhcnQ6IG5ldyBGb3JtQ29udHJvbChuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMTMpKSxcbiAgICAgIGVuZDogbmV3IEZvcm1Db250cm9sKG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxNikpXG4gICAgfSk7XG5cbiAgICB0aGlzLmNhbXBhaWduVHdvID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICBzdGFydDogbmV3IEZvcm1Db250cm9sKG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxNSkpLFxuICAgICAgZW5kOiBuZXcgRm9ybUNvbnRyb2wobmV3IERhdGUoeWVhciwgbW9udGgsIDE5KSlcbiAgICB9KTtcbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mb3JtLWZpZWxkXCI+XG4gIDxtYXQtbGFiZWw+Rmlyc3QgY2FtcGFpZ248L21hdC1sYWJlbD5cbiAgPG1hdC1kYXRlLXJhbmdlLWlucHV0XG4gICAgW2Zvcm1Hcm91cF09XCJjYW1wYWlnbk9uZVwiXG4gICAgW3JhbmdlUGlja2VyXT1cImNhbXBhaWduT25lUGlja2VyXCJcbiAgICBbY29tcGFyaXNvblN0YXJ0XT1cImNhbXBhaWduVHdvLnZhbHVlLnN0YXJ0XCJcbiAgICBbY29tcGFyaXNvbkVuZF09XCJjYW1wYWlnblR3by52YWx1ZS5lbmRcIj5cbiAgICA8aW5wdXQgbWF0U3RhcnREYXRlIHBsYWNlaG9sZGVyPVwiU3RhcnQgZGF0ZVwiIGZvcm1Db250cm9sTmFtZT1cInN0YXJ0XCI+XG4gICAgPGlucHV0IG1hdEVuZERhdGUgcGxhY2Vob2xkZXI9XCJFbmQgZGF0ZVwiIGZvcm1Db250cm9sTmFtZT1cImVuZFwiPlxuICA8L21hdC1kYXRlLXJhbmdlLWlucHV0PlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cImNhbXBhaWduT25lUGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZS1yYW5nZS1waWNrZXIgI2NhbXBhaWduT25lUGlja2VyPjwvbWF0LWRhdGUtcmFuZ2UtcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mb3JtLWZpZWxkXCI+XG4gIDxtYXQtbGFiZWw+U2Vjb25kIGNhbXBhaWduPC9tYXQtbGFiZWw+XG4gIDxtYXQtZGF0ZS1yYW5nZS1pbnB1dFxuICAgIFtmb3JtR3JvdXBdPVwiY2FtcGFpZ25Ud29cIlxuICAgIFtyYW5nZVBpY2tlcl09XCJjYW1wYWlnblR3b1BpY2tlclwiXG4gICAgW2NvbXBhcmlzb25TdGFydF09XCJjYW1wYWlnbk9uZS52YWx1ZS5zdGFydFwiXG4gICAgW2NvbXBhcmlzb25FbmRdPVwiY2FtcGFpZ25PbmUudmFsdWUuZW5kXCI+XG4gICAgPGlucHV0IG1hdFN0YXJ0RGF0ZSBwbGFjZWhvbGRlcj1cIlN0YXJ0IGRhdGVcIiBmb3JtQ29udHJvbE5hbWU9XCJzdGFydFwiPlxuICAgIDxpbnB1dCBtYXRFbmREYXRlIHBsYWNlaG9sZGVyPVwiRW5kIGRhdGVcIiBmb3JtQ29udHJvbE5hbWU9XCJlbmRcIj5cbiAgPC9tYXQtZGF0ZS1yYW5nZS1pbnB1dD5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJjYW1wYWlnblR3b1BpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGUtcmFuZ2UtcGlja2VyICNjYW1wYWlnblR3b1BpY2tlcj48L21hdC1kYXRlLXJhbmdlLXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=