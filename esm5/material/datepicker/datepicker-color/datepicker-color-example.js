import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
/** @title Datepicker palette colors */
var DatepickerColorExample = /** @class */ (function () {
    function DatepickerColorExample() {
    }
    DatepickerColorExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-color-example',
                    templateUrl: 'datepicker-color-example.html',
                    styleUrls: ['datepicker-color-example.css'],
                },] },
    ];
    DatepickerColorExample.ɵfac = function DatepickerColorExample_Factory(t) { return new (t || DatepickerColorExample)(); };
    DatepickerColorExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerColorExample, selectors: [["datepicker-color-example"]], decls: 14, vars: 4, consts: [["color", "accent"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["color", "primary"], ["picker2", ""]], template: function DatepickerColorExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Inherited calendar color");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "input", 1);
            i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
            i0.ɵɵelement(5, "mat-datepicker", null, 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-form-field", 0);
            i0.ɵɵelementStart(8, "mat-label");
            i0.ɵɵtext(9, "Custom calendar color");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "input", 1);
            i0.ɵɵelement(11, "mat-datepicker-toggle", 2);
            i0.ɵɵelement(12, "mat-datepicker", 4, 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r2 = i0.ɵɵreference(6);
            var _r3 = i0.ɵɵreference(13);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("matDatepicker", _r2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r2);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("matDatepicker", _r3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r3);
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    return DatepickerColorExample;
}());
export { DatepickerColorExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerColorExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-color-example',
                templateUrl: 'datepicker-color-example.html',
                styleUrls: ['datepicker-color-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1jb2xvci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLWNvbG9yL2RhdGVwaWNrZXItY29sb3ItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1jb2xvci9kYXRlcGlja2VyLWNvbG9yLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV4Qyx1Q0FBdUM7QUFDdkM7SUFBQTtLQUtzQzs7Z0JBTHJDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxXQUFXLEVBQUUsK0JBQStCO29CQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztpQkFDNUM7O2dHQUNZLHNCQUFzQjsrREFBdEIsc0JBQXNCO1lDUm5DLHlDQUNFO1lBQUEsaUNBQVc7WUFBQSx3Q0FBd0I7WUFBQSxpQkFBWTtZQUMvQywyQkFDQTtZQUFBLDJDQUF5RTtZQUN6RSwwQ0FBMEM7WUFDNUMsaUJBQWlCO1lBRWpCLHlDQUNFO1lBQUEsaUNBQVc7WUFBQSxxQ0FBcUI7WUFBQSxpQkFBWTtZQUM1Qyw0QkFDQTtZQUFBLDRDQUF5RTtZQUN6RSx3Q0FBMEQ7WUFDNUQsaUJBQWlCOzs7O1lBVkMsZUFBeUI7WUFBekIsbUNBQXlCO1lBQ1IsZUFBZTtZQUFmLHlCQUFlO1lBTWhDLGVBQXlCO1lBQXpCLG1DQUF5QjtZQUNSLGVBQWU7WUFBZix5QkFBZTs7aUNEVmxEO0NBUXNDLEFBTHRDLElBS3NDO1NBQXpCLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHBhbGV0dGUgY29sb3JzICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWNvbG9yLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItY29sb3ItZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItY29sb3ItZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckNvbG9yRXhhbXBsZSB7fVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNvbG9yPVwiYWNjZW50XCI+XG4gIDxtYXQtbGFiZWw+SW5oZXJpdGVkIGNhbGVuZGFyIGNvbG9yPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXIxXCI+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyMVwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcjE+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxtYXQtZm9ybS1maWVsZCBjb2xvcj1cImFjY2VudFwiPlxuICA8bWF0LWxhYmVsPkN1c3RvbSBjYWxlbmRhciBjb2xvcjwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyMlwiPlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlcjJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXIyIGNvbG9yPVwicHJpbWFyeVwiPjwvbWF0LWRhdGVwaWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19