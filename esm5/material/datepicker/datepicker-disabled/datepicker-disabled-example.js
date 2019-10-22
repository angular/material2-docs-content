import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
var _c0 = ["dp1", ""];
var _c1 = ["dp2", ""];
var _c2 = ["dp3", ""];
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
    DatepickerDisabledExample.ngFactoryDef = function DatepickerDisabledExample_Factory(t) { return new (t || DatepickerDisabledExample)(); };
    DatepickerDisabledExample.ngComponentDef = i0.ɵɵdefineComponent({ type: DatepickerDisabledExample, selectors: [["datepicker-disabled-example"]], decls: 18, vars: 6, consts: [["matInput", "", "placeholder", "Completely disabled", "disabled", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["matInput", "", "placeholder", "Popup disabled", 3, "matDatepicker"], ["matSuffix", "", "disabled", "", 3, "for"], ["matInput", "", "placeholder", "Input disabled", "disabled", "", 3, "matDatepicker"], ["disabled", "false"]], template: function DatepickerDisabledExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵelementStart(1, "mat-form-field");
            i0.ɵɵelement(2, "input", 0);
            i0.ɵɵelement(3, "mat-datepicker-toggle", 1);
            i0.ɵɵelement(4, "mat-datepicker", null, _c0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵelementStart(7, "mat-form-field");
            i0.ɵɵelement(8, "input", 2);
            i0.ɵɵelement(9, "mat-datepicker-toggle", 3);
            i0.ɵɵelement(10, "mat-datepicker", null, _c1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "p");
            i0.ɵɵelementStart(13, "mat-form-field");
            i0.ɵɵelement(14, "input", 4);
            i0.ɵɵelement(15, "mat-datepicker-toggle", 1);
            i0.ɵɵelement(16, "mat-datepicker", 5, _c2);
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
/*@__PURE__*/ i0.ɵsetClassMetadata(DatepickerDisabledExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-disabled-example',
                templateUrl: 'datepicker-disabled-example.html',
                styleUrls: ['datepicker-disabled-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1kaXNhYmxlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1kaXNhYmxlZC9kYXRlcGlja2VyLWRpc2FibGVkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLWRpc2FibGVkL2RhdGVwaWNrZXItZGlzYWJsZWQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBRXhDLGlDQUFpQztBQUNqQztJQUFBO0tBS3lDOztnQkFMeEMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLFdBQVcsRUFBRSxrQ0FBa0M7b0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2lCQUMvQzs7OEdBQ1kseUJBQXlCOzRFQUF6Qix5QkFBeUI7WUNSdEMseUJBQ0U7WUFBQSxzQ0FDRTtZQUFBLDJCQUNBO1lBQUEsMkNBQXFFO1lBQ3JFLDRDQUFzQztZQUN4QyxpQkFBaUI7WUFDbkIsaUJBQUk7WUFFSix5QkFDRTtZQUFBLHNDQUNFO1lBQUEsMkJBQ0E7WUFBQSwyQ0FBOEU7WUFDOUUsNkNBQXNDO1lBQ3hDLGlCQUFpQjtZQUNuQixpQkFBSTtZQUVKLDBCQUNFO1lBQUEsdUNBQ0U7WUFBQSw0QkFDQTtZQUFBLDRDQUFxRTtZQUNyRSwwQ0FBdUQ7WUFDekQsaUJBQWlCO1lBQ25CLGlCQUFJOzs7OztZQXBCZ0IsZUFBcUI7WUFBckIsbUNBQXFCO1lBQ0osZUFBVztZQUFYLHlCQUFXO1lBTzVCLGVBQXFCO1lBQXJCLG1DQUFxQjtZQUNKLGVBQVc7WUFBWCx5QkFBVztZQU81QixlQUFxQjtZQUFyQixtQ0FBcUI7WUFDSixlQUFXO1lBQVgseUJBQVc7O29DRG5CaEQ7Q0FReUMsQUFMekMsSUFLeUM7U0FBNUIseUJBQXlCO21DQUF6Qix5QkFBeUI7Y0FMckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQy9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIERpc2FibGVkIGRhdGVwaWNrZXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItZGlzYWJsZWQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1kaXNhYmxlZC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZXBpY2tlci1kaXNhYmxlZC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyRGlzYWJsZWRFeGFtcGxlIHt9XG4iLCI8cD5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJkcDFcIiBwbGFjZWhvbGRlcj1cIkNvbXBsZXRlbHkgZGlzYWJsZWRcIiBkaXNhYmxlZD5cbiAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cImRwMVwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgIDxtYXQtZGF0ZXBpY2tlciAjZHAxPjwvbWF0LWRhdGVwaWNrZXI+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L3A+XG5cbjxwPlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cImRwMlwiIHBsYWNlaG9sZGVyPVwiUG9wdXAgZGlzYWJsZWRcIj5cbiAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cImRwMlwiIGRpc2FibGVkPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgIDxtYXQtZGF0ZXBpY2tlciAjZHAyPjwvbWF0LWRhdGVwaWNrZXI+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L3A+XG5cbjxwPlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cImRwM1wiIHBsYWNlaG9sZGVyPVwiSW5wdXQgZGlzYWJsZWRcIiBkaXNhYmxlZD5cbiAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cImRwM1wiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgIDxtYXQtZGF0ZXBpY2tlciAjZHAzIGRpc2FibGVkPVwiZmFsc2VcIj48L21hdC1kYXRlcGlja2VyPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9wPlxuIl19