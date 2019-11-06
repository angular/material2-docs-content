import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
var _c0 = ["picker", ""];
/** @title Datepicker with min & max validation */
var DatepickerMinMaxExample = /** @class */ (function () {
    function DatepickerMinMaxExample() {
        this.minDate = new Date(2000, 0, 1);
        this.maxDate = new Date(2020, 0, 1);
    }
    DatepickerMinMaxExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-min-max-example',
                    templateUrl: 'datepicker-min-max-example.html',
                    styleUrls: ['datepicker-min-max-example.css'],
                },] },
    ];
    DatepickerMinMaxExample.ɵfac = function DatepickerMinMaxExample_Factory(t) { return new (t || DatepickerMinMaxExample)(); };
    DatepickerMinMaxExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerMinMaxExample, selectors: [["datepicker-min-max-example"]], decls: 5, vars: 4, consts: [[1, "example-full-width"], ["matInput", "", "placeholder", "Choose a date", 3, "min", "max", "matDatepicker"], ["matSuffix", "", 3, "for"]], template: function DatepickerMinMaxExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelement(1, "input", 1);
            i0.ɵɵelement(2, "mat-datepicker-toggle", 2);
            i0.ɵɵelement(3, "mat-datepicker", null, _c0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r16 = i0.ɵɵreference(4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r16);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r16);
        } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
    return DatepickerMinMaxExample;
}());
export { DatepickerMinMaxExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(DatepickerMinMaxExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-min-max-example',
                templateUrl: 'datepicker-min-max-example.html',
                styleUrls: ['datepicker-min-max-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1taW4tbWF4LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItbWluLW1heC9kYXRlcGlja2VyLW1pbi1tYXgtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1taW4tbWF4L2RhdGVwaWNrZXItbWluLW1heC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBRXhDLGtEQUFrRDtBQUNsRDtJQUFBO1FBTUUsWUFBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsWUFBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDaEM7O2dCQVJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxXQUFXLEVBQUUsaUNBQWlDO29CQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztpQkFDOUM7O2tHQUNZLHVCQUF1QjtnRUFBdkIsdUJBQXVCO1lDUnBDLHlDQUNFO1lBQUEsMkJBQ0E7WUFBQSwyQ0FBd0U7WUFDeEUsNENBQXlDO1lBQzNDLGlCQUFpQjs7O1lBSEMsZUFBZTtZQUFmLGlDQUFlLG9CQUFBLHVCQUFBO1lBQ0UsZUFBYztZQUFkLDBCQUFjOztrQ0RGakQ7Q0FXQyxBQVJELElBUUM7U0FIWSx1QkFBdUI7bUNBQXZCLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciB3aXRoIG1pbiAmIG1heCB2YWxpZGF0aW9uICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLW1pbi1tYXgtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1taW4tbWF4LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLW1pbi1tYXgtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlck1pbk1heEV4YW1wbGUge1xuICBtaW5EYXRlID0gbmV3IERhdGUoMjAwMCwgMCwgMSk7XG4gIG1heERhdGUgPSBuZXcgRGF0ZSgyMDIwLCAwLCAxKTtcbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICA8aW5wdXQgbWF0SW5wdXQgW21pbl09XCJtaW5EYXRlXCIgW21heF09XCJtYXhEYXRlXCIgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCIgcGxhY2Vob2xkZXI9XCJDaG9vc2UgYSBkYXRlXCI+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19