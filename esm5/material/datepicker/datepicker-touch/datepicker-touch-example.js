import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
var _c0 = ["picker", ""];
/** @title Datepicker touch UI */
var DatepickerTouchExample = /** @class */ (function () {
    function DatepickerTouchExample() {
    }
    DatepickerTouchExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-touch-example',
                    templateUrl: 'datepicker-touch-example.html',
                    styleUrls: ['datepicker-touch-example.css'],
                },] },
    ];
    DatepickerTouchExample.ɵfac = function DatepickerTouchExample_Factory(t) { return new (t || DatepickerTouchExample)(); };
    DatepickerTouchExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerTouchExample, selectors: [["datepicker-touch-example"]], decls: 5, vars: 2, consts: [[1, "example-full-width"], ["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["touchUi", ""]], template: function DatepickerTouchExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelement(1, "input", 1);
            i0.ɵɵelement(2, "mat-datepicker-toggle", 2);
            i0.ɵɵelement(3, "mat-datepicker", 3, _c0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r20 = i0.ɵɵreference(4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matDatepicker", _r20);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r20);
        } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
    return DatepickerTouchExample;
}());
export { DatepickerTouchExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(DatepickerTouchExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-touch-example',
                templateUrl: 'datepicker-touch-example.html',
                styleUrls: ['datepicker-touch-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci10b3VjaC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLXRvdWNoL2RhdGVwaWNrZXItdG91Y2gtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci10b3VjaC9kYXRlcGlja2VyLXRvdWNoLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFFeEMsaUNBQWlDO0FBQ2pDO0lBQUE7S0FLc0M7O2dCQUxyQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtvQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7aUJBQzVDOztnR0FDWSxzQkFBc0I7K0RBQXRCLHNCQUFzQjtZQ1JuQyx5Q0FDRTtZQUFBLDJCQUNBO1lBQUEsMkNBQXdFO1lBQ3hFLHlDQUFpRDtZQUNuRCxpQkFBaUI7OztZQUhDLGVBQXdCO1lBQXhCLG9DQUF3QjtZQUNQLGVBQWM7WUFBZCwwQkFBYzs7aUNERmpEO0NBUXNDLEFBTHRDLElBS3NDO1NBQXpCLHNCQUFzQjttQ0FBdEIsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHRvdWNoIFVJICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLXRvdWNoLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItdG91Y2gtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItdG91Y2gtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlclRvdWNoRXhhbXBsZSB7fVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiBwbGFjZWhvbGRlcj1cIkNob29zZSBhIGRhdGVcIj5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyIHRvdWNoVWkgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==