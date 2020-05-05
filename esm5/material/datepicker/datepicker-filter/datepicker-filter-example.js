import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
/** @title Datepicker with filter validation */
var DatepickerFilterExample = /** @class */ (function () {
    function DatepickerFilterExample() {
        this.myFilter = function (d) {
            var day = (d || new Date()).getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
    }
    DatepickerFilterExample.ɵfac = function DatepickerFilterExample_Factory(t) { return new (t || DatepickerFilterExample)(); };
    DatepickerFilterExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerFilterExample, selectors: [["datepicker-filter-example"]], decls: 7, vars: 3, consts: [[1, "example-full-width"], ["matInput", "", 3, "matDatepickerFilter", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DatepickerFilterExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Choose a date");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "input", 1);
            i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
            i0.ɵɵelement(5, "mat-datepicker", null, 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r20 = i0.ɵɵreference(6);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("matDatepickerFilter", ctx.myFilter)("matDatepicker", _r20);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r20);
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
    return DatepickerFilterExample;
}());
export { DatepickerFilterExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerFilterExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-filter-example',
                templateUrl: 'datepicker-filter-example.html',
                styleUrls: ['datepicker-filter-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1maWx0ZXItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1maWx0ZXIvZGF0ZXBpY2tlci1maWx0ZXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1maWx0ZXIvZGF0ZXBpY2tlci1maWx0ZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRXhDLCtDQUErQztBQUMvQztJQUFBO1FBTUUsYUFBUSxHQUFHLFVBQUMsQ0FBYztZQUN4QixJQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdkMsbURBQW1EO1lBQ25ELE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQTtLQUNGO2tHQU5ZLHVCQUF1QjtnRUFBdkIsdUJBQXVCO1lDUnBDLHlDQUNFO1lBQUEsaUNBQVc7WUFBQSw2QkFBYTtZQUFBLGlCQUFZO1lBQ3BDLDJCQUNBO1lBQUEsMkNBQXdFO1lBQ3hFLDBDQUF5QztZQUMzQyxpQkFBaUI7OztZQUhDLGVBQWdDO1lBQWhDLGtEQUFnQyx1QkFBQTtZQUNmLGVBQWM7WUFBZCwwQkFBYzs7a0NESGpEO0NBY0MsQUFYRCxJQVdDO1NBTlksdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgd2l0aCBmaWx0ZXIgdmFsaWRhdGlvbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1maWx0ZXItZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1maWx0ZXItZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItZmlsdGVyLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJGaWx0ZXJFeGFtcGxlIHtcbiAgbXlGaWx0ZXIgPSAoZDogRGF0ZSB8IG51bGwpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBkYXkgPSAoZCB8fCBuZXcgRGF0ZSgpKS5nZXREYXkoKTtcbiAgICAvLyBQcmV2ZW50IFNhdHVyZGF5IGFuZCBTdW5kYXkgZnJvbSBiZWluZyBzZWxlY3RlZC5cbiAgICByZXR1cm4gZGF5ICE9PSAwICYmIGRheSAhPT0gNjtcbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gIDxtYXQtbGFiZWw+Q2hvb3NlIGEgZGF0ZTwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJGaWx0ZXJdPVwibXlGaWx0ZXJcIiBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIj5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=