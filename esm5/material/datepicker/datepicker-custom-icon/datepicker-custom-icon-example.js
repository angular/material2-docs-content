import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/material/icon";
/** @title Datepicker with custom icon */
var DatepickerCustomIconExample = /** @class */ (function () {
    function DatepickerCustomIconExample() {
    }
    DatepickerCustomIconExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-custom-icon-example',
                    templateUrl: 'datepicker-custom-icon-example.html',
                    styleUrls: ['datepicker-custom-icon-example.css'],
                },] },
    ];
    DatepickerCustomIconExample.ɵfac = function DatepickerCustomIconExample_Factory(t) { return new (t || DatepickerCustomIconExample)(); };
    DatepickerCustomIconExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerCustomIconExample, selectors: [["datepicker-custom-icon-example"]], decls: 9, vars: 2, consts: [[1, "example-full-width"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["matDatepickerToggleIcon", ""], ["picker", ""]], template: function DatepickerCustomIconExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Choose a date");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "input", 1);
            i0.ɵɵelementStart(4, "mat-datepicker-toggle", 2);
            i0.ɵɵelementStart(5, "mat-icon", 3);
            i0.ɵɵtext(6, "keyboard_arrow_down");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "mat-datepicker", null, 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r5 = i0.ɵɵreference(8);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("matDatepicker", _r5);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r5);
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i4.MatIcon, i3.MatDatepickerToggleIcon, i3.MatDatepicker], styles: [""] });
    return DatepickerCustomIconExample;
}());
export { DatepickerCustomIconExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerCustomIconExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-custom-icon-example',
                templateUrl: 'datepicker-custom-icon-example.html',
                styleUrls: ['datepicker-custom-icon-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1jdXN0b20taWNvbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLWN1c3RvbS1pY29uL2RhdGVwaWNrZXItY3VzdG9tLWljb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1jdXN0b20taWNvbi9kYXRlcGlja2VyLWN1c3RvbS1pY29uLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFFeEMseUNBQXlDO0FBQ3pDO0lBQUE7S0FLMkM7O2dCQUwxQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsV0FBVyxFQUFFLHFDQUFxQztvQkFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7aUJBQ2xEOzswR0FDWSwyQkFBMkI7b0VBQTNCLDJCQUEyQjtZQ1J4Qyx5Q0FDRTtZQUFBLGlDQUFXO1lBQUEsNkJBQWE7WUFBQSxpQkFBWTtZQUNwQywyQkFDQTtZQUFBLGdEQUNFO1lBQUEsbUNBQWtDO1lBQUEsbUNBQW1CO1lBQUEsaUJBQVc7WUFDbEUsaUJBQXdCO1lBQ3hCLDBDQUF5QztZQUMzQyxpQkFBaUI7OztZQUxDLGVBQXdCO1lBQXhCLG1DQUF3QjtZQUNQLGVBQWM7WUFBZCx5QkFBYzs7c0NESGpEO0NBUTJDLEFBTDNDLElBSzJDO1NBQTlCLDJCQUEyQjtrREFBM0IsMkJBQTJCO2NBTHZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxXQUFXLEVBQUUscUNBQXFDO2dCQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHdpdGggY3VzdG9tIGljb24gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItY3VzdG9tLWljb24tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1jdXN0b20taWNvbi1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZXBpY2tlci1jdXN0b20taWNvbi1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyQ3VzdG9tSWNvbkV4YW1wbGUge31cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICA8bWF0LWxhYmVsPkNob29zZSBhIGRhdGU8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiPlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPlxuICAgIDxtYXQtaWNvbiBtYXREYXRlcGlja2VyVG9nZ2xlSWNvbj5rZXlib2FyZF9hcnJvd19kb3duPC9tYXQtaWNvbj5cbiAgPC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19