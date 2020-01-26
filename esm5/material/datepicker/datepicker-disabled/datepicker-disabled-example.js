import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
/** @title Disabled datepicker */
var DatepickerDisabledExample = /** @class */ (function () {
    function DatepickerDisabledExample() {
    }
    DatepickerDisabledExample.ɵfac = function DatepickerDisabledExample_Factory(t) { return new (t || DatepickerDisabledExample)(); };
    DatepickerDisabledExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerDisabledExample, selectors: [["datepicker-disabled-example"]], decls: 24, vars: 6, consts: [["matInput", "", "disabled", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["dp1", ""], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", "disabled", "", 3, "for"], ["dp2", ""], ["disabled", "false"], ["dp3", ""]], template: function DatepickerDisabledExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵelementStart(1, "mat-form-field");
            i0.ɵɵelementStart(2, "mat-label");
            i0.ɵɵtext(3, "Completely disabled");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "input", 0);
            i0.ɵɵelement(5, "mat-datepicker-toggle", 1);
            i0.ɵɵelement(6, "mat-datepicker", null, 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵelementStart(9, "mat-form-field");
            i0.ɵɵelementStart(10, "mat-label");
            i0.ɵɵtext(11, "Popup disabled");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(12, "input", 3);
            i0.ɵɵelement(13, "mat-datepicker-toggle", 4);
            i0.ɵɵelement(14, "mat-datepicker", null, 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "p");
            i0.ɵɵelementStart(17, "mat-form-field");
            i0.ɵɵelementStart(18, "mat-label");
            i0.ɵɵtext(19, "Input disabled");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(20, "input", 0);
            i0.ɵɵelement(21, "mat-datepicker-toggle", 1);
            i0.ɵɵelement(22, "mat-datepicker", 6, 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r7 = i0.ɵɵreference(7);
            var _r8 = i0.ɵɵreference(15);
            var _r9 = i0.ɵɵreference(23);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("matDatepicker", _r7);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r7);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("matDatepicker", _r8);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r8);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("matDatepicker", _r9);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r9);
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
    return DatepickerDisabledExample;
}());
export { DatepickerDisabledExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerDisabledExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-disabled-example',
                templateUrl: 'datepicker-disabled-example.html',
                styleUrls: ['datepicker-disabled-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1kaXNhYmxlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLWRpc2FibGVkL2RhdGVwaWNrZXItZGlzYWJsZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1kaXNhYmxlZC9kYXRlcGlja2VyLWRpc2FibGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV4QyxpQ0FBaUM7QUFDakM7SUFBQTtLQUt5QztzR0FBNUIseUJBQXlCO2tFQUF6Qix5QkFBeUI7WUNSdEMseUJBQ0U7WUFBQSxzQ0FDRTtZQUFBLGlDQUFXO1lBQUEsbUNBQW1CO1lBQUEsaUJBQVk7WUFDMUMsMkJBQ0E7WUFBQSwyQ0FBcUU7WUFDckUsMENBQXNDO1lBQ3hDLGlCQUFpQjtZQUNuQixpQkFBSTtZQUVKLHlCQUNFO1lBQUEsc0NBQ0U7WUFBQSxrQ0FBVztZQUFBLCtCQUFjO1lBQUEsaUJBQVk7WUFDckMsNEJBQ0E7WUFBQSw0Q0FBOEU7WUFDOUUsMkNBQXNDO1lBQ3hDLGlCQUFpQjtZQUNuQixpQkFBSTtZQUVKLDBCQUNFO1lBQUEsdUNBQ0U7WUFBQSxrQ0FBVztZQUFBLCtCQUFjO1lBQUEsaUJBQVk7WUFDckMsNEJBQ0E7WUFBQSw0Q0FBcUU7WUFDckUsd0NBQXVEO1lBQ3pELGlCQUFpQjtZQUNuQixpQkFBSTs7Ozs7WUF0QmdCLGVBQXFCO1lBQXJCLG1DQUFxQjtZQUNKLGVBQVc7WUFBWCx5QkFBVztZQVE1QixlQUFxQjtZQUFyQixtQ0FBcUI7WUFDSixlQUFXO1lBQVgseUJBQVc7WUFRNUIsZUFBcUI7WUFBckIsbUNBQXFCO1lBQ0osZUFBVztZQUFYLHlCQUFXOztvQ0R0QmhEO0NBUXlDLEFBTHpDLElBS3lDO1NBQTVCLHlCQUF5QjtrREFBekIseUJBQXlCO2NBTHJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzthQUMvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBEaXNhYmxlZCBkYXRlcGlja2VyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWRpc2FibGVkLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItZGlzYWJsZWQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItZGlzYWJsZWQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckRpc2FibGVkRXhhbXBsZSB7fVxuIiwiPHA+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPkNvbXBsZXRlbHkgZGlzYWJsZWQ8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwiZHAxXCIgZGlzYWJsZWQ+XG4gICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJkcDFcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICA8bWF0LWRhdGVwaWNrZXIgI2RwMT48L21hdC1kYXRlcGlja2VyPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9wPlxuXG48cD5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtbGFiZWw+UG9wdXAgZGlzYWJsZWQ8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwiZHAyXCI+XG4gICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJkcDJcIiBkaXNhYmxlZD48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICA8bWF0LWRhdGVwaWNrZXIgI2RwMj48L21hdC1kYXRlcGlja2VyPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9wPlxuXG48cD5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtbGFiZWw+SW5wdXQgZGlzYWJsZWQ8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwiZHAzXCIgZGlzYWJsZWQ+XG4gICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJkcDNcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICA8bWF0LWRhdGVwaWNrZXIgI2RwMyBkaXNhYmxlZD1cImZhbHNlXCI+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvcD5cbiJdfQ==