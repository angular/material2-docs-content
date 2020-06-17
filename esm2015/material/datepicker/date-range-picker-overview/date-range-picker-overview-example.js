import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/datepicker";
/** @title Basic date range picker */
let DateRangePickerOverviewExample = /** @class */ (() => {
    class DateRangePickerOverviewExample {
    }
    DateRangePickerOverviewExample.ɵfac = function DateRangePickerOverviewExample_Factory(t) { return new (t || DateRangePickerOverviewExample)(); };
    DateRangePickerOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: DateRangePickerOverviewExample, selectors: [["date-range-picker-overview-example"]], decls: 9, vars: 2, consts: [["appearance", "fill"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date"], ["matEndDate", "", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DateRangePickerOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Enter a date range");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-date-range-input", 1);
            i0.ɵɵelement(4, "input", 2);
            i0.ɵɵelement(5, "input", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "mat-datepicker-toggle", 4);
            i0.ɵɵelement(7, "mat-date-range-picker", null, 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(8);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("rangePicker", _r0);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("for", _r0);
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatDateRangeInput, i2.MatStartDate, i2.MatEndDate, i2.MatDatepickerToggle, i1.MatSuffix, i2.MatDateRangePicker], styles: [""] });
    return DateRangePickerOverviewExample;
})();
export { DateRangePickerOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateRangePickerOverviewExample, [{
        type: Component,
        args: [{
                selector: 'date-range-picker-overview-example',
                templateUrl: 'date-range-picker-overview-example.html',
                styleUrls: ['date-range-picker-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXItb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItb3ZlcnZpZXcvZGF0ZS1yYW5nZS1waWNrZXItb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItb3ZlcnZpZXcvZGF0ZS1yYW5nZS1waWNrZXItb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEMscUNBQXFDO0FBQ3JDO0lBQUEsTUFLYSw4QkFBOEI7O2dIQUE5Qiw4QkFBOEI7dUVBQTlCLDhCQUE4QjtZQ1IzQyx5Q0FDRTtZQUFBLGlDQUFXO1lBQUEsa0NBQWtCO1lBQUEsaUJBQVk7WUFDekMsK0NBQ0U7WUFBQSwyQkFDQTtZQUFBLDJCQUNGO1lBQUEsaUJBQXVCO1lBQ3ZCLDJDQUF3RTtZQUN4RSxpREFBdUQ7WUFDekQsaUJBQWlCOzs7WUFOTyxlQUFzQjtZQUF0QixpQ0FBc0I7WUFJWCxlQUFjO1lBQWQseUJBQWM7O3lDRE5qRDtLQVE4QztTQUFqQyw4QkFBOEI7a0RBQTlCLDhCQUE4QjtjQUwxQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztnQkFDOUMsV0FBVyxFQUFFLHlDQUF5QztnQkFDdEQsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7YUFDdEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgQmFzaWMgZGF0ZSByYW5nZSBwaWNrZXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGUtcmFuZ2UtcGlja2VyLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGUtcmFuZ2UtcGlja2VyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlLXJhbmdlLXBpY2tlci1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2VQaWNrZXJPdmVydmlld0V4YW1wbGUge31cbiIsIjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPkVudGVyIGEgZGF0ZSByYW5nZTwvbWF0LWxhYmVsPlxuICA8bWF0LWRhdGUtcmFuZ2UtaW5wdXQgW3JhbmdlUGlja2VyXT1cInBpY2tlclwiPlxuICAgIDxpbnB1dCBtYXRTdGFydERhdGUgcGxhY2Vob2xkZXI9XCJTdGFydCBkYXRlXCI+XG4gICAgPGlucHV0IG1hdEVuZERhdGUgcGxhY2Vob2xkZXI9XCJFbmQgZGF0ZVwiPlxuICA8L21hdC1kYXRlLXJhbmdlLWlucHV0PlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGUtcmFuZ2UtcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZS1yYW5nZS1waWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19