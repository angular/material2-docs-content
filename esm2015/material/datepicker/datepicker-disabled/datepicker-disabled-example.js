import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
/** @title Disabled datepicker */
let DatepickerDisabledExample = /** @class */ (() => {
    class DatepickerDisabledExample {
    }
    DatepickerDisabledExample.ɵfac = function DatepickerDisabledExample_Factory(t) { return new (t || DatepickerDisabledExample)(); };
    DatepickerDisabledExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerDisabledExample, selectors: [["datepicker-disabled-example"]], decls: 24, vars: 6, consts: [["appearance", "fill"], ["matInput", "", "disabled", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["dp1", ""], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", "disabled", "", 3, "for"], ["dp2", ""], ["disabled", "false"], ["dp3", ""]], template: function DatepickerDisabledExample_Template(rf, ctx) { if (rf & 1) {
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
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
    return DatepickerDisabledExample;
})();
export { DatepickerDisabledExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerDisabledExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-disabled-example',
                templateUrl: 'datepicker-disabled-example.html',
                styleUrls: ['datepicker-disabled-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1kaXNhYmxlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLWRpc2FibGVkL2RhdGVwaWNrZXItZGlzYWJsZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1kaXNhYmxlZC9kYXRlcGlja2VyLWRpc2FibGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV4QyxpQ0FBaUM7QUFDakM7SUFBQSxNQUthLHlCQUF5Qjs7c0dBQXpCLHlCQUF5QjtrRUFBekIseUJBQXlCO1lDUnRDLHlCQUNFO1lBQUEseUNBQ0U7WUFBQSxpQ0FBVztZQUFBLG1DQUFtQjtZQUFBLGlCQUFZO1lBQzFDLDJCQUNBO1lBQUEsMkNBQXFFO1lBQ3JFLDBDQUFzQztZQUN4QyxpQkFBaUI7WUFDbkIsaUJBQUk7WUFFSix5QkFDRTtZQUFBLHlDQUNFO1lBQUEsa0NBQVc7WUFBQSwrQkFBYztZQUFBLGlCQUFZO1lBQ3JDLDRCQUNBO1lBQUEsNENBQThFO1lBQzlFLDJDQUFzQztZQUN4QyxpQkFBaUI7WUFDbkIsaUJBQUk7WUFFSiwwQkFDRTtZQUFBLDBDQUNFO1lBQUEsa0NBQVc7WUFBQSwrQkFBYztZQUFBLGlCQUFZO1lBQ3JDLDRCQUNBO1lBQUEsNENBQXFFO1lBQ3JFLHdDQUF1RDtZQUN6RCxpQkFBaUI7WUFDbkIsaUJBQUk7Ozs7O1lBdEJnQixlQUFxQjtZQUFyQixtQ0FBcUI7WUFDSixlQUFXO1lBQVgseUJBQVc7WUFRNUIsZUFBcUI7WUFBckIsbUNBQXFCO1lBQ0osZUFBVztZQUFYLHlCQUFXO1lBUTVCLGVBQXFCO1lBQXJCLG1DQUFxQjtZQUNKLGVBQVc7WUFBWCx5QkFBVzs7b0NEdEJoRDtLQVF5QztTQUE1Qix5QkFBeUI7a0RBQXpCLHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgRGlzYWJsZWQgZGF0ZXBpY2tlciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1kaXNhYmxlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWRpc2FibGVkLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLWRpc2FibGVkLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJEaXNhYmxlZEV4YW1wbGUge31cbiIsIjxwPlxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICA8bWF0LWxhYmVsPkNvbXBsZXRlbHkgZGlzYWJsZWQ8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwiZHAxXCIgZGlzYWJsZWQ+XG4gICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJkcDFcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICA8bWF0LWRhdGVwaWNrZXIgI2RwMT48L21hdC1kYXRlcGlja2VyPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9wPlxuXG48cD5cbiAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgPG1hdC1sYWJlbD5Qb3B1cCBkaXNhYmxlZDwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJkcDJcIj5cbiAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cImRwMlwiIGRpc2FibGVkPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgIDxtYXQtZGF0ZXBpY2tlciAjZHAyPjwvbWF0LWRhdGVwaWNrZXI+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L3A+XG5cbjxwPlxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICA8bWF0LWxhYmVsPklucHV0IGRpc2FibGVkPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cImRwM1wiIGRpc2FibGVkPlxuICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwiZHAzXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgPG1hdC1kYXRlcGlja2VyICNkcDMgZGlzYWJsZWQ9XCJmYWxzZVwiPjwvbWF0LWRhdGVwaWNrZXI+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L3A+XG4iXX0=