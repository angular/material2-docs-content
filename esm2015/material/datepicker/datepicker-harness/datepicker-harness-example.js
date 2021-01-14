import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/input";
import * as i2 from "@angular/material/datepicker";
import * as i3 from "@angular/forms";
/**
 * @title Testing with MatDatepickerInputHarness
 */
export class DatepickerHarnessExample {
    constructor() {
        this.date = null;
        this.minDate = null;
    }
}
DatepickerHarnessExample.ɵfac = function DatepickerHarnessExample_Factory(t) { return new (t || DatepickerHarnessExample)(); };
DatepickerHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerHarnessExample, selectors: [["datepicker-harness-example"]], decls: 3, vars: 3, consts: [["matInput", "", 3, "matDatepicker", "ngModel", "min", "ngModelChange"], ["picker", ""]], template: function DatepickerHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "input", 0);
        i0.ɵɵlistener("ngModelChange", function DatepickerHarnessExample_Template_input_ngModelChange_0_listener($event) { return ctx.date = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(1, "mat-datepicker", null, 1);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        i0.ɵɵproperty("matDatepicker", _r0)("ngModel", ctx.date)("min", ctx.minDate);
    } }, directives: [i1.MatInput, i2.MatDatepickerInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i2.MatDatepicker], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatepickerHarnessExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-harness-example',
                templateUrl: 'datepicker-harness-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItaGFybmVzcy9kYXRlcGlja2VyLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1oYXJuZXNzL2RhdGVwaWNrZXItaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFeEM7O0dBRUc7QUFLSCxNQUFNLE9BQU8sd0JBQXdCO0lBSnJDO1FBS0UsU0FBSSxHQUFjLElBQUksQ0FBQztRQUN2QixZQUFPLEdBQWMsSUFBSSxDQUFDO0tBQzNCOztnR0FIWSx3QkFBd0I7NkRBQXhCLHdCQUF3QjtRQ1RyQyxnQ0FLQTtRQUZJLCtJQUFrQjtRQUh0QixpQkFLQTtRQUFBLDBDQUF5Qzs7O1FBSHJDLG1DQUF3QixxQkFBQSxvQkFBQTs7dUZET2Ysd0JBQXdCO2NBSnBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2FBQy9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0RGF0ZXBpY2tlcklucHV0SGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJIYXJuZXNzRXhhbXBsZSB7XG4gIGRhdGU6IERhdGV8bnVsbCA9IG51bGw7XG4gIG1pbkRhdGU6IERhdGV8bnVsbCA9IG51bGw7XG59XG4iLCI8aW5wdXRcbiAgICBtYXRJbnB1dFxuICAgIFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiXG4gICAgWyhuZ01vZGVsKV09XCJkYXRlXCJcbiAgICBbbWluXT1cIm1pbkRhdGVcIj5cbjxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG4iXX0=