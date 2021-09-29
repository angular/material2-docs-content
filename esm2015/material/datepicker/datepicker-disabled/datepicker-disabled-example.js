import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
/** @title Disabled datepicker */
export class DatepickerDisabledExample {
}
DatepickerDisabledExample.ɵfac = function DatepickerDisabledExample_Factory(t) { return new (t || DatepickerDisabledExample)(); };
DatepickerDisabledExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DatepickerDisabledExample, selectors: [["datepicker-disabled-example"]], decls: 24, vars: 6, consts: [["appearance", "fill"], ["matInput", "", "disabled", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["dp1", ""], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", "disabled", "", 3, "for"], ["dp2", ""], ["disabled", "false"], ["dp3", ""]], template: function DatepickerDisabledExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵelementStart(1, "mat-form-field", 0);
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "Completely disabled");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "input", 1);
        i0.ɵɵelement(5, "mat-datepicker-toggle", 2);
        i0.ɵɵelement(6, "mat-datepicker", null, 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "p");
        i0.ɵɵelementStart(9, "mat-form-field", 0);
        i0.ɵɵelementStart(10, "mat-label");
        i0.ɵɵtext(11, "Popup disabled");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(12, "input", 4);
        i0.ɵɵelement(13, "mat-datepicker-toggle", 5);
        i0.ɵɵelement(14, "mat-datepicker", null, 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "p");
        i0.ɵɵelementStart(17, "mat-form-field", 0);
        i0.ɵɵelementStart(18, "mat-label");
        i0.ɵɵtext(19, "Input disabled");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(20, "input", 1);
        i0.ɵɵelement(21, "mat-datepicker-toggle", 2);
        i0.ɵɵelement(22, "mat-datepicker", 7, 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(7);
        const _r1 = i0.ɵɵreference(15);
        const _r2 = i0.ɵɵreference(23);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("matDatepicker", _r0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", _r0);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("matDatepicker", _r1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", _r1);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("matDatepicker", _r2);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", _r2);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatepickerDisabledExample, [{
        type: Component,
        args: [{ selector: 'datepicker-disabled-example', template: "<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Completely disabled</mat-label>\n    <input matInput [matDatepicker]=\"dp1\" disabled>\n    <mat-datepicker-toggle matSuffix [for]=\"dp1\"></mat-datepicker-toggle>\n    <mat-datepicker #dp1></mat-datepicker>\n  </mat-form-field>\n</p>\n\n<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Popup disabled</mat-label>\n    <input matInput [matDatepicker]=\"dp2\">\n    <mat-datepicker-toggle matSuffix [for]=\"dp2\" disabled></mat-datepicker-toggle>\n    <mat-datepicker #dp2></mat-datepicker>\n  </mat-form-field>\n</p>\n\n<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Input disabled</mat-label>\n    <input matInput [matDatepicker]=\"dp3\" disabled>\n    <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n    <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n  </mat-form-field>\n</p>\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1kaXNhYmxlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLWRpc2FibGVkL2RhdGVwaWNrZXItZGlzYWJsZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1kaXNhYmxlZC9kYXRlcGlja2VyLWRpc2FibGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV4QyxpQ0FBaUM7QUFLakMsTUFBTSxPQUFPLHlCQUF5Qjs7a0dBQXpCLHlCQUF5Qjs0RUFBekIseUJBQXlCO1FDUHRDLHlCQUFHO1FBQ0QseUNBQWtDO1FBQ2hDLGlDQUFXO1FBQUEsbUNBQW1CO1FBQUEsaUJBQVk7UUFDMUMsMkJBQStDO1FBQy9DLDJDQUFxRTtRQUNyRSwwQ0FBc0M7UUFDeEMsaUJBQWlCO1FBQ25CLGlCQUFJO1FBRUoseUJBQUc7UUFDRCx5Q0FBa0M7UUFDaEMsa0NBQVc7UUFBQSwrQkFBYztRQUFBLGlCQUFZO1FBQ3JDLDRCQUFzQztRQUN0Qyw0Q0FBOEU7UUFDOUUsMkNBQXNDO1FBQ3hDLGlCQUFpQjtRQUNuQixpQkFBSTtRQUVKLDBCQUFHO1FBQ0QsMENBQWtDO1FBQ2hDLGtDQUFXO1FBQUEsK0JBQWM7UUFBQSxpQkFBWTtRQUNyQyw0QkFBK0M7UUFDL0MsNENBQXFFO1FBQ3JFLHdDQUF1RDtRQUN6RCxpQkFBaUI7UUFDbkIsaUJBQUk7Ozs7O1FBdEJnQixlQUFxQjtRQUFyQixtQ0FBcUI7UUFDSixlQUFXO1FBQVgseUJBQVc7UUFRNUIsZUFBcUI7UUFBckIsbUNBQXFCO1FBQ0osZUFBVztRQUFYLHlCQUFXO1FBUTVCLGVBQXFCO1FBQXJCLG1DQUFxQjtRQUNKLGVBQVc7UUFBWCx5QkFBVzs7dUZEZm5DLHlCQUF5QjtjQUpyQyxTQUFTOzJCQUNFLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBEaXNhYmxlZCBkYXRlcGlja2VyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWRpc2FibGVkLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItZGlzYWJsZWQtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckRpc2FibGVkRXhhbXBsZSB7fVxuIiwiPHA+XG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgIDxtYXQtbGFiZWw+Q29tcGxldGVseSBkaXNhYmxlZDwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJkcDFcIiBkaXNhYmxlZD5cbiAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cImRwMVwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgIDxtYXQtZGF0ZXBpY2tlciAjZHAxPjwvbWF0LWRhdGVwaWNrZXI+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L3A+XG5cbjxwPlxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICA8bWF0LWxhYmVsPlBvcHVwIGRpc2FibGVkPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cImRwMlwiPlxuICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwiZHAyXCIgZGlzYWJsZWQ+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgPG1hdC1kYXRlcGlja2VyICNkcDI+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvcD5cblxuPHA+XG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgIDxtYXQtbGFiZWw+SW5wdXQgZGlzYWJsZWQ8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwiZHAzXCIgZGlzYWJsZWQ+XG4gICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJkcDNcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICA8bWF0LWRhdGVwaWNrZXIgI2RwMyBkaXNhYmxlZD1cImZhbHNlXCI+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvcD5cbiJdfQ==