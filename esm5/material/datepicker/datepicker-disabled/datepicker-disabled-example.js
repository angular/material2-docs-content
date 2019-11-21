import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
/** @title Disabled datepicker */
var DatepickerDisabledExample = /** @class */ (function () {
    function DatepickerDisabledExample() {
    }
    DatepickerDisabledExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-disabled-example',
                    templateUrl: 'datepicker-disabled-example.html',
                    styleUrls: ['datepicker-disabled-example.css'],
                },] },
    ];
    DatepickerDisabledExample.ɵfac = function DatepickerDisabledExample_Factory(t) { return new (t || DatepickerDisabledExample)(); };
    DatepickerDisabledExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerDisabledExample, selectors: [["datepicker-disabled-example"]], decls: 18, vars: 6, consts: [["matInput", "", "placeholder", "Completely disabled", "disabled", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["dp1", ""], ["matInput", "", "placeholder", "Popup disabled", 3, "matDatepicker"], ["matSuffix", "", "disabled", "", 3, "for"], ["dp2", ""], ["matInput", "", "placeholder", "Input disabled", "disabled", "", 3, "matDatepicker"], ["disabled", "false"], ["dp3", ""]], template: function DatepickerDisabledExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵelementStart(1, "mat-form-field");
            i0.ɵɵelement(2, "input", 0);
            i0.ɵɵelement(3, "mat-datepicker-toggle", 1);
            i0.ɵɵelement(4, "mat-datepicker", null, 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵelementStart(7, "mat-form-field");
            i0.ɵɵelement(8, "input", 3);
            i0.ɵɵelement(9, "mat-datepicker-toggle", 4);
            i0.ɵɵelement(10, "mat-datepicker", null, 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "p");
            i0.ɵɵelementStart(13, "mat-form-field");
            i0.ɵɵelement(14, "input", 6);
            i0.ɵɵelement(15, "mat-datepicker-toggle", 1);
            i0.ɵɵelement(16, "mat-datepicker", 7, 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r7 = i0.ɵɵreference(5);
            var _r8 = i0.ɵɵreference(11);
            var _r9 = i0.ɵɵreference(17);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("matDatepicker", _r7);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r7);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("matDatepicker", _r8);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r8);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("matDatepicker", _r9);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r9);
        } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1kaXNhYmxlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLWRpc2FibGVkL2RhdGVwaWNrZXItZGlzYWJsZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1kaXNhYmxlZC9kYXRlcGlja2VyLWRpc2FibGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV4QyxpQ0FBaUM7QUFDakM7SUFBQTtLQUt5Qzs7Z0JBTHhDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxXQUFXLEVBQUUsa0NBQWtDO29CQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztpQkFDL0M7O3NHQUNZLHlCQUF5QjtrRUFBekIseUJBQXlCO1lDUnRDLHlCQUNFO1lBQUEsc0NBQ0U7WUFBQSwyQkFDQTtZQUFBLDJDQUFxRTtZQUNyRSwwQ0FBc0M7WUFDeEMsaUJBQWlCO1lBQ25CLGlCQUFJO1lBRUoseUJBQ0U7WUFBQSxzQ0FDRTtZQUFBLDJCQUNBO1lBQUEsMkNBQThFO1lBQzlFLDJDQUFzQztZQUN4QyxpQkFBaUI7WUFDbkIsaUJBQUk7WUFFSiwwQkFDRTtZQUFBLHVDQUNFO1lBQUEsNEJBQ0E7WUFBQSw0Q0FBcUU7WUFDckUsd0NBQXVEO1lBQ3pELGlCQUFpQjtZQUNuQixpQkFBSTs7Ozs7WUFwQmdCLGVBQXFCO1lBQXJCLG1DQUFxQjtZQUNKLGVBQVc7WUFBWCx5QkFBVztZQU81QixlQUFxQjtZQUFyQixtQ0FBcUI7WUFDSixlQUFXO1lBQVgseUJBQVc7WUFPNUIsZUFBcUI7WUFBckIsbUNBQXFCO1lBQ0osZUFBVztZQUFYLHlCQUFXOztvQ0RuQmhEO0NBUXlDLEFBTHpDLElBS3lDO1NBQTVCLHlCQUF5QjtrREFBekIseUJBQXlCO2NBTHJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzthQUMvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBEaXNhYmxlZCBkYXRlcGlja2VyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWRpc2FibGVkLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItZGlzYWJsZWQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItZGlzYWJsZWQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckRpc2FibGVkRXhhbXBsZSB7fVxuIiwiPHA+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwiZHAxXCIgcGxhY2Vob2xkZXI9XCJDb21wbGV0ZWx5IGRpc2FibGVkXCIgZGlzYWJsZWQ+XG4gICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJkcDFcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICA8bWF0LWRhdGVwaWNrZXIgI2RwMT48L21hdC1kYXRlcGlja2VyPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9wPlxuXG48cD5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJkcDJcIiBwbGFjZWhvbGRlcj1cIlBvcHVwIGRpc2FibGVkXCI+XG4gICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJkcDJcIiBkaXNhYmxlZD48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICA8bWF0LWRhdGVwaWNrZXIgI2RwMj48L21hdC1kYXRlcGlja2VyPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9wPlxuXG48cD5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJkcDNcIiBwbGFjZWhvbGRlcj1cIklucHV0IGRpc2FibGVkXCIgZGlzYWJsZWQ+XG4gICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJkcDNcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICA8bWF0LWRhdGVwaWNrZXIgI2RwMyBkaXNhYmxlZD1cImZhbHNlXCI+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvcD5cbiJdfQ==