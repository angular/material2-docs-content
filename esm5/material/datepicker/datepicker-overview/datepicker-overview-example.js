import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
var _c0 = ["picker", ""];
/** @title Basic datepicker */
var DatepickerOverviewExample = /** @class */ (function () {
    function DatepickerOverviewExample() {
    }
    DatepickerOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-overview-example',
                    templateUrl: 'datepicker-overview-example.html',
                    styleUrls: ['datepicker-overview-example.css'],
                },] },
    ];
    DatepickerOverviewExample.ɵfac = function DatepickerOverviewExample_Factory(t) { return new (t || DatepickerOverviewExample)(); };
    DatepickerOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerOverviewExample, selectors: [["datepicker-overview-example"]], decls: 5, vars: 2, consts: [["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"]], template: function DatepickerOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field");
            i0.ɵɵelement(1, "input", 0);
            i0.ɵɵelement(2, "mat-datepicker-toggle", 1);
            i0.ɵɵelement(3, "mat-datepicker", null, _c0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r18 = i0.ɵɵreference(4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matDatepicker", _r18);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r18);
        } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
    return DatepickerOverviewExample;
}());
export { DatepickerOverviewExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(DatepickerOverviewExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-overview-example',
                templateUrl: 'datepicker-overview-example.html',
                styleUrls: ['datepicker-overview-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLW92ZXJ2aWV3L2RhdGVwaWNrZXItb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1vdmVydmlldy9kYXRlcGlja2VyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFFeEMsOEJBQThCO0FBQzlCO0lBQUE7S0FLeUM7O2dCQUx4QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsV0FBVyxFQUFFLGtDQUFrQztvQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7aUJBQy9DOztzR0FDWSx5QkFBeUI7a0VBQXpCLHlCQUF5QjtZQ1J0QyxzQ0FDRTtZQUFBLDJCQUNBO1lBQUEsMkNBQXdFO1lBQ3hFLDRDQUF5QztZQUMzQyxpQkFBaUI7OztZQUhDLGVBQXdCO1lBQXhCLG9DQUF3QjtZQUNQLGVBQWM7WUFBZCwwQkFBYzs7b0NERmpEO0NBUXlDLEFBTHpDLElBS3lDO1NBQTVCLHlCQUF5QjttQ0FBekIseUJBQXlCO2NBTHJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzthQUMvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBCYXNpYyBkYXRlcGlja2VyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlck92ZXJ2aWV3RXhhbXBsZSB7fVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCIgcGxhY2Vob2xkZXI9XCJDaG9vc2UgYSBkYXRlXCI+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19