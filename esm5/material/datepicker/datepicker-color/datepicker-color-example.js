import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
var _c0 = ["picker1", ""];
var _c1 = ["picker2", ""];
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
    DatepickerColorExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerColorExample, selectors: [["datepicker-color-example"]], decls: 14, vars: 4, consts: [["color", "accent"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["color", "primary"]], template: function DatepickerColorExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Inherited calendar color");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "input", 1);
            i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
            i0.ɵɵelement(5, "mat-datepicker", null, _c0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-form-field", 0);
            i0.ɵɵelementStart(8, "mat-label");
            i0.ɵɵtext(9, "Custom calendar color");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "input", 1);
            i0.ɵɵelement(11, "mat-datepicker-toggle", 2);
            i0.ɵɵelement(12, "mat-datepicker", 3, _c1);
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
/*@__PURE__*/ i0.ɵsetClassMetadata(DatepickerColorExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-color-example',
                templateUrl: 'datepicker-color-example.html',
                styleUrls: ['datepicker-color-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1jb2xvci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1jb2xvci9kYXRlcGlja2VyLWNvbG9yLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLWNvbG9yL2RhdGVwaWNrZXItY29sb3ItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFFeEMsdUNBQXVDO0FBQ3ZDO0lBQUE7S0FLc0M7O2dCQUxyQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtvQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7aUJBQzVDOztnR0FDWSxzQkFBc0I7K0RBQXRCLHNCQUFzQjtZQ1JuQyx5Q0FDRTtZQUFBLGlDQUFXO1lBQUEsd0NBQXdCO1lBQUEsaUJBQVk7WUFDL0MsMkJBQ0E7WUFBQSwyQ0FBeUU7WUFDekUsNENBQTBDO1lBQzVDLGlCQUFpQjtZQUVqQix5Q0FDRTtZQUFBLGlDQUFXO1lBQUEscUNBQXFCO1lBQUEsaUJBQVk7WUFDNUMsNEJBQ0E7WUFBQSw0Q0FBeUU7WUFDekUsMENBQTBEO1lBQzVELGlCQUFpQjs7OztZQVZDLGVBQXlCO1lBQXpCLG1DQUF5QjtZQUNSLGVBQWU7WUFBZix5QkFBZTtZQU1oQyxlQUF5QjtZQUF6QixtQ0FBeUI7WUFDUixlQUFlO1lBQWYseUJBQWU7O2lDRFZsRDtDQVFzQyxBQUx0QyxJQUtzQztTQUF6QixzQkFBc0I7bUNBQXRCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciBwYWxldHRlIGNvbG9ycyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1jb2xvci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWNvbG9yLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLWNvbG9yLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJDb2xvckV4YW1wbGUge31cbiIsIjxtYXQtZm9ybS1maWVsZCBjb2xvcj1cImFjY2VudFwiPlxuICA8bWF0LWxhYmVsPkluaGVyaXRlZCBjYWxlbmRhciBjb2xvcjwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyMVwiPlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlcjFcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXIxPjwvbWF0LWRhdGVwaWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQgY29sb3I9XCJhY2NlbnRcIj5cbiAgPG1hdC1sYWJlbD5DdXN0b20gY2FsZW5kYXIgY29sb3I8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlcjJcIj5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXIyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyMiBjb2xvcj1cInByaW1hcnlcIj48L21hdC1kYXRlcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==