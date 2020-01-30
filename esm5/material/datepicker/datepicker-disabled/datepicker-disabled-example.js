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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1kaXNhYmxlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLWRpc2FibGVkL2RhdGVwaWNrZXItZGlzYWJsZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1kaXNhYmxlZC9kYXRlcGlja2VyLWRpc2FibGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV4QyxpQ0FBaUM7QUFDakM7SUFBQTtLQUt5Qzs7Z0JBTHhDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxXQUFXLEVBQUUsa0NBQWtDO29CQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztpQkFDL0M7O3NHQUNZLHlCQUF5QjtrRUFBekIseUJBQXlCO1lDUnRDLHlCQUNFO1lBQUEsc0NBQ0U7WUFBQSxpQ0FBVztZQUFBLG1DQUFtQjtZQUFBLGlCQUFZO1lBQzFDLDJCQUNBO1lBQUEsMkNBQXFFO1lBQ3JFLDBDQUFzQztZQUN4QyxpQkFBaUI7WUFDbkIsaUJBQUk7WUFFSix5QkFDRTtZQUFBLHNDQUNFO1lBQUEsa0NBQVc7WUFBQSwrQkFBYztZQUFBLGlCQUFZO1lBQ3JDLDRCQUNBO1lBQUEsNENBQThFO1lBQzlFLDJDQUFzQztZQUN4QyxpQkFBaUI7WUFDbkIsaUJBQUk7WUFFSiwwQkFDRTtZQUFBLHVDQUNFO1lBQUEsa0NBQVc7WUFBQSwrQkFBYztZQUFBLGlCQUFZO1lBQ3JDLDRCQUNBO1lBQUEsNENBQXFFO1lBQ3JFLHdDQUF1RDtZQUN6RCxpQkFBaUI7WUFDbkIsaUJBQUk7Ozs7O1lBdEJnQixlQUFxQjtZQUFyQixtQ0FBcUI7WUFDSixlQUFXO1lBQVgseUJBQVc7WUFRNUIsZUFBcUI7WUFBckIsbUNBQXFCO1lBQ0osZUFBVztZQUFYLHlCQUFXO1lBUTVCLGVBQXFCO1lBQXJCLG1DQUFxQjtZQUNKLGVBQVc7WUFBWCx5QkFBVzs7b0NEdEJoRDtDQVF5QyxBQUx6QyxJQUt5QztTQUE1Qix5QkFBeUI7a0RBQXpCLHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgRGlzYWJsZWQgZGF0ZXBpY2tlciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1kaXNhYmxlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWRpc2FibGVkLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLWRpc2FibGVkLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJEaXNhYmxlZEV4YW1wbGUge31cbiIsIjxwPlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1sYWJlbD5Db21wbGV0ZWx5IGRpc2FibGVkPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cImRwMVwiIGRpc2FibGVkPlxuICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwiZHAxXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgPG1hdC1kYXRlcGlja2VyICNkcDE+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvcD5cblxuPHA+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPlBvcHVwIGRpc2FibGVkPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cImRwMlwiPlxuICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwiZHAyXCIgZGlzYWJsZWQ+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgPG1hdC1kYXRlcGlja2VyICNkcDI+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvcD5cblxuPHA+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPklucHV0IGRpc2FibGVkPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cImRwM1wiIGRpc2FibGVkPlxuICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwiZHAzXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgPG1hdC1kYXRlcGlja2VyICNkcDMgZGlzYWJsZWQ9XCJmYWxzZVwiPjwvbWF0LWRhdGVwaWNrZXI+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L3A+XG4iXX0=