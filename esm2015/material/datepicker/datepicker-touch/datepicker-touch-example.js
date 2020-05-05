/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/datepicker/datepicker-touch/datepicker-touch-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
/**
 * \@title Datepicker touch UI
 */
export class DatepickerTouchExample {
}
DatepickerTouchExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-touch-example',
                templateUrl: 'datepicker-touch-example.html',
                styleUrls: ['datepicker-touch-example.css'],
            },] },
];
/** @nocollapse */ DatepickerTouchExample.ɵfac = function DatepickerTouchExample_Factory(t) { return new (t || DatepickerTouchExample)(); };
/** @nocollapse */ DatepickerTouchExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerTouchExample, selectors: [["datepicker-touch-example"]], decls: 7, vars: 2, consts: [[1, "example-full-width"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["touchUi", ""], ["picker", ""]], template: function DatepickerTouchExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Choose a date");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "input", 1);
        i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
        i0.ɵɵelement(5, "mat-datepicker", 3, 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r27 = i0.ɵɵreference(6);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("matDatepicker", _r27);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", _r27);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerTouchExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-touch-example',
                templateUrl: 'datepicker-touch-example.html',
                styleUrls: ['datepicker-touch-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci10b3VjaC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLXRvdWNoL2RhdGVwaWNrZXItdG91Y2gtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci10b3VjaC9kYXRlcGlja2VyLXRvdWNoLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBUXhDLE1BQU0sT0FBTyxzQkFBc0I7OztZQUxsQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUM7OzRGQUNZLHNCQUFzQjsyREFBdEIsc0JBQXNCO1FDUm5DLHlDQUNFO1FBQUEsaUNBQVc7UUFBQSw2QkFBYTtRQUFBLGlCQUFZO1FBQ3BDLDJCQUNBO1FBQUEsMkNBQXdFO1FBQ3hFLHVDQUFpRDtRQUNuRCxpQkFBaUI7OztRQUhDLGVBQXdCO1FBQXhCLG9DQUF3QjtRQUNQLGVBQWM7UUFBZCwwQkFBYzs7a0RES3BDLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciB0b3VjaCBVSSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci10b3VjaC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLXRvdWNoLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLXRvdWNoLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJUb3VjaEV4YW1wbGUge31cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICA8bWF0LWxhYmVsPkNob29zZSBhIGRhdGU8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiPlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGVwaWNrZXIgdG91Y2hVaSAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19